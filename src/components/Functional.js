export { togglePopUp, fixNavbar, headerMovement, scrollMain };

/* PopUp */
function togglePopUp() {
  document.querySelector(".pzPopUp").classList.toggle("disNone");
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

/* Header */
function headerMovement() {
  const img = document.getElementById("pzHeader");
  window.addEventListener("scroll", (e) => {
    let top = Math.floor(window.scrollY / 3);
    img.style.backgroundPositionY = `${top}px`;
  });
}

/* */

function scrollMain() {
  // window.scrollY = 200;
}
