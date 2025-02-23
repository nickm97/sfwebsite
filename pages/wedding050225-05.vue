<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/wedding-page/wedding-050225-05/peter&evy.webp"
        alt="Sanneloes Fotografie Bruiloft"
        class="h-[100px] flex items-center justify-center"
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
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie107.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie12.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie124.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie126.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie129.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie137.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie157.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie1582.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie164.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie165.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie166.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie17.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie171.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie186.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie204.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie220.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie221.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie225.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie227.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie273.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie285.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie297.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie334.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie337.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie360.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie395.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie411.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie414.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie422.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie43.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie435.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie444.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie446bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloften' },  
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie448.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie469.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie470.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie479.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie502.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie515.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie542.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie564.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie58.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie580VerbeterdNR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie604.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie616VerbeterdNR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie62.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie653.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie679.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie70.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie729.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie735.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie74.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie745.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie75.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie759bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloften' },  
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie763.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie768.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie799.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie82.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-05/pictures/Sanneloes Fotografie828.webp', alt: 'Sanneloes Fotografie Bruiloften' },
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
