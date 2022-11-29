import { useNavigate } from "react-router-dom";

export default function Category({ scroll }) {
  const Nav = useNavigate();

  let linkTo = (page) => {
    Nav(`/${page}`);
  };

  return (
    <div className="pzCategory">
      <div className="pzCategory-item catPizza" onClick={() => linkTo("pizza")}>
        <div className="itemName">Pizza</div>
      </div>
      <div className="pzCategory-item catPasta">
        <div className="itemName">Pasta</div>
      </div>
      <div className="pzCategory-item catDessert">
        <div className="itemName">Nachspeisen</div>
      </div>
      <div className="pzCategory-item catDrink">
        <div className="itemName">Getränke</div>
      </div>
      <div className="pzCategory-item catOff"></div>
    </div>
  );
}
