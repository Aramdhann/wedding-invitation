<template>
  <div class="fixed bottom-3 ms-3 z-[9999]">
    <button
      @click="toggleMusic"
      :class="{ 'animate-slow-spin': isPlaying }"
      class="bg-rose-300 rounded-full p-3 shadow-md mt-auto"
    >
      <span v-if="isPlaying">
        <img
          src="@/assets/images/pause_icon.png"
          alt="pause"
          class="w-[16px]"
        />
      </span>
      <span v-else>
        <img src="@/assets/images/play_icon.png" alt="play" class="w-[16px]" />
      </span>
    </button>

    <audio ref="audioElement" :src="audio" autoplay loop muted></audio>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const audio = '/backsound.mp3'
const audioElement = ref<HTMLAudioElement | null>(null)
const isPlaying = ref<boolean>(false)

const props = defineProps<{
  playAudio?: boolean
}>()

// Function to play audio
const playAudio = () => {
  if (audioElement.value) {
    audioElement.value.muted = false // Unmute for playback
    const promise = audioElement.value.play()

    if (promise !== undefined) {
      promise
        .then(() => {
          isPlaying.value = true
          console.log('Audio is playing')
        })
        .catch((error) => {
          console.error('Failed to play audio:', error)
        })
    }
  }
}

// Function to toggle music play/pause
const toggleMusic = () => {
  if (audioElement.value) {
    if (isPlaying.value) {
      audioElement.value.pause()
      isPlaying.value = false
    } else {
      audioElement.value.currentTime = 0
      playAudio()
    }
  }
}

watch(
  () => props.playAudio,
  (newValue) => {
    if (newValue) {
      playAudio()
    }
  }
)
</script>

<style scoped>
@keyframes slow-spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-slow-spin {
  animation: slow-spin 8s linear infinite;
}
</style>
