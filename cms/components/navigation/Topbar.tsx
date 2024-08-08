import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function Topbar() {
  return (
    <div className="px-4 py-2 bg-gray-800 text-white grid grid-cols-3 items-center drop-shadow-md sticky top-0 z-10">
      <div className="logo-container pl-10">
        <Image
          src="/images/logo_horizontal.png"
          width={430 / 3}
          height={179 / 3}
          alt="Gamer's Library"
        />
      </div>
      <div className="menu-container flex justify-center">
        {/* Games, Deals, Orders */}
        <nav className="flex space-x-4 gap-20 font-bold">
          <Link href="/games" className="rounded-xl px-4 py-1 bg-yellow-500 text-black">
            Games
          </Link>
          <Link href="/deals/month" className="rounded-xl px-4 py-1 bg-yellow-500 text-black">
            Deals
          </Link>
          <Link href="/orders" className="rounded-xl px-4 py-1 bg-yellow-500 text-black">
            Orders
          </Link>
        </nav>
      </div>
      <div className="user-profile flex justify-end items-center space-x-4">
        
      <span>Niloy</span>
      <Popover>
        <PopoverTrigger>
      <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    </PopoverTrigger>
    <PopoverContent className="bg-white p-4 rounded-lg shadow-lg">
        {/* Link to Profile, Dashboard and Logout */}
        <nav className="flex flex-col space-y-2">
          <Link href="/profile">Profile</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/logout">Logout</Link>
        </nav>
    </PopoverContent>
    </Popover>
      </div>
    </div>
  );
}
