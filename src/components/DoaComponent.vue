<template>
  <div class="flex flex-col justify-center items-center">
    <div class="mt-24 p-20">
      <FadeComponent
        direction="text"
        class="flex flex-col items-center justify-center text-center"
      >
        <p
          class="custom-font-playwrite-modern font-bold max-[376px]:text-lg min-[376px]:text-xl mb-5"
        >
          Q.S Ar Rum
        </p>
        <p
          class="custom-font-kulim min-[376px]:text-[17px] w-[290px] leading-[18px]"
        >
          “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu
          isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa
          tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan
          sayang.”
        </p>
        <p
          class="custom-font-playwrite-modern min-[376px]:text-xl max-[376px]:text-lg leading-1 w-[230px] mt-10"
        >
          Terima Kasih Kami mengharapkan kedatangan Anda
        </p>
      </FadeComponent>
    </div>
    <div class="mt-[-50px] w-[200px] border">
      <img src="@/assets/images/gunungan.png" alt="gunungan" />
    </div>
  </div>
</template>

<script setup lang="ts">
import FadeComponent from './FadeComponent.vue'
</script>
