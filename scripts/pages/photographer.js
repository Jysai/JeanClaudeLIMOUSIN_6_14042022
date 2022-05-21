let urlParams = new URLSearchParams(location.search);
let idPhotographer = urlParams.get("id");

async function getData() {
  const response = await fetch("./data/photographers.json")
  const data = await response.json()
 
  return data
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
  // const mediaSection = document.querySelector("#main");
  const mediaSection = document.querySelector('.section-media')


  medias.forEach((media) => {
    
    if (idPhotographer == media.photographerId) {
    const photographerMedia = mediaFactory(media);
    
    const mediaCardDOM = photographerMedia.getMediaCardDOM();
    console.log(mediaCardDOM);

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
