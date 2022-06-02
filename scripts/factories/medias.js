function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  function getMediaCardDOM() {
    const article = document.createElement("article");
    article.setAttribute("data-id", `${id}`);
    article.classList.add("article-photographer");

    if (image) {
      article.innerHTML = `  
        
        <img src="assets/${photographerId}/${image}" class="cliche-photographer" alt="${title}, closeup view">
        <div class="information-photo-video">
        <span class="title-information-photo-video">${title}</span>    <div><span class="likes-photographer" aria-label="likes">${likes}</span><i onclick=like(${id},${likes}) class="far fa-heart heart-photographer"></i></div></div>
        </div>
        
            `;
    } else if (video) {
      article.innerHTML = `
            <video src="assets/${photographerId}/${video}" class="cliche-photographer" width=350  height=300  alt="${title}, closeup view"></video>
            <div class="information-photo-video">
            <span class="title-information-photo-video">${title}</span>    <div><span class="likes-photographer" aria-label="likes">${likes}</span><i onclick=like(${id},${likes}) class="far fa-heart heart-photographer"></i></div></div>`;
    }

    return article;
  }

  return {
    getMediaCardDOM,
  };
}
