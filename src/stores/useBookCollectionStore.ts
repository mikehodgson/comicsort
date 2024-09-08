import Book from "@/model/book";
import { defineStore } from "pinia";
import { ref, type Ref, computed, type ComputedRef } from "vue";
import Papa from "papaparse";
import BookCollection from "@/model/bookCollection";
import { useStorage } from "@vueuse/core";

export const useBookCollectionStore = defineStore("bookCollection", () => {
  const STORE_NAME = "bookcollection";
  const collection: Ref<BookCollection> = useStorage(STORE_NAME, new BookCollection([]));
  const booksPerBox: Ref<number> = ref(90);

  const boxes: ComputedRef<Book[][]> = computed(() => {
    const tmpBooks = collection.value.books;

    // Step 1: Sort the issues
    tmpBooks.sort((a, b) => {
      if (a.series === b.series) {
        return a.issue - b.issue;
      }
      return a.series.localeCompare(b.series);
    });

    // Step 2: Group issues by series
    const groups: Book[][] = [];
    let currentGroup: Book[] = [];
    let currentSeries = "";
    for (const issue of tmpBooks) {
      if (issue.series !== currentSeries) {
        if (currentGroup.length > 0) {
          groups.push(currentGroup);
        }
        currentGroup = [issue];
        currentSeries = issue.series;
      } else {
        currentGroup.push(issue);
      }
    }
    // Don't forget to push the last group
    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }

    // Step 3: Split into boxes
    const boxes: Book[][] = [];
    let currentBox: Book[] = [];
    for (const group of groups) {
      // If current group exceeds box capacity or adding it would exceed the capacity
      if (group.length > booksPerBox.value || currentBox.length + group.length > booksPerBox.value) {
        // Start a new box for the group if the current box isn't empty
        if (currentBox.length > 0) {
          boxes.push(currentBox);
          currentBox = [];
        }
        // If group itself exceeds capacity, it needs special handling
        if (group.length > booksPerBox.value) {
          let start = 0;
          while (start < group.length) {
            const end = Math.min(start + booksPerBox.value, group.length);
            boxes.push(group.slice(start, end));
            start = end;
          }
          // Skip the rest of the loop since we've already handled this group
          continue;
        }
      }
      // Add the group to the current box
      currentBox.push(...group);
    }
    // Don't forget to push the last box
    if (currentBox.length > 0) {
      boxes.push(currentBox);
    }

    return boxes;
  });

  const loadBooks = (csvText: any) => {
    clearCollection().then(() => {
      const rows = Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        quoteChar: '"',
      });
      const newRows: Book[] = [] as Book[];

      for (let i = 0; i < rows.data.length; i++) {
        const b = new Book(rows.data[i]);
        if (!isNaN(b.issue)) newRows.push(b);
      }

      collection.value.books = newRows;
    });
  };

  const clearCollection = async () => {
    collection.value.books = [];
  };

  return { boxes, collection, booksPerBox, loadBooks, clearCollection };
});
