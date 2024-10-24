<template>
  <div id="countdown" class="text-xl custom-font-kyiv">
    <div v-if="!expired" class="flex gap-5">
      <div class="flex flex-col items-center w-fit">
        <span class="bg-gray-300 p-3 rounded-lg w-[55px]">{{ days }}</span>
        <p class="text-sm">days</p>
      </div>
      <div class="flex flex-col items-center w-fit">
        <span class="bg-gray-300 p-3 rounded-lg w-[55px]">{{ hours }}</span>
        <p class="text-sm">hours</p>
      </div>
      <div class="flex flex-col items-center w-fit">
        <span class="bg-gray-300 p-3 rounded-lg w-[55px]">{{ minutes }}</span>
        <p class="text-sm">minutes</p>
      </div>
    </div>
    <div v-else class="animate-bounce">Today is the day 💖</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  endDate: string // Pass the end date as a prop
}>()

const end = new Date(props.endDate)
const _second = 1000
const _minute = _second * 60
const _hour = _minute * 60
const _day = _hour * 24

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const expired = ref(false)
let timer: ReturnType<typeof setInterval>

function showRemaining() {
  const now = new Date()
  const distance = end.getTime() - now.getTime()

  if (distance < 0) {
    clearInterval(timer)
    expired.value = true
    return
  }

  days.value = Math.floor(distance / _day)
  hours.value = Math.floor((distance % _day) / _hour)
  minutes.value = Math.floor((distance % _hour) / _minute)
  seconds.value = Math.floor((distance % _minute) / _second)
}

onMounted(() => {
  showRemaining() // Show initial countdown
  timer = setInterval(showRemaining, 1000) // Update every second
})

onUnmounted(() => {
  clearInterval(timer) // Clean up timer when component is destroyed
})
</script>

