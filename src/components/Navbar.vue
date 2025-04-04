<template>
  <nav class="bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold text-electric-500">Sole Street</router-link>
        </div>
        
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4">
            <router-link to="/products" class="text-gray-700 hover:text-electric-500 px-3 py-2 rounded-md text-sm font-medium">Products</router-link>
            <router-link to="/about" class="text-gray-700 hover:text-electric-500 px-3 py-2 rounded-md text-sm font-medium">About</router-link>
            <router-link to="/contact" class="text-gray-700 hover:text-electric-500 px-3 py-2 rounded-md text-sm font-medium">Contact</router-link>
          </div>
        </div>
        
        <div class="flex items-center space-x-4">
          <button class="text-gray-700 hover:text-electric-500">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button class="text-gray-700 hover:text-electric-500">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button class="text-gray-700 hover:text-electric-500">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
          
          <button class="md:hidden text-gray-700 hover:text-electric-500" @click="isMenuOpen = !isMenuOpen">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/products" class="text-gray-700 hover:text-electric-500 block px-3 py-2 rounded-md text-base font-medium">Products</router-link>
        <router-link to="/about" class="text-gray-700 hover:text-electric-500 block px-3 py-2 rounded-md text-base font-medium">About</router-link>
        <router-link to="/contact" class="text-gray-700 hover:text-electric-500 block px-3 py-2 rounded-md text-base font-medium">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script> 