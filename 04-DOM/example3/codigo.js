/**
 * con esto leemos el archivo json. ahora mismo nos suena un poco raro.. usa dos promesas (asincronas etc)
 * de momento, sabed que esto funciona y ya esta
 *
 * dentro de la función procesarJson, damos por supuesto que el archivo ya esta leido
 */

fetch("./data/team.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    console.log(jsondata);
    renderTeams(jsondata);
  });

const cardRow = document.querySelector(".row");

function renderTeams(jsondata) {
  const template = document.getElementById("plantilla").content; //en teoria lo recuperamos aqui, HABRÍA QUE CONTROLAR QUE SI NO ENCUENTRA NADA.....
  console.log(plantilla);

  for (team of jsondata.teams) {
    let card = template.cloneNode(true);

    // change the image of the logo
    const logo = card.querySelector(".logo");
    logo.setAttribute("src", team.escudo);

    const name = card.querySelector(".card-title");
    name.textContent = team.nombre;

    //con el video
    const video = card.getElementById("mcvideo");
    video.setAttribute("id", "mcvideo_" + team.id);
    video.querySelector("source").src = team.video;

    //con el poster
    const poster = card.getElementById("mcposter");
    poster.setAttribute("id", "mcposter_" + team.id);
    poster.querySelector("img").src = team.poster;

    //trainer
    const trainer = card.getElementById("mcentrenador");
    trainer.setAttribute("id", "mcentrenador_" + team.id);
    trainer.querySelector("img").src = team.imagenentrenador;
    trainer.querySelector("p").textContent = team.nombreentrenador;

    //con el presidente
    const president = card.getElementById("mcpresidente");
    president.setAttribute("id", "mcpresidente_" + team.id);
    president.querySelector("img").src = team.imagenpresidente;
    president.querySelector("p").textContent = team.nombrepresidente;

    //con la ultima
    const moreInfo = card.getElementById("mcmas");
    moreInfo.setAttribute("id", "mcmas_" + team.id);
    moreInfo.querySelectorAll(
      "p"
    )[0].textContent = `The team has a budget of ${team.presupuesto} million Euro`;

    moreInfo.querySelectorAll(
      "p"
    )[1].textContent = `In Kings of Legends League this team uses the abreviation ${team.abr}]`;

    /**
     * y cambiamos los controladores, para que apunten al id del div que corresponden.
     * los nuevos id son faciles, es el id del controlador (de la plantilla) más el id del equipo
     * y ponemos el color de los botones del color del equipo, por supuesto
     */
    for (button of card.querySelectorAll("button")) {
      button.style.backgroundColor = team.color;
      button.setAttribute(
        "data-bs-target",
        button.getAttribute("data-bs-target") + "_" + team.id
      );
      button.setAttribute(
        "aria-controls",
        button.getAttribute("aria-controls") + "_" + team.id
      );
    }

    cardRow.append(card);
  }
}
