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
               h2.classList.add('name-article')
               const h3 = document.createElement( 'h3' );
               h3.textContent = city;
               h3.classList.add('city-article')
               const h4 = document.createElement( 'h4' );
               h4.textContent = tagline;
               h4.classList.add('tagline-article')
               const h5 = document.createElement( 'h5' );
               h5.textContent = price;
               h5.classList.add('price-article')
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
       article2.classList.add('id-photo')
               const img = document.createElement( 'img' );
               img.setAttribute("src", picture);
               const content = document.createElement('div')
               content.classList.add('id-photo-content')
               const h2 = document.createElement( 'h2' );
               h2.textContent = name;
               const h3 = document.createElement( 'h3' );
               h3.textContent = city;
               const h4 = document.createElement( 'h4' );
               h4.textContent = tagline;
               const h5 = document.createElement( 'h5' );
               h5.textContent = price;              
               
               content.appendChild(h2);
               content.appendChild(h3);
               content.appendChild(h4);
               content.appendChild(h5);
               article2.appendChild(content);
               article2.appendChild(img);
           
               
               return (article2);
    }

    function getPrixPhotographer() {      
       
        const span = document.createElement( 'span' );
        span.classList.add('prixPhoto')
              
                const prix = document.createElement( 'prix' );
                prix.textContent = price;              
                
                span.appendChild(prix);
             
                return (span);
     }
    return { name, picture, getUserCardDOM, getHeaderPhotographer,getPrixPhotographer }
}
