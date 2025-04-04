<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-[400px] bg-gray-900">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="container mx-auto px-4 h-full flex items-center">
        <div class="max-w-2xl text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p class="text-xl">Discover the passion behind our brand and our commitment to quality footwear.</p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-6">Our Mission</h2>
          <p class="text-lg text-gray-600 mb-8">
            At Sole Street Swagger, we're dedicated to providing high-quality, stylish footwear that combines comfort, durability, and the latest trends. Our mission is to help you step out in confidence with every pair.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="p-6 bg-white rounded-lg shadow-sm">
              <div class="w-12 h-12 bg-electric-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Quality First</h3>
              <p class="text-gray-600">Premium materials and craftsmanship in every pair.</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm">
              <div class="w-12 h-12 bg-electric-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Timeless Style</h3>
              <p class="text-gray-600">Designs that stay in fashion season after season.</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow-sm">
              <div class="w-12 h-12 bg-electric-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Customer Focus</h3>
              <p class="text-gray-600">Your satisfaction is our top priority.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg overflow-hidden shadow-sm">
            <img src="/images/team/member1.jpg" alt="Team Member" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold">Sarah Johnson</h3>
              <p class="text-gray-600 mb-4">Founder & CEO</p>
              <p class="text-gray-600">With over 15 years in the footwear industry, Sarah leads our team with passion and expertise.</p>
            </div>
          </div>
          <div class="bg-white rounded-lg overflow-hidden shadow-sm">
            <img src="/images/team/member2.jpg" alt="Team Member" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold">Michael Chen</h3>
              <p class="text-gray-600 mb-4">Head Designer</p>
              <p class="text-gray-600">Michael brings innovative designs and creative vision to our collections.</p>
            </div>
          </div>
          <div class="bg-white rounded-lg overflow-hidden shadow-sm">
            <img src="/images/team/member3.jpg" alt="Team Member" class="w-full h-64 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold">Emily Rodriguez</h3>
              <p class="text-gray-600 mb-4">Customer Experience</p>
              <p class="text-gray-600">Emily ensures every customer interaction is exceptional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-electric-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Sustainability</h3>
                <p class="text-gray-600">We're committed to reducing our environmental impact through sustainable practices and materials.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-electric-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Community</h3>
                <p class="text-gray-600">We believe in giving back and supporting the communities we serve.</p>
              </div>
            </div>
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-electric-500 rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Innovation</h3>
                <p class="text-gray-600">We constantly push boundaries to bring you the latest in footwear technology and design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>