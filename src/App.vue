<script setup lang="ts">
import { BApp } from "bootstrap-vue-next";
import { RouterView } from "vue-router";
</script>

<template>
  <BApp>
    <div class="content-app">
      <RouterView />
    </div>
  </BApp>
</template>

<style lang="css" scoped>
.content-app {
  width: 100dvw;
  height: 100dvh;

  max-width: 100%;
  max-height: 100%;

  overflow: hidden;
}
</style>
