async function getMedia() {
  // Penser à remplacer par les données récupérées dans le json
  const response = await fetch("./data/photographers.json")
  const medias = await response.json()
 
  // et bien retourner le tableau photographers seulement une fois

  return medias
  
}

async function displayData(medias) {

  const mediaSection = document.querySelector(".photograph-header");

  medias.forEach((media) => {
    
    const photographerMedia = mediaFactory(media);
   
    const mediaCardDOM = photographerMedia.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}



async function init() {
  // Récupère les datas des photographes
  
  const { media } = await getMedia();
 
  displayData(media);
 
}

init();
