import Book from "./book";
import Papa from "papaparse";

interface IBookCollection {
  books: Book[]
}

class BookCollection implements IBookCollection {
  books: Book[] = [] as Book[];

  constructor(books: Book[]) {
    this.books = books || [] as Book[];
  }

  loadFromText(csvText: any) {
    const rows = Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      quoteChar: '"',
    });
    this.books = [];

    for (let i = 0; i < rows.data.length; i++) {
      this.books.push(new Book(rows.data[i]));
    }

    this.books.sort((a, b) => {
      return a.publisher.toUpperCase() == b.publisher.toUpperCase()
        ? a.sort_name.toUpperCase() == b.sort_name.toUpperCase()
          ? a.issue == b.issue
            ? 0
            : a.issue > b.issue
            ? 1
            : -1
          : a.sort_name.toUpperCase() > b.sort_name.toUpperCase()
          ? 1
          : -1
        : a.publisher.toUpperCase() > b.publisher.toUpperCase()
        ? 1
        : -1;
    });
  }
}

export default BookCollection;
export { type IBookCollection, BookCollection }
