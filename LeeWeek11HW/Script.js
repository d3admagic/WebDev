const themeToggle = document.getElementById("themeToggle"); // was missing themeToggle variable, I also changed it to themeToggle because it matches the id on index
themeToggle.addEventListener("click", () => {      // Was missing the addEventListener
document.body.classList.toggle("dark");
console.log("Theme changed!");
});



const addBtn = document.getElementById("addsheep");
const list = document.getElementById("sheepList");
let counter = 1; 
// I thought it would be funny to use sheep
addBtn.addEventListener("click", () => {

const newsheep = document.createElement("li");

newsheep.textContent = "Sheep " + counter;

list.appendChild(newsheep);

counter++; });





list.addEventListener("click", (event) => {
if (event.target.tagName === "LI") {
event.target.remove(); 
}
console.log("Sheep removed!", event.target.textContent);
});


const keyOutput = document.getElementById("keyOutput"); // needed keyOutput 
document.addEventListener("keyup", function (event) { // missing Event in 'addEventListener'
keyOutput.textContent = "You pressed: " + event.key;
});