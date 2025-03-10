<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/pregnancy-page/pregnancy-050225-01/daisy.webp"
        alt="Sanneloes Fotografie Zwangerschap"
        class="h-[120px] flex items-center justify-center"
      />
    </div>
  </section>

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
import { ref, onMounted } from 'vue';

// Data
const photos = ref([
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06209.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06225.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06263.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06273.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06290.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06324.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06355.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06379.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06388.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06406.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06414.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06431.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06449.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06470.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06500.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06526.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06555.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06577.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06597.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06616.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06629.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06667.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06679.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06704.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06765.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06785.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-01/pictures/SF_06816.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
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
