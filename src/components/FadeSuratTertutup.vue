<template>
  <div
    ref="section"
    :class="['fade-in-section', isVisible ? 'visible' : '', direction]"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue'

// Define props for the direction of the animation
const props = defineProps({
  direction: {
    type: String,
    default: 'default', // 'default', 'left', or 'right'
  },
  threshold: {
    type: Number,
    default: 0.5, // Default threshold 50%
  },
  delay: {
    type: Number,
    default: 1950,
  },
})

const isVisible = ref(false)
const section = ref<HTMLElement | null>(null)

onMounted(() => {
  if (section.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting

          //   if (entry.isIntersecting) {
          //     setTimeout(() => {
          //       isVisible.value = true
          //     }, props.delay)
          //   } else {
          //     isVisible.value = false
          //   }
        })
      },
      {
        threshold: props.threshold, // Trigger when 50% of the component is visible
      }
    )
    observer.observe(section.value)
  }
})
</script>
<style scoped>
.fade-in-section {
  opacity: 1;
  /* visibility: visible; */
  /* transition: opacity 0.2s ease-in-out; */
  transition: opacity 0.3s ease-out 0s, transform 1s ease-out 0s;
}

.fade-in-section.visible {
  opacity: 0;
  /* visibility: hidden; */
  /* transition: opacity 0.2s ease-in-out; */
  transition: opacity 0.3s ease-out 0.6s, transform 0.3s ease-out 0.6s;
}

/* Default fade-in (from bottom) */
.fade-in-section.default {
  opacity: 1;
}

.fade-in-section.default.visible {
  opacity: 0;
}
</style>
