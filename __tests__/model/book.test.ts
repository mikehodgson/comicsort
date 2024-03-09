import { it, describe, expect } from "vitest";

import Book from "@/model/book";
import { mockBookCSVRecord } from "../mocks";

describe("Book class", () => {
  it("should be able to be instantiated", () => {
    const book = new Book();
    expect(book).toBeDefined();
  });

  it("should have a publisher property that is empty by default", async () => {
    const book = new Book({});
    expect(book.publisher).toEqual("");
  });

  it("should have a series property that is empty by default", async () => {
    const book = new Book({});
    expect(book.series).toEqual("");
  });

  it("should have a sort_name property that is empty by default", async () => {
    const book = new Book({});
    expect(book.sort_name).toEqual("");
  });

  it("should have an issue property that is 0 by default", async () => {
    const book = new Book({});
    expect(book.issue).toEqual(1);
  });

  it("should have a release_date property that is a valid date", async () => {
    const book = new Book({});
    expect(book.release_date).toBeInstanceOf(Date);
  });

  it("should set the publisher when an initial value is supplied", async () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.publisher).toEqual(mockBookCSVRecord.Publisher);
  });

  it("should set the series when an initial value is supplied", async () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.series).toEqual(mockBookCSVRecord.Series);
  });

  it("should set the sort_name when an initial value is supplied", async () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.sort_name).toEqual(mockBookCSVRecord.Series);
  });

  it("should set the release_date when an initial value is supplied", async () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.release_date).toEqual(
      new Date(mockBookCSVRecord["Release Date"]),
    );
  });

  it("should set the variant when an initial value is supplied", async () => {
    const book = new Book(mockBookCSVRecord);
    expect(book.variant).toEqual(mockBookCSVRecord.Variant);
  });
});
