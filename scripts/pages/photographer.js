//Mettre le code JavaScript lié à la page photographer.html
let arrayMediasLikes;
let arrayMedias = [];
let arrayMedias2 = [];
let mediaGalery ;
let currentPictureIndex;
let currentLikes= [];
let nextCurrentLikes;  

let newLikes;
let totalLikes;
let totalLikestest;
let likesElement;
let piecesOrdonnees;
let Name;

async function getJSON() {
   const res = await fetch('./data/photographers.json')
   const resData = await res.json()
   return resData
}

async function getPhotographer(id) {
   id = parseInt(id)
   const {
      photographers
   } = await getJSON()
   const photographer = photographers.find(data => data.id === id)
   //console.log(photographer)


   const photographerHeader = document.querySelector(".photograph-header");

   const mediaGalery = photographerTemplate(photographer);
   const headerPhotographer = mediaGalery.getHeaderPhotographer();
   photographerHeader.appendChild(headerPhotographer);

}


async function getPhotographer2(id) {
   id = parseInt(id)
   const {
      photographers
   } = await getJSON()
   const photographer = photographers.find(data => data.id === id)
   //console.log(photographer)


   const photographerHeader = document.querySelector(".photograph-header");

   const mediaGalery = photographerTemplate(photographer);
   const headerPhotographer2 = mediaGalery.getHeaderPhotographer2();
   photographerHeader.appendChild(headerPhotographer2);

}


async function getPrixPhotographers(id) {
    id = parseInt(id)
    const {
       photographers
    } = await getJSON()
    const photographer = photographers.find(data => data.id === id)
    //console.log(photographer)
 
 
    const photographerHeader = document.querySelector(".photograph-Likes");
 
    const mediaGalery = photographerTemplate(photographer);
    const headerPhotographer = mediaGalery.getPrixPhotographer();
    photographerHeader.appendChild(headerPhotographer);

 }
async function getMediasPhotographer(id) {

   id = parseInt(id)
   const {
      media
   } = await getJSON()
   // console.log(media)
   arrayMedias = media.filter(data => data.photographerId === id)
   //console.log(arrayMedias)


   const photographermain = document.querySelector(".photograph-main");
   const photographLikes = document.querySelector(".photograph-Likes");

   arrayMedias.forEach((media) => {
      const mediaGalery = mediaTemplate(media);
      currentLikes = mediaGalery.likes
      Name = mediaGalery.title;
      console.log(currentLikes)
      console.log(Name)
   
      totalLikes = arrayMedias.reduce((acc, item) => acc + item.likes, 0)
      photographLikes.innerText = totalLikes;
     
   });
   console.log(totalLikes) 

   // const select = document.getElementById("my-select");
   // select.addEventListener("change", function() {
   //   const selectedOption = this.options[this.selectedIndex];
   //   console.log(selectedOption.value);
   // });
 
//   const boutontPopularite = document.querySelector(".btn-trier1")
//   boutontPopularite.addEventListener("click", function(){
//    photographermain.innerHTML=""
// const trier = arrayMedias.sort((a, b) => a.likes > b.likes ? 1 : -1)
// photographermain.append(trier)
//   console.log(trier)
//   })
       
//   const boutontDate = document.querySelector(".btn-trier2")
//   boutontDate.addEventListener("click", function(){
//    photographermain.innerHTML=""
//  const trier = arrayMedias.sort((a, b) => a.date > b.date ? 1 : -1)
//  photographermain.append(trier)
//   console.log(trier)
//   })
      
//   const boutontTitre = document.querySelector(".btn-trier3")
//   boutontTitre.addEventListener("click", function(){
//    photographermain.innerHTML=""
//   const trier =  arrayMedias.sort((a, b) => a.title > b.title ? 1 : -1)
//   photographermain.append(trier)
//   console.log(trier)
//   })


   
// const triSelect = document.getElementById("tri-select");
// triSelect.addEventListener("change", function() {
//   const value = triSelect.value;

//   if (value === "popularite") {
//     photographermain.innerHTML = "";
//     const trier = arrayMedias.sort((a, b) => a.likes > b.likes ? 1 : -1);
//     photographermain.append(trier);
//     console.log(trier);
//   } else if (value === "date") {
//     photographermain.innerHTML = "";
//     const trier = arrayMedias.sort((a, b) => a.date > b.date ? 1 : -1);
//     photographermain.append(trier);
//     console.log(trier);
//   } else if (value === "titre") {
//     photographermain.innerHTML = "";
//     const trier =  arrayMedias.sort((a, b) => a.title > b.title ? 1 : -1);
//     photographermain.append(trier);
//     console.log(trier);
//   }
// });



arrayMedias.forEach((media, index) => {

   const mediaGalery = mediaTemplate(media, index);
   if (media.hasOwnProperty("image")) {
      const userCardDOM = mediaGalery.getImage();
      photographermain.appendChild(userCardDOM);
   } else 
   if (media.hasOwnProperty("video")) {
      const userCardDOM = mediaGalery.getVideo();
      photographermain.appendChild(userCardDOM);
   }
});

}


const triSelect = document.getElementById("tri-select");
triSelect.addEventListener("change", function() {
  const value = triSelect.value;

  let trier;
  if (value === "popularite") {
    trier = arrayMedias.sort((a, b) => a.likes > b.likes ? -1 : 1);
  } else if (value === "date") {
    trier = arrayMedias.sort((a, b) => a.date > b.date ? -1 : 1);
  } else if (value === "titre") {
    trier = arrayMedias.sort((a, b) => a.title > b.title ? 1 : -1);
  }

  const photographermain = document.querySelector(".photograph-main");
  photographermain.innerHTML = "";
  trier.forEach((media, index) => {
  
    const mediaGalery = mediaTemplate(media, index);
    if (media.hasOwnProperty("image")) {
      const userCardDOM = mediaGalery.getImage();
      photographermain.appendChild(userCardDOM);
    } else if (media.hasOwnProperty("video")) {
      const userCardDOM = mediaGalery.getVideo();
      photographermain.appendChild(userCardDOM);
    }
  });
});



   // arrayMedias.forEach((media,index) => {

   //    const mediaGalery = mediaTemplate(media, index);
   //    Name = mediaGalery.title;
   //  //  console.log(Name)
   // });
  



function handleClickLikes(event, media) {
   // Vérifier si l'image a déjà été aimée
   if (media.isLiked) {
      return; // Sortir de la fonction si l'image a déjà été aimée
   }

// Augmenter le nombre de likes et mettre isLiked à true
   media.likes = media.likes + 1;
   media.isLiked = true;

// Mise à jour de l'interface utilisateur
   const heartIcon = event.currentTarget;
   const numberLikes = heartIcon.parentNode.querySelector('h3');
   numberLikes.innerText = media.likes;

const photographLikes = document.querySelector(".photograph-Likes");
   totalLikestest = arrayMedias.reduce((acc, item) => acc + item.likes, 0);
   photographLikes.innerText = totalLikestest;
}


function showLightbox(id) { //2 -1 / +1
   currentPictureIndex = id;
   //   console.log(currentPictureIndex);
   // Récupérer la lightbox dans le DOM
   const lightboxDOM = document.getElementById('lightbox')
   const lightboxContent = document.getElementById('lightbox-content')
   const lightboxNameDOM = document.getElementById('lightbox-title')

   // Récupérer l'image dans la lightbox

   const photographermain = document.querySelector(".photograph-main");

   // Reconstituer le chemin vers l'image à partir du JSON
   const image = arrayMedias[id].image
   const imagePath = `/assets/SamplePhotos/${image}` // '/assets/SamplePhotos/Fashion_Yellow_Beach.jpg'

   const title = arrayMedias[id].title
   console.log(title)
   // const titlePath = `/media/${title}` 

   // Reconstituer le chemin vers l'image à partir du JSON
   const video = arrayMedias[id].video
   const VideoPath = `/assets/SamplePhotos/${video}`

//  lightboxMediaDOM.setAttribute("src", imagePath)
 // lightboxMediaDOM.setAttribute("src", VideoPath)
  //lightboxNameDOM.innerText= title;
lightboxContent.innerHTML=""
   if(arrayMedias[id].hasOwnProperty("image")){
     const lightboxImage = document.createElement('img')
     lightboxImage.setAttribute("src", imagePath)     
     lightboxContent.prepend(lightboxImage)  
     lightboxNameDOM.innerText= title;
   }
   else if(arrayMedias[id].hasOwnProperty("video")){
       const lightboxVideo = document.createElement('video')
       lightboxVideo.setAttribute("src", VideoPath)
       lightboxVideo.setAttribute('controls', true)
       lightboxContent.prepend(lightboxVideo)
       lightboxNameDOM.innerText= title;     
   } 
   console.log(id)
   lightboxDOM.style.display = "flex";
   photographermain.style.display = "none";
}


// boutonPrevious surveille si clique dessus -> GoPrevious

const nextButton = document.getElementById('next');

function handleShowNext() {
  
   const lightboxContent = document.getElementById('lightbox-content')
   const lightboxNameDOM = document.getElementById('lightbox-title');
   // console.log(currentPictureIndex)
   lightboxContent.innerHTML=""
   currentPictureIndex += 1

   if (currentPictureIndex > arrayMedias.length - 1) {
      currentPictureIndex = 0
   }
   if (arrayMedias[currentPictureIndex].hasOwnProperty('image')) {
      const image = arrayMedias[currentPictureIndex].image
      const imagePath = `/assets/SamplePhotos/${image}`
      const lightboxImage = document.createElement('img')
      lightboxImage.setAttribute("src", imagePath)     
      lightboxContent.prepend(lightboxImage)  
      const title = arrayMedias[currentPictureIndex].title
      lightboxNameDOM.innerText= title;
      console.log(title)
     // lightboxNameDOM.innerText= title;
   } else if (arrayMedias[currentPictureIndex].hasOwnProperty('video')) {
      const video = arrayMedias[currentPictureIndex].video
      const VideoPath = `/assets/SamplePhotos/${video}`
      const lightboxVideo = document.createElement('video')
       lightboxVideo.setAttribute("src", VideoPath)
       lightboxVideo.setAttribute('controls', true)
       lightboxContent.prepend(lightboxVideo)
      const title = arrayMedias[currentPictureIndex].title
      lightboxNameDOM.innerText= title;
   }

   /*
   try {
       const nextPicture = arrayMedias[currentPictureIndex].image
   } catch {
       const nextPicutre = arrayMedias[0].image
   }
   */
}

nextButton.addEventListener('click', handleShowNext)

const prevButton = document.getElementById('previous');

function handleShowPrev() {
   const lightboxContent = document.getElementById('lightbox-content')
   const lightboxNameDOM = document.getElementById('lightbox-title');
   //console.log(currentPictureIndex)
   lightboxContent.innerHTML=""
   currentPictureIndex -= 1

   if (currentPictureIndex < 0) {
      currentPictureIndex = arrayMedias.length - 1
   }
   if (arrayMedias[currentPictureIndex].hasOwnProperty('image')) {
      const image = arrayMedias[currentPictureIndex].image
      const imagePath = `/assets/SamplePhotos/${image}`
      const lightboxImage = document.createElement('img')
      lightboxImage.setAttribute("src", imagePath)     
      lightboxContent.prepend(lightboxImage)  
      const title = arrayMedias[currentPictureIndex].title
      lightboxNameDOM.innerText= title;

   } else if (arrayMedias[currentPictureIndex].hasOwnProperty('video')) {
      const video = arrayMedias[currentPictureIndex].video
      const VideoPath = `/assets/SamplePhotos/${video}`
      const lightboxVideo = document.createElement('video')
       lightboxVideo.setAttribute("src", VideoPath)
       lightboxVideo.setAttribute('controls', true)
       lightboxContent.prepend(lightboxVideo)
      const title = arrayMedias[currentPictureIndex].title
      lightboxNameDOM.innerText= title;
   }

}

prevButton.addEventListener('click', handleShowPrev)

// boutonNext surveille si on clique dessus -> goNext


async function init() {
   const urlSearchParams = new URLSearchParams(window.location.search)
   const id = urlSearchParams.get("id")
   await getPhotographer(id)
   await getPhotographer2(id)
   await getMediasPhotographer(id)
   await getPrixPhotographers(id)

   //console.log(getMediasPhotographer)

}
init()


// formulaire

const modalbg = document.querySelector(".modal");

function displayModal() {
   modalbg.style.display = "block";
}

const Prenom = document.getElementById("Prenom");
const Nom = document.getElementById("Nom");
const email = document.getElementById("email");


const PrenomNameError = document.getElementById("PrenomNameError");
const NomNameError = document.getElementById("NomNameError");
const emailError = document.getElementById("emailError");
let error = false;


document.getElementById("formulaire").addEventListener("submit", function (e) {
   let error = false;
   e.preventDefault();

   //check nom//
   if (!Nom.value) {
      NomNameError.innerText = "Veuillez renseigner votre nom";
      NomNameError.classList.remove('hidden');
      error = true;
   } else if (Nom.value.length < 2) {
      NomNameError.innerText = "Votre nom doit contenir au moins 2 caractères";
      NomNameError.classList.remove('hidden');
      error = true;
   } else {
      NomNameError.classList.add('hidden');
   }

   //check prenom//
   if (!Prenom.value) {
      PrenomNameError.innerText = "Veuillez renseigner votre prenom";
      PrenomNameError.classList.remove('hidden');
      error = true;
   } else if (Prenom.value.length < 2) {
      PrenomNameError.innerText = "Votre prenom doit contenir au moins 2 caractères";
      PrenomNameError.classList.remove('hidden');
      error = true;
   } else {
      PrenomNameError.classList.add('hidden');
   }

   //check email//
   const mailFormat =
      new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/);
   if (!email.value) {
      emailError.innerText = "Veuillez renseigner votre email";
      emailError.classList.remove('hidden');
      error = true;
   } else if (!email.value.match(mailFormat)) {
      emailError.innerText = "Veuillez saisir une adresse email valide.";
      emailError.classList.remove('hidden');
      error = true;
   } else {
      emailError.classList.add('hidden');
   }
   if (!error) {
      modalbg.style.display = "none";
   }
});