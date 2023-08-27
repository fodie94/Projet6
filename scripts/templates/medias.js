import {
	showLightbox,
	handleClickLikes
} from "../pages/photographer.js"


export default function mediaTemplate(data, index) {
	const {
		title,
		likes,
		image,
		video
	} = data


	const link = document.createElement('a');
	link.setAttribute("tabindex", 0)
	const picture = `assets/SamplePhotos/${image}`

	function getImage() {
		const article = document.createElement('article')
		article.setAttribute('data-index', index)

		const img = document.createElement('img')
		img.setAttribute("src", picture)
		img.setAttribute("alt", title)
		link.appendChild(img)

		const bas_article = document.createElement('div')
		bas_article.classList.add('bas_article')

		const name_article = document.createElement('div')

		const titles = document.createElement('h2')
		titles.textContent = title
		titles.classList.add('txt')

		const svg_article = document.createElement('div')
		svg_article.classList.add('i-heart')

		const Likes = document.createElement('h3')
		Likes.textContent = likes

		const i = document.createElement('i')
		i.classList.add('fa-solid', 'fa-heart')

		article.appendChild(link)
		name_article.appendChild(titles)
		svg_article.appendChild(Likes)
		svg_article.appendChild(i)
		bas_article.appendChild(name_article)
		bas_article.appendChild(svg_article)
		article.appendChild(bas_article)

		img.addEventListener('click', () => showLightbox(index))
		link.addEventListener('keydown', function(event) {
			if (event.key === "Enter") {
				showLightbox(index)
			}
		})
		i.addEventListener('click', (event) => handleClickLikes(event, data))

		return (article)
	}

	function getVideo() {

		const link = document.createElement('a');
		link.setAttribute("tabindex", 0)
		const pathVideo = `assets/SamplePhotos/${video}`

		const article = document.createElement('article')
		article.setAttribute('data-index', index)

		const vdo = document.createElement('video')
		vdo.setAttribute("src", pathVideo)
		vdo.setAttribute("alt", title);
		link.appendChild(vdo)

		const bas_article = document.createElement('div')
		bas_article.classList.add('bas_article')
		const name_article = document.createElement('div')
		const h2 = document.createElement('h2')
		h2.textContent = title
		h2.classList.add('txt')
		const Likes = document.createElement('h3')
		Likes.textContent = likes

		const svg_article = document.createElement('div')
		svg_article.classList.add('i-heart')
		const i = document.createElement('i')
		i.classList.add('fa-solid', 'fa-heart')

		article.appendChild(link)
		name_article.appendChild(h2)
		svg_article.appendChild(Likes)
		svg_article.appendChild(i)
		bas_article.appendChild(name_article)
		bas_article.appendChild(svg_article)
		article.appendChild(bas_article)

		vdo.addEventListener('click', (elem) => showLightbox(elem, index))
		link.addEventListener('keydown', function(event) {
			if (event.key === "Enter") {
				showLightbox(index)
			}
		})
		i.addEventListener('click', (event) => handleClickLikes(event, data))

		return (article)
	}

	return {
		likes,
		title,
		picture,
		getImage,
		getVideo
	}
}