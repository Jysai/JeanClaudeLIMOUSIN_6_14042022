function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  function getMediaCardDOM() {
    const section = document.createElement( 'section' );

   
      if (image) {
        section.innerHTML = `  
            
        <img src="assets/${photographerId}/${image}" class="picture-photographer" alt="cliché du photographe">
         
        <h2 class="">${title}</h2>    <span>${likes}</span>

            `;
      } else if (video) {
        section.innerHTML = `
            <video src="assets/${photographerId}/${video}" class="video-photographer" width=350  height=300 controls ></video>
            <h2 class="">${title}</h2>    <span>${likes}</span>`;
      }
       
    

   

    return section;
    

   

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
