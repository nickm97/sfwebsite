<template>
  <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
    <div class="w-[50%] flex items-center justify-center">
      <!-- canva 800x300 160 lettertype -->
      <nuxt-img
        src="/assets/pictures/wedding-page/wedding-050225-03/sam&inge.webp"
        alt="Sanneloes Fotografie Bruiloft"
        class="h-[100px] flex items-center justify-center"
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
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00534.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00557.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00597.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00604.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00631.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00647.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00793.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00831.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00849.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00885.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_00931.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08430.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08468.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08486.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08575.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08647.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08716.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08812.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08826.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08841.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08861.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08878.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08914.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_08993-bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09017.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09084.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09098.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09121.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09147.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09157.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09213.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09228.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09243.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09278.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09339.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09388.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09397.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09411.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09437.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09477.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09559.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09609.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09615.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09638.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09681.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09720.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09723.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09756.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SF_09765.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07473.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07493.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07537-bewerkt.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07628.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07630.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07682.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07717.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07767.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07867.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07882.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07911.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07943.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF07968.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF08106.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF08126.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF08298.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF08422.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF08711.webp', alt: 'Sanneloes Fotografie Bruiloften' },
{ url: '/assets/pictures/wedding-page/wedding-050225-03/pictures/SLF08784.webp', alt: 'Sanneloes Fotografie Bruiloften' },
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
