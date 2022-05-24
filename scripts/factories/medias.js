function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  function getMediaCardDOM() {
    
    const article = document.createElement( 'article' );
    article.setAttribute("data-id", `${id}`)
    
    
  
      if (image) {
        article.innerHTML = `  
            
        <img onclick=displayImageLightBox(${id}) src="assets/${photographerId}/${image}" class="picture-photographer" alt="cliché du photographe">
        <div class="information-photo-video">
        <span class="title-information-photo-video">${title}</span>    <div><span class="likes-photographer">${likes}</span><i onclick=like(${id},${likes}) class="fas fa-heart"></i></div></div>
        </div>

            `
            
      } else if (video) {
        article.innerHTML = `
            <video onclick=displayVideoLightBox(${id}) src="assets/${photographerId}/${video}" class="video-photographer" width=350  height=300  ></video>
            <div class="information-photo-video">
            <span class="title-information-photo-video">${title}</span>    <div><span class="likes-photographer">${likes}</span><i onclick=like(${id},${likes}) class="fas fa-heart"></i></div></div>`;
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



