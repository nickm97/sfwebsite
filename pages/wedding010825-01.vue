<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 -->
      <nuxt-img
        src="/assets/pictures/wedding-page/wedding-010825-01/david&serena.webp"
        alt="Bruiloft"
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
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00148-bewerkt-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00185-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00198.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00215.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00238.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00287-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00293-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00304-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00779.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00801.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00817.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00831.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00839-bewerkt-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00849.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00851.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00853-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00871-bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00882.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_00901-bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07721.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07723.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07778.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07814-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07865.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07908.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07962-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07978-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08016-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08060.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08114.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08129-bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08138.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08293.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08328.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08417.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08442.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08450.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08463.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08532.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08573.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08598.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08613.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08732.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08737-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08866.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08868-2.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08868-3.webp', alt: 'Sanneloes Fotografie Bruiloft' },
{ url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08872.webp', alt: 'Sanneloes Fotografie Bruiloft' },
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
