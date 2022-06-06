/* eslint-disable no-unused-vars */
function photographerFactory(data) {
  const { name, city, price, id, country, tagline, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() { // fonction qui permet d'afficher les informations des photographes sur la page d'accueil et de cliquer dessus pour être rediriger sur leur page
    const article = document.createElement("article");

    article.innerHTML = `
        <a href="photographer.html?id=${id}">
        <div class="focus-photographer">
        <img src=${picture} class="profile-photographer" alt="${name}">
        <h2 class="">${name}</h2>
        </div>
        <a>
        <div class="informations-photographer">
        <span class="city-photographer">${city}, ${country} </span>
        <span class="tagline-photographer">${tagline}</span>
        <span class="price-photographer">${price}€/jour</span>
        </div>`;

    return article;
  }

  function getMediaCardDOM() { // fonction qui permet d'afficher les informations du photographe sur leur page et de le contacter
    const section = document.createElement("section");
 
    section.innerHTML = `
            <div class="information-photographer">
            <h2 class="name-information-photographer">${name}</h2>
            <span class="city-information-photographer">${city}, ${country}</span>
            <span class="tagline-information-photographer">${tagline}</span>
            </div>
            <button class="contact_button" onclick="displayModal()" alt="Contact Me">Contactez-moi</button>
            <img src=${picture} class="profile-photographer" alt="${name}">`;

    section.classList.add("photographer-contact");

    document.querySelector(
      ".name-photographer-contact"
    ).textContent = `${name}`;
    document.querySelector(".price-like").textContent = `${price}`;
 
    document.querySelector(
      ".content"
    ).setAttribute("alt", `contact me ${name}`)


    return section;
  }

  return { getUserCardDOM, getMediaCardDOM };
}
