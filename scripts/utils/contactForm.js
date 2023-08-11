const modalOpen = document.getElementById("contact_button");


modalOpen.addEventListener('click',displayModal)
function displayModal() {  
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

const modalClose =  document.getElementById("contact_modal_close-button");
modalClose.addEventListener('click',closeModal)
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


// const modalContact = document.getElementById("contact_button");
// const modalClose =  document.getElementById("contact_modal_close-button");
const lightboxModal = document.getElementById("lightbox");
const closeLightboxModal = document.getElementById("close-lightbox");
const photographermain = document.querySelector(".photograph-main");

// modalContact.addEventListener('click',displayModal)
// function displayModal() {
// 	modalContact.style.display = "block";
// }

// closeModalContact.addEventListener('click',closeModal)
// function closeModal() {
//     modalContact.style.display = "none";
// }



closeLightboxModal.addEventListener('click',closeLightbox)
function closeLightbox() {
    lightboxModal.style.display = "none"
    photographermain.style.display = "grid";
}





/*
const contactModal = document.querySelector(".contact_modal");
const contactModalOpenBtn = document.getElementById("contact_button");
const contactModalCloseBtn = document.getElementById("contact_modal_close-button");



const lightboxModalCloseBtn = document.getElementById("close-lightbox");

function toggleModal(modal) {
    console.log(modal)
    // Masquer une modale si elle est affichée
    // Afficher une modale si elle est masquée
    modal.classList.add('displayed')
    console.log('Modal displayed')
}


contactModalOpenBtn.addEventListener('click', () => toggleModal(contactModal))
contactModalCloseBtn.addEventListener('click', () => toggleModal(contactModal))


*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// .lightbox{
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: (0,0,0,9);
//     z-index: 10; 
//     overflow: auto;
//     animation: lightboxIn .5s;
//     transition: opacity .3s;
// }

// .lightbox.fadeOut{
//     opacity: 0;
// }

// .lightbox__next,.lightbox__prev{
//     border: none;
//     background:"/assets/icons/arrow.svg" center center / 16px 28px no-repeat;
//     width: 50px;
//     height: 50px;
//     position: fixed;
//     top: 50%;
//     right: 0;
//     margin-top: -14px;
//     /* z-index: 11; */
//     opacity: .5;
//     cursor: pointer;


// }

// .lightbox__next:hover,.lightbox__prev:hover{
//     opacity: 1;
// }

// .lightbox__prev{
//     right: auto;
//     left: 0;
//     transform: rotate(180deg);
// }
