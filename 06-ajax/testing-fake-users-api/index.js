import { fetchUsers, fetchUserById } from "./services/usersApi.js";

// This is a GET request with promises
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    // parse and return the json response
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log("body", data.body);
    console.log("id", data.id);
    // Do something with data
    document.getElementById("output").innerText = data.body;
  })
  .catch((error) => console.error("Error:", error));

console.log("Finishhh??");

fetchUsers().then((data) => {
  console.log("get users");
  console.log(data);
});

fetchUserById(4).then((data) => {
  console.log("get user 4");
  console.log(data);
});
