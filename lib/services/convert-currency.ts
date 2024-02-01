import { CONVERSION_API_BASE_URL } from "../constants";
import saveConversionHistory from "../utils/conversion-history";
/**
 * converts an amount from one currency to another
 * @param fromCurrencyCode - code of currency to be converted from
 * @param toCurrencyCode - code of currency to be converted to
 * @param amount - amount to be converted
 * @returns result amount and rate
 */
export async function convertCurrency(
   fromCurrencyCode: string,
   toCurrencyCode: string,
   amount: number
) {
   saveConversionHistory(fromCurrencyCode, toCurrencyCode, amount);
   const url = `${CONVERSION_API_BASE_URL}?from=${fromCurrencyCode}&to=${toCurrencyCode}&amount=${amount}`;
   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
         "X-RapidAPI-Host": "currency-conversion-and-exchange-rates.p.rapidapi.com",
      },
   };

   const response = await fetch(url, options);
   const jsonResponse = await response.json();

   if (!jsonResponse.success) throw jsonResponse.error.info;

   return {
      result: jsonResponse.result,
      rate: jsonResponse.info.rate,
   };
}
