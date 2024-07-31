import { artworks } from "./database.js";
let data = artworks.filter((e) => e.primaryImageSmall !== "");
console.log(data[0]);

let container = document.getElementById("render");

show(data);

function show(array) {
  container.innerHTML = "";
  console.log("a");
  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    let card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);

    let imgElement = document.createElement("img");
    card.appendChild(imgElement);

    imgElement.src = `${element.primaryImageSmall}`;

    let titleElement = document.createElement("h2");
    card.appendChild(titleElement);
    titleElement.textContent = `${element.title}`;

    let nameElement = document.createElement("h4");
    card.appendChild(nameElement);
    nameElement.textContent = `${element.artistDisplayName}`;

    let nationalityElement = document.createElement("h5");
    card.appendChild(nationalityElement);
    nationalityElement.textContent = `${element.artistNationality}`;

    let yearElement = document.createElement("h6");
    card.appendChild(yearElement);
    yearElement.textContent = `${element.accessionYear}`;

    if (element.artistNationality == "French") {
      console.log(element);
      card.classList.add("French");
    }
  }
}

document.getElementById("btn_country").addEventListener("click", () => {
  show(data.filter((e) => e.artistNationality == "French"));
});

document.getElementById("btn_artist").addEventListener("click", () => {
  show(data.filter((e) => e.artistDisplayName == "Camille Pissarro"));
});

document.getElementById("btn_medium").addEventListener("click", () => {
  show(data.filter((e) => e.medium == "Oil on canvas"));
});

document.getElementById("btn_all").addEventListener("click", () => {
  show(data);
});

let lista = data.map((e) => e.artistNationality);
console.log("lista", lista);

let unicos = [...new Set(lista)];
console.log("unicos", unicos);
