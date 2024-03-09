import Book from "@/model/book";

export const mockBookCSVRecord = {
  Publisher: "A",
  Series: "B",
  "Issue Nr": 1,
  "Release Date": "Sep 14, 2022",
  Variant: "C",
};

export const mockBook: Book = new Book(mockBookCSVRecord);
