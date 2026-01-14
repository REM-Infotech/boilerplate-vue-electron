<script setup lang="ts">
import Navbar from "@/components/HeaderView.vue";
import { BApp } from "bootstrap-vue-next";
import { RouterView } from "vue-router";
</script>

<template>
  <BApp>
    <div class="content-app">
      <Navbar />
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
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

.page-enter-active,
.page-leave-active {
  transition:
    transform 0.5s,
    opacity 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
