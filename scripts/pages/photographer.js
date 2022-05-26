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

const totalLikesPhotographer = document.querySelector(
  `#wish-count`
);

async function getDomLikes() {              
  const arrayLikes = [];
  const totalLikes = document.querySelectorAll('.likes-photographer')

  for (let index = 0; index < totalLikes.length; index++) {
    const element = totalLikes[index].textContent;

    const numberLike =  parseInt(element, 10)
      
    arrayLikes.push(numberLike)
 
    totalLikesPhotographer.textContent = arrayLikes.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  }
  
}


function like(id, likes) {


  const articlePhotographer = document.querySelector(
    `article[data-id="${id}"]`
  );
  const likesPhotographer = articlePhotographer.querySelector(
    `span.likes-photographer`
  );

  const heartPhotographer = articlePhotographer.querySelector(
    `i.heart-photographer`
  );


  if (likes == likesPhotographer.innerHTML) {



    likesPhotographer.textContent++;
    totalLikesPhotographer.textContent++ 
    heartPhotographer.classList.add("fas")
  } else {
    likesPhotographer.textContent--;
    totalLikesPhotographer.textContent--;
    heartPhotographer.classList.remove("fas")
  }
}



async function sortArticles(medias) {              
    
    const articlePhoto = document.querySelectorAll(".article-photographer")

    console.log(articlePhoto);

    // medias.forEach(media => {

    // });

}



async function displayDataMedia(medias) {                            
  // const mediaSection = document.querySelector("#main");
  const mediaSection = document.querySelector('.section-media')


  medias.forEach((media) => {

    if (idPhotographer == media.photographerId) {
    const photographerMedia = mediaFactory(media);
    const mediaCardDOM = photographerMedia.getMediaCardDOM(media.id);
     
    mediaSection.appendChild(mediaCardDOM);
      
    }
    
  })
}

async function init() {

  const { media, photographers } = await getData(); 

  displayDataMedia(media);
  displayDataPhotographer(photographers);
  getDomLikes();
  sortArticles(media);
}

init();
