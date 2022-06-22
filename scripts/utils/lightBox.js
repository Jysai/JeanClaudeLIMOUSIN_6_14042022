const mediaLightBox = document.querySelector(".mediaLightBox");
const titleLightBox = document.querySelector(".title-picture-modal");
const modalLightBox = document.querySelector(".modalLightBox");

function closeLightBox() { // permet de fermet lighbox en cliquant sur la croix
  document.body.classList.remove("stop-scrolling");
  modalLightBox.style.display = "none";
}
async function displayLightBox() {
  const articlesPhotographer = document.querySelectorAll(`article`);
  const rightBtn = document.getElementById("right-btn");
  const leftBtn = document.getElementById("left-btn");
  
  const arrayTitle = [];
  const arrayPictur = [];

  articlesPhotographer.forEach((articlePhotographer) => {
    const srcPicturesPhotographer = articlePhotographer
      .querySelector(".cliche-photographer")
      .getAttribute("src");
    const titlePicturePhotographer = articlePhotographer.querySelector(
      ".title-information-photo-video"
    ).innerHTML;


    const articleDataID = articlePhotographer.getAttribute("data-id");

    const getArticlePhotographerWithId = document.querySelector(
      `article[data-id="${articleDataID}"]`
    );

    arrayPictur.push(srcPicturesPhotographer);
    arrayTitle.push(titlePicturePhotographer);

    const input =
    getArticlePhotographerWithId.querySelector(`.cliche-photographer`);
    input.addEventListener("keypress", function (event) { // Permet d'ouvrir la lightbox avec la touche entrée du clavier
      if (event.key === "Enter") {
        displayModalLightBox();
      }
    });

    getArticlePhotographerWithId
      .querySelector(`.cliche-photographer`)
      .addEventListener("click", displayModalLightBox);

    function displayModalLightBox() { // Permet d'ouvrir la lightbox quand on clique sur l'image 
      modalLightBox.style.display = "flex";
     
      let indexUrl = arrayPictur.findIndex(
        (image) => image === srcPicturesPhotographer
      );

      let indexTitle = arrayTitle.findIndex(
        (title) => title === titlePicturePhotographer
      );

      if (srcPicturesPhotographer.includes("jpg")) {
        mediaLightBox.innerHTML = `<img src="${srcPicturesPhotographer}" class="media-photographer-lightbox" alt="${titlePicturePhotographer}">`;
      } else {
        console.log(srcPicturesPhotographer);
        mediaLightBox.innerHTML = `<video src="${srcPicturesPhotographer}" class="media-photographer-lightbox" alt="${titlePicturePhotographer}" controls>`;
      }
      titleLightBox.innerHTML = `${titlePicturePhotographer}`;

      function slideRight() { // Permet de changer d'image quand on clique sur la fléche droite
        if (indexUrl >= arrayPictur.length - 1) {
          indexUrl = 0;
          indexTitle = 0;

          if (arrayPictur[indexUrl].includes("mp4")) {
            mediaLightBox.innerHTML = `<video src="${arrayPictur[indexUrl]}" class="media-photographer-lightbox" alt="${arrayTitle[indexTitle]}" controls>`;
          } else {
            mediaLightBox.innerHTML = `<img src="${arrayPictur[indexUrl]}" class="media-photographer-lightbox" alt="${arrayTitle[indexTitle]}">`;
          }
          titleLightBox.innerHTML = `${arrayTitle[indexTitle]}`;

          return;
        }
        if (arrayPictur[indexUrl + 1].includes("mp4")) {
          mediaLightBox.innerHTML = `<video src="${
            arrayPictur[indexUrl + 1]
          }" class="media-photographer-lightbox"  alt="${
            arrayTitle[indexTitle + 1]
          }" controls>`;
        } else {
          mediaLightBox.innerHTML = `<img src="${
            arrayPictur[indexUrl + 1]
          }" class="media-photographer-lightbox"  alt="${
            arrayTitle[indexTitle + 1]
          }">`;
        }
        titleLightBox.innerHTML = `${arrayTitle[indexTitle + 1]}`;

        indexUrl++;
        indexTitle++;
      }

      function slideLeft() { // Permet de changer d'image quand on clique sur la fléche gauche
        if (indexUrl < 1) {
          indexUrl = arrayPictur.length - 1;
          indexTitle = arrayTitle.length - 1;
          if (arrayPictur[indexUrl].includes("mp4")) {
            mediaLightBox.innerHTML = `<video src="${arrayPictur[indexUrl]}" class="media-photographer-lightbox" alt="${arrayTitle[indexTitle]}" controls>`;
          } else {
            mediaLightBox.innerHTML = `<img src="${arrayPictur[indexUrl]}" class="media-photographer-lightbox" alt="${arrayTitle[indexTitle]}">`;
          }
          titleLightBox.innerHTML = `${arrayTitle[indexTitle]}`;
          return;
        }
        if (arrayPictur[indexUrl - 1].includes("mp4")) {
          mediaLightBox.innerHTML = `<video src="${
            arrayPictur[indexUrl - 1]
          }" class="media-photographer-lightbox" alt="${
            arrayTitle[indexTitle - 1]
          }" controls>`;
        } else {
          mediaLightBox.innerHTML = `<img src="${
            arrayPictur[indexUrl - 1]
          }" class="media-photographer-lightbox" alt="${
            arrayTitle[indexTitle - 1]
          }">`;
        }
        titleLightBox.innerHTML = `${arrayTitle[indexTitle - 1]}`;
        indexUrl--;
        indexTitle--;
      }
      document.body.classList.add("stop-scrolling");
      leftBtn.addEventListener("click", slideLeft);
      rightBtn.addEventListener("click", slideRight);
      document.addEventListener("keyup", function (e) {
        if (e.key === "ArrowLeft") { // Permet de changer d'image avec la fleche gauche du clavier
          slideLeft();
        } else if (e.key === "ArrowRight") { // Permet de changer d'image avec la fleche droite du clavier
          slideRight();
        } else if (e.key === "Escape") { // Permet de fermer la lightbox avec la touche echap
          closeLightBox();
        }
      });
    }
  });
}
displayLightBox();
