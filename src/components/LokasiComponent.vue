<template>
  <div>
    <img
      src="@/assets/images/ranting_atas.png"
      alt="ranting atas"
      class="translate-x-[-60px] mt-20 mb-[-80px]"
    />
    <div class="relative min-[376px]:h-[800px] max-[376px]:h-[790px]">
      <p
        class="absolute custom-font-kyiv text-3xl translate-y-[-100px] w-full text-center"
      >
        Lokasi
      </p>
      <FadeLapangan
        direction="pohon"
        class="absolute top-0 right-0 z-50"
      >
        <img
          src="@/assets/images/pohon_rev1.png"
          alt="pohon"
          class="w-[280px]"
        />
      </FadeLapangan>
      <img
        src="@/assets/images/pohon_rev1.png"
        alt="pohon"
        class="absolute right-0 z-40 w-1/2 translate-y-[-280px] translate-x-[100px]"
      />

      <FadeLapangan direction="text" class="absolute z-40 w-full pt-10">
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
      <FadeLapangan
        direction="semak"
        class="absolute bottom-0 w-full z-30 h-[900px]"
      >
        <img
          src="@/assets/images/semak.png"
          alt="semak semak"
          class="absolute bottom-0 w-full"
        />
      </FadeLapangan>
      <!-- <FadeLapangan
        class="absolute right-0 bottom-0 w-[200px] z-40 translate-y-[-120px]"
        direction="pohon"
        :threshold="0.2"
      >
        <img src="@/assets/images/pohon_2.png" alt="pohon" class="w-full" />
      </FadeLapangan> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonMaps from './ButtonMaps.vue'
import FadeLapangan from './FadeLapangan.vue'
</script>
