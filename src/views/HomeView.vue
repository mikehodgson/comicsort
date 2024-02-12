<template>
  <main>
    <FileSelector @fileSelected="onFileSelected" />
    <!--  -->
    <h4>Books Loaded: {{ collection.books.length }}</h4>
    <h4>Books per box: {{ AppConstants.DEFAULT_CHUNK_SIZE }}</h4>
    <BookTable v-for="(box, index) in groupBooksPerBox(collection.books, AppConstants.DEFAULT_CHUNK_SIZE)"
      :key="JSON.stringify(box)" v-bind:books="box" :title="'Box #' + (index + 1)" />
  </main>
</template>

<script setup lang="ts">
import FileSelector from "@/components/FileSelector.vue";
import BookTable from "@/components/BookTable.vue";
import BookCollection from "@/model/bookCollection";
import Book from "@/model/book";
import { type Ref, ref } from "vue";
import AppConstants from "@/data/constants";

const collection: Ref<BookCollection> = ref(new BookCollection([]));

const onFileSelected = (file: File) => {
  const fr = new FileReader();
  fr.onload = function (e) {
    let contents = e.target?.result;
    collection.value.loadFromText(contents);
  };
  fr.readAsText(file);
}

const groupBooksPerBox = (issues: Book[], booksPerBox: number): Book[][] => {
  // Step 1: Sort the issues
  issues.sort((a, b) => {
    if (a.series === b.series) {
      return a.issue - b.issue;
    }
    return a.series.localeCompare(b.series);
  });

  // Step 2: Group issues by series
  const groups: Book[][] = [];
  let currentGroup: Book[] = [];
  let currentSeries = '';
  for (const issue of issues) {
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
    if (group.length > booksPerBox || currentBox.length + group.length > booksPerBox) {
      // Start a new box for the group if the current box isn't empty
      if (currentBox.length > 0) {
        boxes.push(currentBox);
        currentBox = [];
      }
      // If group itself exceeds capacity, it needs special handling
      if (group.length > booksPerBox) {
        let start = 0;
        while (start < group.length) {
          const end = Math.min(start +booksPerBox, group.length);
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
}
</script>
