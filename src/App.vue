<script setup lang="ts">
import MusicPlayer from './components/MusicPlayer.vue';
</script>

<template>
  <div data-scroll-container class="mobile-view scroll-smooth">
    <div data-scroll data-scroll-speed="-2">
      <MusicPlayer/>
      <RouterView></RouterView>
    </div>
  </div>
</template>
