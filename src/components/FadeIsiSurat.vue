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
})

const isVisible = ref(false)
const section = ref<HTMLElement | null>(null)

onMounted(() => {
  if (section.value) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.value = entry.isIntersecting
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
  opacity: 0;
  transition: opacity 1s ease-out 0s, transform 1s ease-out 0s;
}

.fade-in-section.visible {
  opacity: 1;
  transition: opacity 1s ease-out 2s, transform 1s ease-out 2s;
}

/* Default fade-in */
.fade-in-section.default {
  transform: translateY(0);
  transition: opacity 1.2s ease-out 0s, transform 1.2s ease-out 0s;
}

.fade-in-section.default.visible {
  transform: translateY(0);
  transition: opacity 1.2s ease-out 3s, transform 1.2s ease-out 3s;
}

/* Fade-in from the left */
.fade-in-section.left {
  transform: translateX(0);
  transition: opacity 1.2s ease-out 0s, transform 1.2s ease-out 0s;
}

.fade-in-section.left.visible {
  transform: translateX(-60px);
  opacity: 0;
  transition: opacity 1.2s ease-out 1s, transform 1.2s ease-out 1s;
}

/* Fade-in from the right */
.fade-in-section.right {
  transform: translateX(0);
  transition: opacity 1.2s ease-out 0s, transform 1.2s ease-out 0s;
}

.fade-in-section.right.visible {
  transform: translateX(60px);
  opacity: 0;
  transition: opacity 1.2s ease-out 1s, transform 1.2s ease-out 1s;
}

/* Fade-in from the bottom */
.fade-in-section.bottom {
  transform: translateY(-30px);
}

.fade-in-section.bottom.visible {
  transform: translateY(-80px);
}
</style>
