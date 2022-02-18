//---------- open add book page
document.getElementById("addBookPageIcon").addEventListener("click", () => {
	document.getElementById("main").classList.add("align-items-center")
	document.getElementById("bookActionPageContainer").setAttribute("hidden", "hidden")
	document.getElementById("bookActionPageContainer").classList.remove("display-flex")
	document.getElementById("addBookPage").removeAttribute("hidden")
});
//---------- open add book page

//---------- open reading book page
document.getElementById("readingBookPageIcon").addEventListener("click", () => {
	document.getElementById("bookActionPageContainer").setAttribute("hidden", "hidden")
	document.getElementById("bookActionPageContainer").classList.remove("display-flex")
	document.getElementById("readingBookPage").removeAttribute("hidden")
	document.getElementById("header").classList.remove("position-fixed")
	document.getElementById("themeIcon").setAttribute("hidden", "hidden")
	document.getElementById("helpIcon").setAttribute("hidden", "hidden")
	document.getElementById("searchIcon").removeAttribute("hidden")
});
//---------- open reading book page

//---------- open finished book page
document.getElementById("finishedBookPageIcon").addEventListener("click", () => {
	document.getElementById("bookActionPageContainer").setAttribute("hidden", "hidden")
	document.getElementById("bookActionPageContainer").classList.remove("display-flex")
	document.getElementById("finishedBookPage").removeAttribute("hidden")
	document.getElementById("themeIcon").setAttribute("hidden", "hidden")
	document.getElementById("helpIcon").setAttribute("hidden", "hidden")
	document.getElementById("header").classList.remove("position-fixed")
	document.getElementById("searchIcon").removeAttribute("hidden")
});
//---------- open finished book page