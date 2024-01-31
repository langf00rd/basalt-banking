import Aside from "@/components/aside";
import ChatBox from "@/components/chat-box";
import ConversionHistoryTable from "@/components/conversion-history-table";
import CurrencyConverter from "@/components/converter";
import Header from "@/components/header";

export default function Home() {
   return (
      <>
         <ChatBox />
         <main className="flex h-screen">
            <Aside />
            <div className="flex-[5] p-10">
               <div className="space-y-[70px]">
                  <Header />
                  <h1 className="text-3xl text-black">Currency converter</h1>
                  <CurrencyConverter />
                  <ConversionHistoryTable />
               </div>
            </div>
         </main>
      </>
   );
}
