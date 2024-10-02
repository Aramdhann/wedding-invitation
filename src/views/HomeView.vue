<template>
  <div class="relative flex items-center justify-center min-h-screen overflow-hidden">
    <OpeningWord @openInvitationModal="handleInvitationOpen" />

    <img
      id="joglo"
      src="@/assets/images/joglo.png"
      alt="rumah joglo"
      :class="{
        'scale-[500%]': !isZoomed,
        'scale-[900%] -translate-y-[200px]': isZoomed,
        'opacity-100': imageVisible,
        'opacity-0': !imageVisible
      }"
      class="mt-[480px] transition-opacity duration-1000"
    />

    <!-- Modal with transition -->
    <transition name="modal-fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-if="isModalVisible" class="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-20">
        <div class="px-[50px] py-[56px] rounded-lg text-center bg-image flex flex-col items-center gap-9">
          <h2 class="text-3xl custom-font-playwrite">The Wedding of</h2>
          <img :src="sampleInitial" alt="initial nama pengantin">
          <h2 class="text-xl custom-font-playwrite">10 November 2024</h2>
          <p class="text-xl custom-font-kyiv">countdown</p>
          <Countdown endDate="2024-10-10T00:00:00Z"/>
          <button class="px-10 py-2 bg-[#B2CAB5] rounded-full hover:bg-[#A0B8A4] hover:scale-105 transform transition-all  duration-500">Ingatkan Saya</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import OpeningWord from '@/components/OpeningWord.vue';
import sampleInitial from '@/assets/images/sample_initial.png'
import Countdown from '@/components/Countdown.vue';

const isZoomed = ref(false); // Controls whether the image is zoomed in or not
const isModalVisible = ref(false); // Controls modal visibility
const imageVisible = ref(false); // Controls the opacity of the joglo image

// Function to handle invitation open event
const handleInvitationOpen = () => {
  isZoomed.value = true; // Zoom in the image
  setTimeout(() => {
    isModalVisible.value = true; // Show the modal after zoom-in
  }, 2500); // Delay the modal to match the zoom timing
};

// Function to close the modal
const closeModal = () => {
  isModalVisible.value = false;
};

onMounted(() => {
  setTimeout(() => {
    imageVisible.value = true; // Show the joglo image
  }, 1000);
});

// Transition callbacks for the modal
const beforeEnter = (el: Element) => {
  (el as HTMLElement).style.opacity = '0'; // Start from invisible
};

const enter = (el: Element, done: () => void) => {
  (el as HTMLElement).offsetHeight; // trigger reflow
  (el as HTMLElement).style.transition = 'opacity 1s ease'; // Set transition
  (el as HTMLElement).style.opacity = '1'; // Fade in
  done();
};

const leave = (el: Element, done: () => void) => {
  (el as HTMLElement).style.transition = 'opacity 1s ease'; // Set transition
  (el as HTMLElement).style.opacity = '0'; // Fade out
  done();
};
</script>

<style scoped>
#joglo {
  transition: transform 2s ease-in-out, opacity 1s ease-in-out;
}

/* You can customize the modal fade transition here if needed */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 1s ease;
}
.modal-fade-enter, .modal-fade-leave-to /* .modal-fade-leave-active in <2.1.8 */ {
  opacity: 0; /* Fade out */
}
.bg-image {
  background-image: url('../assets/images/background.jpg');
}
</style>
