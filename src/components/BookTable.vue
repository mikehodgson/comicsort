<template>
  <table class="min-w-full" v-if="books.length > 0">
    <thead class="border-b border-blue-900">
      <tr>
        <th class="font-medium text-gray-900 px-4 py-2 text-left">Publisher</th>
        <th class="font-medium text-gray-900 px-4 py-2 text-left">Title</th>
        <th class="font-medium text-gray-900 px-4 py-2 text-left">Issue</th>
        <th class="font-medium text-sm text-gray-900 px-4 py-2 text-left">
          Release Date<br />(YYYY-MM-DD)
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.issue" class="border-b">
        <td class="text-gray-900 font-light px-4 py-2 whitespace-nowrap">
          {{ book.publisher }}
        </td>
        <td class="text-gray-900 font-light px-4 py-2 whitespace-nowrap">
          {{ book.series }}
        </td>
        <td class="text-gray-900 font-light px-4 py-2 whitespace-nowrap">
          {{ book.issue }}
        </td>
        <td class="text-gray-900 font-light px-4 py-2 whitespace-nowrap">
          {{ formatDate(book.release_date) }}
        </td>
      </tr>
    </tbody>
  </table>
  <p class="font-bold" v-else>No data file selected.</p>
</template>
<script lang="ts">
import dayjs from "dayjs";
export default {
  props: ["books"],
  methods: {
    formatDate(dateString: any) {
      const date = dayjs(dateString);
      return date.format("YYYY-MM-DD");
    },
  },
};
</script>
