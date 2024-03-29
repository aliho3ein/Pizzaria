import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
/* functions */
import { togglePopUp, fixNavbar, burgerNav } from "./../Functional";

export default function MainNav({ scroll }) {
  let { toTop, toMain, toBottom } = scroll;

  let items = useSelector((state) => {
    return state.castReducer.items;
  });

  let num = 0;
  items.forEach((element) => {
    num += element.count;
  });

  useEffect(() => {
    fixNavbar();
    burgerNav();
  }, []);

  return (
    <nav className="pzNav">
      <div className="burgerNav">
        <span className="opNav"></span>
      </div>
      <ul className="pcNav mobileNav">
        <li>
          <Link to="/" onClick={() => toMain.current.scrollIntoView()}>
            Menü
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => toBottom.current.scrollIntoView()}>
            Bewertung
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => toBottom.current.scrollIntoView()}>
            Kontakt
          </Link>
        </li>
        <li>
          <Link to="/pizza" onClick={() => toMain.current.scrollIntoView()}>
            Aktion
          </Link>
        </li>
      </ul>
      <img
        src="./image/logo.png"
        alt="Logo"
        className="pzNav-logo"
        onClick={() => toTop.current.scrollIntoView()}
      />
      <i className="fa fa-cart-plus" title="Kasse" onClick={togglePopUp}>
        {num !== 0 ? <h2>{num}</h2> : null}
      </i>
      {/* <i className="fa fa-user" title="Login"></i> */}
    </nav>
  );
}
