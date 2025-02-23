<template>
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
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC00969-2.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC00977.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01045.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01046.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01054.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01109-3.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01109.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01110.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01115.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01140.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01186.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01201.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01210.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01229.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01268.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01292.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01300.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01323.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01352.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01372.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01374.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01377.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01390.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01400.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01411.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01415.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01431.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01436.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01444.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01467.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01501.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01538.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01558.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01647.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01678.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01687.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01688.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01716.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-01/pictures/DSC01779.webp', alt: 'Sanneloes Fotografie Families' },
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
