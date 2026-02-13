const btn = document.getElementById("curtirBtn");
const display = document.getElementById("curtidas");

const namespace = "pedras-alya-2026"; // nome único
const key = "likes";

// cria contador (se não existir)
fetch(`https://api.countapi.xyz/create?namespace=${namespace}&key=${key}&value=0`);

// função pra atualizar tela
function carregarLikes() {
  fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
    .then(r => r.json())
    .then(d => {
      display.textContent = `${d.value} curtida${d.value > 1 ? "s" : ""}`;
    });
}

carregarLikes();

// clique = soma 1
btn.onclick = () => {
  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(r => r.json())
    .then(d => {
      display.textContent = `${d.value} curtida${d.value > 1 ? "s" : ""}`;
    });
};
