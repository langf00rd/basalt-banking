import { ArrowBigDown, BarChartBig, CreditCard, InboxIcon } from "lucide-react";

export const CHATBOT_CUSTOM_ACTIONS = [
   {
      label: "See currency news",
      action: () => {},
   },
   {
      label: "Ask BB AI",
      action: () => {},
   },
   {
      label: "See top gainers",
      action: () => {},
   },
];

export const ASIDE_LINKS = [
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
