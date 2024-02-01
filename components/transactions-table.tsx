import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "./ui/table";

export default function TransactionsTable() {
   return (
      <Table>
         <TableCaption>A list of your recent invoices.</TableCaption>
         <TableHeader>
            <TableRow>
               <TableHead className="w-[100px]">Invoice</TableHead>
               <TableHead>Status</TableHead>
               <TableHead>Method</TableHead>
               <TableHead className="text-right">Amount</TableHead>
            </TableRow>
         </TableHeader>
         <TableBody>
            {Array.from({ length: 13 }).map((_, i) => (
               <TableRow key={i}>
                  <TableCell>000{i}</TableCell>
                  <TableCell>paid</TableCell>
                  <TableCell>Visa</TableCell>
                  <TableCell className="text-right">$ 00.00</TableCell>
               </TableRow>
            ))}
         </TableBody>
      </Table>
   );
}
