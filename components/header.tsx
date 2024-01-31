import { Calendar, Plus } from "lucide-react";
import Image from "next/image";

export default function Header() {
   return (
      <header className="flex items-center justify-between">
         <div className="flex items-center justify-center space-x-3">
            <div className="bg-gray-100 rounded-full w-[50px] h-[50px] flex items-center justify-center p-2">
               <Calendar />
            </div>
            <div>
               <p>{Date().substring(0, 15)}</p>
               <p>08:45:03 UTC</p>
            </div>
         </div>
         <div className="flex space-x-10">
            <button className="flex items-center gap-2 bg-primary text-white p-2 px-4 rounded-md">
               <Plus />
               New deposit
            </button>
            <Image
               src="https://creativecommons.org/wp-content/uploads/2023/09/Timothy-Vollmer_avatar_1520860979.jpg"
               width={50}
               height={50}
               className="rounded-full"
               alt="hero"
            />
         </div>
      </header>
   );
}
