import mediaTemplate from "../templates/medias.js";
import {
	photographerTemplate
} from "../templates/photographer.js";


let arrayMedias = [];
let currentPictureIndex;
let currentLikes = [];
let totalLikes;
let totalLikestest;



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
    
	const photographerHeader = document.querySelector(".photograph-header");
	console.log(photographer)
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

	const photographerHeader = document.querySelector(".photograph-Likes");

	const mediaGalery = photographerTemplate(photographer);
	const headerPhotographer = mediaGalery.getPrixPhotographer();
	photographerHeader.appendChild(headerPhotographer);

}

async function getNameModal(id) {
	id = parseInt(id)
	const {
		photographers
	} = await getJSON()
	const photographer = photographers.find(data => data.id === id)
	//console.log(photographer)

	const modalName = document.querySelector(".modal-name");

	const mediaGalery = photographerTemplate(photographer);
	const headerPhotographer = mediaGalery.name;
	modalName.textContent = headerPhotographer;

}

async function getMediasPhotographer(id) {

	id = parseInt(id)
	const {
		media
	} = await getJSON()
	
	arrayMedias = media.filter(data => data.photographerId === id)

	const photographermain = document.querySelector(".photograph-main");
	const photographLikes = document.querySelector(".photograph-Likes");

	arrayMedias.forEach((media) => {
		const mediaGalery = mediaTemplate(media);
		currentLikes = mediaGalery.likes
		console.log(currentLikes)
		
		totalLikes = arrayMedias.reduce((acc, item) => acc + item.likes, 0)

	});

	const heartTotalLikesDiv = document.createElement("div");
	heartTotalLikesDiv.classList.add('heartTotalLikesDiv')

	const totalLikesDiv = document.createElement("div");
	totalLikesDiv.innerText = totalLikes;

	const heartDiv = document.createElement("div");
	heartDiv.innerHTML = "♥";

	heartTotalLikesDiv.appendChild(totalLikesDiv);
	heartTotalLikesDiv.appendChild(heartDiv);
	photographLikes.appendChild(heartTotalLikesDiv)
	console.log(totalLikes)

	arrayMedias.forEach((media, index) => {

		const mediaGalery = mediaTemplate(media, index);
		if (Object.prototype.hasOwnProperty.call(media, "image")) {
			const userCardDOM = mediaGalery.getImage();
			photographermain.appendChild(userCardDOM);
		} else
		if (Object.prototype.hasOwnProperty.call(media, "video")) {
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
		if (Object.prototype.hasOwnProperty.call(media, "image")) {
			const userCardDOM = mediaGalery.getImage();
			photographermain.appendChild(userCardDOM);
		} else if (Object.prototype.hasOwnProperty.call(media, "video")) {
			const userCardDOM = mediaGalery.getVideo();
			photographermain.appendChild(userCardDOM);
		}
	});
});

export async function handleClickLikes(event, media) {
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
	// photographLikes.innerText = totalLikestest;

	const urlSearchParams = new URLSearchParams(window.location.search)
	const id = urlSearchParams.get("id")

	getPrixPhotographers(id)

	const heartTotalLikesDiv = document.createElement("div");
	heartTotalLikesDiv.classList.add('heartTotalLikesDiv')
	heartTotalLikesDiv.innerHTML = `${totalLikestest} <span class="heart">♥</span>`;
	photographLikes.innerHTML = ""

	photographLikes.appendChild(heartTotalLikesDiv)

}

export async function showLightbox(id) { //2 -1 / +1
	currentPictureIndex = id;

	// Récupérer la lightbox dans le DOM
	const lightboxDOM = document.getElementById('lightbox')
	const lightboxContent = document.getElementById('lightbox-content')
	const lightboxNameDOM = document.getElementById('lightbox-title')

	// Récupérer l'image dans la lightbox

	const photographermain = document.querySelector(".photograph-main");

	// Reconstituer le chemin vers l'image à partir du JSON
	
	const image = arrayMedias[id].image
	console.log(id)
	const imagePath = `/assets/SamplePhotos/${image}` // '/assets/SamplePhotos/Fashion_Yellow_Beach.jpg'

	const title = arrayMedias[id].title
	console.log(title)

	// Reconstituer le chemin vers l'image à partir du JSON
	const video = arrayMedias[id].video
	const VideoPath = `/assets/SamplePhotos/${video}`
	lightboxContent.innerHTML = ""

	if ( arrayMedias[id].hasOwnProperty("image")) {
		const lightboxImage = document.createElement('img')
		lightboxImage.setAttribute("src", imagePath)
		lightboxImage.setAttribute("alt", title)
		lightboxContent.appendChild(lightboxImage)
		lightboxNameDOM.innerText = title;
	} else if (arrayMedias[id].hasOwnProperty("video")) {
		const lightboxVideo = document.createElement('video')
		lightboxVideo.setAttribute("src", VideoPath)
		lightboxVideo.setAttribute('controls', true)
		lightboxVideo.setAttribute("alt", title)
		lightboxContent.appendChild(lightboxVideo)
		lightboxNameDOM.innerText = title;
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
	console.log(currentPictureIndex)
	console.log(arrayMedias.length)
	lightboxContent.innerHTML = ""
	currentPictureIndex += 1

	if (currentPictureIndex > arrayMedias.length - 1) {
		currentPictureIndex = 0
	}
	if (arrayMedias[currentPictureIndex].hasOwnProperty('image')) {
		const image = arrayMedias[currentPictureIndex].image
		const title = arrayMedias[currentPictureIndex].title
		const imagePath = `/assets/SamplePhotos/${image}`
		const lightboxImage = document.createElement('img')
		lightboxImage.setAttribute("src", imagePath)
		lightboxImage.setAttribute("alt", title)
		lightboxContent.appendChild(lightboxImage)
		//  const title = arrayMedias[currentPictureIndex].title
		lightboxNameDOM.innerText = title;
		console.log(title)
		// lightboxNameDOM.innerText= title;
	} else if (arrayMedias[currentPictureIndex].hasOwnProperty('video')) {
		const video = arrayMedias[currentPictureIndex].video
		const title = arrayMedias[currentPictureIndex].title
		const VideoPath = `/assets/SamplePhotos/${video}`
		const lightboxVideo = document.createElement('video')
		lightboxVideo.setAttribute("src", VideoPath)
		lightboxVideo.setAttribute("alt", title)
		lightboxVideo.setAttribute('controls', true)
		lightboxContent.appendChild(lightboxVideo)
		// const title = arrayMedias[currentPictureIndex].title
		lightboxNameDOM.innerText = title;
	}
}
nextButton.addEventListener('click', handleShowNext)

const prevButton = document.getElementById('previous');

function handleShowPrev() {
	const lightboxContent = document.getElementById('lightbox-content')
	const lightboxNameDOM = document.getElementById('lightbox-title');
	//console.log(currentPictureIndex)
	lightboxContent.innerHTML = ""
	currentPictureIndex -= 1

	if (currentPictureIndex < 0) {
		currentPictureIndex = arrayMedias.length - 1
	}
	if (arrayMedias[currentPictureIndex].hasOwnProperty('image')) {
		const image = arrayMedias[currentPictureIndex].image
		const title = arrayMedias[currentPictureIndex].title
		const imagePath = `/assets/SamplePhotos/${image}`
		const lightboxImage = document.createElement('img')
		lightboxImage.setAttribute("src", imagePath)
		lightboxImage.setAttribute("alt", title)
		lightboxContent.prepend(lightboxImage)
		//const title = arrayMedias[currentPictureIndex].title
		lightboxNameDOM.innerText = title;

	} else if (arrayMedias[currentPictureIndex].hasOwnProperty('video')) {
		const video = arrayMedias[currentPictureIndex].video
		const title = arrayMedias[currentPictureIndex].title
		const VideoPath = `/assets/SamplePhotos/${video}`
		const lightboxVideo = document.createElement('video')
		lightboxVideo.setAttribute("src", VideoPath)
		lightboxVideo.setAttribute("alt", title)
		lightboxVideo.setAttribute('controls', true)
		lightboxContent.appendChild(lightboxVideo)

		lightboxNameDOM.innerText = title;
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
	await getNameModal(id)
}
init()



// formulaire

const modalbg = document.querySelector("#contact_modal");

const Prenom = document.getElementById("Prenom");
	const Nom = document.getElementById("Nom");
	const email = document.getElementById("email");
	const message = document.getElementById("Message");



const PrenomNameError = document.getElementById("PrenomNameError");
const NomNameError = document.getElementById("NomNameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
//let error = false;


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

	//check message//
	if (!message.value) {
	messageError.innerText = "Veuillez mettre un message ";
	messageError.classList.remove('hidden');
	error = true;
	} else if (message.value.length < 5) {
	messageError.innerText = "Votre message doit contenir au moins 5 caractères";
	messageError.classList.remove('hidden');
	error = true;
	} else {
	messageError.classList.add('hidden');
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

   
	console.log("prenom:" + Prenom.value)
	console.log("Nom:" + Nom.value)
	console.log("email:" + email.value)
	console.log("message:" + message.value)

	
});