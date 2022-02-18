//---------- close finished book page
document.getElementById("finishedBookPageCloseIcon").addEventListener("click", () => {
	document.getElementById("finishedBookPage").setAttribute("hidden", "hidden")
	document.getElementById("bookActionPageContainer").removeAttribute("hidden")
	document.getElementById("bookActionPageContainer").classList.add("display-flex")
	document.getElementById("searchIcon").setAttribute("hidden", "hidden")
	document.getElementById("helpIcon").removeAttribute("hidden")
	document.getElementById("header").classList.add("position-fixed")
	document.getElementById("inputSearch").setAttribute("hidden", "hidden");
	document.getElementById("exitSearchIcon").setAttribute("hidden", "hidden");
	document.getElementById("themeIcon").removeAttribute("hidden")
})
//---------- close finished book page