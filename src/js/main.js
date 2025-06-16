// Moves product rendering logic to a new file
import { loadHeaderFooter } from "./utils.mjs";
import { headerJS } from "./script.mjs";
import { initHamburger } from "./hamburger.mjs";

loadHeaderFooter().then(() => {
  headerJS();
  // initHamburger();
});
