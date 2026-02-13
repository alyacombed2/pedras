const btn = document.getElementById("curtirBtn");
const display = document.getElementById("curtidas");


const namespace = "pedras-noticias-online";
const key = "likes";


fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
  .then(response => response.json())
  .then(data => {
    const likes = data.value || 0;
    display.textContent = `${likes} curtida${likes > 1 ? "s" : ""}`;
  });


btn.addEventListener("click", () => {
  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(response => response.json())
    .then(data => {
      display.textContent = `${data.value} curtida${data.value > 1 ? "s" : ""}`;
    });
});
