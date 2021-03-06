async function getData() {
  // Penser à remplacer par les données récupérées dans le json
  const response = await fetch("./data/photographers.json");
  const photographers = await response.json();

  // et bien retourner le tableau photographers seulement une fois
  return photographers;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer);

    const userCardDOM = photographerModel.getUserCardDOM();

    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getData();
  displayData(photographers);
}

init();
