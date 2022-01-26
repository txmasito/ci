const d = document;

export function decrypt(decryptBtn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(decryptBtn)) {
      let text = "";
      text = d.querySelector("#addText").value;
      let encryptedMessage = d.getElementById("encryptedMessage");

      if (!text) return console.warn(`you didn't enter a text`);

      let expReg = /^[a-z!,\s]+$/g.test(text);

      let vowelA = "ai";
      let vowelE = "enter";
      let vowelI = "imes";
      let vowelO = "ober";
      let vowelU = "ufat";

      text = text.replace(new RegExp(vowelA, "g"), "A");
      text = text.replace(new RegExp(vowelE, "g"), "E");
      text = text.replace(new RegExp(vowelI, "g"), "I");
      text = text.replace(new RegExp(vowelO, "g"), "O");
      text = text.replace(new RegExp(vowelU, "g"), "U");

      return expReg
        ? (encryptedMessage.textContent = text.toLowerCase())
        : console.log(
            `Solo puede utilizar letras minúsculas, sin acentos ni caracteres especiales`
          );
    }
  });
}
