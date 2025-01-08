<template>
  <section class="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-10">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 px-24 w-full">
      
      <!-- Tile 4 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 cursor-pointer" @click="redirect('/wedding01082501')">
        <!-- Background Image -->
        <nuxt-img
          src="/assets/wedding-serina-david/SF_08016-2.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Tekst en Overlay -->
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-12">
          <h2 class="text-5xl font-playFair font-bold mb-2">Serina & David</h2>
        </div>
      </div>

      <div class="relative group rounded-lg overflow-hidden bg-gray-300 cursor-pointer" @click="redirect('/wedding01082502')">
        <!-- Background Image -->
        <nuxt-img
          src="/assets/wedding-tom-cynthia/SF_09140.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Tekst en Overlay -->
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-12">
          <h2 class="text-5xl font-playFair font-bold mb-2">Tom & Cynthia</h2>
        </div>
      </div>

      <div class="relative group rounded-lg overflow-hidden bg-gray-300 cursor-pointer" @click="redirect('/wedding01082501')">
        <!-- Background Image -->
        <nuxt-img
          src="/assets/wedding-serina-david/SF_08016-2.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <!-- Tekst en Overlay -->
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-12">
          <h2 class="text-5xl font-playFair font-bold mb-2">Serina & David</h2>
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
