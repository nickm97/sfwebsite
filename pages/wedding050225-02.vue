<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/wedding-page/wedding-050225-02/gijs&britt.webp"
        alt="Sanneloes Fotografie Bruiloft"
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
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC00948.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01012.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01034.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01039.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01094.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01107.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01130.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01150.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01159.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01195.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01208.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01301.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01326.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01470.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01496.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01569.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01588.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01668.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01704.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01733.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01780.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01784.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC01797.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02004.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02022.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02066.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02073.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02102.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02165.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02339.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02357.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02447.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02473.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02572.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02643.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02669.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02705.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC02893.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03084.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03254.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03262.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03266.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03295.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03368.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03571.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03572.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03629.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03643.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03656.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03687.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03698.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03744.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03775.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03844.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03867.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03881.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03922.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC03929.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC04014.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC04070.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC04120.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-02/pictures/DSC04209.webp', alt: 'Sanneloes Fotografie Bruiloften' },
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
