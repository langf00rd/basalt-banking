import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FAB from "./ui/fab";
import { Sparkles, X } from "lucide-react";
import Pill from "./ui/pill";

export default function ChatBox() {
  const [showChatBox, setShowChatBox] = useState(false);

  function toggleShowChatBox() {
    setShowChatBox(!showChatBox);
  }

  return (
    <>
      <FAB
        className="fixed bottom-20 right-20 z-10"
        onClick={toggleShowChatBox}
      >
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took.
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
