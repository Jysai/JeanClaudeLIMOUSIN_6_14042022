function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  function getMediaCardDOM() {
    
    const article = document.createElement( 'article' );

      if (image) {
        article.innerHTML = `  
            
        <img src="assets/${photographerId}/${image}" class="picture-photographer" alt="cliché du photographe">
        <div class="information-photo-video">
        <span class="title-information-photo-video">${title}</span>    <span>${likes}<i class="fas fa-heart"></i></span></i>
        </div>

            `;
      } else if (video) {
        article.innerHTML = `
            <video src="assets/${photographerId}/${video}" class="video-photographer" width=350  height=300 controls ></video>
            <div class="information-photo-video">
            <span class="title-information-photo-video">${title}</span>    <span>${likes}<i class="fas fa-heart"></i></span></div>`;
      }

  

    return article;

  }


  return {
    id,
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    price,
    getMediaCardDOM,
  };
}
