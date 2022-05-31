const imageLightBox = document.querySelector(".mediaLightBox");
const titleLightBox = document.querySelector(".title-picture-modal");

function closeLightBox() {
  document.body.classList.remove("stop-scrolling");
  modalLightBox.style.display = "none";
}
async function displayLightBox() {
  const articlesPhotographer = document.querySelectorAll(`article`);
  const rightBtn = document.getElementById("right-btn");
  const leftBtn = document.getElementById("left-btn");

  arrayTitle = [];
  arrayPictur = [];
  for (let index = 0; index < articlesPhotographer.length; index++) {
    const srcPicturesPhotographer = articlesPhotographer[index]
      .querySelector(".cliche-photographer")
      .getAttribute("src");
    const titlePicturePhotographer = articlesPhotographer[index].querySelector(
      ".title-information-photo-video"
    ).innerHTML;
    arrayPictur.push(srcPicturesPhotographer);
    arrayTitle.push(titlePicturePhotographer);

    const articleDataID = articlesPhotographer[index].getAttribute("data-id");

    const articlePhotographer = document.querySelector(
      `article[data-id="${articleDataID}"]`
    );

    const srcForModalLightBox = articlePhotographer
      .querySelector(`.cliche-photographer`)
      .getAttribute("src");

    const titleModalLightBox = articlesPhotographer[index].querySelector(
      ".title-information-photo-video"
    ).innerHTML;

    document
      .querySelector(`article[data-id="${articleDataID}"]`)
      .querySelector(`.cliche-photographer`).onclick = displayModalLightBox;
    function displayModalLightBox() {
      modalLightBox.style.display = "flex";

      let indexUrl = arrayPictur.findIndex(
        (image) => image === srcForModalLightBox
      );
      let indexTitle = arrayTitle.findIndex(
        (title) => title === titleModalLightBox
      );

      if (srcForModalLightBox.includes("jpg")) {
        imageLightBox.innerHTML = `<img src="${srcForModalLightBox}" class="media-photographer-lightbox" alt="cliché du photographe">`;
      } else {
        imageLightBox.innerHTML = `<video src="${srcForModalLightBox}" class="media-photographer-lightbox" alt="cliché du photographe" controls>`;
      }
      titleLightBox.innerHTML = `${titleModalLightBox}`;

      function slideRight() {
        if (indexUrl >= arrayPictur.length - 1) {
          indexUrl = 0;
          indexTitle = 0;

          if (arrayPictur[indexUrl].includes("mp4")) {
            imageLightBox.innerHTML = `<video src="${arrayPictur[indexUrl]}" class="media-photographer-lightbox" alt="cliché du photographe" controls>`;
          } else {
            imageLightBox.innerHTML = `<img src="${arrayPictur[indexUrl]}" class="media-photographer-lightbox" alt="cliché du photographe">`;
          }
          titleLightBox.innerHTML = `${arrayTitle[indexTitle]}`;

          return;
        }
        if (arrayPictur[indexUrl + 1].includes("mp4")) {
          imageLightBox.innerHTML = `<video src="${
            arrayPictur[indexUrl + 1]
          }" class="media-photographer-lightbox" alt="cliché du photographe" controls>`;
        } else {
          imageLightBox.innerHTML = `<img src="${
            arrayPictur[indexUrl + 1]
          }" class="media-photographer-lightbox" alt="cliché du photographe">`;
        }
        titleLightBox.innerHTML = `${arrayTitle[indexTitle + 1]}`;
        indexUrl++;
        indexTitle++;
      }

      function slideLeft() {
        if (indexUrl < 1) {
          indexUrl = arrayPictur.length - 1;
          indexTitle = arrayTitle.length - 1;
          if (arrayPictur[indexUrl].includes("mp4")) {
            imageLightBox.innerHTML = `<video src="${arrayPictur[indexUrl]}" class="media-photographer-lightbox" alt="cliché du photographe" controls>`;
          } else {
            imageLightBox.innerHTML = `<img src="${arrayPictur[indexUrl]}" class="media-photographer-lightbox" alt="cliché du photographe">`;
          }
          titleLightBox.innerHTML = `${arrayTitle[indexTitle]}`;
          return;
        }
        if (arrayPictur[indexUrl - 1].includes("mp4")) {
          imageLightBox.innerHTML = `<video src="${
            arrayPictur[indexUrl - 1]
          }" class="media-photographer-lightbox" alt="cliché du photographe" controls>`;
        } else {
          imageLightBox.innerHTML = `<img src="${
            arrayPictur[indexUrl - 1]
          }" class="media-photographer-lightbox" alt="cliché du photographe">`;
        }
        titleLightBox.innerHTML = `${arrayTitle[indexTitle - 1]}`;
        indexUrl--;
        indexTitle--;
      }
      document.body.classList.add("stop-scrolling");
      leftBtn.addEventListener("click", slideLeft);
      rightBtn.addEventListener("click", slideRight);
      document.addEventListener("keyup", function (e) {
        if (e.key === "ArrowLeft") {
          slideLeft();
        } else if (e.key === "ArrowRight") {
          slideRight();
        } else if (e.key === "Escape") {
          closeLightBox();
        }
      });
    }
  }
}
