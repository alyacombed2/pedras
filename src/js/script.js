const btn = document.getElementById("curtirBtn");
const display = document.getElementById("curtidas");

const namespace = "alyaPedrasTeste123";
const key = "likes";

// carregar likes
async function load() {
  const res = await fetch(`https://api.countapi.xyz/get/${namespace}/${key}`);
  const data = await res.json();
  display.innerText = (data.value || 0) + " curtidas";
}

load();

// clicar
btn.addEventListener("click", async () => {
  const res = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
  const data = await res.json();
  display.innerText = data.value + " curtidas";
});
