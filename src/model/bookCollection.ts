import Book from "./book";

interface IBookCollection {
  books: Book[];
}

class BookCollection implements IBookCollection {
  books: Book[] = [] as Book[];

  constructor(books?: Book[]) {
    this.books = books || ([] as Book[]);
  }
}

export default BookCollection;
export { type IBookCollection, BookCollection };
