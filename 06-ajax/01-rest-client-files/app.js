const output = document.querySelector(".output");

// this is a GET request with async/await
async function fetchPikachu() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    // parse the json response
    const data = await response.json();
    // do something with data
    //console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
// not gonna work because is not inside async func
//const pikachu = await fetchPikachu();

fetchPikachu().then((pikachu) => {
  console.log(pikachu);
  console.log(pikachu.name);

  output.innerHTML += `<h2>${pikachu.name}</h2>`;
  output.innerHTML += `<img src="${pikachu.sprites.front_default}"></img>`;

  output.innerHTML += "<ul>";
  pikachu.abilities.forEach((a) => {
    output.innerHTML += `<li>${a.ability.name}</li>`;
  });
  output.innerHTML += "</ul>";
});
