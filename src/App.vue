<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold">
      Hello world!
    </h1>
    <RouterView />
  </div>
</template>
<style>
</style>