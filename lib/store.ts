import { create } from "zustand";
import { GlobalStoreState } from "./interface";

/**
 * global store for storing global state
 */
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
