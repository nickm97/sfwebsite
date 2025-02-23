<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/pregnancy-page/pregnancy-050225-03/jackie.webp"
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
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01788.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01790.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01831.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01834.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01841.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01852.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01853.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01864.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01866.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01876.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01884.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01888.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01892.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01896.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01901.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01912.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01932.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01940.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01943.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01947.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
{ url: '/assets/pictures/pregnancy-page/pregnancy-050225-03/pictures/SF_01958.webp', alt: 'Sanneloes Fotografie Zwangerschap' },
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
