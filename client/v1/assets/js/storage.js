let books = [];

const isStorageExist = () => {
	if (typeof Storage === undefined){
		alert("Browser doesn't support local storage!");
		return false
	}
	
	return true;
},

saveBook = () => {
	localStorage.setItem(storageKey, JSON.stringify(books));
	document.dispatchEvent(new Event("ondatasaved"));
},

composeBook = (title, author, year, isCompleted) => {
	return {
		id: +new Date(),
		title,
		author,
		year,
		isCompleted
	};
},

loadDataStorage = () => {
	const book = JSON.parse(localStorage.getItem(storageKey));
	if (book !== null) books = book;
	document.dispatchEvent(new Event("ondataloaded"));
},

updateDataStorage = () => {
	if (isStorageExist()) saveBook();
},

findBook = (id) => {
	let book;
	for (book of books){
		if (book.id === id)
			return book;
	}
	
	return null;
},

findBookId = (id) => {
	let i = 0, book;
	for (book of books) {
		if (book.id === id) return i;
		i++;
	}
	
	return -1;
},

refreshDataStorage = () => {
	let book;
	for(book of books){
		const newBook = item(book.title, book.author, book.year, book.isCompleted);
		newBook[BOOK_ID] = book.id;
		
		if(book.isCompleted){
			document.getElementById("finishedBookList").append(newBook);
		} else {
			document.getElementById("readingBookList").append(newBook);
		}
	}
}