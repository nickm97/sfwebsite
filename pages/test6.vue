<template>
    <div class="relative">
        <section class="flex flex-col items-center justify-center px-6 bg-buttonColor">
            <div class="w-[50%] flex items-center justify-center">
            <!-- canva 800x300 -->
            <nuxt-img
                src="/assets/pictures/wedding-page/wedding-010825-01/david&serena.webp"
                alt="Bruiloft"
                class="h-[100px] flex items-center justify-center"
            />
            </div>
        </section>
      <!-- Loader -->
      <div v-if="isLoading" class="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <img src="/assets/pictures/logo_klein.webp" alt="Logo" class="w-[300px] h-[225px] animate-pulse" />
        <p class="text-lg mt-4 font-standard font-light animate-pulse text-center">De galerij wordt voor u opgehaald.<br>Een ongenblik geduld alstublieft.</p>
      </div>
  
      <!-- Foto Galerij -->
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
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // Data
  const photos = ref([
    { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07713.webp', alt: 'SF_07713.webp' },
    { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07714.webp', alt: 'SF_07714.webp' },
    { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07716.webp', alt: 'SF_07716.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07946-2.webp', alt: 'SF_07946-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07962-2.webp', alt: 'SF_07962-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07978-2.webp', alt: 'SF_07978-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_07990-2.webp', alt: 'SF_07990-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08016-2.webp', alt: 'SF_08016-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08020-2.webp', alt: 'SF_08020-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08060.webp', alt: 'SF_08060.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08082.webp', alt: 'SF_08082.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08099.webp', alt: 'SF_08099.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08110.webp', alt: 'SF_08110.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08111.webp', alt: 'SF_08111.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08114.webp', alt: 'SF_08114.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08115.webp', alt: 'SF_08115.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08129-bewerkt.webp', alt: 'SF_08129-bewerkt.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08138.webp', alt: 'SF_08138.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08158-2.webp', alt: 'SF_08158-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08158.webp', alt: 'SF_08158.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08160.webp', alt: 'SF_08160.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08163.webp', alt: 'SF_08163.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08178.webp', alt: 'SF_08178.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08187.webp', alt: 'SF_08187.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08190.webp', alt: 'SF_08190.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08201.webp', alt: 'SF_08201.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08204.webp', alt: 'SF_08204.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08226.webp', alt: 'SF_08226.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08231.webp', alt: 'SF_08231.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08233.webp', alt: 'SF_08233.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08242.webp', alt: 'SF_08242.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08246.webp', alt: 'SF_08246.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08247.webp', alt: 'SF_08247.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08256.webp', alt: 'SF_08256.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08259.webp', alt: 'SF_08259.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08274.webp', alt: 'SF_08274.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08276.webp', alt: 'SF_08276.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08277.webp', alt: 'SF_08277.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08293.webp', alt: 'SF_08293.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08300.webp', alt: 'SF_08300.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08317.webp', alt: 'SF_08317.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08328.webp', alt: 'SF_08328.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08343.webp', alt: 'SF_08343.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08348.webp', alt: 'SF_08348.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08356.webp', alt: 'SF_08356.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08411.webp', alt: 'SF_08411.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08414.webp', alt: 'SF_08414.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08417.webp', alt: 'SF_08417.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08440.webp', alt: 'SF_08440.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08442.webp', alt: 'SF_08442.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08450-2.webp', alt: 'SF_08450-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08450.webp', alt: 'SF_08450.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08454.webp', alt: 'SF_08454.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08456.webp', alt: 'SF_08456.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08458.webp', alt: 'SF_08458.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08460.webp', alt: 'SF_08460.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08463.webp', alt: 'SF_08463.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08468.webp', alt: 'SF_08468.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08471-2.webp', alt: 'SF_08471-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08479-2.webp', alt: 'SF_08479-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08483-2.webp', alt: 'SF_08483-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08486-2.webp', alt: 'SF_08486-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08495-2.webp', alt: 'SF_08495-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08496-2.webp', alt: 'SF_08496-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08503-2.webp', alt: 'SF_08503-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08509-2.webp', alt: 'SF_08509-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08510-2.webp', alt: 'SF_08510-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08512-2.webp', alt: 'SF_08512-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08517.webp', alt: 'SF_08517.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08520.webp', alt: 'SF_08520.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08522.webp', alt: 'SF_08522.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08530-2.webp', alt: 'SF_08530-2.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08530.webp', alt: 'SF_08530.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08532.webp', alt: 'SF_08532.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08537.webp', alt: 'SF_08537.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08540.webp', alt: 'SF_08540.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08547.webp', alt: 'SF_08547.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08552.webp', alt: 'SF_08552.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08557.webp', alt: 'SF_08557.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08563.webp', alt: 'SF_08563.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08564.webp', alt: 'SF_08564.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08567.webp', alt: 'SF_08567.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08573.webp', alt: 'SF_08573.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08575.webp', alt: 'SF_08575.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08578.webp', alt: 'SF_08578.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08583.webp', alt: 'SF_08583.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08586.webp', alt: 'SF_08586.webp' },
  { url: '/assets/pictures/wedding-page/wedding-010825-01/pictures/SF_08589.webp', alt: 'SF_08589.webp' }
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
  