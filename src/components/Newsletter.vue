<template>
  <section class="py-16 px-4 bg-gray-900">
    <div class="container mx-auto max-w-2xl text-center">
      <h2 class="text-3xl text-white md:text-4xl font-bold mb-4">Stay Updated</h2>
      <p class="text-gray-600 mb-8">Subscribe to our newsletter for exclusive offers and updates.</p>
      
      <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-electric-500"
          required
        />
        <button
          type="submit"
          class="px-6 py-3 bg-electric-500 text-white font-medium rounded-lg hover:bg-electric-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
      
      <p v-if="isSubscribed" class="mt-4 text-green-600">
        Thank you for subscribing!
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isSubscribed = ref(false)

const handleSubmit = () => {
  console.log('Subscribed with email:', email.value)
  isSubscribed.value = true
  email.value = ''
}
</script> 