import ConversionHistoryTable from "@/components/tables/conversion-history-table";
import CurrencyConverter from "@/components/converter";
import MainLayout from "@/components/layouts/main-layout";

export default function CurrencyConverterPage() {
   return (
      <MainLayout title="Currency converter">
         <CurrencyConverter />
         <ConversionHistoryTable />
      </MainLayout>
   );
}
