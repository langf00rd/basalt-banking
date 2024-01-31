import { create } from "zustand";
import { CurrencyData } from "./types";

interface GlobalStoreState {
   fromCurrencyData: CurrencyData | null;
   setFromCurrencyData: (value: CurrencyData) => void;
   toCurrencyData: CurrencyData | null;
   setToCurrencyData: (value: CurrencyData) => void;
}

export const useGlobalStore = create<GlobalStoreState>((set) => ({
   fromCurrencyData: null,
   toCurrencyData: null,
   setFromCurrencyData: (value) => {
      set(() => ({ fromCurrencyData: value }));
   },
   setToCurrencyData: (value) => {
      set(() => ({ toCurrencyData: value }));
   },
}));
