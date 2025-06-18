// Moves product rendering logic to a new file
import { loadHeaderFooter } from "./utils.mjs";
import { headerJS } from "./script.mjs";

loadHeaderFooter().then(() => {
  headerJS();
  // initHamburger();
});
