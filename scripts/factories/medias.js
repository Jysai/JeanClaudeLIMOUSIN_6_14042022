// eslint-disable-next-line no-unused-vars
function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes } = data;

  function getMediaCardDOM() { // fonction qui permet d'afficher les photos ou vidéos, le titre et le nombre de like pour chaque média sur la page du photographe
    const article = document.createElement("article");
    article.setAttribute("data-id", `${id}`);
    article.classList.add("article-photographer");

    if (image) {
      article.innerHTML = `  
        
        <img src="assets/${photographerId}/${image}" class="cliche-photographer" alt="${title}, closeup view" tabindex="0">
        
        <div class="information-photo-video">
        <span class="title-information-photo-video">${title}</span>    <div><span class="likes-photographer" aria-label="likes">${likes}</span><i onclick=like(${id},${likes}) class="fas fa-heart heart-photographer"></i></div></div>
        </div>
        
            `;
    } else if (video) {
      article.innerHTML = `
            <video src="assets/${photographerId}/${video}" class="cliche-photographer" width=350  height=300  alt="${title}, closeup view" tabindex="0"></video>
            <div class="information-photo-video">
            <span class="title-information-photo-video">${title}</span>    <div><span class="likes-photographer" aria-label="likes">${likes}</span><i onclick=like(${id},${likes}) class="fas fa-heart heart-photographer"></i></div></div>`;
    }

    return article;
  }

  return {
    getMediaCardDOM,
  };
}
