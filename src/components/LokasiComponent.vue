<template>
  <div>
    <img
      src="@/assets/images/ranting_atas.png"
      alt="ranting atas"
      class="translate-x-[-60px] mt-20"
    />
    <div class="relative min-[376px]:h-[750px] max-[376px]:h-[680px]">
      <p
        class="absolute custom-font-kyiv min-[376px]:text-4xl max-[376px]:text-3xl translate-y-[-150px] right-0 mr-[100px]"
      >
        Lokasi
      </p>
      <FadeLapangan
        direction="text"
        class="absolute top-0 z-50 w-full"
        :threshold="0.8"
      >
        <div class="flex flex-col items-center justify-center text-center">
          <p class="custom-font-kulim text-xl font-bold mb-5">Akad Nikah :</p>
          <p class="custom-font-kulim text-xl font-bold">Graha YKP</p>
          <p class="custom-font-kulim text-xl w-[280px]">
            Jl. Medokan Asri Utara No.39, Medokan Ayu, Kec. Rungkut, Surabaya,
            Jawa Timur 60295
          </p>
          <p class="custom-font-kulim text-xl font-bold my-5">Akad Nikah :</p>
          <p class="custom-font-kulim text-xl font-bold">Graha YKP</p>
          <p class="custom-font-kulim text-xl w-[280px]">
            Jl. Medokan Asri Utara No.39, Medokan Ayu, Kec. Rungkut, Surabaya,
            Jawa Timur 60295
          </p>
          <ButtonMaps />
        </div>
      </FadeLapangan>
      <FadeLapangan direction="gunung" class="absolute z-10 w-full">
        <img src="@/assets/images/gunung.png" alt="gunung" class="w-full" />
      </FadeLapangan>
      <FadeLapangan direction="lapangan" class="absolute z-20 w-full">
        <img src="@/assets/images/lapangan.png" alt="lapangan" class="w-full" />
      </FadeLapangan>
      <!-- <FadeLapangan direction="semak" class="absolute z-30">
        <img
          src="@/assets/images/semak-semak.png"
          alt="semak semak"
          class="w-full translate-x-[-40px]"
        />
      </FadeLapangan> -->
      <FadeLapangan
        class="absolute right-0 bottom-0 w-[200px] z-40 translate-y-[-120px]"
        direction="pohon"
        :threshold="0.2"
      >
        <img src="@/assets/images/pohon_2.png" alt="pohon" class="w-full" />
      </FadeLapangan>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonMaps from './ButtonMaps.vue'
import FadeLapangan from './FadeLapangan.vue'
</script>
