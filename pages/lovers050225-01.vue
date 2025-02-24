<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/couples-page/lovers-050225-01/jay&sanne.webp"
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
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_07987.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08020.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08169.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08236.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08324.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08330.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08411.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08454.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08481.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08578.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08592.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08646.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08759.webp', alt: 'Sanneloes Fotografie Lovers' },
{ url: '/assets/pictures/couples-page/lovers-050225-01/pictures/SF_08794.webp', alt: 'Sanneloes Fotografie Lovers' },
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
