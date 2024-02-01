import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "#1c4ed8",
            popover: "#fff",
            background: "#fff",
            card: "#fff",
            "primary-foreground": "#fff",
         },
      },
   },
   plugins: [],
};
export default config;
