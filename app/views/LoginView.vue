<script setup lang="ts">
import { computed } from "vue";

const sistema = computed(() => import.meta.env.VITE_APP_NAME);
</script>

<template>
  <div class="card card-login ms-auto me-auto">
    <div class="d-flex justify-content-center mt-2">
      <span class="fw-bold fs-5"> Login {{ sistema }} </span>
    </div>
    <div class="card-body">
      <BRow> </BRow>
    </div>
  </div>
</template>
<style lang="css" scoped>
.card-login {
  box-sizing: border-box;
  margin-top: 7.5rem;
  height: 65%;
  width: 27.5%;
}
</style>
