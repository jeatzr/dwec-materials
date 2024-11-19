const output = document.querySelector("output");

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
});
