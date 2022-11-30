import { useEffect, useState } from "react";

import PizzaItem from "./pizza-item";

let pastaItems = [
  {
    id: "13",
    name: "Kanelone",
    contains:
      "Pasta mit aromatischer Sahnesauced, saftigen Rindersteakstreifen, mediterranem Gemüse , Champignons Steakpfeffer",
    price: "13,99",
    image: "./image/pasta/spa.png",
    count: 0,
  },
  {
    id: "14",
    name: "Funghetto",
    contains:
      "Pasta mit Prosciutto Cottog, Käse-Sahnesauce , italienischen Hartkäse , frischen Champignons und feurigen",
    price: "6,99",
    image: "./image/pasta/fughi.png",
    count: 0,
  },
  {
    id: "15",
    name: "Rondine Tagliatelle ",
    contains:
      "Pasta mit Bolognesesauce , mit frischen Tomaten, geriebener Mozzarellag vollmundiger Sahnesauceg, mit Frühlingszwiebeln",
    price: "10,49",
    image: "./image/pasta/kanel.png",
    count: 0,
  },
  {
    id: "16",
    name: "Farfalle",
    contains:
      "Pasta mit Veganer Currysaucei, veganen Filetstücken , Hähnchenstylef und Broccoli ,Enthält glutenhaltiges Getreide",
    price: "11,99",
    image: "./image/pasta/farf.png",
    count: 0,
  },
  {
    id: "17",
    name: "Konkiloni",
    contains:
      "Teiga und Mozzarellag , mit frischen Champignons , Basilikum-Pestod und extra Mozzarella , Enthält Cashewkerne",
    price: "13,49",
    image: "./image/pasta/konki.png",
    count: 0,
  },
  {
    id: "18",
    name: "Spaghetti",
    contains:
      "Hähnchenbrustfileta, Champignons und Spinat , Fruchtiger Ananas und extra viel Käse.",
    price: "9,49",
    image: "./image/pasta/spa.png",
    count: 0,
  },
];

export default function Pizza({ loader }) {
  let [loading, setLoading] = useState();

  useEffect(() => {
    setTimeout(() => setLoading(true), 1500);
  }, []);

  let PastaList = pastaItems.map((item, index) => {
    return <PizzaItem key={index} value={item} />;
  });

  return !loading ? loader : <div id="pizzaArea">{PastaList}</div>;
}
