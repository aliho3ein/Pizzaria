import PizzaItem from "./pizza-item";
import { useEffect, useState } from "react";

let pizzaItems = [
  {
    id: "1",
    name: "Margarita",
    contains:
      "mit extra Mozzarella , Enthält glutenhaltiges Getreide , Enthält Weizen , enthält eine Phenylalanin - Quelle ",
    price: "8,99",
    image: "./image/pizza/magherita.png",
    count: 0,
  },
  {
    id: "2",
    name: "Hawaii",
    contains:
      "Teiga und Mozzarellag , mit Hähnchenbrustfilet, Ananas und Broccoli , frischen Champignons und feurigen",
    price: "12,49",
    image: "./image/pizza/hawai.png",
    count: 0,
  },
  {
    id: "3",
    name: "Caprese",
    contains:
      "Teiga und Mozzarellag , mit frischen Tomaten, Mozzarella Kugelng und Basilikum-Pestod",
    price: "11,49",
    image: "./image/pizza/con.png",
    count: 0,
  },
  {
    id: "4",
    name: "Tuna",
    contains:
      "mit extra Mozzarella  , mit extra viel Thunfischc , roten Zwiebeln ,Enthält glutenhaltiges Getreide",
    price: "10,99",
    image: "./image/pizza/tunn.png",
    count: 0,
  },
  {
    id: "5",
    name: "Triyaki Chicken",
    contains:
      "Teiga und Mozzarellag , mit frischen Champignons , Basilikum-Pestod und extra Mozzarella , Enthält Cashewkerne",
    price: "13,49",
    image: "./image/pizza/beff.png",
    count: 0,
  },
  {
    id: "6",
    name: "Dutchman",
    contains:
      "Teiga und Mozzarellag , mit Prosciutto cotto , Fruchtiger Ananas und extra viel Käse.",
    price: "15,49",
    image: "./image/pizza/dutch.png",
    count: 0,
  },
  {
    id: "7",
    name: "Bombay",
    contains:
      "Teiga und Mozzarellag , mit Hähnchenbrustfilet, Currysaucei und Broccoli , frischen Champignons und feurigen",
    price: "8,99",
    image: "./image/pizza/bombay.png",
    count: 0,
  },
  {
    id: "8",
    name: "Sucuk Hollandise",
    contains:
      "Teiga und Mozzarellag , mit würziger Sucuk , roten Zwiebeln Tomaten und Sauce Hollandaiseg , gebacken Bacon ",
    price: "11,49",
    image: "./image/pizza/sucuk.png",
    count: 0,
  },
  {
    id: "9",
    name: "Salami Supreme",
    contains:
      "mit extra Mozzarella  , leckerer Salami, mit Geschmacksverstärker,  Enthält Cashewkerne",
    price: "9,99",
    image: "./image/pizza/con.png",
    count: 0,
  },
  {
    id: "10",
    name: "Lucifer",
    contains:
      "Teiga und Mozzarellag , mit Chilisalami , frischen Champignons und feurigen , rot-grünen Jalapeños(Scharf)",
    price: "11,99",
    image: "./image/pizza/lucifer.png",
    count: 0,
  },
  {
    id: "11",
    name: "Conchita",
    contains:
      "Teiga und Mozzarellag , mit BBQ-Sauce , Rinderhackg und Bacon, roten Zwiebeln und Mozzarella-Kugelng",
    price: "12,49",
    image: "./image/pizza/beff.png",
    count: 0,
  },
  {
    id: "12",
    name: "Beef & Chicken",
    contains:
      "mit extra Mozzarella , consectetur Lorem , mit Chilisalami , frischen Champignons und feurigen ",
    price: "14,99",
    image: "./image/pizza/vegan.png",
    count: 0,
  },
];

export default function Pizza({ loader }) {
  /* Loading */
  let [loading, setLoading] = useState();
  useEffect(() => {
    setTimeout(() => setLoading(true), 1500);
  }, []);

  let PizzaList = pizzaItems.map((item, index) => {
    return <PizzaItem key={index} value={item} />;
  });

  return !loading ? loader : <div id="pizzaArea">{PizzaList}</div>;
}
