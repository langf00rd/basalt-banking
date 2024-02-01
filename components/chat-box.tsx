import { useGlobalStore } from "@/lib/store";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FAB from "./ui/fab";
import { Sparkles, X } from "lucide-react";
import Pill from "./ui/pill";

export default function ChatBox() {
   const [showChatBox, setShowChatBox] = useState(false);
   const fromCurrencyData = useGlobalStore((state) => state.fromCurrencyData);
   const toCurrencyData = useGlobalStore((state) => state.toCurrencyData);

   function toggleShowChatBox() {
      setShowChatBox(!showChatBox);
   }

   return (
      <>
         <FAB className="fixed bottom-20 right-20 z-10" onClick={toggleShowChatBox}>
            {!showChatBox ? <Sparkles /> : <X />}
         </FAB>
         <AnimatePresence>
            {showChatBox && (
               <motion.div
                  transition={{ type: "just" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="shadow-2xl overflow-y-scroll fixed bottom-[150px] right-10 rounded-2xl p-5 h-[60vh] w-[400px] bg-white z-10 space-y-3"
               >
                  <p className="bg-gray-100 p-5 rounded-xl">
                     Here is some info about {fromCurrencyData?.currency.code} and{" "}
                     {toCurrencyData?.currency.code}. Pretend this is some actual readable
                     sensible content, when in actual sense, is just fill-in content with
                     non-lorem words
                  </p>
                  <ul className="flex flex-wrap gap-3 border-t py-3">
                     <Pill label="Ask BB AI" />
                     <Pill label="What happened in the past 5mins?" />
                     <Pill label="See top gainers" />
                  </ul>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
