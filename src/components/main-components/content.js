import { Routes, Route } from "react-router-dom";

/* aos */
import { aosEffect } from "./../Functional";
import "aos/dist/aos.css";

/* Components */
import Category from "./category";
import Pizza from "./pizza-area";
import Pasta from "./pasta-area";
import Drink from "./drink-area";
import { useEffect, useState } from "react";

export default function Content({ scroll }) {
  /* Loading */
  let [loading, setLoading] = useState();
  useEffect(() => {
    aosEffect();
    // setLoading(false);
    setTimeout(() => setLoading(true), 2000);
  }, []);

  return (
    <main id="pzContent" ref={scroll}>
      <div className="redMask">
        <img
          src="./image/main-style-img/Pizza_Italia_Red_Rectangle.jpg"
          alt="Red mask"
        />
      </div>
      <div className="whiteStyle"></div>

      {!loading ? (
        loader
      ) : (
        <Routes>
          <Route path="/" element={<Category scroll={scroll} />} />
          <Route path="/pizza" element={<Pizza loader={loader} />} />
          <Route path="/pasta" element={<Pasta loader={loader} />} />
          <Route path="/drink" element={<Drink loader={loader} />} />
          <Route path="/dessert" element={<Pizza />} />
          <Route path="/action" element={<Pizza />} />
        </Routes>
      )}
      <div className="footerRedMask"></div>
    </main>
  );
}

let loader = (
  <div className="contentLoading">
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </div>
  </div>
);
