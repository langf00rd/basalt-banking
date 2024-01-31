export interface CurrencyData {
   name: string;
   flag: string;
   currency: {
      code: string;
      name: string;
      symbol: string;
   };
}

export interface ConversionHistory {
   fromCurrencyCode: string;
   toCurrencyCode: string;
   amount: number;
   timestamp: number;
}

export interface GlobalStoreState {
   fromCurrencyData: CurrencyData | null;
   setFromCurrencyData: (value: CurrencyData) => void;
   toCurrencyData: CurrencyData | null;
   setToCurrencyData: (value: CurrencyData) => void;
}
