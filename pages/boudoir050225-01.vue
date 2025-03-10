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
import { ref, onMounted } from 'vue';

// Data
const photos = ref([
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08251.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08281.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08363.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08383.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08432.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08488.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08550.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08559.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08642.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08657.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08703.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08714.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08764.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08788.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08809.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC08874.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC09033.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC09079.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC09090.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC09138.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC09184.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC09220.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC09232.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/boudoir-page/boudoir-050225-01/DSC09278.webp', alt: 'Sanneloes Fotografie Bruiloften' },
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
