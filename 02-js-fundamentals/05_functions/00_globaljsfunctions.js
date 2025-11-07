// Capturing the output div
const outDiv = document.getElementById("output");
// capturing the button
const button = document.getElementById("stop");

// setting the interval every 1 sec
let intervalID = setInterval(function () {
  let date = new Date();
  console.log("Date: ", date);
  outDiv.innerHTML += `<p>Date: ${date}</p>`;
}, 1000);

// add an event listener to the event click of the button
button.addEventListener("click", function () {
  clearInterval(intervalID);
  console.log(`Clear Interval: ${intervalID}`);
  outDiv.innerHTML += `<p>Clear Interval: ${intervalID}</p>`;
});

