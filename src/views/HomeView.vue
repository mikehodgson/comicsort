<template>
  <main>
    <div class="grid gap-8 grid-flow-col auto-cols-max no-print">
      <div>
        <FileSelector @file-selected="onFileSelected" />
      </div>
      <div class="">
        <p>Books per box:</p>
        <input v-model="booksPerBox" type="number" min="50" max="200" class="form-input" />
      </div>
      <div>
        <p>
          Books Loaded: <strong>{{ collection.books.length }}</strong>
        </p>
        <button
          id="clear-collection-button"
          class="form-input bg-transparent hover:bg-red-500 text-red-500 hover:text-white hover:border-transparent focus:border-transparent outline-none"
          @click="bookCollectionStore.clearCollection()">
          Clear Collection
        </button>
      </div>
      <div>
        Boxes required: <strong>{{ boxes.length }}</strong>
      </div>
    </div>
    <BookTable
      v-for="(box, index) in boxes"
      :key="JSON.stringify(box)"
      v-bind:books="box"
      :title="'Box #' + (index + 1)" />
  </main>
</template>

<script setup lang="ts">
  import FileSelector from "@/components/FileSelector.vue";
  import BookTable from "@/components/BookTable.vue";
  import { useBookCollectionStore } from "@/stores/useBookCollectionStore";
  import { storeToRefs } from "pinia";

  const bookCollectionStore = useBookCollectionStore();
  const { collection, boxes, booksPerBox } = storeToRefs(bookCollectionStore);

  const onFileSelected = (file: File) => {
    const fr = new FileReader();
    fr.onload = function (e) {
      let contents = e.target?.result;
      bookCollectionStore.loadBooks(contents);
    };
    fr.readAsText(file);
  };
</script>
