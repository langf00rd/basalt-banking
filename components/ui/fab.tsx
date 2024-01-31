import { ReactNode } from "react";

export default function FAB(props: {
   children: ReactNode;
   onClick?: () => void;
   className?: string;
}) {
   return (
      <div
         onClick={props.onClick}
         className={`bg-blue-700 text-white flex items-center justify-center border-[7px] border-blue-100 rounded-full p-2 w-14 h-14 ${props.className}`}
      >
         {props.children}
      </div>
   );
}
