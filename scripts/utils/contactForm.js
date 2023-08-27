const modalOpen = document.getElementById("contact_button");
const prenom = document.getElementById("Prenom");

modalOpen.addEventListener('click', displayModal)

function displayModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
	prenom.focus();
}

const modalClose = document.getElementById("contact_modal_close-button");
modalClose.addEventListener('click', closeModal)
modalClose.addEventListener('keydown', function(event) {
	if (event.key === "Enter") {
		const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
	modalOpen.focus();
	console.log("dff")
	}
})

function closeModal() {
	const modal = document.getElementById("contact_modal");
	modal.style.display = "none";
	modalOpen.focus();
	console.log("dff")
}

const lightboxModal = document.getElementById("lightbox");
const closeLightboxModal = document.getElementById("close-lightbox");
const photographermain = document.querySelector(".photograph-main");

closeLightboxModal.addEventListener('click', closeLightbox)
function closeLightbox() {
	lightboxModal.style.display = "none"
	photographermain.style.display = "grid";
	lightboxModal.focus();
}