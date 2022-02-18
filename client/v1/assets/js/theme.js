document.getElementById("themeIcon").addEventListener("click", () => {
	if (localStorage.getItem("MACA THEME") === "light-theme") {
		darkTheme()
	} else {
		lightTheme()
	}
})

const darkTheme = () => {
	document.body.classList.add("dark-theme")
	localStorage.setItem("MACA THEME", "dark-theme")
	document.getElementById("sunIcon").style.display = ""
	document.getElementById("moonIcon").style.display = "none"
},

lightTheme = () => {
	document.body.classList.remove("dark-theme")
	localStorage.setItem("MACA THEME", "light-theme")
	document.getElementById("moonIcon").style.display = ""
	document.getElementById("sunIcon").style.display = "none"
}

if (localStorage.getItem('MACA THEME') === "dark-theme") {
	document.getElementById("sunIcon").style.display = ""
	darkTheme();
} else {
	document.getElementById("sunIcon").style.display = "none"
}