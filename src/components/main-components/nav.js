import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
/* functions */
import { togglePopUp, fixNavbar } from "./../Functional";

export default function MainNav({ scroll }) {
  let { toTop, toMain, toBottom } = scroll;

  let num = useSelector((state) => {
    return state.castReducer.items.length;
  });

  useEffect(() => {
    fixNavbar();
  }, []);

  return (
    <nav className="pzNav">
      <ul>
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
