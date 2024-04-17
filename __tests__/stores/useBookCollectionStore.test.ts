import { it, describe, expect, beforeEach } from "vitest";

import { useBookCollectionStore } from "@/stores/useBookCollectionStore";
import { createPinia, setActivePinia } from "pinia";

beforeEach(() => {  
  setActivePinia(createPinia());
});

describe("useBookCollectionStore store", () => {
  it("should have the name bookCollection", () => {
    const bookCollection = useBookCollectionStore();
    expect(bookCollection.$id).toEqual("bookCollection");
  });
});
