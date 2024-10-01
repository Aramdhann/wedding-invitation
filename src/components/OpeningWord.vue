<template>
  <div
    id="OpeningWord"
    class="absolute flex flex-col items-center justify-center z-10 opacity-0 transition-opacity duration-300"
  >
    <p class="text-white text-2xl custom-font-kyiv text-center w-3/4">
      <span v-if="name">Halo, {{ name }} You are invited to our wedding!</span>
      <span v-else>Sorry, you are not invited to this wedding</span>
    </p>
    <button v-if="name"
      class="px-10 py-2 bg-[#B2CAB5] rounded-full mt-[130px] duration-500 hover:bg-[#A0B8A4] hover:scale-105 transform transition-all"
    >
      Buka Undangan
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.name

onMounted(() => {
  setTimeout(() => {
    const openingWord = document.getElementById('OpeningWord')
    if (openingWord) {
      openingWord.classList.add('opacity-100')
    }
  }, 2500)
})
</script>

<style scoped></style>
