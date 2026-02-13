const btn = document.getElementById("curtirBtn");
const display = document.getElementById("curtidas");

// MUDE isso pra um nome único do seu site
const namespace = "alyasite";
const key = "likes";

// Pega likes ao abrir
fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
  .then(res => res.json())
  .then(data => {
    display.textContent = `${data.value} curtidas`;
  });

// Quando clicar
btn.addEventListener("click", () => {
  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(res => res.json())
    .then(data => {
      display.textContent = `${data.value} curtidas`;
    });
});
