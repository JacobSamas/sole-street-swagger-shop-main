<template>
  <div class="relative">
    <div class="overflow-hidden">
      <div class="flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
          <div class="relative h-[600px]">
            <img 
              :src="slide.image" 
              :alt="slide.title"
              class="w-full h-full object-cover"
              @load="handleImageLoad"
              @error="handleImageError"
            />
            <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-electric-500"></div>
            </div>
            <div v-else class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div class="container mx-auto px-4">
                <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">{{ slide.title }}</h2>
                <p class="text-xl text-white mb-8 max-w-lg">{{ slide.description }}</p>
                <a 
                  :href="slide.buttonLink" 
                  class="inline-block bg-electric-500 text-white px-8 py-3 rounded-lg hover:bg-electric-600 transition-colors"
                >
                  {{ slide.buttonText }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <button 
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
      aria-label="Previous slide"
      :disabled="isLoading"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    
    <button 
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
      aria-label="Next slide"
      :disabled="isLoading"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <button
        v-for="(slide, index) in slides"
        :key="index"
        @click="currentIndex = index"
        class="w-3 h-3 rounded-full transition-colors"
        :class="currentIndex === index ? 'bg-electric-500' : 'bg-white/50 hover:bg-white/70'"
        :aria-label="`Go to slide ${index + 1}`"
        :disabled="isLoading"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentIndex = ref(0)
const isLoading = ref(true)
const loadedImages = ref(new Set())

const slides = [
  {
    image: '/images/hero/slide-1.jpg',
    title: 'New Season Collection',
    description: 'Discover the latest trends in urban streetwear and sneakers.',
    buttonText: 'Shop Now',
    buttonLink: '#new-arrivals'
  },
  {
    image: '/images/hero/slide-2.jpg',
    title: 'Limited Edition Drops',
    description: 'Exclusive collaborations and limited releases.',
    buttonText: 'View Drops',
    buttonLink: '#limited-drops'
  },
  {
    image: '/images/hero/slide-3.jpg',
    title: 'Summer Essentials',
    description: 'Lightweight and breathable styles for the season.',
    buttonText: 'Explore',
    buttonLink: '#best-sellers'
  }
]

let autoplayInterval: number

const handleImageLoad = (event: Event) => {
  const img = event.target as HTMLImageElement
  loadedImages.value.add(img.src)
  if (loadedImages.value.size === slides.length) {
    isLoading.value = false
  }
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  console.error(`Failed to load image: ${img.src}`)
  loadedImages.value.add(img.src)
  if (loadedImages.value.size === slides.length) {
    isLoading.value = false
  }
}

const nextSlide = () => {
  if (isLoading.value) return
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  if (isLoading.value) return
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

onMounted(() => {
  autoplayInterval = window.setInterval(() => {
    if (!isLoading.value) {
      nextSlide()
    }
  }, 5000)
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})
</script>

<style scoped>
.carousel-container {
  overflow: hidden;
  position: relative;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  flex: 0 0 100%;
  width: 100%;
}
</style> 