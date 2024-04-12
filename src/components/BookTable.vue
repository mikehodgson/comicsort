<template>
  <h2 class="text-2xl mt-4 mb-4 font-bold">{{ title }} ( {{ books.length }} books)</h2>
  <hr class="border-black" />
  <table id="book-table" class="min-w-full" v-if="books.length > 0">
    <thead class="border-b border-gray-400">
      <tr>
        <th class="font-medium text-black px-4 py-2 text-left whitespace-nowrap">Publisher</th>
        <th class="font-medium text-black px-4 py-2 text-left whitespace-nowrap">Title</th>
        <th class="font-medium text-black px-4 py-2 text-left whitespace-nowrap">Issue</th>
        <th class="font-medium text-black px-4 py-2 text-left whitespace-nowrap">Release Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.issue" class="border-b">
        <td class="text-black font-normal px-4 py-1 whitespace-nowrap">
          {{ book.publisher }}
        </td>
        <td class="text-black font-normal px-4 py-1 whitespace-nowrap">
          {{ book.series }}
        </td>
        <td class="text-black font-normal px-4 py-1 whitespace-nowrap">
          {{ book.issue }}
        </td>
        <td class="text-black font-normal px-4 py-1 whitespace-nowrap">
          {{ useDateFormat(book.release_date, "YYYY-MM-DD").value }}
        </td>
      </tr>
    </tbody>
  </table>
  <p id="no-data-loaded" class="font-bold" v-else>No data file selected.</p>
</template>
<script setup lang="ts">
  import Book from "@/model/book";
  import { useDateFormat } from "@vueuse/core";

  interface Props {
    books?: Book[];
    title?: string;
  }

  withDefaults(defineProps<Props>(), {
    books: () => [] as Book[],
    title: "",
  });
</script>
