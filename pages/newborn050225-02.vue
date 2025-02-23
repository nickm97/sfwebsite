<template>
    <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
      <div class="w-[50%] flex items-center justify-center">
        <!-- canva 800x300 160 lettertype -->
        <nuxt-img
          src="/assets/pictures/newborn-page/newborn-050225-02/lois.webp"
          alt="Sanneloes Fotografie Bruiloft"
          class="h-[120px] flex items-center justify-center"
        />
      </div>
    </section>
  
    <!-- Loader -->
  <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img src="/assets/pictures/logo_klein.webp" alt="Logo" class="max-w-[300px] max-h-[225px] animate-pulse" />
      <p class="text-lg mt-4 font-standard font-light animate-pulse text-center">De gallerij wordt voor u opgehaald.<br>Een ongenblik geduld alstublieft.</p>
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
import { ref, onMounted } from 'vue';

// Data
const photos = ref([
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00001.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00004.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00021.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00033.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00086.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00107.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00123.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00142.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00153.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00163.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00203.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00216.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00236.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00239.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00244.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00250.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00252.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00276.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00287.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00310.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00354.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC00362.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC09879.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-02/pictures/DSC09969.webp', alt: 'Sanneloes Fotografie Newborn' },
  // Voeg hier meer foto's toe...
]);

const isLoading = ref(true);
const loadedImages = ref(0);

// Functie wordt aangeroepen wanneer een afbeelding is geladen
const imageLoaded = () => {
  loadedImages.value++;
  if (loadedImages.value >= photos.value.length) {
    isLoading.value = false; // Verberg de loader als alle afbeeldingen geladen zijn
  }
};

onMounted(() => {
  // Extra check: als er geen foto's zijn, verwijder dan direct de loader
  if (photos.value.length === 0) {
    isLoading.value = false;
  }
});
</script>
