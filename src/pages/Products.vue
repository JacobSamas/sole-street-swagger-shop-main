<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Filters Sidebar -->
        <div class="w-full md:w-64 space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold mb-4">Categories</h3>
            <div class="space-y-2">
              <label class="flex items-center space-x-2">
                <input type="checkbox" class="rounded text-electric-500" />
                <span>Sneakers</span>
              </label>
              <label class="flex items-center space-x-2">
                <input type="checkbox" class="rounded text-electric-500" />
                <span>Running</span>
              </label>
              <label class="flex items-center space-x-2">
                <input type="checkbox" class="rounded text-electric-500" />
                <span>Casual</span>
              </label>
              <label class="flex items-center space-x-2">
                <input type="checkbox" class="rounded text-electric-500" />
                <span>Sports</span>
              </label>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold mb-4">Price Range</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span>$0</span>
                <span>$250</span>
              </div>
              <input type="range" class="w-full" min="0" max="250" />
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold mb-4">Colors</h3>
            <div class="grid grid-cols-4 gap-2">
              <button
                v-for="color in colors"
                :key="color"
                class="w-8 h-8 rounded-full border-2 border-gray-200 hover:border-electric-500 transition-colors"
                :style="{ backgroundColor: color }"
                :aria-label="`Color ${color}`"
              />
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="flex-1">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">All Products</h2>
            <select class="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-electric-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="product in allProducts" :key="product.id" class="group">
              <div class="relative overflow-hidden rounded-lg bg-white shadow-sm">
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
                <div class="p-4">
                  <h3 class="font-semibold text-lg group-hover:text-electric-500 transition-colors">{{ product.name }}</h3>
                  <p class="text-electric-500 font-bold">${{ product.price.toFixed(2) }}</p>
                  <button class="mt-2 w-full bg-gray-100 text-gray-800 py-2 rounded-lg hover:bg-electric-500 hover:text-white transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="mt-8 flex justify-center">
            <nav class="flex items-center space-x-2">
              <button class="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                Previous
              </button>
              <button class="px-3 py-1 rounded-lg bg-electric-500 text-white">1</button>
              <button class="px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors">2</button>
              <button class="px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors">3</button>
              <button class="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colors = ['#000000', '#FFFFFF', '#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#FFA500', '#800080']

const allProducts = [
  {
    id: 1,
    name: "Cloud Runner X",
    price: 149.99,
    image: "/images/products/product-1.jpg",
    colors: ["#000000", "#FFFFFF", "#0099FF"]
  },
  {
    id: 2,
    name: "Urban Track Lite",
    price: 129.99,
    image: "/images/products/product-2.jpg",
    colors: ["#000000", "#6D6D6D", "#F5F5F5"]
  },
  {
    id: 3,
    name: "Velocity Air Max",
    price: 179.99,
    image: "/images/products/product-3.jpg",
    colors: ["#000000", "#0099FF", "#FF0000"]
  },
  {
    id: 4,
    name: "Stealth Boost",
    price: 159.99,
    image: "/images/products/product-4.jpg",
    colors: ["#000000", "#FFFFFF"]
  },
  {
    id: 5,
    name: "Classic Street",
    price: 99.99,
    image: "/images/products/product-5.jpg",
    colors: ["#000000", "#FFFFFF", "#FFD700"]
  },
  {
    id: 6,
    name: "Retro Sport",
    price: 119.99,
    image: "/images/products/product-6.jpg",
    colors: ["#000000", "#FF0000", "#0000FF"]
  },
  {
    id: 7,
    name: "Urban Canvas",
    price: 89.99,
    image: "/images/products/product-7.jpg",
    colors: ["#000000", "#FFFFFF", "#006400"]
  },
  {
    id: 8,
    name: "Metro Flex",
    price: 139.99,
    image: "/images/products/product-8.jpg",
    colors: ["#000000", "#808080", "#0099FF"]
  },
  {
    id: 9,
    name: "Neon Nights Edition",
    price: 199.99,
    image: "/images/products/product-9.jpg",
    colors: ["#000000", "#FF00FF"]
  },
  {
    id: 10,
    name: "Urban Camo",
    price: 189.99,
    image: "/images/products/product-10.jpg",
    colors: ["#000000", "#556B2F"]
  },
  {
    id: 11,
    name: "Artist Collab Series",
    price: 219.99,
    image: "/images/products/product-11.jpg",
    colors: ["#000000", "#FFFFFF", "#FFD700"]
  },
  {
    id: 12,
    name: "Tech Runner Pro",
    price: 229.99,
    image: "/images/products/product-12.jpg",
    colors: ["#000000", "#0099FF"]
  }
]
</script>