import MainLayout from "@/components/layouts/main-layout";
import TransactionsTable from "@/components/tables/transactions-table";
import { Card } from "@/components/ui/card";

export default function Home() {
   return (
      <MainLayout title="Home">
         <ul className="grid grid-cols-5 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
               <Card className="rounded-3xl p-5 h-[250px] bg-white" key={i}>
                  <div className="">
                     <h3 className="text-black text-xl">0.00</h3>
                     <p>US Dollar</p>
                  </div>
               </Card>
            ))}
         </ul>
         <div className="space-y-5">
            <h1 className="text-3xl text-black">Transactions</h1>
            <TransactionsTable />
         </div>
      </MainLayout>
   );
}
