const d = document;

export function copy(copyBtn) {
  d.addEventListener("click", (e) => {
    if (e.target.matches(copyBtn)) {
      let copyText = d.querySelector("#encryptedMessage").textContent;

      navigator.clipboard.writeText(copyText);
    }
  });
}
