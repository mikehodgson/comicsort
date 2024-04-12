import Book from "./book";

interface IBookCollection {
  books: Book[];
}

class BookCollection implements IBookCollection {
  books: Book[];

  constructor(books?: Book[]) {
    this.books = books !== undefined ? books : ([] as Book[]);
  }
}

export default BookCollection;
export { type IBookCollection, BookCollection };
