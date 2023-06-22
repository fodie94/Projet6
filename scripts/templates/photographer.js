function photographerTemplate(data) {
    const { name, portrait, id, city, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement('a');
        link.href=`photographer.html?id=${id}`;
       
       const article = document.createElement( 'article' );
               const img = document.createElement( 'img' );
               img.setAttribute("src", picture);
               const h2 = document.createElement( 'h2' );
               h2.textContent = name;
               const h3 = document.createElement( 'h3' );
               h3.textContent = city;
               const h4 = document.createElement( 'h4' );
               h4.textContent = tagline;
               const h5 = document.createElement( 'h5' );
               h5.textContent = price;
               article.appendChild(img);
               article.appendChild(h2);
               article.appendChild(h3);
               article.appendChild(h4);
               article.appendChild(h5);
               link.appendChild(article);
               return (link);
                }

    function getHeaderPhotographer() {      
       
       const article2 = document.createElement( 'article' );
               const img = document.createElement( 'img' );
               img.setAttribute("src", picture);
               const h2 = document.createElement( 'h2' );
               h2.textContent = name;
               const h3 = document.createElement( 'h3' );
               h3.textContent = city;
               const h4 = document.createElement( 'h4' );
               h4.textContent = tagline;
               const h5 = document.createElement( 'h5' );
               h5.textContent = price;              
               article2.appendChild(img);
               article2.appendChild(h2);
               article2.appendChild(h3);
               article2.appendChild(h4);
               article2.appendChild(h5);
           
               
               return (article2);
    }
    return { name, picture, getUserCardDOM, getHeaderPhotographer }
}
