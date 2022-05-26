
  
function closeLightBox() {
  modalLightBox.style.display = "none";
}

function displayImageLightBox(id) {
  modalLightBox.style.display = "flex";
  const articlePhotographer = document.querySelector(
    `article[data-id="${id}"]`
  );

 
  const modalLightboxPhotographer = articlePhotographer
    .querySelector(`img`)
    .getAttribute("src");
  const imageLightBox = document.querySelector(".mediaLightBox")
  
  imageLightBox.innerHTML = `<img src="${modalLightboxPhotographer}" class="media-photographer-lightbox" alt="cliché du photographe">`

}



function displayVideoLightBox(id) {
  modalLightBox.style.display = "flex";
  const articlePhotographer = document.querySelector(
    `article[data-id="${id}"]`
  );
  const modalLightboxPhotographer = articlePhotographer
    .querySelector(`video`)
    .getAttribute("src");
   const videoLightBox = document.querySelector(".mediaLightBox")

   videoLightBox.innerHTML = `<video src="${modalLightboxPhotographer}" class="media-photographer-lightbox" alt="cliché du photographe" controls>`
}



