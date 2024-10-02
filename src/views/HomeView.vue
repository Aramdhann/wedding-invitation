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
        <div class="p-5 rounded-lg text-center bg-image">
          <h2 class="text-2xl font-bold">Invitation Modal</h2>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import OpeningWord from '@/components/OpeningWord.vue';

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
