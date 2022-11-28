import { useEffect } from "react";
import { headerMovement } from "./../Functional";

export default function Header() {
  useEffect(() => headerMovement(), []);
  return <header id="pzHeader"></header>;
}
