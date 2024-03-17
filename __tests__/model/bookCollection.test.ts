import { it, describe, expect } from "vitest";

import BookCollection from "@/model/bookCollection";
import Book from "@/model/book";

describe("BookCollection class", () => {
  it("should be able to be instantiated", () => {
    const collection = new BookCollection();
    expect(collection).toBeDefined();
  });

  it("should have an empty array of books", () => {
    const collection = new BookCollection();
    expect(collection.books).toEqual([] as Book[]);
  });
});
