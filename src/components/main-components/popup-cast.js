import { togglePopUp } from "./../Functional";
import { useSelector } from "react-redux";
/* */
import CastItem from "./cast-item";

export default function Cast() {
  const items = useSelector((state) => {
    return state.castReducer.items;
  });

  let EndPrice = 0;
  let getTotal = (num, count) => {
    let currency = num.split(",");
    let cent = parseInt(currency[1]) / 100;
    let euro = parseInt(currency[0]);
    EndPrice += (euro + cent) * count;
  };

  const myCast = items.map((item, index) => {
    getTotal(item.price, item.count);
    return <CastItem key={index} value={item} />;
  });

  let pr = EndPrice.toFixed(2).toString().split(".");

  return (
    <div className="castArea">
      <i className="fa fa-xmark closePopUp" onClick={togglePopUp}></i>

      {myCast.length !== 0 ? (
        <>
          <div className="castItems">{myCast}</div>
          <div className="castTotal">
            Total :
            <span>
              {pr[0]}
              <span>,{[pr[1]].splice(0, 2)}</span>
            </span>
          </div>
          <div className="castBuy">Bezahlen</div>
        </>
      ) : (
        <h2>WarenKorb ist leer</h2>
      )}
    </div>
  );
}
