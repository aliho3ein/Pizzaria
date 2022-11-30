import Aos from "aos";

/* Export */
export { togglePopUp, fixNavbar, headerMovement, aosEffect, burgerNav };

/* PopUp */
function togglePopUp() {
  document.querySelector(".pzPopUp").classList.toggle("popDown");
  document.querySelector(".castArea").classList.toggle("castEffect");
}

/* NavBar */
function fixNavbar() {
  window.addEventListener("scroll", () => {
    const Nav = document.querySelector(".pzNav");
    window.scrollY >= 100
      ? Nav.classList.add("fixNav")
      : Nav.classList.remove("fixNav");
  });
}

/* Burger Menu */
let open = false;
function burgerNav() {
  let nav = document.querySelector(".mobileNav");
  document.querySelector(".burgerNav").addEventListener("click", () => {
    document.querySelector(".opNav").classList.toggle("xNav");
    open ? (nav.style.display = "none") : (nav.style.display = "flex");
    open = !open;
  });
}
/* Header */
function headerMovement() {
  const img = document.getElementById("pzHeader");
  window.addEventListener("scroll", (e) => {
    let top = Math.floor(window.scrollY / 3);
    img.style.backgroundPositionY = `${top}px`;
  });
}

/* aos Effect */
function aosEffect() {
  Aos.init();
}
