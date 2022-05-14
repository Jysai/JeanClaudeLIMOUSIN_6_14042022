function mediaFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;


    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        let urlParams = new URLSearchParams(location.search);
        let idPhotographer = urlParams.get("id");
        // console.log(`l'id du photograph est ${idPhotographer} `);

        if (idPhotographer == photographerId) {
            article.innerHTML = `
           
            <img src="" class="picture-photographer" alt="cliché du photographe">
         
            <h2 class="">${title}</h2>    <span>${likes}</span>
          
           
     
           
          
            `
        } else {
            
        }
        



        
        
        return (article);
    }
    return { id, photographerId, title, image, price, likes,date,price, getMediaCardDOM }

 
}
