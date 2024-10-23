<template>
  <div class="flex flex-col items-center">
    <FadeAwan direction="right" :threshold="0.8">
      <img
        src="../assets/images/awan_1.png"
        alt="awan_1"
        class="translate-x-[30%] mt-[-50px]"
      />
    </FadeAwan>
    <FadeAwan direction="left" :threshold="0.8">
      <img
        src="../assets/images/awan_2.png"
        alt="awan_2"
        class="translate-x-[-30%] mt-[-80px]"
      />
    </FadeAwan>
    <FadeAwan direction="left" :threshold="0.8">
      <img
        src="../assets/images/awan_3.png"
        alt="awan_3"
        class="translate-x-[-10%] mt-[-100px]"
      />
    </FadeAwan>
    <FadeAwan direction="right" :threshold="0.8">
      <img
        src="../assets/images/awan_4.png"
        alt="awan_4"
        class="translate-x-[30%] mt-[-60px] w-3/4 ml-auto"
      />
    </FadeAwan>

    <FadeComponent class="absolute z-40" :threshold="0.9">
      <div class="relative w-3/4 mx-auto flex flex-col gap-10">
        <p class="text-center custom-font-kulim">Bismillahirrahmanirrahim</p>
        <p class="text-center mx-auto custom-font-kulim">
          Kami mengundang Bapak/Ibu untuk hadir pada hari bahagia kami
        </p>
        <p
          class="text-center font-bold text-base sm:text-xl custom-font-playwrite leading-relaxed"
        >
          Prima Adiya Septianugraha
        </p>
        <p class="text-center custom-font-playwrite-modern">
          (putra dari Bapak Suhardiyono dan Ibu Sugiyati)
        </p>
        <p class="text-center text-base custom-font-playwrite-modern font-bold">
          &
        </p>
        <p
          class="text-center font-bold text-base sm:text-xl custom-font-playwrite leading-relaxed"
        >
          Hanifah Dwi Adiratna
        </p>
        <p class="text-center custom-font-playwrite-modern">
          (putri dari Bapak Mufti Arimurti dan Ibu Indah Susiawati)
        </p>
        <!-- <div class="absolute bottom-0 right-0 translate-y-[270px] translate-x-[70px] border border-black"> -->

        <!-- </div> -->
      </div>
    </FadeComponent>
    <!-- <FadeBurung class="translate-y-[230px] translate-x-[-90px]" direction="burung2">
      <img
        src="@/assets/images/bird_2.png"
        alt="burung terbang 2"
        class="burung2"
      />
    </FadeBurung> -->
    <FadeBurung class="translate-y-[150px]" direction="burung3">
      <img
        src="@/assets/images/bird_3.png"
        alt="burung terbang 3"
        class="burung3"
      />
    </FadeBurung>
    <FadeBurung>
      <img
        src="@/assets/images/bird_4.png"
        alt="burung hinggap"
        class="translate-x-[80px] max-[376px]:mt-20 min-[392px]:mt-10"
      />
    </FadeBurung>
    <img
      src="@/assets/images/branch_1.png"
      alt="ranting"
      class="w-[200px] ml-auto translate-y-[-80px] max-[376px]:mt-5 max-[376px]:w-[150px] min-[392px]:w-[150px] min-[392px]:mt-5"
    />

    <img
      src="@/assets/images/branch_1.png"
      alt="ranting"
      class="absolute translate-y-[480px] w-[200px] left-0 max-[376px]:mt-5 max-[376px]:w-[200px] min-[392px]:w-[200px] min-[392px]:mt-5 z-50 scale-x-[-1]"
    />
    <!-- <FadeBurung class="absolute top-1/2">
      <img src="@/assets/images/bird_2.png" alt="burung terbang 2" />
    </FadeBurung> -->
  </div>
</template>

<script setup lang="ts">
import FadeAwan from '@/components/FadeAwan.vue'
import FadeComponent from './FadeComponent.vue'
import FadeBurung from './FadeBurung.vue'
</script>
