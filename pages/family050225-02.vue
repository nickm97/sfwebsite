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
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SF_02379.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SF_02534.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SF_02535.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SF_02537.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SF_02544.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04066.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04162.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04189.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04209.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04222.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04251.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04272.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04320.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04359.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04395.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04417.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04434.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04477.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04497.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04502.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04514.webp', alt: 'Sanneloes Fotografie Families' },
{ url: '/assets/pictures/family-page/family-050225-02/pictures/SLF04598.webp', alt: 'Sanneloes Fotografie Families' },
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
