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

    totalLikesPhotographer.textContent = arrayLikes.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  }
}

const sectionMedia = document.querySelector(".section-media");
document.getElementById("select").onchange = changeListener;
function changeListener() {
  let value = this.value;
  sectionMedia.innerHTML = "";
  if (value == "popularite") {
    medias.sort((a, b) => a.likes - b.likes);
  } else if (value == "date") {
    medias.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (value == "titre") {
    medias.sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    });
  }
  displayDataMedia(medias);
  displayLightBox();
}

function like(id, likes) {
  const articlePhotographer = document.querySelector(
    `article[data-id="${id}"]`
  );
  const likesPhotographer = articlePhotographer.querySelector(
    `span.likes-photographer`
  );

  const heartPhotographer =
    articlePhotographer.querySelector(`i.heart-photographer`);

  if (likes == likesPhotographer.innerHTML) {
    likesPhotographer.textContent++;
    totalLikesPhotographer.textContent++;
    heartPhotographer.classList.add("fas");
  } else {
    likesPhotographer.textContent--;
    totalLikesPhotographer.textContent--;
    heartPhotographer.classList.remove("fas");
  }
}

async function init() {
  const { photographers } = await getPhotographers();
  const { medias } = await getMedia();
  console.log(medias);

  displayDataMedia(medias);
  displayDataPhotographer(photographers);
  displayLightBox();
}

init();
