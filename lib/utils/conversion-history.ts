import { ConversionHistory } from "../interface";
/**
 * saves conversion history to local storage
 * @param fromCurrencyCode
 * @param toCurrencyCode
 * @param amount
 */
export default function saveConversionHistory(
  fromCurrencyCode: string,
  toCurrencyCode: string,
  amount: number,
) {
  const storedConversions = localStorage.getItem("conversions");
  const parsedStoredConversions = JSON.parse(storedConversions ?? "[]");
  const newStoredConversions = [
    ...parsedStoredConversions,
    {
      fromCurrencyCode,
      toCurrencyCode,
      amount,
      timestamp: new Date().toISOString(),
    },
  ];
  localStorage.setItem("conversions", JSON.stringify(newStoredConversions));
}

/**
 * fetches conversion history from local storage
 * @returns conversion history from local storage
 */
export function getConversionHistory() {
  const storedConversions = localStorage.getItem("conversions");
  if (!storedConversions) return [];
  return [...JSON.parse(storedConversions)].reverse() as ConversionHistory[];
}
