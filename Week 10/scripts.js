const title = document.getElementById("title");
title.textContent = "Hello from JavaScript!";


title.style.color = "blue";
title.style.fontFamily = "Arial, sans-serif";


const mainSection = document.querySelector(".main");
mainSection.style.backgroundColor = "#f0f0f0";


const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, i) => {
p.textContent = `Paragraph ${i + 1} updated by JS`;
p.style.color = "green";
});

const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", () => {
document.body.classList.toggle("highlight");
});


const resources = [
{ text: "CSI", href: "https://www.csi.edu" },
{ text: "MDN Web Docs", href: "https://developer.mozilla.org" },
{ text: "Eloquent JavaScript", href: "https://eloquentjavascript.net" }
];

const list = document.getElementById("links");

list.innerHTML = "";

for (const item of resources) {
const li = document.createElement("li"); 
const a = document.createElement("a"); 
a.textContent = item.text; 
a.href = item.href; 
a.target = "_blank"; 
li.appendChild(a); 
list.appendChild(li); 
}



// Week 10 notes 

// console.log("linked")


// // DOM and Basic manipulation
// // What is the DOM?
// // Document Object Model, this is how the browser reprents your web page in memory
// // HTML elements becomes a JS object that we can access . change ore delete 
// // JS to change text, image, colors, classes etc. This occurs after the web page fully loads



// // Change text content with 35
// // We are going to find the HTML Element via its ID attribute
// const title = document.getElementById("title");
// // Document, repersents the whole webpage loaded in the browser
// // .getElementById("title"), finds




// title.textContent = "cjsdjkbvn ljdjvlbl"



// const head = document.getElementById("head")
// // . text content access or changes the text inside the element

// // Selecting Elements 
// // GetElementID, selects one element by its ID       document.getElementById("title")

// // querySelector(), selects the first match(ID, class, tag)     document.querySelector(".main")

// // querySelectorALL(), returns a Nodelist of all matches        document.querySelectorALL("p")



// // querySelector
// const mainSection = document.querySelector(".main");
// mainSection.style.backgroundColor ="red" 



// // QuerySelectorALL()
// const paragraphs = document.querySelectorAll("p")
// // Loop thourgh all p elements and change their text
// paragraphs.forEach((para, index) =>{
//     para.textContent = `Paragraph ${index + 1} modifed by querySelectorALL()`;
//     para.style.color = "blue";
// });


// // Adding interactivity with Even listeners 

// // Seclet button

// const button = document.getElementById("toggle");
// // listen for a button click
// button.addEventListener("click",() =>{
//     // toggle the highlight class on the body
//     document.body.classList.toggle("highlight");

// });