<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <MainHeader />
    <RouterView />
  </div>
</template>
<style></style>
