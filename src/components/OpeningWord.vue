<template>
  <div
    class="absolute flex flex-col items-center justify-center z-10 transition-opacity duration-300"
    :class="{
      'opacity-0 pointer-events-none': !OpeningWordVisible,
      'opacity-100': OpeningWordVisible,
      'display-none': hideObject,
    }"
  >
    <p
      :class="{
        'opacity-0 pointer-events-none': !showInvitationText,
        'opacity-100': showInvitationText,
        'display-none': hideObject,
      }"
      class="text-white text-2xl custom-font-kyiv text-center transition-opacity"
    >
      <span v-if="capitalizedName">
        Halo, {{ capitalizedName }} <br />
        You are invited to our wedding!
      </span>
      <span v-else> Sorry, you are not invited to this wedding. </span>
    </p>
    <button
      v-if="capitalizedName"
      @click="openInvitation"
      :class="{
        'opacity-0 pointer-events-none': !showInvitationText,
        'opacity-100': showInvitationText,
        'display-none': hideObject,
      }"
      class="px-10 py-2 bg-[#B2CAB5] rounded-full mt-[130px] hover:bg-[#A0B8A4] hover:scale-105 transform transition-all duration-300"
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

const showInvitationText = ref(true)
const OpeningWordVisible = ref(false)
const hideObject = ref(false)

const emit = defineEmits<{
  (e: 'openInvitation', value: boolean): void
  (e: 'playAudio', value: boolean): void
}>()

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

const formattedName = name.replace(/[+]/g, ' ').toLowerCase()

const capitalizedName = ref('')
const formattedInvitationList = invitationList.map(capitalizeWords);

if (formattedName) {
  const nameToCheck = capitalizeWords(formattedName)
  const isInvited = formattedInvitationList.includes(nameToCheck)
  if (isInvited) {
    capitalizedName.value = nameToCheck
  }
}

const openInvitation = () => {
  showInvitationText.value = false
  emit('openInvitation', false)
  setTimeout(() => {
    hideObject.value = true
  }, 500)
}

onMounted(() => {
  setTimeout(() => {
    OpeningWordVisible.value = true
  }, 3000)
})
</script>
