<template>
  <h2 class="text-2xl mt-4 mb-4 font-bold">
    {{ title }} ( {{ books.length }} books)
  </h2>
  <hr class="border-black" />
  <table class="min-w-full" v-if="books.length > 0">
    <thead class="border-b border-gray-400">
      <tr>
        <th class="font-medium text-black px-4 py-2 text-left">Publisher</th>
        <th class="font-medium text-black px-4 py-2 text-left">Title</th>
        <th class="font-medium text-black px-4 py-2 text-left">Issue</th>
        <th class="font-medium text-black px-4 py-2 text-left">Release Date</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.issue" class="border-b">
        <td class="text-black font-normal px-4 py-2 whitespace-nowrap">
          {{ book.publisher }}
        </td>
        <td class="text-black font-normal px-4 py-2 whitespace-nowrap">
          {{ book.series }}
        </td>
        <td class="text-black font-normal px-4 py-2 whitespace-nowrap">
          {{ book.issue }}
        </td>
        <td class="text-black font-normal px-4 py-2 whitespace-nowrap">
          {{ formatDate(book.release_date) }}
        </td>
      </tr>
    </tbody>
  </table>
  <p class="font-bold" v-else>No data file selected.</p>
</template>
<script setup lang="ts">
  import Book from "@/model";
  import { useDateFormat } from "@vueuse/core";
  import { type PropType } from "vue";

  defineProps({
    books: {
      type: Array as PropType<Book[]>,
      default: () => [],
    },
    title: {
      type: String,
      default: () => "",
    },
  });

  const formatDate = (dt: Date) => {
    return useDateFormat(dt, "YYYY-MM-DD");
  };
</script>
