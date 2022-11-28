import { useEffect } from "react";
import { headerMovement } from "./../Functional";

export default function Header({ scroll }) {
  useEffect(() => headerMovement(), []);
  return <header id="pzHeader" ref={scroll}></header>;
}
