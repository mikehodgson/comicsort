<template>
  <main>
    <div class="grid gap-8 grid-flow-col auto-cols-max no-print">
      <div>
        <FileSelector @fileSelected="onFileSelected" />
      </div>
      <div class="">
        <p>Books per box:</p>
        <input
          v-model="booksPerBox"
          type="number"
          min="50"
          max="200"
          class="border-solid border-2 border-gray-300 px-2 py-2 my-2 bg-opacity-50"
          style="height: 50px !important"
        />
      </div>
      <div>
        <p>
          Books Loaded: <strong>{{ collection.books.length }}</strong>
        </p>
        <button
          class="px-8 py-2 my-2 bg-blue-100 border-2 border-blue-600 bg-opacity-50"
          @click="bookCollectionStore.clearCollection()"
          style="height: 50px !important"
        >
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
