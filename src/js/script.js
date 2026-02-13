const btn = document.getElementById("curtirBtn");
const display = document.getElementById("curtidas");

// coloque um nome único pro seu site
const namespace = "noticias-online-alya";
const key = "likes";

// Carregar curtidas ao abrir o site
fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
  .then(res => res.json())
  .then(data => {
    const likes = data.value || 0;
    display.textContent = `${likes} curtida${likes > 1 ? "s" : ""}`;
  });

// Quando clicar
btn.addEventListener("click", () => {
  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(res => res.json())
    .then(data => {
      const likes = data.value;
      display.textContent = `${likes} curtida${likes > 1 ? "s" : ""}`;
    });
});
