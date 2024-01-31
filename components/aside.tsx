import { ASIDE_LINKS } from "@/lib/content";

export default function Aside() {
   return (
      <aside className="flex-1 bg-white p-5 flex justify-between flex-col space-y-[50px] border-r">
         <h3 className="text-2xl text-primary">CC Banking</h3>
         <ul>
            {ASIDE_LINKS.map((link) => (
               <div key={link.href} className="p-5 flex items-center space-x-3">
                  {link.icon}
                  <p>{link.label}</p>
               </div>
            ))}
         </ul>
         <p>Terms &amp; conditions</p>
      </aside>
   );
}
