<template>
  <div
    id="OpeningWord"
    class="absolute flex flex-col items-center justify-center z-10 opacity-0 transition-opacity duration-300"
  >
    <p
      :class="{'opacity-0': !showInvitationText, 'opacity-100': showInvitationText}"
      class="text-white text-2xl custom-font-kyiv text-center w-5/6 transition-opacity duration-1000"
    >
      <span v-if="capitalizedName">
        Halo, {{ capitalizedName }} You are invited to our wedding!
      </span>
      <span v-else> Sorry, you are not invited to this wedding. </span>
    </p>
    <button
      v-if="capitalizedName"
      @click="openInvitation"
      :class="{'opacity-0': !showInvitationText, 'opacity-100': showInvitationText}"
      class="px-10 py-2 bg-[#B2CAB5] rounded-full mt-[130px] duration-500 hover:bg-[#A0B8A4] hover:scale-105 transform transition-opacitytransition-all"
    >
      Buka Undangan
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineEmits } from 'vue'
import { useRoute } from 'vue-router'
import invitationList from '@/store/list_invitation.json'

// Cast route parameter to string
const route = useRoute()
const name = route.params.name as string

const showInvitationText = ref(true)
const emit = defineEmits(['openInvitationModal'])

// Function to capitalize each word in the name
function capitalizeWords(name: string) {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Replace '+' with space to compare with the original list
const formattedName = name.replace(/[+]/g, ' ').toLowerCase()

// Ref to hold the capitalized name
const capitalizedName = ref('')

// Check if the formatted name exists in the invitation list
if (formattedName) {
  const isInvited = invitationList.includes(formattedName)
  if (isInvited) {
    capitalizedName.value = capitalizeWords(formattedName)
  }
}

const openInvitation = () => {
  showInvitationText.value = false // hide the invitation text
  emit('openInvitationModal')
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
