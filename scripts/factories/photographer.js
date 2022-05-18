

function photographerFactory(data) {
    const { name, city, price, id, country, tagline, portrait } = data;

    const picture = `assets/photographers/${portrait.replace(" ", "")}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
      
        article.innerHTML = `
        <a href="photographer.html?id=${id}">
        <div class="focus-photographer" aria-label="accéder au profil du photographe">
        <img src=${picture} class="profile-photographer" alt="photo de profile du photographe">
        <h2 class="">${name}</h2>
        </div>
        <a>
        <div class="informations-photographer">
        <span class="city-photographer">${city}, ${country} </span>
        <span class="tagline-photographer">${tagline}</span>
        <span class="price-photographer">${price}€/jour</span>
        </div>`
       
        
        return article;
    }

    function getMediaCardDOM() {
        const section = document.createElement( 'section' );

      
            section.innerHTML = `
            <div class="information-photographer">
            <span class="">${name}</span>
            <span class="">${city}, ${country}</span>
            <span class="">${tagline}</span>
            </div>
            <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            <img src=${picture} class="profile-photographer" alt="photo de profile du photographe">`
              
        


        section.classList.add("photographer-contact")

        
        return section
    }

    return { name, city, picture, id, price, country,tagline, getUserCardDOM, getMediaCardDOM}
}


