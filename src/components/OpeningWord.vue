<template>
  <div
    id="OpeningWord"
    class="absolute flex flex-col items-center justify-center z-10 opacity-0 transition-opacity duration-300"
  >
    <p class="text-white text-2xl custom-font-kyiv text-center w-5/6">
      <span v-if="capitalizedName">
        Halo, {{ capitalizedName }} You are invited to our wedding!
      </span>
      <span v-else>
        Sorry, you are not invited to this wedding.
      </span>
    </p>
    <button
      v-if="capitalizedName"
      class="px-10 py-2 bg-[#B2CAB5] rounded-full mt-[130px] duration-500 hover:bg-[#A0B8A4] hover:scale-105 transform transition-all"
    >
      Buka Undangan
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import invitationList from '@/store/list_invitation.json'

// Cast route parameter to string
const route = useRoute()
const name = route.params.name as string 

// Function to capitalize each word in the name
function capitalizeWords(name: string) {
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Replace '+' with space to compare with the original list
const formattedName = name.replace(/[+]/g, ' ').toLowerCase();

// Ref to hold the capitalized name
const capitalizedName = ref('')

// Check if the formatted name exists in the invitation list
if (formattedName) {
  const isInvited = invitationList.includes(formattedName);
  if (isInvited) {
    capitalizedName.value = capitalizeWords(formattedName);
  }
}

onMounted(() => {
  setTimeout(() => {
    const openingWord = document.getElementById('OpeningWord')
    if (openingWord) {
      openingWord.classList.add('opacity-100')
    }
  }, 2500)
})
</script>

<style scoped></style>
