

const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", ()  => {
alert("You clicked the button!");
});



const textInput = document.getElementById("textInput");
textInput.addEventListener("input", () => {
console.log("User typed:", textInput.value);
});



const dblBtn = document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", () => {
dblBtn.textContent = "Double clicked!";
});

const mainEl = document.getElementById("Main");
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
mainEl.classList.toggle("highlight");
});



const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
hoverText.style.color = "white";
});
hoverText.addEventListener("mouseout", () => {
hoverText.style.color = "black";
});

document.addEventListener("keyup", (event) => {
document.getElementById("output").textContent = "You pressed: " + event.key;
});