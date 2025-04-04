<template>
  <section :id="id" class="py-16 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 relative inline-block">
        {{ title }}
        <span class="absolute -bottom-3 left-0 w-1/2 h-1 bg-electric-500"></span>
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="product in products" :key="product.id" class="group">
          <div class="relative overflow-hidden rounded-lg bg-gray-100">
            <div class="relative h-80 overflow-hidden">
              <img 
                :src="product.image" 
                :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <div class="flex space-x-2 mb-2">
                    <button
                      v-for="color in product.colors"
                      :key="color"
                      class="w-4 h-4 rounded-full border-2 border-white transition-transform hover:scale-110"
                      :style="{ backgroundColor: color }"
                      :aria-label="`Color ${color}`"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button class="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors" aria-label="Add to wishlist">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-4">
            <h3 class="font-semibold text-lg group-hover:text-electric-500 transition-colors">{{ product.name }}</h3>
            <p class="text-electric-500 font-bold">${{ product.price.toFixed(2) }}</p>
            <button class="mt-2 w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-electric-500 hover:text-white transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  products: Array<{
    id: number
    name: string
    price: number
    image: string
    colors: string[]
  }>
  id?: string
}>()
</script> 