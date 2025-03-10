<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/wedding-page/wedding-050225-04/martijn&kristel.webp"
        alt="Sanneloes Fotografie Bruiloft"
        class="h-[80px] flex items-center justify-center"
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
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_100.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_103.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_117.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_12.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_142.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_147.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_149.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_151.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_169.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_175.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_184_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_186.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_193.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_193_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_196_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_200.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_201_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_204_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_212_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_219.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_222.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_226_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_234.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_247_2_bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_24_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },       
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_253.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_257.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_261_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },      
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_275.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_285.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_287_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },      
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_292.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_294.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_295_2.webp', alt: 'Sanneloes Fotografie Bruiloften' },      
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_326.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_343.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_349.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_38.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_394.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_400.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_401.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_404.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_472.webp', alt: 'Sanneloes Fotografie Bruiloften' },        
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_55.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_61.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_65.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_72.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_86_bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloften' }, 
{ url: '/assets/pictures/wedding-page/wedding-050225-04/pictures/Sanneloes Fotografie_95.webp', alt: 'Sanneloes Fotografie Bruiloften' },
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
