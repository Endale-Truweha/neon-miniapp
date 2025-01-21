import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getSession } from '@/utils/session';

export async function POST(req: Request): Promise<NextResponse> {
   
  try {
    const session = await getSession();
    const { description, status, /* telegramUserId */ } = await req.json(); // Assuming telegramUserId is passed in the request
const   telegramUserId  = await session?.user?.telegramId;


if (telegramUserId) {
  const final = await prisma.issue.create({
    data: {
      description,
      status,
      telegramUser: {
        connect: {
          chatId: String(telegramUserId),
        },
      },
    },
  });
  return NextResponse.json({ final });
} else {
  throw new Error("telegramUserId is required to create an issue.");
}




 
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while creating the issue.' }, { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const session = await getSession();
    const   telegramUserId  = await session?.user?.telegramId;
    const issues = await prisma.issue.findMany({
      
      where: {
        telegramUser: {
          chatId: String(telegramUserId),
        },
      },
    });

    return NextResponse.json({ issues });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'An error occurred while fetching the issues.' }, { status: 500 });
  }
}