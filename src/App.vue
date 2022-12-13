<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import AppConstants from "./data/constants";
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <MainHeader />
    <RouterView />
  </div>
</template>
<style></style>
<script lang="ts">
export default {
  created () {
    document.title = `${AppConstants.APPNAME} ${AppConstants.VERSION}`;
  }
}
</script>
