let urlParams = new URLSearchParams(location.search);
let idPhotographer = urlParams.get("id");

function photographerFactory(data) {
    const { name, city, price, id, country, tagline, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
      
        article.innerHTML = `
        <a href="photographer.html?id=${id}">
        <div class="focus-photographer" aria-label="accéder au profil du photographe">
        <img src=${picture} class="picture-photographer" alt="photo de profile du photographe">
        <h2 class="">${name}</h2>
        </div>
        <a>
        <div class="informations-photographer">
        <span class="city-photographer">${city}, ${country} </span>
        <span class="tagline-photographer">${tagline}</span>
        <span class="price-photographer">${price}€/jour</span>
        </div>`
       
        
        return (article);
    }

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );

        if (idPhotographer == id) {
            
              console.log(name);
        }


        article.innerHTML = ``

        
        return (article);
    }

    return { name, city, picture, id, price, country,tagline, getUserCardDOM, getMediaCardDOM}
}

function mediaFactory(data) {
    const { id, photographerId, title, image, likes, date, price } = data;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );

        if (idPhotographer == photographerId) {
            article.innerHTML = `  
            <h2 class="">${title}</h2> 
            
            <img src="" class="picture-photographer" alt="cliché du photographe">
         
            <h2 class="">${title}</h2>    <span>${likes}</span>




            `
        }
        return (article);
    }



    return { id, photographerId, title, image, price, likes,date,price, getMediaCardDOM}
}


