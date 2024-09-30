<template>
  <div class="relative flex items-center justify-center min-h-lvh overflow-hidden">
    <OpeningWord/>
    <img
      id="joglo"
      src="@/assets/images/joglo.png"
      alt="rumah joglo"
      class="scale-[500%] mt-[350px] opacity-0 transition-opacity duration-1000"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import OpeningWord from '@/components/OpeningWord.vue'

onMounted(() => {
  setTimeout(() => {
    const joglo = document.getElementById("joglo");
    if (joglo) {
      joglo.classList.add("opacity-100");
    }
  }, 1000);
});
</script>

<style scoped></style>
