<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/pregnancy-page/pregnancy-050225-02/astrid.webp"
        alt="Sanneloes Fotografie Zwangerschap"
        class="h-[120px] flex items-center justify-center"
      />
    </div>
  </section>

  <!-- Loader -->
  <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <img src="/assets/pictures/logo_klein.webp" alt="Logo" class="max-w-[300px] max-h-[225px] animate-pulse" />
      <p class="text-lg mt-4 font-standard font-light animate-pulse text-center">De gallerij wordt voor u opgehaald.<br>Een ongenblik geduld alstublieft.</p>
    </div>

  
    <div class="columns-1 xs:columns-2 md:columns-3 lg:columns-4 gap-4 py-4 space-y-4 px-4">
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
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01596.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01608.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01643.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01679.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01680.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01701.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01715.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01742.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01788.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01809.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01825.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01839.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01874.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01892.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01897.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01911.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01977.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_01982.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02018.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02037.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02041.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02049.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02100.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02119.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02159.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02186.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02191.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02208.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02222.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02245.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02254.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02268.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02279.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02296.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02344.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-02/pictures/SF_02367.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
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
