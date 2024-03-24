import Book from "@/model/book";

export const mockCSVFile = new File(['content'], 'test.csv', { type: 'text/csv'});

export const mockBookCSVRecord = {
  Publisher: "A",
  Series: "B",
  "Issue Nr": 1,
  "Release Date": "Sep 14, 2022",
  Variant: "C",
};

export const mockBook: Book = new Book(mockBookCSVRecord);

export const mockBookArray: Book[] = [
  {
    issue: 1,
    series: 'The Amazing Spider-Man',
    publisher: "Marvel",
    sort_name: 'Amazing Spider-Man, The',
    release_date: new Date("1962-12-12"),
    variant: "A"
  },
  {
    issue: 2,
    series: 'The Amazing Spider-Man',
    publisher: "Marvel",
    sort_name: 'Amazing Spider-Man, The',
    release_date: new Date("1963-02-12"),
    variant: "A"
  },
  {
    issue: 3,
    series: 'The Amazing Spider-Man',
    publisher: "Marvel",
    sort_name: 'Amazing Spider-Man, The',
    release_date: new Date("1963-04-09"),
    variant: "A"
  }
]