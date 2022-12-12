<script setup lang="ts">
import { walkBlockDeclarations } from "@vue/compiler-core";
import FileSelector from "../components/FileSelector.vue";
import BookTable from "../components/BookTable.vue";
import BookCollection from "../model/bookCollection";
</script>

<template>
  <main>
    <FileSelector @fileSelected="onFileSelected" />
    <BookTable v-bind:books="collection.books" />
  </main>
</template>

<script lang="ts">
export default {
  data() {
    return {
      collection: new BookCollection(),
    };
  },
  methods: {
    onFileSelected(file: File) {
      var _self = this;
      let fr = new FileReader();
      fr.onload = function (e) {
        let contents = e.target?.result;
        _self.collection.loadFromText(contents);
      };
      fr.readAsText(file);
    },
  },
};
</script>
