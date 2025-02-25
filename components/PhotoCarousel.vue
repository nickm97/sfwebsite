<template>
    <div class="relative w-[350px]">
      <div class="relative rounded-lg overflow-hidden bg-gray-300 shadow-lg w-[350px] h-[500px]">
        <img
          :src="images[currentIndex].src"
          :alt="images[currentIndex].alt"
          class="h-full w-full object-cover transform transition-transform duration-500 ease-in-out mx-auto block"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <h2 class="text-2xl font-playFair mb-2 tracking-wide">{{ images[currentIndex].title }}</h2>
          <button
            @click="redirect(images[currentIndex].link)"
            class="px-6 py-2 border border-white text-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            View More
          </button>
        </div>
      </div>
  
      <!-- Pijltjes links/rechts -->
      <button @click="prevImage" class="absolute top-1/2 left-4 xs:-left-8 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-black transition">
        ❮
      </button>
      <!-- bg-black/50 -->
      <button @click="nextImage" class="absolute top-1/2 right-4 xs:-right-8 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-black transition">
        ❯
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    methods: {
      prevImage() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      nextImage() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      redirect(url) {
        window.location.href = url;
      }
    }
  };
  </script>
  