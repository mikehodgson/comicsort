<script setup lang="ts">
  import AppConstants from "@/data/constants";
</script>

<template>
  <h1 class="text-3xl font-bold mb-4 no-print">
    {{ AppConstants.APPNAME }} {{ AppConstants.VERSION }}
  </h1>
  <hr class="mb-4 border-blue-700 no-print" />
</template>
