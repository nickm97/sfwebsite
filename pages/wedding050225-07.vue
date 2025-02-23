<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/wedding-page/wedding-050225-07/brit&lotte.webp"
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
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06035.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06100.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06177.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06183.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06186.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06232.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06240.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06288.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06328.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06353.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06360.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06397.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06409.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06427.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06449.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06470.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06523.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06529.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06563.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06576.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06592.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06635.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06669.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06717.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06729.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06734.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06738.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06755.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06788.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06799.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06869.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06874.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06883.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06982.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_06993.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07022.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07122.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07133.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07199.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07210.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07215.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07240-Verbeterd-NR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07251-Verbeterd-NR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07334-Verbeterd-NR-2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07357-Verbeterd-NR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07363-Verbeterd-NR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07423-Verbeterd-NR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07439-Verbeterd-NR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07509-Verbeterd-NR-2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07598-Verbeterd-NR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07642-Verbeterd-NR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07674-Verbeterd-NR.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SF_07708-Verbeterd-NR-2.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF02696.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF02751.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF02873.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF02922.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF02927.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF02943.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03080.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03122.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03485.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03494.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03529.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03635.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03660.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03733.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03780.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03840.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03880.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03886-bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03887-bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF03901.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-07/pictures/SLF04000.webp', alt: 'Sanneloes Fotografie Bruiloften' },
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
