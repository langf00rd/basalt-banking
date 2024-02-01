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

export interface News {
  impact_reasoning: string;
  link: string;
  pub_date: string;
  publisher: string;
  sentiment_impact: number;
  summary: string;
  ticker_impacted: string;
  title: string;
}

export interface Profile {
  first_name: string;
  last_name: string;
  dob: string;
  address: string;
  postal_code: string;
  phone: string;
  country: string;
  city: string;
  [id: string]: string; // for other fields
}
