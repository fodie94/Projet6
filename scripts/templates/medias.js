function mediaTemplate(data, index) {
    const { title,likes,image,video} = data

    const picture = `assets/SamplePhotos/${image}`
     
    function getImage() {
        const article = document.createElement( 'article' )
        article.setAttribute('data-index',index)     
    
        const img = document.createElement( 'img' )
        img.setAttribute("src", picture)
        const bas_article = document.createElement( 'div' )
        const name_article = document.createElement( 'div' )
        const h2 = document.createElement( 'h2' )
        h2.textContent = title
        
        const h3 = document.createElement( 'h3' )
        h3.textContent = likes  
        
        const svg_article = document.createElement( 'div' )
        const i = document.createElement( 'i' )
        i.classList.add('fa-regular','fa-heart')
        
       // Element.classList.add('')

        article.appendChild(img)
        name_article.appendChild(h2)
        svg_article.appendChild(h3)
        svg_article.appendChild(i)
        bas_article.appendChild(name_article)
        bas_article.appendChild(svg_article)
        article.appendChild(bas_article)

       
        img.addEventListener('click', (elem) => showLightbox(index))
        i.addEventListener('click', (elem) => handleClickLikes())
        return (article)
    }   
   
    function getVideo(){
     const pathVideo = `assets/SamplePhotos/${video}`
     
    const article2 = document.createElement( 'article' )
    article2.setAttribute('data-index',index)
    const vdo = document.createElement( 'video' )
    vdo.setAttribute("src", pathVideo)
    const bas_article = document.createElement( 'div' )
    const h2 = document.createElement( 'h2' )
    h2.textContent = title
    const h3 = document.createElement( 'h3' )
    h3.textContent = likes  
    article2.appendChild(vdo)
    bas_article.appendChild(h2)
    bas_article.appendChild(h3)
    article2.appendChild(bas_article)
    vdo.addEventListener('click', (elem) => showLightbox(index))

    return (article2)
    }



    return {likes,title,picture,getImage,getVideo}
}