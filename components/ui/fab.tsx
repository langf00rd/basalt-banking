import { ReactNode } from "react";
import { Button } from "./button";

export default function FAB(props: {
   children: ReactNode;
   onClick?: () => void;
   className?: string;
}) {
   return (
      <Button
         onClick={props.onClick}
         className={`bg-blue-700 cursor-pointer hover:opacity-70 shadow-lg transition-opacity text-white flex items-center justify-center border-[7px] border-blue-100 rounded-full p-2 w-14 h-14 ${props.className}`}
      >
         {props.children}
      </Button>
   );
}
