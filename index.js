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

function greet() {
  alert("Hello, welcome to my website");
}

// element.addEventListener("event",function())

let puppy = "confused";
const button = document.getElementById("btn");

button.addEventListener("click", function () {
  alert(puppy);
});

const form = document.getElementById("form");

form.addEventListener("submit", function () {
  alert("Form submitted");
});

const title = document.getElementById("title");
const btnchange = document.getElementById("btnchange");

btnchange.addEventListener("click", function () {
  title.textContent = "Javascript is awesome";
});

const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "red";
  box.style.width = "200px";
  box.style.height = "200px";
});

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "white";
});

//   <!-- show what the user types -->

const input = document.getElementById("nameInput");
const display = document.getElementById("textdisplay");

input.addEventListener("input", function () {
  display.textContent = input.value;
});

// <!-- Add New Items to a List -->
const inputItem = document.getElementById("itemInput");
const buttonItem = document.getElementById("addBtn");
const list = document.getElementById("list");

buttonItem.addEventListener("click", function () {
  const li = document.createElement("li");

  li.textContent = inputItem.value;
  list.appendChild(li);

  inputItem.value = "";
});

const buttonRemove = document.getElementById("removeBtn");

const textremove = document.getElementById("text");

buttonRemove.addEventListener("click", function () {
  textremove.remove();
});

const toggleBtn = document.getElementById("darkBtn");

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});


// classlist is a special property used to manaage classes of an element

