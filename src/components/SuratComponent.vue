<template>
  <div class="relative h-[710px] flex items-center justify-center">
    <!-- amplop tertutup -->
    <FadeSuratTertutup class="absolute bottom-0 z-50 w-full">
      <img
        src="@/assets/images/surat_tertutup.png"
        alt="surat tertutup"
        class="w-full px-5"
      />
    </FadeSuratTertutup>

    <!-- amplop terbuka -->
    <FadeSurat
      class="absolute bottom-0 z-40 w-full flex justify-center items-center"
    >
      <img
        src="@/assets/images/surat_terbuka_2.png"
        alt="surat terbuka 2"
        class="w-full px-5"
      />
    </FadeSurat>

    <!-- surat -->
    <FadeIsiSurat
      class="absolute bottom-0 z-30 translate-y-[-100px] flex flex-col justify-center items-center"
      direction="bottom"
    >
      <div
        class="h-[530px] w-[290px] bg-gradient-to-t from-[#FAF8F7] to-[#EFEBE9] rounded-lg shadow-lg text-center py-10 flex flex-col gap-3 z-10"
      >
        <p class="custom-font-kyiv text-2xl font-bold">Acara</p>
        <div v-if="listedAkad">
          <p class="text-md custom-font-instrument mt-3">Akad Nikah</p>
          <p class="text-md custom-font-instrument">
            Minggu <br />
            10 November 2024 <br />
            07.30 - 09.00
          </p>
        </div>
        <div v-else>
          <p class="text-md custom-font-instrument mt-3">Resepsi</p>
          <p class="text-md custom-font-instrument">
            Minggu <br />
            10 November 2024 <br />
            10.30 - 12.30
          </p>
        </div>
      </div>
      <div class="absolute bottom-0 z-50 translate-y-[-240px]">
        <ButtonCalendar />
      </div>
    </FadeIsiSurat>

    <FadeSurat class="absolute bottom-0 z-20 w-full">
      <img
        src="@/assets/images/surat_terbuka.png"
        alt="surat terbuka"
        class="w-full px-5"
      />
    </FadeSurat>
  </div>
</template>

<script setup lang="ts">
import ButtonCalendar from './ButtonCalendar.vue'
import FadeIsiSurat from './FadeIsiSurat.vue'
import FadeSurat from './FadeSurat.vue'
import FadeSuratTertutup from './FadeSuratTertutup.vue'
import invitationAkad from '@/store/list_invitation_akad.json'
import { useRoute } from 'vue-router'

const route = useRoute();
const name = route.params.name as string;
const formattedName = name.replace(/[+]/g, ' ').toLowerCase();

function capitalizeWords(name: string) {
  return name
    .split(' ')
    .map((word) => {
      // const match = word.match(/^\((\w)/);
      if (word.startsWith('(') && word.endsWith(')')) {
        return `(${word.charAt(1).toUpperCase()}${word
          .slice(2, -1)
          .toLowerCase()})`
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      }
    })
    .join(' ')
}

const listedAkad = invitationAkad.includes(capitalizeWords(formattedName)) 
</script>
