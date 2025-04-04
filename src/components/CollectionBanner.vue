<template>
  <div class="relative h-[500px] overflow-hidden">
    <img 
      :src="image" 
      :alt="title" 
      class="w-full h-full object-cover"
      @load="handleImageLoad"
      @error="handleImageError"
    />
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-gray-100">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-electric-500"></div>
    </div>
    <div 
      v-else
      class="absolute inset-0 flex items-center transition-opacity duration-500"
      :class="[
        alignment === 'left' ? 'justify-start' : 'justify-end',
        isLoaded ? 'opacity-100' : 'opacity-0'
      ]"
    >
      <div class="container mx-auto px-4">
        <div 
          class="max-w-xl transform transition-all duration-500"
          :class="[
            alignment === 'left' ? 'ml-0' : 'ml-auto',
            isLoaded ? 'translate-x-0' : alignment === 'left' ? '-translate-x-8' : 'translate-x-8'
          ]"
        >
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">{{ title }}</h2>
          <p class="text-xl text-white mb-8">{{ subtitle }}</p>
          <a 
            :href="buttonLink" 
            class="inline-block bg-electric-500 text-white px-8 py-3 rounded-lg hover:bg-electric-600 transition-colors transform hover:scale-105"
          >
            {{ buttonText }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isLoading = ref(true)
const isLoaded = ref(false)

const handleImageLoad = () => {
  isLoading.value = false
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.error(`Failed to load image: ${img.src}`)
  isLoading.value = false
}

defineProps<{
  title: string
  subtitle: string
  image: string
  buttonText: string
  buttonLink: string
  alignment: 'left' | 'right'
}>()
</script> 