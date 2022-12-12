<template>
  <table class="min-w-full">
    <thead class="border-b">
      <tr>
        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Publisher
        </th>
        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Title
        </th>
        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
          Issue
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books" :key="book.issue" class="border-b">
        <td
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          {{ book.publisher }}
        </td>
        <td
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          {{ book.series }}
        </td>
        <td
          class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
        >
          {{ book.issue }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
export default {
  props: ["books"],
};
</script>
