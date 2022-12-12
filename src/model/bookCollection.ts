import Book from "./book";
import Papa from "papaparse";

class BookCollection {
  books: Book[] = [];

  loadFromText(csvText: any) {
    const rows = Papa.parse(csvText, { header: true, dynamicTyping: true });
    this.books = [];

    for (let i = 0; i < rows.data.length; i++) {
      this.books.push(new Book(rows.data[i]));
    }
  }
}

export default BookCollection;
