<template>
  <section class="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 px-24 w-full">
      
      <!-- Tile 4 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="/assets/pictures/newborn-shoot.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-1 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Tekst en knop -->
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-12">
          <h2 class="text-2xl font-bold mb-2">NEWBORN</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 5 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="/assets/pictures/champagne.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-1 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Tekst en knop -->
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-12">
          <h2 class="text-2xl font-bold mb-2">PREGNANCY</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>

      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="/assets/pictures/shoot-02.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-1 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Tekst en knop -->
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-12">
          <h2 class="text-2xl font-bold mb-2">FAMILY</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>

      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="/assets/pictures/shoots-index.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-1 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Tekst en knop -->
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-12">
          <h2 class="text-2xl font-bold mb-2">COUPLES</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>

      
      <!-- Tile 6 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="/assets/pictures/branding-index.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-1 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Tekst en knop -->
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-12">
          <h2 class="text-2xl font-bold mb-2">BRANDING</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 6 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="/assets/pictures/strong-woman-index.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-40 opacity-1 group-hover:opacity-100 transition-opacity duration-500"></div>

        <!-- Tekst en knop -->
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-12">
          <h2 class="text-2xl font-bold mb-2">STRONG WOMEN</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    redirect(path) {
      this.$router.push(path);
    },
  },
};
</script>
