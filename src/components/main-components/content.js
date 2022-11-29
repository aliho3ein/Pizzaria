import { Routes, Route } from "react-router-dom";

/* Components */
import Category from "./category";
import Pizza from "./pizza-area";

export default function Content({ scroll }) {
  return (
    <main id="pzContent" ref={scroll}>
      <div className="redMask">
        <img
          src="./image/main-style-img/Pizza_Italia_Red_Rectangle.jpg"
          alt="Red mask"
        />
      </div>
      <div className="whiteStyle"></div>

      <Routes>
        <Route path="/" element={<Category scroll={scroll} />} />
        <Route path="/pizza" element={<Pizza />} />
        <Route path="/pasta" element={<Pizza />} />
        <Route path="/drink" element={<Pizza />} />
        <Route path="/dessert" element={<Pizza />} />
        <Route path="/action" element={<Pizza />} />
      </Routes>
      <div className="footerRedMask"></div>
    </main>
  );
}
