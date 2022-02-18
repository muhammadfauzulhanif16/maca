const item = (title, author, year, isCompleted) => {
	const bookTitle = document.createElement("h3");
	bookTitle.innerText = title;
	
	const bookAuthorContainer = document.createElement("p"),
		bookAuthor = document.createElement("span");
	bookAuthorContainer.append(bookAuthor)
	bookAuthorContainer.classList.add("book-author");
	bookAuthorContainer.innerHTML = `Author : <span>${author}</span>`
	
	const bookYearContainer = document.createElement("p"),
		bookYear = document.createElement("span");
	bookYearContainer.append(bookYear);
	bookYearContainer.classList.add("book-year")
	bookYearContainer.innerHTML = `Year : <span>${year}</span>`
	
	const bookDetail = document.createElement("div");
	bookDetail.classList.add("book-detail")
	bookDetail.append(bookTitle, bookAuthorContainer, bookYearContainer);
	
	const finishedAction = document.createElement("div"),
		readingAction = document.createElement("div");
	
	readingAction.setAttribute("id", "action");
	finishedAction.setAttribute("id", "action");
	readingAction.append(finishedButton(), deleteButton());
	finishedAction.append(readingButton(), deleteButton());
	
	const bookContainer = document.createElement("li");
	bookContainer.classList.add("book-item")
	
	if(isCompleted){
		bookContainer.append(
			bookDetail, finishedAction
		);
	} else {
		bookContainer.append(
			bookDetail, readingAction
		);
	}
	
	return bookContainer;
}