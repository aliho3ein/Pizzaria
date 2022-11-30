import { useNavigate } from "react-router-dom";

export default function Category({ scroll }) {
  const Nav = useNavigate();

  let linkTo = (page) => {
    Nav(`/${page}`);
  };

  return (
    <div className="pzCategory" data-aos="zoom-out">
      <div
        className="pzCategory-item catPizza"
        title="Pizza menü"
        onClick={() => linkTo("pizza")}
      >
        <div className="itemName">Pizza</div>
      </div>
      <div
        className="pzCategory-item catPasta"
        title="Pasta menü"
        onClick={() => linkTo("pasta")}
      >
        <div className="itemName">Pasta</div>
      </div>
      <div
        className="pzCategory-item catDessert"
        title="Derzeit gibt's keine Dessert :("
      >
        <div className="itemName">Nachspeisen</div>
      </div>
      <div
        className="pzCategory-item catDrink"
        title="getränk menü"
        onClick={() => linkTo("drink")}
      >
        <div className="itemName">Getränke</div>
      </div>
      <div className="pzCategory-item catOff" title="Angebot Items"></div>
    </div>
  );
}
