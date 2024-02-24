<template>
  <main>
    <FileSelector @fileSelected="onFileSelected" />
    <!--  -->
    <h4>Books Loaded: {{ collection.books.length }}</h4>
    <p>
      Books per box:
      <input
        v-model="booksPerBox"
        type="number"
        min="50"
        max="200"
        class="padding border border-grey-300 text-sm rounded-lg block p-1.5"
      />
    </p>
    <p>Boxes required: {{ boxes.length }}</p>
    <BookTable
      v-for="(box, index) in boxes"
      :key="JSON.stringify(box)"
      v-bind:books="box"
      :title="'Box #' + (index + 1)"
    />
  </main>
</template>

<script setup lang="ts">
  import FileSelector from "@/components/FileSelector.vue";
  import BookTable from "@/components/BookTable.vue";
  import { useBookCollectionStore } from "@/stores/useBookCollectionStore";
  import { storeToRefs } from "pinia";

  const bookCollectionStore = useBookCollectionStore();
  const { collection, boxes, booksPerBox } = storeToRefs(
    useBookCollectionStore(),
  );

  const onFileSelected = (file: File) => {
    const fr = new FileReader();
    fr.onload = function (e) {
      let contents = e.target?.result;
      bookCollectionStore.loadBooks(contents);
    };
    fr.readAsText(file);
  };
</script>
