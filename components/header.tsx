

import { getSession } from "@/utils/session";

export default async function Header() {
  const session = await getSession();
  const companyName = "ethio telecom"; // Define the company name
  const userName = session?.user?.username; // Define the user name

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-ethBlack-600  text-white shadow-md">
      {/* Company Name */}
      <div className="text-lg font-bold">{companyName}</div>

      {/* User Name */}
      <div className="text-sm font-medium">
        Welcome, <span className="font-semibold">{userName}</span>
      </div>
    </header>
  );
}
