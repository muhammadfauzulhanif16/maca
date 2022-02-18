//---------- close reading book page
document.getElementById("readingBookPageCloseIcon").addEventListener("click", () => {
	document.getElementById("readingBookPage").setAttribute("hidden", "hidden")
	document.getElementById("bookActionPageContainer").removeAttribute("hidden")
	document.getElementById("bookActionPageContainer").classList.add("display-flex")
	document.getElementById("searchIcon").setAttribute("hidden", "hidden")
	document.getElementById("helpIcon").removeAttribute("hidden")
	document.getElementById("header").classList.add("position-fixed")
	document.getElementById("inputSearch").setAttribute("hidden", "hidden");
	document.getElementById("exitSearchIcon").setAttribute("hidden", "hidden");
	document.getElementById("themeIcon").removeAttribute("hidden")
})
//---------- close reading book page