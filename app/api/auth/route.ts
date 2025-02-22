import { NextResponse } from 'next/server'
import { validateTelegramWebAppData } from '@/utils/telegramAuth'
import { cookies } from 'next/headers'
import { encrypt, SESSION_DURATION } from '@/utils/session'
import prisma from '@/lib/prisma';


export async function POST(request: Request) {
  const { initData } = await request.json()

  const validationResult = validateTelegramWebAppData(initData)

  if (validationResult.validatedData) {
    console.log("Validation result: ", validationResult)
    const user = { telegramId: validationResult.user.id?.toString(),
      username: validationResult.user.first_name,
      lastName: validationResult.user.last_name,
      photoUrl: validationResult.user.photo_url,
      languageCode: validationResult.user.language_code
    
    }




    // Create a new session
    const expires = new Date(Date.now() + SESSION_DURATION)
    const session = await encrypt({ user, expires })

    // Save the session in a cookie
    cookies().set("session", session, { expires, httpOnly: true })
//save to db
if (user.telegramId) {
  await prisma.telegramUser.upsert({
    where: { chatId: user.telegramId.toString() }, // Convert Number to String
    update: {
      username: user.username, // Fields to update if the record exists
    },
    create: {
      chatId: user.telegramId.toString(), // Convert Number to String
      username: user.username,
    },
  });
} else {
  console.error("Error: 'telegramId' is undefined.");
}




    return NextResponse.json({ message: 'Authentication successful' })
  } else {
    return NextResponse.json({ message: validationResult.message }, { status: 401 })
  }
}