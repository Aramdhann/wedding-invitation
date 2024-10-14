<template>
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
      <div class="flex flex-col items-center justify-center min-h-screen gap-9"
        data-aos="zoom-in">
        <h2 class="text-3xl custom-font-playwrite">
          The Wedding of <br />
          <span class="flex justify-center mt-4 text-xl custom-font-kyiv"
            >Hanifah & Prima</span
          >
        </h2>
        <img :src="logoInitial" alt="initial nama pengantin" />
        <h2 class="text-xl custom-font-playwrite">10 November 2024</h2>
        <p class="text-xl custom-font-kyiv">countdown</p>
        <Countdown endDate="2024-11-10T00:00:00Z" />
        <ButtonCalendar />
      </div>
      <div
        class="min-h-screen flex justify-center items-center"
        data-aos="zoom-in"
      >
        <div class="bg-red-500 w-full p-5 text-center">
          after the weeding of 10 November 2024
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import OpeningWord from '@/components/OpeningWord.vue'
import JogloWindowClosed from '@/assets/images/joglo_new.png'
import JogloWindowOpen from '@/assets/images/joglo_new_open.png'
import logoInitial from '@/assets/images/initial.png'
import ButtonCalendar from '@/components/ButtonCalendar.vue'
import Countdown from '@/components/Countdown.vue'

const overflowVisible = ref(false)
const imageVisible = ref(false)
const imageZoom = ref(false)
const openJoglo = ref(false)
const imageZoomAgain = ref(false)
const imageDissappeared = ref(false)
const hideObject = ref(false)

const handleInvitationOpen = () => {
  imageZoom.value = true
  setTimeout(() => {
    openJoglo.value = true
    setTimeout(() => {
      imageZoomAgain.value = true
      setTimeout(() => {
        imageDissappeared.value = true
        imageVisible.value = false
        setTimeout(() => {
          hideObject.value = true
          overflowVisible.value = true
        }, 1500)
      }, 1500)
    }, 2300)
  }, 2000)
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
