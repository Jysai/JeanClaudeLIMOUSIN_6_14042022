let urlParams = new URLSearchParams(location.search);
let idPhotographer = urlParams.get("id");


async function getData() {
  const response = await fetch("./data/photographers.json")
  const data = await response.json()
 

  return data
}


async function displayDataMedia(medias) {                            // juste à changer le DOM pour bien afficher les clichés du photographes au bon endroit

  const mediaSection = document.querySelector("#main");

  medias.forEach((media) => {
    
    if (idPhotographer == media.photographerId) {
    const photographerMedia = mediaFactory(media);
    
    const mediaCardDOM = photographerMedia.getMediaCardDOM();
    console.log(mediaCardDOM);
    mediaSection.appendChild(mediaCardDOM);
    }
  });
}

async function displayDataPhotographer(photographers) {               // juste à changer le DOM pour bien afficher les informations du photographes au bon endroit

  const mediaSection = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    if (idPhotographer == photographer.id) {
      const photographerMedia = photographerFactory(photographer);
   
      const mediaCardDOM = photographerMedia.getMediaCardDOM();
    
      mediaSection.appendChild(mediaCardDOM);     
    }                           
  });
}

async function init() {
  
  const { media, photographers } = await getData(); 

  displayDataMedia(media);
  displayDataPhotographer(photographers)
}

init();
