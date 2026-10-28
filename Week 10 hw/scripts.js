const titleEl = document.getElementById("gameTitle");
const mainEl = document.getElementById("gameMain");
const imgEl = document.getElementById("gameImg");
const listEl = document.getElementById("gameList");
const toggleBtn = document.getElementById("toggleHighlightBtn");
const swapBtn = document.getElementById("swapImgBtn");

titleEl.textContent = "Favorite Video Games — Powered by JavaScript";

imgEl.src = "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/205100/08e23dc25023aac81f2b40e35785e01de64dd171/header.jpg?t=1789050056";
imgEl.alt = "Games";

const favoriteGames = [
  { name: "Fable 2", info: "Choice driven RPG classic set in the world of Albion." },
  { name: "Cyberpunk 2077", info: "Open world action RPG set in Night City." },
  { name: "Dishonored", info: "Stealth action game with supernatural abilities." },
  { name: "I-Ninja", info: "Fast paced action platformer withninjas." }
];

listEl.innerHTML = "";

favoriteGames.forEach((game) => {
  const li = document.createElement("li");
  li.textContent = `${game.name} — ${game.info}`;
  listEl.appendChild(li);
});

toggleBtn.addEventListener("click", () => {
  mainEl.classList.toggle("game-highlight");
});

let swapped = false;
swapBtn.addEventListener("click", () => {
  if (!swapped) {
    imgEl.src = "https://i.ytimg.com/vi/fQhBSm2KMW8/sddefault.jpg";
    imgEl.alt = "Fable 2";
    swapped = true;
  } else {
    imgEl.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbZNhMQTDGwo17l8BAkHuQfh58uHwn9Dhr-2CoZY99GNdOat03GvRu8q1bLGuckkLvs005xkKf5acZVynh8G2J7WSZvUNLPA_ASEawe9X22aYGWGAWGvTxaPm6QFf4sOABa9AUkIPZSiAhW16PQ7VgCFilNMSFPmQmHxfEumPHJaEWto7ViKyr2HcEW1A/w640-h480-rw/ininja%201.png";
    imgEl.alt = "I-Ninja";
    swapped = false;
  }
});

// Part 9

const challenge = document.getElementById("challenge");

challenge.textContent = "This paragraph was styled and changed using JavaScript!";
challenge.style.color = "#cc0700";
challenge.style.fontWeight = "bold";