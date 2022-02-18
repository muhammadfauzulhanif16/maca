const storageKey = "MACA BOOKS",
	BOOK_ID = "bookId";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("addBookForm").addEventListener("submit", e => {
		e.preventDefault();
		createBook();
		
		document.getElementById("title").value = "";
		document.getElementById("author").value = "";
		document.getElementById("year").value = "";
		document.getElementById("messageYear").setAttribute("hidden","hidden")
		alert("Book added successfully!")
	});
	
	if (isStorageExist()) loadDataStorage();
});

document.addEventListener("ondatasaved", () => {
	// alert("Book added!")
}, false);

document.addEventListener("ondataloaded", () => {
	refreshDataStorage();
}, false);

document.getElementById("header").classList.add("position-fixed");