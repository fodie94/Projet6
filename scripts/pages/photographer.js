//Mettre le code JavaScript lié à la page photographer.html
let arrayMediasLikes;
let arrayMedias = [];
let currentPictureIndex;
let currentLikes;
let nextCurrentLikes;
let newLikes;
let totalLikes;
let totalLikestest;
let likesElement;
let i;

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
   console.log(arrayMedias)


   const photographermain = document.querySelector(".photograph-main");
   const photographLikes = document.querySelector(".photograph-Likes");

   arrayMedias.forEach((media) => {
      const mediaGalery = mediaTemplate(media);
      // console.log(mediaGalery)
      currentLikes = mediaGalery.likes;
      console.log(currentLikes)
      totalLikes = arrayMedias.reduce((acc, item) => acc + item.likes, 0)
      photographLikes.innerText = totalLikes;

   });

   // totalLikes = currentLikes 
   // console.log(totalLikes)

   console.log(totalLikes)

   arrayMedias.forEach((media, index) => {

      const mediaGalery = mediaTemplate(media, index);

      if (media.hasOwnProperty("image")) {
         const userCardDOM = mediaGalery.getImage();
         photographermain.appendChild(userCardDOM);
      } else if (media.hasOwnProperty("video")) {
         const userCardDOM = mediaGalery.getVideo();
         photographermain.appendChild(userCardDOM);
      }
   });

}


function handleClickLikes(event, media) {

   media.likes = media.likes + 1

   const heartIcon = event.currentTarget

   const numberLikes = heartIcon.parentNode.querySelector('h3')

   numberLikes.innerText = media.likes

   const photographLikes = document.querySelector(".photograph-Likes");

   totalLikestest = arrayMedias.reduce((acc, item) => acc + item.likes, 0)
   console.log(totalLikestest)

   photographLikes.innerText = totalLikestest;
 

}


function showLightbox(id) { //2 -1 / +1
   currentPictureIndex = id;
   //   console.log(currentPictureIndex);
   // Récupérer la lightbox dans le DOM
   const lightboxDOM = document.getElementById('lightbox')
   const lightboxMediaDOM = document.getElementById('lightbox-picture')
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

   lightboxMediaDOM.setAttribute("src", imagePath)
  // lightboxMediaDOM.setAttribute("src", VideoPath)
   lightboxNameDOM.innerText= title;

   // if(id.hasOwnProperty("image")){
   //  // const lightboxDOM = document.createElement('img')
   //  // lightboxDOM.setAttribute("src", imagePath)
   //   lightboxMediaDOM.setAttribute("src", imagePath)
   //     //lightboxDOMlightboxMediaDOM.setAttribute(title)
   // }else if(id.hasOwnProperty("video")){
   //     const lightboxDOM = document.createElement('video')
   //     lightboxDOM.setAttribute("src", VideoPath)
   //     lightboxDOM.setAttribute('controls', true)
   //    // vdo.setAttribute('controls', true);
   // } 
   lightboxDOM.style.display = "grid";
   photographermain.style.display = "none";
}


// boutonPrevious surveille si clique dessus -> GoPrevious

const nextButton = document.getElementById('next');

function handleShowNext() {
   const lightboxMediaDOM = document.getElementById('lightbox-picture');
   // console.log(currentPictureIndex)
   currentPictureIndex += 1

   if (currentPictureIndex > arrayMedias.length - 1) {
      currentPictureIndex = 0
   }
   if (arrayMedias[currentPictureIndex].hasOwnProperty('image')) {
      const image = arrayMedias[currentPictureIndex].image
      const imagePath = `/assets/SamplePhotos/${image}`
      lightboxMediaDOM.setAttribute("src", imagePath)
   } else if (arrayMedias[currentPictureIndex].hasOwnProperty('video')) {
      const video = arrayMedias[currentPictureIndex].video
      const VideoPath = `/assets/SamplePhotos/${video}`
      lightboxMediaDOM.setAttribute("src", VideoPath)
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
   const lightboxMediaDOM = document.getElementById('lightbox-picture');
   //console.log(currentPictureIndex)
   currentPictureIndex -= 1

   if (currentPictureIndex < 0) {
      currentPictureIndex = arrayMedias.length
   }
   if (arrayMedias[currentPictureIndex].hasOwnProperty('image')) {
      const image = arrayMedias[currentPictureIndex].image
      const imagePath = `/assets/SamplePhotos/${image}`
      lightboxMediaDOM.setAttribute("src", imagePath)
   } else if (arrayMedias[currentPictureIndex].hasOwnProperty('video')) {
      const video = arrayMedias[currentPictureIndex].video
      const VideoPath = `/assets/SamplePhotos/${video}`
      lightboxMediaDOM.setAttribute("src", VideoPath)
   }

}

prevButton.addEventListener('click', handleShowPrev)

// boutonNext surveille si on clique dessus -> goNext


async function init() {
   const urlSearchParams = new URLSearchParams(window.location.search)
   const id = urlSearchParams.get("id")
   await getPhotographer(id)
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