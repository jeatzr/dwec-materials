// we can change the document title:

document.title = "Testing DOM access";

console.log(document.getElementsByTagName("title")[0].textContent);

/******
 * Changing some properties of title
 * ***************/

let title = document.getElementsByTagName("title")[0];

console.log(title);
console.log(title.textContent);

title.firstChild.textContent = "This is our second change in title";

console.log(title.textContent);

console.log("<title>  has some nodes: " + title.childNodes.length);

console.log(`nodeType  of <title>: ${title.nodeType}`);
console.log(`nodeType of the child of <title>: ${title.firstChild.nodeType}`);

console.log(title.firstChild.nodeValue);

title.setAttribute("id", "title-id");

// show all properties of node title

// for (let prop in title) {
//   console.log(prop + " has value of " + title[prop]);
// }

//  changing the favicon

const oldLink = document.getElementById("dynamic-favicon");

// removing favicon in case it existed
if (oldLink) {
  document.head.removeChild(oldLink);
}

// create and append new favicon
const faviconLink = document.createElement("link");
faviconLink.id = "dynamic-favicon";
faviconLink.rel = "shortcut icon";
faviconLink.href = "./img/bola.jpg";

document.head.appendChild(faviconLink);

// we show the HTML element that contains
console.log(document.head.outerHTML);

//
//  GET all cards in body
//

const cards = document.getElementsByClassName("card");
console.log(cards.length);
console.log(cards);

// for (let card of cards) {
//   const img = card.querySelector("img");
//   img.src = "img/goku.jpg";

//   const cardTitle = card.querySelector("h4");
//   cardTitle.textContent = "Goku";
// }

const cardsArray = Array.from(cards);

cardsArray.forEach((element) => {
  const img = element.querySelector("img");
  img.src = "img/bubu.jpg";
});

const imgCard3 = cards[2].querySelector("img");

imgCard3.src = "img/bobo.jpg";
