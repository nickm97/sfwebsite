<template>
    <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
      <div class="w-[50%] flex items-center justify-center">
        <!-- canva 800x300 160 lettertype -->
        <nuxt-img
          src="/assets/pictures/newborn-page/newborn-050225-01/luen.webp"
          alt="Sanneloes Fotografie Bruiloft"
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
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-110.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-122.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-128.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-130.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-136.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-141.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-147.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-148.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-150.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-159.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-160.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-168.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-171.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-173.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-24.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-26.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-28.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-41.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-42.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-49.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-57.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-59.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-6.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-65.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-66.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-70.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-72.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-74.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-75.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-78.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-85.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-90.webp', alt: 'Sanneloes Fotografie Newborn' },
{ url: '/assets/pictures/newborn-page/newborn-050225-01/pictures/SanneloesFotografie-98.webp', alt: 'Sanneloes Fotografie Newborn' },
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
