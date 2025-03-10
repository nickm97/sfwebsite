<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/branding-page/branding-050225-05/dutch-totaal.webp"
        alt="Sanneloes Fotografie Branding"
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
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02208.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02218.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02221.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02251.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02260-bewerkt.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02267.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02290.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02299.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02334.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02350.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02372.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02432.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02462.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02467.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02479.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02497.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02509.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02524.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02538.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SF_02578.webp', alt: 'Sanneloes Fotografie Branding' },
{ url: '/assets/pictures/branding-page/branding-050225-05/pictures/SLF02592.webp', alt: 'Sanneloes Fotografie Branding' },
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
