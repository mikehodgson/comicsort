import { it, describe, expect } from "vitest";

import Book from "@/model/book";
import { mockBookCSVRecord } from "../mocks";

describe("Book class", () => {
  it("should be able to be instantiated", () => {
    const book = new Book();
    expect(book).toBeDefined();
  });

  it("should have a publisher property that is empty by default", () => {
    const book = new Book({});
    expect(book.publisher).toEqual("");
  });

  it("should have a series property that is empty by default", () => {
    const book = new Book({});
    expect(book.series).toEqual("");
  });

  it("should have a sort_name property that is empty by default", () => {
    const book = new Book({});
    expect(book.sort_name).toEqual("");
  });

  it("should have an issue property that is 1 by default", () => {
    const book = new Book({});
    expect(book.issue).toEqual(1);
  });

  it("should have a variant property that is an empty string by default", () => {
    const book = new Book({});
    expect(book.variant).toEqual("");
  });

  it("should have a release_date property that is a valid date", () => {
    const book = new Book({});
    expect(book.release_date).toBeInstanceOf(Date);
  });

  it("should set the publisher when an initial value is supplied", () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.publisher).toEqual(mockBookCSVRecord.Publisher);
  });

  it("should set the series when an initial value is supplied", () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.series).toEqual(mockBookCSVRecord.Series);
  });

  it("should set the sort_name when an initial value is supplied", () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.sort_name).toEqual(mockBookCSVRecord.Series);
  });

  it("should set the release_date when an initial value is supplied", () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.release_date).toEqual(new Date(mockBookCSVRecord["Release Date"]));
  });

  it("should set the issue number when it is provided", () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.issue).toEqual(mockBookCSVRecord["Issue Nr"]);
  });

  it("should set the variant when an initial value is supplied", () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.variant).toEqual(mockBookCSVRecord.Variant);
  });

  it("should remove the word 'the' from the sort name if it is the first word", () => {
    const csvRecord = mockBookCSVRecord;
    csvRecord.Series = "The  Amazing Spider-Man";
    const book = new Book(csvRecord);
    expect(book.sort_name).toEqual("Amazing Spider-Man");
  });

  it("should not remove the word 'the' from the sort name if it is not the first word", () => {
    const csvRecord = mockBookCSVRecord;
    csvRecord.Series = "Bob The Great";
    const book = new Book(csvRecord);
    expect(book.sort_name).toEqual(book.series);
  });
});
