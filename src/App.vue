<template>
  <div class="container mx-auto">
    <MainHeader />

    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { RouterView } from "vue-router";
  import MainHeader from "@/components/MainHeader.vue";
  import AppConstants from "@/data/constants";

  document.title = `${AppConstants.appName} ${AppConstants.version}`;
</script>
