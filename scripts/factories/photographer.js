function photographerFactory(data) {
    const { name, city, price, id, country, tagline, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        // const img = document.createElement( 'img' );
        // img.setAttribute("src", picture)
        // const h2 = document.createElement( 'h2' );
        // h2.textContent = name;
      
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

        // article.appendChild(cityPhotographer);
        // article.appendChild(taglinePhotographer);
        // article.appendChild(infosPhotographer);
        
        
        return (article);
    }
    return { name, city, picture, id, price, country,tagline, getUserCardDOM }
}

