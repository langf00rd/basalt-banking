import { fetchNews } from "@/lib/services/fetch-news";
import Link from "next/link";
import { useQuery } from "react-query";

export function CurrencyNews() {
   const { isLoading, error, data } = useQuery({
      queryKey: "fetch-news",
      queryFn: fetchNews,
   });

   if (isLoading) return <p>Loading...</p>;

   if (error ?? !data?.length)
      return <div className="flex-1 bg-white p-5 border-l">Error: {String(error)}</div>;

   return (
      <div className="flex-1 bg-white p-5 border-l">
         <h3 className="text-black font-medium">News</h3>
         <ul>
            {data?.map((news) => (
               <Link href={news.link} target="_blank" key={news.title}>
                  <div className="border-b">
                     <p>{news.title}</p>
                     <p>{new Date(news.pub_date).toLocaleString()}</p>
                  </div>
               </Link>
            ))}
         </ul>
      </div>
   );
}
