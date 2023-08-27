export function photographerTemplate(data) {
	const {
		name,
		portrait,
		id,
		city,
		tagline,
		price,
		country
	} = data;

	const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const link = document.createElement('a');
		link.href = `photographer.html?id=${id}`;

		const article = document.createElement('article');

		const img = document.createElement('img');
		img.setAttribute("src", picture);
		img.setAttribute("alt", name);


		const names = document.createElement('h2');
		names.textContent = name;
		names.classList.add('name-article')

		const ville = document.createElement('h3');
		ville.textContent = city + ",";
		ville.classList.add('city-article')

		const pays = document.createElement('h3');
		pays.textContent = country;
		pays.classList.add('city-article')

		const villePays = document.createElement('div');
		villePays.classList.add('villePays')
		villePays.appendChild(ville)
		villePays.appendChild(pays)

		const taglines = document.createElement('h4');
		taglines.textContent = tagline;
		taglines.classList.add('tagline-article')

		const prix = document.createElement('h5');
		prix.textContent = price;
		prix.classList.add('price-article')

		article.appendChild(img);
		article.appendChild(names);
		article.appendChild(villePays);
		article.appendChild(taglines);
		article.appendChild(prix);
		link.appendChild(article);

		return (link);
	}

	function getHeaderPhotographer() {

		const article = document.createElement('article');

		const content = document.createElement('div')
		content.classList.add('id-photo-content')

		const names = document.createElement('h2');
		names.textContent = name;

		const ville = document.createElement('h3');
		ville.textContent = city + ",";
		ville.classList.add('city-article')

		const pays = document.createElement('h3');
		pays.textContent = country;
		pays.classList.add('city-article')

		const villePays = document.createElement('div');
		villePays.classList.add('villePays')
		villePays.appendChild(ville)
		villePays.appendChild(pays)

		const taglines = document.createElement('h4');
		taglines.textContent = tagline;


		content.appendChild(names);
		content.appendChild(villePays);
		content.appendChild(taglines);
		article.appendChild(content);



		return (article);
	}

	function getHeaderPhotographer2() {

		const article = document.createElement('article');
		article.classList.add('id-photo')
		const img = document.createElement('img');
		img.setAttribute("src", picture);
		img.setAttribute("alt", name)

		article.appendChild(img);


		return (article);
	}

	function getPrixPhotographer() {

		const span = document.createElement('span');
		span.classList.add('prixPhoto')

		const prix = document.createElement('prix');
		prix.textContent = price + "€/Jour";
		prix.setAttribute("alt", price)

		span.appendChild(prix);

		return (span);
	}

	function getNameModal() {

		const span = document.createElement('span');
		span.classList.add('NameModal')

		const name = document.createElement('name');
		name.textContent = name;

		span.appendChild(name);

		return (span);
	}
	return {
		name,
		picture,
		getUserCardDOM,
		getHeaderPhotographer,
		getHeaderPhotographer2,
		getPrixPhotographer,
		getNameModal
	}
}