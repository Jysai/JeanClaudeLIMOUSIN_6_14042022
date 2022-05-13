function photographerFactory(data) {
    const { name, city, price, tagline, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const cityPhotographer = document.createElement( 'span' );
        cityPhotographer.innerText = city;
        const taglinePhotographer = document.createElement( 'span' );
        taglinePhotographer.innerText = tagline;
        const pricePhotographer = document.createElement( 'span' );
        pricePhotographer.innerText = price;
 
        
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(cityPhotographer);
        article.appendChild(taglinePhotographer);
        article.appendChild(pricePhotographer);
        

        img.classList.add("picture-photographer")

        return (article);
    }
    return { name, city, picture, price, tagline, getUserCardDOM }
}