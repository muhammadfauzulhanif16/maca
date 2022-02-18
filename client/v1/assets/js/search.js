document.getElementById("searchIcon").addEventListener("click", () => {
	document.getElementById("inputSearch").removeAttribute("hidden");
	document.getElementById("searchIcon").setAttribute("hidden", "hidden");
	document.getElementById("exitSearchIcon").removeAttribute("hidden");
})

document.getElementById("exitSearchIcon").addEventListener("click", () => {
	document.getElementById("searchIcon").removeAttribute("hidden");
	document.getElementById("inputSearch").setAttribute("hidden", "hidden");
	document.getElementById("exitSearchIcon").setAttribute("hidden", "hidden");
})

document.getElementById("search").addEventListener("input", () => {
	searchBook(document.getElementById("search").value);
})

const searchBook = (keyword) => {
	const filter = keyword.toUpperCase(),
		titles = document.querySelectorAll(".book-detail > h3"),
		authors = document.querySelectorAll(".book-detail > .book-author > span"),
		years = document.querySelectorAll(".book-detail > .book-year > span");
	
	for (let i = 0; i < titles.length || i < authors.length || i < years.length; i++) {
		const title = titles[i].textContent || titles[i].innerText,
			author = authors[i].textContent || authors[i].innerText,
			year = years[i].textContent || years[i].innerText;
		
		if (title.toUpperCase().indexOf(filter) > -1 || author.toUpperCase().indexOf(filter) > -1 || year.toUpperCase().indexOf(filter) > -1) {
			titles[i].closest(".book-item").style.display = "";
			authors[i].closest(".book-item").style.display = "";
			years[i].closest(".book-item").style.display = "";
		} else {
			titles[i].closest(".book-item").style.display = "none";
			authors[i].closest(".book-item").style.display = "none";
			years[i].closest(".book-item").style.display = "none";
		}
	}
}