const d = document;

export function encrypt(encryptBtn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(encryptBtn)) {
      let text = "";
      text = d.querySelector("#addText").value;
      let encryptedMessage = d.getElementById("encryptedMessage");

      if (!text) return console.warn(`you didn't enter a text`);

      let expReg = /^[a-z!,\s]+$/g.test(text);

      let vowelA = "a";
      let vowelE = "e";
      let vowelI = "i";
      let vowelO = "o";
      let vowelU = "u";

      text = text.replace(new RegExp(vowelA, "g"), "AI");
      text = text.replace(new RegExp(vowelE, "g"), "ENTER");
      text = text.replace(new RegExp(vowelI, "g"), "IMES");
      text = text.replace(new RegExp(vowelO, "g"), "OBER");
      text = text.replace(new RegExp(vowelU, "g"), "UFAT");

      return expReg
        ? (encryptedMessage.textContent = text.toLowerCase())
        : console.log(
            `Solo puede utilizar letras minúsculas, sin acentos ni caracteres especiales`
          );
    }
  });
}
