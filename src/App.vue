<template>
  <div class="container mx-auto px-4 py-8">
    <MainHeader />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { RouterView } from "vue-router";
  import MainHeader from "./components/MainHeader.vue";
  import AppConstants from "./data/constants";

  document.title = `${AppConstants.APPNAME} ${AppConstants.VERSION}`;
</script>
