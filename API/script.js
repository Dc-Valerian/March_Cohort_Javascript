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

// const btn = document.getElementById("btn");
// const output = document.getElementById("output");

// btn.addEventListener("click", function () {
//   fetch("https://api.adviceslip.com/advice")
//     .then((res) => res.json())
//     .then((collins) => {
//       output.textContent = collins.slip.advice;
//     });
// });

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

//  METHOD IN API ( CRUD METHOD )
// GET - to get data from the server ...Create
// POST - to send data to the server.....Read
// PUT /PATCH - to update data on the server....Update
// DELETE - to delete data from the server....Delete

//  API TO GET RANDOM USERS

fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => {
    const user = data.results[0];

    console.log(user.location.street.name);
  });

// Get random jokes
const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

btn.addEventListener("click", function () {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => res.json())
    .then((data) => {
      joke.textContent = `${data.setup} - ${data.punchline} + " 😂"`;
    });
});
