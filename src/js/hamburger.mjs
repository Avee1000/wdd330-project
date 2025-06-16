export function initHamburger() {
  const header = document.getElementById("header");
  const navigation = header?.querySelector("nav");
  const hamburger = header?.querySelector("#menu");
  const closeButton = header?.querySelector("#close");

  if (hamburger && navigation && closeButton) {
    hamburger.addEventListener("click", () => {
      navigation.classList.add("show");
    });

    closeButton.addEventListener("click", () => {
      navigation.classList.remove("show");
      document.body.style.overflow = "";
    });
  }
}
