async function getData() {
  const response = await fetch("./data/photographers.json")
  const data = await response.json()
 

  return data
}

async function displayDataMedia(medias) {                            // juste à changer le DOM pour bien afficher les clichés du photographes au bon endroit

  const mediaSection = document.querySelector(".photograph-header");

  medias.forEach((media) => {
    
    const photographerMedia = mediaFactory(media);
   
    const mediaCardDOM = photographerMedia.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}

async function displayDataPhotographer(photographers) {               // juste à changer le DOM pour bien afficher les informations du photographes au bon endroit

  const mediaSection = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    
    const photographerMedia = photographerFactory(photographer);
   
    const mediaCardDOM = photographerMedia.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);                                 
  });
}




async function init() {
  
  const { media, photographers } = await getData(); 
 
  displayDataMedia(media);
  displayDataPhotographer(photographers)
}

init();
