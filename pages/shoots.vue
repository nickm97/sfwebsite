<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
      <!-- Tile 1 -->
      <div
        class="relative group rounded-lg overflow-hidden bg-gray-300"
      >
        <!-- Background Image -->
        <img
          src="/assets/pictures/champagne.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <!-- White Border Inside -->
        <div class="absolute inset-3 border-2 border-white pointer-events-none"></div>
        <!-- Content Overlay -->
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <h2 class="text-2xl font-bold mb-4">Gallery 1</h2>
          <button
            @click="redirect('/gallery1')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>

      <!-- Repeat for the other 3 tiles -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/champagne.jpg"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-3 border-2 border-white pointer-events-none"></div>
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <h2 class="text-2xl font-bold mb-4">Gallery 2</h2>
          <button
            @click="redirect('/gallery2')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>

      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/champagne.jpg"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-3 border-2 border-white pointer-events-none"></div>
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <h2 class="text-2xl font-bold mb-4">Gallery 3</h2>
          <button
            @click="redirect('/gallery3')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>

      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/champagne.jpg"
          alt="Tile Image 4"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-3 border-2 border-white pointer-events-none"></div>
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <h2 class="text-2xl font-bold mb-4">Gallery 4</h2>
          <button
            @click="redirect('/gallery4')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  </div>
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
