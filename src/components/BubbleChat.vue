<template>
  <div>
    <!-- bubble chat -->
    <div class="flex gap-4">
      <div class="icon-circle"></div>
      <div>
        <div class="flex gap-2 mb-2 text-white">
          <p class="whitespace-normal">{{ name }}</p>
          <span> - </span>
          <p :class="statusClass" class="px-2 rounded-full">{{ status }}</p>
        </div>
        <div class="flex">
          <div class="w-4 overflow-hidden">
            <div
              class="h-3 bg-white rotate-45 transform origin-bottom-right rounded-sm"
            ></div>
          </div>
          <div
            class="bg-white opacity-[88%] p-3 rounded-e-[20px] rounded-bl-[20px] max-w-[250px]"
          >
            <p class="whitespace-normal">
              <slot></slot>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  name: string
  status: 'Hadir' | 'Tidak Hadir'
}>()

const statusClass = computed(() => {
  return props.status === 'Hadir' ? 'bg-green-500' : 'bg-red-500'
})
</script>

<style scoped>
/* Chat Bubble Style */
.icon-circle {
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 50%;
}
</style>
