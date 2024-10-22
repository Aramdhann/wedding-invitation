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
    default: 2000,
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
  transition: opacity 1.2s ease-out 0s, transform 1s ease-out 0s;
}

.fade-in-section.visible {
  opacity: 1;
  transition: opacity 1.2s ease-out 1.6s, transform 1s ease-out 1.6s;
}

.fade-in-section.default {
  opacity: 1;
}

.fade-in-section.default.visible {
  opacity: 0;
}

.fade-in-section.pohon {
  transform: translateX(0);
  opacity: 1;
  transition: opacity 1.2s ease-out 0s, transform 1.2s ease-out 0s;
}

.fade-in-section.pohon.visible {
  transform: translateX(10px);
  opacity: 0;
  transition: opacity 1.2s ease-out 1.2s, transform 1.2s ease-out 1.2s;
}

.fade-in-section.lapangan {
  transform: translateY(0px) scale(1);
  opacity: 1;
  transition: opacity 1.2s ease-out 0s, transform 1.2s ease-out 0s;
}

.fade-in-section.lapangan.visible {
  transform: translateY(10px) scale(1.1);
  opacity: 1;
  transition: opacity 1.2s ease-out 1.2s, transform 1.2s ease-out 1.2s;
}

.fade-in-section.semak {
  transform: translateY(0) scale(1);
  opacity: 1;
  transition: opacity 1.2s ease-out 0s, transform 1.2s ease-out 0s;
}

.fade-in-section.semak.visible {
  transform: translateY(30px) scale(1.1);
  opacity: 1;
  transition: opacity 1.2s ease-out 1.2s, transform 1.2s ease-out 1.2s;
}

.fade-in-section.gunung {
  transform: translateY(0);
  opacity: 1;
  transition: opacity 1.2s ease-out 0s, transform 1.2s ease-out 0s;
}

.fade-in-section.gunung.visible {
  transform: translateY(20px);
  opacity: 1;
  transition: opacity 1.2s ease-out 1.2s, transform 1.2s ease-out 1.2s;
}
/* 
@media (max-width: 376px) {
  .fade-in-section.gunung.visible {
    transform: translateY(0) scale(1.1);
    opacity: 1;
    transition: opacity 2.2s ease-out 2.2s, transform 2.2s ease-out 2.2s;
  }

  .fade-in-section.lapangan.visible {
    transform: scale(1.1);
    opacity: 1;
    transition: opacity 2.2s ease-out 2.2s, transform 2.2s ease-out 2.2s;
  }
} */

.fade-in-section.text {
  opacity: 0;
  transition: opacity 1.2s ease-out 0s, transform 1.2s ease-out 0s;
}

.fade-in-section.text.visible {
  opacity: 1;
  transition: opacity 1.2s ease-out 1.8s, transform 1.2s ease-out 1.8s;
}
</style>
