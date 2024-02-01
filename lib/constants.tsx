import {
   ArrowBigDown,
   BarChartBig,
   CreditCard,
   Currency,
   Home,
   InboxIcon,
   LogOut,
   Settings,
   User,
} from "lucide-react";

export const CONVERSION_API_BASE_URL =
   "https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert";

export const ASIDE_LINKS = [
   {
      label: "Home",
      href: "/",
      icon: <Home />,
   },
   {
      label: "Currency converter",
      href: "/currency-converter",
      icon: <Currency />,
   },
   {
      label: "Cards",
      href: "/cards",
      icon: <CreditCard />,
   },
   {
      label: "Deposits",
      href: "/deposits",
      icon: <ArrowBigDown />,
   },
   {
      label: "Credits",
      href: "/credits",
      icon: <InboxIcon />,
   },
   {
      label: "Invest",
      href: "/invest",
      icon: <BarChartBig />,
   },
];

export const NAV_LINKS = [
   { name: "Home", href: "/" },
   { name: "About", href: "/about" },
   { name: "Blog", href: "/blog" },
   { name: "Contact", href: "/contact" },
];

export const HEADER_PROFILE_LINKS = [
   { name: "Profile", href: "/account/profile", icon: <User size={18} /> },
   { name: "Settings", href: "/account/settings", icon: <Settings size={18} /> },
   { name: "Logout", href: "/account/logout", icon: <LogOut size={18} /> },
];
