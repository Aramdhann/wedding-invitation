<template>
  <div class="fixed right-5 bottom-5 z-[9999]">
    <button
      @click="toggleMusic"
      :class="{ 'animate-slow-spin': isPlaying }"
      class="bg-rose-300 rounded-full p-3 shadow-md"
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

    <audio ref="audioElement" :src="audio" loop muted></audio>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const audio = '/backsound.mp3';
const audioElement = ref<HTMLAudioElement | null>(null);
const isPlaying = ref<boolean>(false);

// Function to play audio
const playAudio = () => {
  if (audioElement.value) {
    audioElement.value.muted = false; // Unmute
    audioElement.value.play().then(() => {
      isPlaying.value = true; // Set isPlaying to true when audio plays
    }).catch((error) => {
      console.error('Failed to play audio:', error);
    });
  }
};

// Function to toggle music play/pause
const toggleMusic = () => {
  if (audioElement.value) {
    if (isPlaying.value) {
      audioElement.value.pause();
      isPlaying.value = false; // Set isPlaying to false when paused
    } else {
      audioElement.value.currentTime = 0; // Reset to the start
      playAudio(); // Call playAudio to play the audio
    }
  }
};

// On component mounted, play audio when all content has loaded
onMounted(() => {
  window.onload = playAudio;
});
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
