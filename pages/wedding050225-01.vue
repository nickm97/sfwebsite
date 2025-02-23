<template>
    <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
      <div class="w-[50%] flex items-center justify-center">
        <!-- canva 800x300 160 lettertype -->
        <nuxt-img
          src="/assets/pictures/wedding-page/wedding-050225-01/rick&marlou.webp"
          alt="Sanneloes Fotografie Bruiloft"
          class="h-[100px] flex items-center justify-center"
        />
      </div>
    </section>
  
    <!-- <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 py-4 space-y-4 px-4">
      <div v-for="(photo, index) in photos" :key="index">
        <nuxt-img :src="photo.url" :alt="photo.alt" class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300" />
      </div>
    </div> -->
    

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
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF01878.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02003.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02080.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02094.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02122.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02195.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02236.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02276.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02484.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02529-2.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02536.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02609.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02681.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02706.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02724.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02750.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02788.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02806.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02867.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02946.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF02977.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03029.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03069.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03104.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03281.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03289.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03307.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03316.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03325.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03333.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03373.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03391.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03464.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03597.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03851.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03862.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03897.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF03965.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF04028.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF04059.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF04074.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF04078.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF04185.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF04264.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF04316.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF04351.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF05263.webp', alt: 'Sanneloes fotografie bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-01/pictures/SLF05271.webp', alt: 'Sanneloes fotografie bruiloften' },
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
