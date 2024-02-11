<template>
  <main>
    <FileSelector @fileSelected="onFileSelected" />
    <!--  -->
    <h4>Books Loaded: {{ collection.books.length }}</h4>
    <h4>Books per box: {{ AppConstants.DEFAULT_CHUNK_SIZE }}</h4>
    <BookTable v-for="(box, index) in groupBooksPerBox(collection, AppConstants.DEFAULT_CHUNK_SIZE)" :key="JSON.stringify(box)" v-bind:books="box" :title="'Box #' + (index + 1)" />
  </main>
</template>

<script setup lang="ts">
  import FileSelector from "@/components/FileSelector.vue";
  import BookTable from "@/components/BookTable.vue";
  import BookCollection from "@/model/bookCollection";
  import { type Ref, ref } from "vue";
  import AppConstants from "@/data/constants";

  const collection: Ref<BookCollection> = ref(new BookCollection());

  const onFileSelected = (file: File) => {
    const fr = new FileReader();
    fr.onload = function (e) {
      let contents = e.target?.result;
      collection.value.loadFromText(contents);
      groupBooksPerBox(collection.value, AppConstants.DEFAULT_CHUNK_SIZE);
    };
    fr.readAsText(file);
  }

  const groupBooksPerBox = (bookCollection: BookCollection, booksPerBox: number) => {
    let boxes = [];
    for (let i = 0; i < bookCollection.books.length; i += booksPerBox)
    {
      boxes.push(bookCollection.books.slice(i, i + booksPerBox));
    }
    console.log(boxes);
    return boxes;
  }
</script>
