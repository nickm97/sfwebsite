<template>

    <!-- Loader -->
    <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img src="/assets/pictures/logo_klein.webp" alt="Logo" class="max-w-[300px] max-h-[225px] animate-pulse" />
      <p class="text-lg mt-4 font-standard font-light animate-pulse text-center">De galerij wordt voor u opgehaald.<br>Een ongenblik geduld alstublieft.</p>
    </div>

  
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 py-4 space-y-4 px-4">
      <div v-for="(photo, index) in photos" :key="index">
        <nuxt-img 
          :src="photo.url" 
          :alt="photo.alt" 
          loading="lazy"
          class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300"
          @load="imageLoaded"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, watchEffect } from 'vue';
  
  const props = defineProps({
    photos: Array
  });
  
  const isLoading = ref(true);
  const loadedImages = ref(0);
  
  const imageLoaded = () => {
    loadedImages.value++;
    if (loadedImages.value >= props.photos.length) {
      isLoading.value = false;
    }
  };
  
  // Zorgt ervoor dat als de foto's veranderen, de loader opnieuw start
  watchEffect(() => {
    isLoading.value = true;
    loadedImages.value = 0;
  });
  </script>
  