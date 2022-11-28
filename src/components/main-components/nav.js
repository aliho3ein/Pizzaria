import { useEffect } from "react";
import { togglePopUp, fixNavbar } from "./../Functional";

export default function MainNav() {
  useEffect(() => {
    fixNavbar();
  }, []);

  return (
    <nav className="pzNav">
      <ul>
        <li className="navItem">Menü</li>
        <li>Bewertung</li>
        <li>Kontakt</li>
        <li>Aktion</li>
      </ul>
      <img src="./image/logo.png" alt="Logo" className="pzNav-logo" />
      <i className="fa fa-cart-plus" title="Kasse" onClick={togglePopUp}>
        <h2>5</h2>
      </i>
      {/* <i className="fa fa-user" title="Login"></i> */}
    </nav>
  );
}
