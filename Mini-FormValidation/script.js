const form = document.getElementById("myForm");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorDiv = document.getElementById("error");
const successDiv = document.getElementById("success");

form.addEventListener("submit", function (clememt) {
  clememt.preventDefault(); // this will prevent the form from submitting and refreshing the page
  validateForm();
});

function validateForm() {
  let messages = [];

  errorDiv.innerHTML = ""; // this will clear the previous error messages
  successDiv.innerHTML = "";

  // for name input
  if (fullname.value.trim() === "") {
    messages.push("full name is required");
    fullname.classList.add("error");
  } else {
    fullname.classList.remove("error");
    fullname.classList.add("success");
  }

  // for email input
  if (email.value.trim() === "") {
    messages.push("email is required");
    email.classList.add("error");
  } else {
    email.classList.remove("error");
    email.classList.add("success");
  }

  // For password input
  if (password.value.length < 6) {
    messages.push("password must be at least 6 characters");
    password.classList.add("error");
  } else {
    password.classList.remove("error");
    password.classList.add("success");
  }

  if (messages.length > 0) {
    errorDiv.innerHTML = messages.join("<br>");
  } else {
    localStorage.setItem("fullname", fullname.value);
    localStorage.setItem("email", email.value);

    window.location.href = "dashboard.html";
  }
}
