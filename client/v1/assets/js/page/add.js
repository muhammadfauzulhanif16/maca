//---------- check input title book
document.getElementById("title").addEventListener("blur", () => {
	document.getElementById("messageTitle").removeAttribute("hidden");
});

document.getElementById("title").addEventListener("focus", () => {
	document.getElementById("messageTitle").setAttribute("hidden", "hidden");
});

document.getElementById("title").addEventListener("input", () => {
	if (document.getElementById("title").value.length === 0) {
		document.getElementById("title").addEventListener("blur", () => {
			document.getElementById("messageTitle").removeAttribute("hidden");
		});
		
		document.getElementById("title").addEventListener("focus", () => {
			document.getElementById("messageTitle").setAttribute("hidden", "hidden");
		});
	} else {
		document.getElementById("title").addEventListener("blur", () => {
			document.getElementById("messageTitle").setAttribute("hidden", "hidden");
		});
	}
})
//---------- check input title book

//---------- check input author book
document.getElementById("author").addEventListener("blur", () => {
	document.getElementById("messageAuthor").removeAttribute("hidden");
});

document.getElementById("author").addEventListener("focus", () => {
	document.getElementById("messageAuthor").setAttribute("hidden", "hidden");
});

document.getElementById("author").addEventListener("input", () =>  {
	if (document.getElementById("author").value.length === 0) {
		document.getElementById("author").addEventListener("blur", () => {
			document.getElementById("messageAuthor").removeAttribute("hidden");
		});
		
		document.getElementById("author").addEventListener("focus", () => {
			document.getElementById("messageAuthor").setAttribute("hidden", "hidden");
		});
	} else {
		document.getElementById("author").addEventListener("blur", () => {
			document.getElementById("messageAuthor").setAttribute("hidden", "hidden");
		});
	}
})
//---------- check input author book

//---------- check input year book
document.getElementById("year").addEventListener("blur", () => {
	document.getElementById("messageYear").removeAttribute("hidden");
});

document.getElementById("year").addEventListener("focus", () => {
	document.getElementById("messageYear").setAttribute("hidden", "hidden");
});

document.getElementById("year").addEventListener("input", () =>  {
	if (document.getElementById("year").value.length === 0) {
		document.getElementById("year").addEventListener("blur", () => {
			document.getElementById("messageYear").removeAttribute("hidden");
		});
		
		document.getElementById("year").addEventListener("focus", () => {
			document.getElementById("messageYear").setAttribute("hidden", "hidden");
		});
	} else if (document.getElementById("year").value.length > 4) {
		document.getElementById("messageYear").removeAttribute("hidden");
		document.getElementById("messageYear").innerText = "Maximal 4 characters!";
		document.getElementById("year").addEventListener("focus", () => {
			document.getElementById("messageYear").removeAttribute("hidden");
		});
		
		document.getElementById("year").addEventListener("blur", () => {
			document.getElementById("messageYear").removeAttribute("hidden");
		});
		
		document.getElementById("submit").style.cursor = "not-allowed"
		document.getElementById("submit").setAttribute("disabled", "disabled")
	} else {
		document.getElementById("messageYear").setAttribute("hidden", "hidden");
		document.getElementById("messageYear").innerText = "Year can't be empty!"
		document.getElementById("year").addEventListener("blur", () => {
			document.getElementById("messageYear").setAttribute("hidden", "hidden");
		});
		
		document.getElementById("year").addEventListener("focus", () => {
			document.getElementById("messageYear").setAttribute("hidden", "hidden");
		});
		
		document.getElementById("submit").style.cursor = "pointer"
		document.getElementById("submit").removeAttribute("disabled")
	}
})
//---------- check input year book

//---------- create book
const createBook = () => {
	const title = document.getElementById("title").value,
		author = document.getElementById("author").value,
		year = document.getElementById("year").value,
		readingBook = item(title, author, year, false),
		book = composeBook(title, author, year, false);
	
	readingBook[BOOK_ID] = book.id;
	books.push(book)
	document.getElementById("readingBookList").append(readingBook);
	updateDataStorage();
}
//---------- create book

//---------- close add book page
document.getElementById("addBookPageCloseIcon").addEventListener("click", () => {
	document.getElementById("messageTitle").setAttribute("hidden","hidden")
	document.getElementById("messageAuthor").setAttribute("hidden","hidden")
	document.getElementById("messageYear").setAttribute("hidden","hidden")
	document.getElementById("addBookPage").setAttribute("hidden", "hidden")
	document.getElementById("bookActionPageContainer").removeAttribute("hidden")
	document.getElementById("bookActionPageContainer").classList.add("display-flex")
	document.getElementById("main").classList.remove("align-items-center")
});
//---------- close add book page