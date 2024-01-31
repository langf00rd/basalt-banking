import {
   Table,
   TableBody,
   TableCaption,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "./ui/table";

export default function ConversionHistoryTable() {
   return (
      <div className="space-y-3">
         <h3 className="text-black font-medium">Conversion history</h3>
         <Table>
            <TableCaption>A list of your recent currency conversions.</TableCaption>
            <TableHeader>
               <TableRow>
                  <TableHead className="w-[100px]">From</TableHead>
                  <TableHead>To</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Rate</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               <TableRow>
                  <TableCell className="font-medium">USD</TableCell>
                  <TableCell>GHS</TableCell>
                  <TableCell>1350</TableCell>
                  <TableCell className="text-right">11.27</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">USD</TableCell>
                  <TableCell>GHS</TableCell>
                  <TableCell>1350</TableCell>
                  <TableCell className="text-right">11.27</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell className="font-medium">USD</TableCell>
                  <TableCell>GHS</TableCell>
                  <TableCell>1350</TableCell>
                  <TableCell className="text-right">11.27</TableCell>
               </TableRow>
            </TableBody>
         </Table>
      </div>
   );
}
