<template>
  <div>
    <!-- bubble chat -->
    <div class="flex gap-4">
      <div class="icon-circle custom-font-playwrite-modern">{{ firstLetter }}</div>
      <div>
        <div class="flex gap-2 mb-2 text-white">
          <p class="whitespace-normal">{{ name }}</p>
          <span> - </span>
          <div class="flex items-center justify-center">
            <img :src="statusClass" alt="status icon" class="w-5 h-5"/>
          </div>
        </div>
        <div class="flex">
          <div class="w-4 overflow-hidden">
            <div
              class="h-3 bg-white rotate-45 transform origin-bottom-right rounded-sm"
            ></div>
          </div>
          <div
            class="bg-white opacity-[88%] p-3 rounded-e-[20px] rounded-bl-[20px] max-w-[250px]"
          >
            <p class="whitespace-normal">
              <slot></slot>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import hadirIcon from '../assets/images/hadir.png'
import tidakHadirIcon from '../assets/images/tidak_hadir.png'

const props = defineProps<{
  name: string
  status: 'Hadir' | 'Tidak Hadir'
}>()

const statusClass = computed(() => {
  return props.status === 'Hadir' ? hadirIcon : tidakHadirIcon
})

const firstLetter = computed(() => {
  return props.name.charAt(0).toUpperCase() // Get the first letter and convert it to uppercase
})
</script>

<style scoped>
/* Chat Bubble Style */
.icon-circle {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: flex;
  align-items: center;  /* Center vertically */
  justify-content: center; /* Center horizontally */
  font-weight: bold; /* Make the letter bold */
  color: #333; /* Text color for better contrast */
}
</style>
