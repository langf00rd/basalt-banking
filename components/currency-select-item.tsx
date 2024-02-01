import Image from "next/image";
import { CurrencyData } from "../lib/interface";
import { CurrencySelect } from "./currency-select";
/**
 * a component for selecting a currency. you can either input or display an amount using the `value` and `showInput` props
 * @param props
 */
export function CurrecySelectItem(props: {
   type: "to" | "from";
   onAmountChange?: (amount: number) => void;
   currencyData: CurrencyData | null;
   showInput?: boolean;
   value?: number;
   setCurrencyData: (currencyData: CurrencyData) => void;
}) {
   return (
      <div className="flex-[2] w-full">
         <div className="mb-3">
            <p className="capitalize">{props.type}</p>
            <div className="flex items-center justify-between">
               <p className="font-medium text-black">
                  {props.currencyData?.currency.code} -{" "}
                  {props.currencyData?.currency.name}
               </p>
               {props.currencyData?.flag && (
                  <Image
                     src={`data:image/png;base64,${props.currencyData?.flag}`}
                     className="rounded-full w-[30px] h-[30px] bg-slate-100"
                     alt={`${props.currencyData?.currency.name} flag`}
                     width={50}
                     height={50}
                  />
               )}
            </div>
         </div>
         <CurrencySelect
            onCurrencyChange={(currencyData) => props.setCurrencyData(currencyData)}
         />
         <div className="text-[5rem] font-extralight">
            {props.showInput ? (
               <div className="flex items-center">
                  <p>{props.currencyData?.currency.symbol}</p>
                  <input
                     onChange={(e) => props.onAmountChange?.(Number(e.target.value))}
                     placeholder="0.00"
                     type="number"
                     className="w-full text-black border-none bg-transparent outline-none"
                  />
               </div>
            ) : (
               <div className="h-[120px]">
                  <p>
                     {props.currencyData?.currency.symbol} {props.value?.toFixed(2)}
                  </p>
               </div>
            )}
         </div>
      </div>
   );
}
