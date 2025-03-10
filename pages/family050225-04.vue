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
{ url: '/assets/pictures/family-page/family-050225-04/pictures/DSC00969-2.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/DSC01045.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_06886.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_06897.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07023.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07037.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07069.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07106.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07157.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07257.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07284.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07310.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07327.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07336.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07354-2.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07354.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07501.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07512.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07526.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07544.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07551.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07599.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07677.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07698.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07714.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07774.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07841.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07902.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07916.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07922.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07957.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-04/pictures/SF_07967.webp', alt: 'Sanneloes Fotografie Families' },
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
