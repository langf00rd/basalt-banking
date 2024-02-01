import { News } from "../interface";
import apiHandler from "../utils/api-handler";
/**
 * fetches news from rapid api
 * @returns news
 */
export function fetchNews() {
  return apiHandler<News[]>(
    "https://real-time-financial-news-and-sentiments.p.rapidapi.com/news/rapidapi?page=1&limit=10",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
        "X-RapidAPI-Host":
          "real-time-financial-news-and-sentiments.p.rapidapi.com",
      },
    },
  );
}
