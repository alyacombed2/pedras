let curtidas = 0;

const btn = document.getElementById("curtirBtn");
const display = document.getElementById("curtidas");

btn.addEventListener("click", () => {
    curtidas++;
    display.textContent = `${curtidas} curtida${curtidas > 1 ? "s" : ""}`;
});
