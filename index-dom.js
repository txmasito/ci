import { encrypt } from "./js/encrypt.js";
import { decrypt } from "./js/decrypt.js";
import { copy } from "./js/copy.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  encrypt("#encrypt");
  decrypt("#decrypt");
  copy("#copy");
});
