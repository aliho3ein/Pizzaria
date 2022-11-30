import { useEffect, useState } from "react";

import DrinkItem from "./drink-item";

let drinkItems = [
  {
    id: "19",
    name: "Coca Cola",
    contains: "Flasche 500ml (1L/€4.58) zzgl. 25c...",
    price: "1,59",
    image: "./image/drink/col.png",
    count: 0,
  },
  {
    id: "20",
    name: "Fanta Orange",
    contains: "Flasche 500ml (1L/€4.58) zzgl. 25c...",
    price: "1,59",
    image: "./image/drink/fana.png",
    count: 0,
  },

  {
    id: "21",
    name: "Sprite",
    contains: "Flasche 500ml (1L/€4.58) zzgl. 25c...",
    price: "2,29",
    image: "./image/drink/spr.png",
    count: 0,
  },
  {
    id: "22",
    name: "Mezzo Mix",
    contains: "Flasche 500ml (1L/€4.58) zzgl. 25c...",
    price: "1,59",
    image: "./image/drink/mix.png",
    count: 0,
  },
  {
    id: "23",
    name: "ViO BiO Zitrone",
    contains: "mit spritzigem Geschmack von Limette & Zitrone zzgl. 2...",
    price: "2,99",
    image: "./image/drink/vio.png",
    count: 0,
  },
  {
    id: "24",
    name: "Fuze Tea ",
    contains: "Erfrischungsgetränk mit Tee-Extrakt und Pfirsichgeschmack...",
    price: "1,99",
    image: "./image/drink/ice.png",
    count: 0,
  },
  {
    id: "25",
    name: "Vio Medium",
    contains: "Mineralwasser mit Kohlensäure, zzgl. 25ct Pfand (1L/€4.58)",
    price: "1,99",
    image: "./image/drink/med.png",
    count: 0,
  },
  {
    id: "26",
    name: "Vio Still",
    contains: "Mineralwasser ohne Kohlensäure, zzgl. 25ct Pfand (1L/€4.58)",
    price: "1,99",
    image: "./image/drink/stil.png",
    count: 0,
  },
  {
    id: "27",
    name: "Red Bull",
    contains: "Red Bull Energydrink, zzgl. 25ct Pfand (1L/€11.96)...",
    price: "2,99",
    image: "./image/drink/red.png",
    count: 0,
  },
];

export default function Drink({ loader }) {
  let [loading, setLoading] = useState();

  useEffect(() => {
    setTimeout(() => setLoading(true), 1500);
  }, []);

  let DrinkList = drinkItems.map((item, index) => {
    return <DrinkItem key={index} value={item} />;
  });

  return !loading ? loader : <div id="drinkArea">{DrinkList}</div>;
}
