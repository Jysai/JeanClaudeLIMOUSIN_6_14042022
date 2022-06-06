/* eslint-disable no-undef */
let urlParams = new URLSearchParams(location.search);
let idPhotographer = urlParams.get("id");
const totalLikesPhotographer = document.querySelector(`#wish-count`);

async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  const photographers = await response.json();

  return photographers;
}

async function getMedia() {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (medias = data.media));

  return {
    medias: [...medias],
  };
}

async function displayDataPhotographer(photographers) {
  const mediaSection = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    if (idPhotographer == photographer.id) {
      const photographerMedia = photographerFactory(photographer);

      const mediaCardDOM = photographerMedia.getMediaCardDOM();

      mediaSection.appendChild(mediaCardDOM);
    }
  });
}

async function displayDataMedia(medias) {
  const mediaSection = document.querySelector(".section-media");

  medias.forEach((media) => {
    if (idPhotographer == media.photographerId) {
      const photographerMedia = mediaFactory(media);
      const mediaCardDOM = photographerMedia.getMediaCardDOM(media.id);

      mediaSection.appendChild(mediaCardDOM);
    }
  });

  const arrayLikes = [];
  const totalLikes = document.querySelectorAll(".likes-photographer");

  for (let index = 0; index < totalLikes.length; index++) {
    const element = totalLikes[index];
    const numberLike = parseInt(element.textContent, 10);

    arrayLikes.push(numberLike);

    totalLikesPhotographer.textContent = arrayLikes.reduce( // affiche le total des likes sur la page du photographe
      (previousValue, currentValue) => previousValue + currentValue
    );
  }
}

document.querySelector("#sort-list-close").onclick = closeSortMenu; // Permet d'afficher les options pour trier les médias
function closeSortMenu() {
  document.querySelector("#sort-list-open").style.display = "block";  
}

document.addEventListener("keyup", function (e) { // Ferme le menu qui permet de trier les medias quand on appuie sur la touche Echap du clavier
if (e.key === "Escape") {
  document.querySelector("#sort-list-open").style.display = "none";
  }
});

window.onclick = (e) => { // Ferme le menu qui permet de trier les medias quand on clique en dehors du menu
  if (!e.target.closest("#sort-list-close") ) {
    document.querySelector("#sort-list-open").style.display = "none"
  }
}



const textChoice = document.getElementById("text-choice-change")
const sectionMedia = document.querySelector(".section-media");

document.getElementById("popularity-btn").onclick = sortByPopularity;
function sortByPopularity(e) { // fonction qui trie les medias par like
  sectionMedia.innerHTML = "";
  medias.sort((a, b) => {
    return b.likes - a.likes;
  });
  textChoice.textContent = e.target.textContent;
  displayDataMedia(medias);
  displayLightBox();
}

document.getElementById("date-btn").onclick = sortByDate;
function sortByDate(e) {  // fonction qui trie les medias par date
  sectionMedia.innerHTML = "";
  medias.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });
  textChoice.textContent = e.target.textContent;
  displayDataMedia(medias);
  displayLightBox();
}


document.getElementById("title-btn").onclick = sortByTitle;
function sortByTitle(e) { // fonction qui trie les medias par titre
  sectionMedia.innerHTML = "";
    medias.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
  textChoice.textContent = e.target.textContent;
  displayDataMedia(medias);
  displayLightBox();
}



// eslint-disable-next-line no-unused-vars
function like(id, likes) { // fonction qui permet de liker quand on clique sur le coeur
  const articlePhotographer = document.querySelector(
    `article[data-id="${id}"]`
  );
  const likesPhotographer = articlePhotographer.querySelector(
    `span.likes-photographer`
  );

  // const heartPhotographer =
  //   articlePhotographer.querySelector(`i.heart-photographer`);

  if (likes == likesPhotographer.innerHTML) {
    likesPhotographer.textContent++;
    totalLikesPhotographer.textContent++;
    // heartPhotographer.classList.add("fas");
  } else {
    likesPhotographer.textContent--;
    totalLikesPhotographer.textContent--;
    // heartPhotographer.classList.remove("fas");
  }
}

async function init() {
  const { photographers } = await getPhotographers();
  const { medias } = await getMedia();

  displayDataMedia(medias);
  displayDataPhotographer(photographers);
  displayLightBox();
}

init();
