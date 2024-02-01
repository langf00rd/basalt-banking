import { Loader, ArrowRight, Info } from "lucide-react";
import { CurrecySelectItem } from "./currency-select-item";
import FAB from "./ui/fab";
import { convertCurrency } from "@/lib/services/convert-currency";
import { useGlobalStore } from "@/lib/store";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

export default function CurrencyConverter() {
  const [rate, setRate] = useState<number | null>(null);
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [isloading, setIsLoading] = useState(false);

  const fromCurrencyData = useGlobalStore((state) => state.fromCurrencyData);
  const setFromCurrencyData = useGlobalStore(
    (state) => state.setFromCurrencyData,
  );
  const toCurrencyData = useGlobalStore((state) => state.toCurrencyData);
  const setToCurrencyData = useGlobalStore((state) => state.setToCurrencyData);

  async function handleConvertCurrency(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!fromCurrencyData?.currency || !toCurrencyData?.currency) {
      toast.error("Please select a currency");
      return;
    }

    setIsLoading(true);

    try {
      const response = await convertCurrency(
        fromCurrencyData.currency.code,
        toCurrencyData.currency.code,
        amount,
      );
      setResult(response.result);
      setRate(response.rate);
    } catch (error) {
      toast.error(String(error));
    }

    setIsLoading(false);
  }

  return (
    <div>
      <form onSubmit={handleConvertCurrency} className="flex">
        <CurrecySelectItem
          type="from"
          onAmountChange={setAmount}
          showInput
          currencyData={fromCurrencyData}
          setCurrencyData={setFromCurrencyData}
        />
        <div className="flex-1 flex-col space-y-5 flex items-center justify-center">
          <FAB>
            {isloading ? <Loader className="animate-spin" /> : <ArrowRight />}
          </FAB>
        </div>
        <CurrecySelectItem
          type="to"
          value={result}
          currencyData={toCurrencyData}
          setCurrencyData={setToCurrencyData}
        />
      </form>
      {rate && (
        <div className="p-2 flex space-x-2">
          <Info />
          <p>Exchange rate: {rate}</p>
        </div>
      )}
    </div>
  );
}
