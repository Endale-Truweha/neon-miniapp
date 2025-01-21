

import { getSession } from "@/utils/session";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
 

export default async function Header() {
  const session = await getSession();
  const companyName = "ethio telecom"; // Define the company name
  const userName = session?.user?.username; // Define the user name
  const userImage = session?.user?.photoUrl;

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-ethBlack-600  text-white shadow-md">
      {/* Company Name */}
      <div className="text-lg font-bold">{companyName}</div>

      {/* User Name */}
      <div className="text-sm font-medium flex items-center">
      <Avatar>
      <AvatarImage src={userImage} alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar>

         <span className="font-semibold">{userName}</span>
      </div>
    </header>
  );
}
