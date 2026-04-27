//  {
//     "city": "Lagos",

//         "temperature": 30,
//         "condition": "Sunny"
// }

// JSON FORMAt

// Request....when you the user are asking for a request
// Response......the answer gotten or received from the request
// ENDPOINT......the url you use  https://api.example.com/weather
// JSON....format for most Api's use
// Full meaning of JSON ...javascript object notation

const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => ada.json())
    .then((data) => {
      output.textContent = data.slip.advice;
    });
});

// fetch.....go online and the data

// .then........convert the response to a readable json format

// the second .then...........more like create a name for the data gotten and then use it to display the advice on the page

// const orurhuier ={
//     slip: {
//         "advice": "Don't let the name throw you. The advice is good.",
//         "slip_id": "1234"
//     }
// }

// data.slip.advice
