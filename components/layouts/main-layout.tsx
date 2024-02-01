import { ReactNode } from "react";
import Aside from "../aside";
import Header from "../header";
import { cn } from "@/lib/utils/cn";
import Head from "next/head";

export default function MainLayout(props: {
   className?: string;
   children: ReactNode;
   title?: string;
}) {
   return (
      <main className="flex h-screen">
         <Head>
            <title>Basalt | {props.title}</title>
         </Head>
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
   );
}
