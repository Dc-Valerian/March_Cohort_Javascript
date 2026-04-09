// GET ELEMENT BY ID
const paragraph = document.getElementById("message");

console.log(paragraph);

// GET ELEMENTS BY NAME
const btn = document.getElementsByName("somzyyyy");

console.log(btn);

// GET ELEMENTS BY TAG NAME
const somethingelse = document.getElementsByTagName("h2");

console.log(somethingelse);

// GET ELEMENTS BY CLASS NAME
const chisom = document.getElementsByClassName("anything");

console.log(chisom);

// CREATING AN ELEMENT

const chikoko = document.createElement("h1");

chikoko.innerHTML = "I am a new heading";

console.log(chikoko);

const menuuuuuuuuuuuu = document.getElementById("menu");
console.log(menuuuuuuuuuuuu.textContent);
console.log(menuuuuuuuuuuuu.innerHTML);

menuuuuuuuuuuuu.innerText = "I am a new menu";
