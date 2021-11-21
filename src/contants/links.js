import { AiOutlineHome } from "react-icons/ai";
import { BsGraphUp, BsCurrencyExchange } from "react-icons/bs";
import { FaRegNewspaper } from "react-icons/fa";

export const links = [
  {
    title: "Home",
    icon: <AiOutlineHome />,
    src: "/",
  },
  {
    title: "Cryptocurrencies",
    icon: <BsGraphUp />,
    src: "/cryptocurrencies",
  },
  {
    title: "Exchanges",
    icon: <BsCurrencyExchange />,
    src: "/exchanges",
  },
  {
    title: "News",
    icon: <FaRegNewspaper />,
    src: "/news",
  },
];
