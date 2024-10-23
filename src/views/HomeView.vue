<template>
  <MusicPlayer :playAudio="playAudio"/>
  <div
    :class="{
      'overflow-visible': overflowVisible,
    }"
    class="relative flex items-center justify-center min-h-screen overflow-hidden"
  >
    <OpeningWord @openInvitation="handleInvitationOpen" />

    <img
      v-if="!hideObject"
      :src="jogloImageSrc"
      alt="rumah joglo"
      class="duration-[2000ms] ease-in-out"
      :class="{
        'opacity-0 pointer-events-none': !imageVisible || imageDissappeared,
        'opacity-100': imageVisible && !imageDissappeared,
        'scale-[320%] -translate-y-[-200px]': !imageZoom,
        'scale-[440%]': imageZoom,
        'scale-[900%]': imageZoomAgain,
      }"
    />

    <div v-if="hideObject">
      <FadeComponent
      direction="bottom"
        class="flex flex-col items-center justify-center text-center min-h-screen gap-9"
      >
        <h2 class="text-3xl custom-font-playwrite">
          The Wedding of <br />
          <span class="flex justify-center mt-4 text-2xl custom-font-kulim"
            >Hanifah & Prima</span
          >
        </h2>
        <img :src="logoInitial" alt="initial nama pengantin" />
        <h2 class="text-xl custom-font-playwrite">10 November 2024</h2>
        <p class="text-xl custom-font-kyiv">countdown</p>
        <Countdown endDate="2024-11-10T00:00:00Z" />
        <!-- <ButtonCalendar /> -->
      </FadeComponent>

      <AwanComponent />

      <SuratComponent/>

      <LokasiComponent/>

      <CommentComponent/>
      
      <DoaComponent/>
      <!-- <div style="height: 1000px" class="border border-black"></div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, Comment } from 'vue'
import OpeningWord from '@/components/OpeningWord.vue'
import JogloWindowClosed from '@/assets/images/joglo_new.png'
import JogloWindowOpen from '@/assets/images/joglo_new_open.png'
import logoInitial from '@/assets/images/initial.png'
import Countdown from '@/components/Countdown.vue'
import FadeComponent from '@/components/FadeComponent.vue'
import AwanComponent from '@/components/AwanComponent.vue'
import SuratComponent from '@/components/SuratComponent.vue'
import LokasiComponent from '@/components/LokasiComponent.vue'
import DoaComponent from '@/components/DoaComponent.vue'
import CommentComponent from '@/components/CommentComponent.vue'
import MusicPlayer from '@/components/MusicPlayer.vue'

const overflowVisible = ref(false)
const imageVisible = ref(false)
const imageZoom = ref(false)
const openJoglo = ref(false)
const imageZoomAgain = ref(false)
const imageDissappeared = ref(false)
const hideObject = ref(false)
const playAudio = ref(false)

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const handleInvitationOpen = async () => {
  imageZoom.value = true
  await delay(1500) // Delay for first zoom

  openJoglo.value = true
  await delay(500) // Delay before second zoom

  imageZoomAgain.value = true
  await delay(1000) // Delay for image zoom out

  imageDissappeared.value = true
  imageVisible.value = false
  await delay(1000) // Delay for fade out

  hideObject.value = true
  overflowVisible.value = true
  playAudio.value = true
}

const jogloImageSrc = computed(() => {
  return openJoglo.value ? JogloWindowOpen : JogloWindowClosed
})

onMounted(() => {
  setTimeout(() => {
    imageVisible.value = true
  }, 2000)
})
</script>
