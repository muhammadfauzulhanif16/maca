const createButton = ( iconId, iconClass, buttonTitle, eventListener) => {
	const button = document.createElement("button");
	button.classList.add("bx", "bx-sm", iconClass)
	button.setAttribute("title", buttonTitle)
	button.setAttribute("id", iconId)
	button.addEventListener("click", e => {
		eventListener(e);
	});
	
	return button;
},

//---------- to finished book
finishedButton = () => {
	return createButton( "finishedBookIcon","bx-book","Book finished reading",e => {
		toFinished(e.target.parentElement.parentElement);
	});
},
toFinished = (bookElement) => {
	const title = bookElement.querySelector(".book-detail > h3").innerText,
		author = bookElement.querySelector(".book-detail > .book-author > span").innerText,
		year = bookElement.querySelector(".book-detail > .book-year > span").innerText,
		finishedBook = item(title, author, year, true),
		book = findBook(bookElement[BOOK_ID]);
	
	book.isCompleted = true;
	finishedBook[BOOK_ID] = book.id
	document.getElementById("finishedBookList").append(finishedBook);
	bookElement.remove();
	updateDataStorage();
},
//---------- to finished book

//---------- to reading book
readingButton = () => {
	return createButton("readingBookIcon","bx-book-open","Book is being read",e => {
		toReading(e.target.parentElement.parentElement);
	});
},
toReading = (bookElement) => {
	const title = bookElement.querySelector(".book-detail > h3").innerText,
		author = bookElement.querySelector(".book-detail > .book-author > span").innerText,
		year = bookElement.querySelector(".book-detail > .book-year > span").innerText,
		readingBook = item(title, author, year, false),
		book = findBook(bookElement[BOOK_ID]);
	
	book.isCompleted = false;
	readingBook[BOOK_ID] = book.id;
	document.getElementById("readingBookList").append(readingBook);
	bookElement.remove();
	updateDataStorage();
},
//---------- to reading book

//---------- to delete book
deleteButton = () => {
	return createButton("deleteBookIcon","bx-trash","Delete book",e => {
		deleteBook(e.target.parentElement.parentElement);
	});
},
deleteBook = (bookElement) => {
	const position = findBookId(bookElement[BOOK_ID]),
		condition = confirm("Are you sure you want to delete it?")
	
	books.splice(position, 1);
	if (condition === true) {
		bookElement.remove();
	}
	updateDataStorage();
};
//---------- to delete book