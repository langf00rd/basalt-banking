import { useEffect, useState } from "react";
import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "../ui/table";
import { getConversionHistory } from "@/lib/utils/conversion-history";
import { ConversionHistory } from "@/lib/interface";

export default function ConversionHistoryTable() {
   const [conversionHistory, setConversionHistory] = useState<
      ConversionHistory[] | null
   >();

   useEffect(() => {
      setConversionHistory(getConversionHistory());
   }, []);

   if (!conversionHistory) return <div />;

   return (
      <div className="space-y-3">
         <h3 className="text-black font-medium">Conversion history</h3>
         <div className="bg-white p-5 rounded-3xl">
            <Table>
               <TableCaption>
                  {conversionHistory.length < 1 && <p>No conversion history</p>}
               </TableCaption>
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-[100px]">From</TableHead>
                     <TableHead>To</TableHead>
                     <TableHead>Amount</TableHead>
                     <TableHead>Date</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {conversionHistory.map((conversion) => (
                     <TableRow key={conversion.fromCurrencyCode}>
                        <TableCell>{conversion.toCurrencyCode}</TableCell>
                        <TableCell>{conversion.fromCurrencyCode}</TableCell>
                        <TableCell>{conversion.amount}</TableCell>
                        <TableCell>
                           {new Date(conversion.timestamp).toLocaleDateString()}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
      </div>
   );
}
