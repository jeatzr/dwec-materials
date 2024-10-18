

/**
 * con esto leemos el archivo json. ahora mismo nos suena un poco raro.. usa dos promesas (asincronas etc)
 * de momento, sabed que esto funciona y ya esta
 * 
 * dentro de la función procesarJson, damos por supuesto que el archivo ya esta leido
 */


fetch('./data/team.json')
  .then(response => {
    return response.json();
  })
  .then(jsondata => procesarJSON(jsondata))
  .catch(e => { console.log(e) });


function procesarJSON(jsondata) {


  /**
   * aqui empezamos a procesar el json 
   * y a crear los objetos que necesito para mostrar los datos
   *  
   * equipos (en el json)
   * 
   * "id": "1",
        "nombre": "1K FC",
        "abr": "1K",
        "escudo": "https://kingsleague-cdn.kama.football/account/production/team/image/398917228.png",
        "color": "#403893",
        "video": "https://kingsleague-cdn.kama.football/account/production/team/video/LOOP%20KINGS%201K%20FC_v1.mp4",
        "poster": "https://cms-es.kingsleague.pro/wp-content/uploads/2024/01/KL-1K.jpg",
        "presupuesto": "102",
        "nombrepresidente": "Iker Casillas",
        "imagenpresidente": "https://s3.eu-central-2.wasabisys.com/kingsleague-cdn.kama.football/account/production/staff/429468257.png",
        "nombreentrenador": "Juanjo Moreno",
        "imagenentrenador": "https://s3.eu-central-2.wasabisys.com/kingsleague-cdn.kama.football/account/production/staff/911257481.png"
      },
  
  
  
      lo primero que hacemos es guardar la plantilla que está creada en html. Crearla a pelo desde js es tedioso
      y eliminamos la plantilla del padre, porque la vamos a procesar despues en un for
      guardamos el padre, que es contenedor en el que vamos a meter todas las tarjetas
   */

  let plantilla = document.getElementById("plantilla"); //en teoria lo recuperamos aqui, HABRÍA QUE CONTROLAR QUE SI NO ENCUENTRA NADA.....
  let contenedor = plantilla.parentNode;
  contenedor.removeChild(plantilla);

  for (i in jsondata.teams) {
    let equipo = jsondata.teams[i];

    /**
     * importante, a partir de ahora, vamos recuperando los elementos uno a uno usando el getElementbyID (todos tienen un id diferente), y mucho ojo, 
     * tendremos que cambiar el id a la hora de meterlo en el elemento equipo, porque si no, todos los equipos tendrian los mismos id...
     */

    let tarjeta = plantilla.cloneNode(true);
    contenedor.appendChild(tarjeta);


    tarjeta.setAttribute("id", "equipo_" + equipo.id);


    let propiedad = document.getElementById("imagen"); //cuidao, voy a utilizar propiedad como una variable para guardar todos los elementos que recupere
    propiedad.setAttribute("id", "imagen_" + equipo.id);
    propiedad.setAttribute("src", equipo.escudo);


    propiedad = document.getElementById("nombre");
    propiedad.setAttribute("id", "nombre_" + equipo.id);
    propiedad.childNodes[0].nodeValue = "Equipo: " + equipo.nombre;
    //propiedad.firstchild.nodeValue(equipo.nombre);  //y esto peta... manda cojones

    /**cambiamos los identificadores de los desplegables, de todos.
     * los nuevos identificadores, incluyen el id del equipo (del json)
     * y ya de paso, cambiamos los valores
     * 
    */
    //con el video
    propiedad = document.getElementById("mcvideo");
    propiedad.setAttribute("id", "mcvideo_" + equipo.id)
    propiedad = propiedad.getElementsByTagName("source")[0];
    propiedad.setAttribute("src", equipo.video);

    //con el poster
    propiedad = document.getElementById("mcposter");
    propiedad.setAttribute("id", "mcposter_" + equipo.id);
    propiedad = propiedad.getElementsByTagName("img")[0];
    propiedad.setAttribute("src", equipo.poster);


    //con el entrenador
    propiedad = document.getElementById("mcentrenador");
    //hago lo mismo, pero un poco más comprimido
    propiedad.setAttribute("id", "mcentrenador_" + equipo.id)
    propiedad.getElementsByTagName("img")[0].setAttribute("src", equipo.imagenentrenador);
    propiedad.getElementsByTagName("p")[0].childNodes[0].nodeValue = equipo.nombreentrenador;


    //con el presidente
    propiedad = document.getElementById("mcpresidente");
    propiedad.setAttribute("id", "mcpresidente_" + equipo.id)
    propiedad.getElementsByTagName("img")[0].setAttribute("src", equipo.imagenpresidente);
    propiedad.getElementsByTagName("p")[0].childNodes[0].nodeValue = equipo.nombrepresidente;


    //con la ultima
    propiedad = document.getElementById("mcotros");
    propiedad.setAttribute("id", "mcotros_" + equipo.id)
    propiedad.getElementsByTagName("p")[0].childNodes[0].nodeValue = "El equipo tiene un presupuesto de " + equipo.presupuesto + " millones de Euros."
    propiedad.getElementsByTagName("p")[1].childNodes[0].nodeValue = "En la Liga Kings of Legends, el equipo usa la abreviatura " + equipo.abr;

    /**
     * y cambiamos los controladores, para que apunten al id del div que corresponden. 
     * los nuevos id son faciles, es el id del controlador (de la plantilla) más el id del equipo
     * y ponemos el color de los botones del color del equipo, por supuesto
     */
    for (boton of tarjeta.getElementsByTagName("button")) {
      boton.style.backgroundColor = equipo.color;
      boton.style.color = "#" + Number(0xffffff - ("0x" + equipo.color.slice(1, 7))).toString(16).toUpperCase();//cuidao para hacer el cambio de colro
      boton.setAttribute("data-bs-target", boton.getAttribute("data-bs-target") + "_" + equipo.id);
      boton.setAttribute("id", boton.getAttribute("id") + "_" + equipo.id);
    }


  }


  const a = document.createElement("a");
  //cuidadiinn joorrlll, que estamos con un literal de cadena
  const archivo = new Blob([`
  <!doctype html>
  <html lang="en">
  `+ document.head.outerHTML + `




  <!-- Todo lo que viene ahora lo has creado tu solit@ con javascript y jugando con el DOM
       y esto solo la punta del iceberg de todo lo que vas a crear!!!
       venga! vamos a por ello  -->








  `+ document.body.outerHTML + `
  </html>`], { type: 'html' });
  const url = URL.createObjectURL(archivo);
  a.href = url;
  a.download = "statico.html";
  a.innerHTML = "descarga el htlm que has creado con js y el dom"
  document.getElementsByTagName("footer")[0].appendChild(a);



}

