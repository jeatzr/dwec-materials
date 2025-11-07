import { characters } from "./dragonBall.js"; // Import the characters array

console.log(characters);

// the place we are going to insert the cards
const rowCards = document.querySelector("main .row");

// we use this as a templeate to replicate
const cardTemplate = document.querySelector("#card-template").content;

console.log(rowCards);
console.log(cardTemplate);

function renderCharactersInnerHTML(characters) {
  for (let char of characters) {
    let newCard = `<div class="col-sm-6 col-md-4 col-xl-3 d-flex mt-3">
                    <div class="card flex-fill">
                      <img class="card-img-top" src="${char.image}" alt="${char.name}" />
                      <div class="card-body">
                        <h4 class="card-title">${char.name}</h4>
                        <p class="card-text">${char.description}</p>
                      </div>
                    </div>
                  </div>`;
    rowCards.innerHTML += newCard;
  }
}

// renderCharactersInnerHTML(characters);

function renderCharactersTemplate(characters) {
  for (let char of characters) {
    let newCard = cardTemplate.cloneNode(true);

    newCard.querySelector(".card-img-top").src = char.image;

    rowCards.append(newCard);
  }
}

renderCharactersTemplate(characters);
