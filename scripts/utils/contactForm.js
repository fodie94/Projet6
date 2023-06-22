function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


function closeLightbox() {
    const lightboxModal = document.getElementById("lightbox");
    lightboxModal.style.display = "none"
   const photographermain = document.querySelector(".photograph-main");
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
