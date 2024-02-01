import { Calendar, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { HEADER_PROFILE_LINKS } from "@/lib/constants";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Clock from "./clock";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center justify-center space-x-3">
        <div className="bg-gray-100 rounded-full w-[50px] h-[50px] flex items-center justify-center p-2">
          <Calendar />
        </div>
        <div>
          <p>{Date().substring(0, 15)}</p>
          <Clock />
        </div>
      </div>
      <div className="flex space-x-10">
        <Button className="flex items-center gap-2 bg-primary text-white p-2 px-4 rounded-md">
          <Plus />
          New chat
        </Button>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-black font-medium">Kate Doe</p>
            <p>Membership number 0000000</p>
            <ul className="space-y-2 mt-5">
              {HEADER_PROFILE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center space-x-3"
                  >
                    {link.icon}
                    <p>{link.name}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}
