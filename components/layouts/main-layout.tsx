import { ReactNode } from "react";
import Aside from "../aside";
import Header from "../header";
import { cn } from "@/lib/utils/cn";
import Head from "next/head";
import ChatBox from "../chat-box";

export default function MainLayout(props: {
   className?: string;
   children: ReactNode;
   title: string;
}) {
   const metaTitle = props.title ? `Basalt | ${props.title}` : "Basalt";
   return (
      <>
         <Head>
            <title>{metaTitle}</title>
         </Head>
         <main className="flex h-screen">
            <ChatBox />
            <Aside />
            <div className="flex-[5] p-10 overflow-y-scroll">
               <div className="space-y-5">
                  <Header />
                  <div className="pt-10 space-y-5">
                     <h1 className="text-3xl text-black">{props.title}</h1>
                     <div className={cn("space-y-10", props.className)}>
                        {props.children}
                     </div>
                  </div>
               </div>
            </div>
            {/* <CurrencyNews /> */}
         </main>
      </>
   );
}
