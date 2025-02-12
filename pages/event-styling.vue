<template>
  <section>
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/savvy-page/banner.webp"
        alt="Family Background"
        class="w-full h-full object-cover object-center"style="object-position: center 60%;"
      />
    </div>
    <div>
      <!-- <p class="absolute top-1/2 left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        BRANDING
      </p> -->
      <nuxt-img
        src="/assets/pictures/savvy-page/banner-title.webp"
        alt="Family Background"
        class="w-[550px] sm:w-[700px] object-cover object-center absolute top-1/2 right-[50%] transform translate-x-1/2 -translate-y-1/2"
      />
    </div>
  </section>

  <section class="flex flex-col items-center px-4 sm:px-6 py-10 bg-buttonColor">
    <div class="w-full sm:w-[70%]">
      <p class="text-white uppercase font-standard text-left font-bold">
        VERHUUR VAN STYLING ITEMS VOOR JOUW BRUILOFT, BABYSHOWER, FEEST OF EVENT
      </p>
    </div>
    <div class="mt-6 w-full sm:w-[70%]">
      <p class="text-white font-standard font-light">
        Half 2024 startte ik samen met mijn lieve moeder Yvette, Savvy Styling. Al járen dacht ik iets te 
        willen doen met aankleding van bruiloften, maar hoe en wat wist ik niet precies, totdat ik op een 
        lange reis was. Ik kreeg inspiratie en wist het ineens. Samen met mijn c reatieve moeder wil ik een 
        bedrijf beginnen die zich focust op het maken van decoratie en backdrops voor bruiloften, babyshowers 
        feesten en evenementen. We focussen ons op duurzaamheid, creativiteit en stoppen zelf veel liefde en 
        tijd in al onze decoratiestukken die we dan aan klanten kunnen verhuren.<br><br>

        Sinds dat ik zelf feestjes geef, vind ik aankleding super belangrijk. Het maakt je feestje persoonlijk 
        én het brengt direct sfeer. Om de stylingitems persoonlijk te maken, werken we met verschillende stijlen, 
        kleuren, bloemen, vormen en teksten. Voor ieder wat wils.<br><br>

        Ga jij trouwen, geef je een groot feest, organiseer je een babyshower of een bedrijfsfeest? Wellicht 
        zijn onze decoratiestukken dan wel wat voor jou! 
        En weet je wat het leuke is? Boek je Sanneloes Fotografie voor jouw bruiloft of event, maar zoek je ook 
        nog aankleding? Dan hebben wij speciale kortingen voor jouw decoratie items die jij huurt bij Savvy Styling!<br><br>

        Dus... Zoek jij persoonlijke, handgemaakte en mooie eyecatching decoratie voor jouw event? Neem contact 
        op voor mogelijkheden of om decoratie items te reserveren. Bezoek www.savvystyling.nl voor meer informatie. 
      </p>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-12 items-center justify-center py-12 w-full sm:mx-auto bg-background_4">
  
      <!-- Afbeelding -->
      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/savvy-page/styling-photo-qoute.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-lg"
        />
      </div>

      <div class="px-4 flex items-center justify-center mt-8 sm:mt-0">
        <nuxt-img
          src="/assets/pictures/savvy-page/styling-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px]"
        />
      </div>
    </div>
  </section>


  <section class="hidden bg-background_4 sm:flex items-center justify-center">

    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 py-4 space-y-4 px-4">
      <div v-for="(photo, index) in imageUrls" :key="index">
        <!-- Gebruik nu de nuxt-img component voor lazy loading -->
        <nuxt-img :src="photo.url" class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300" />
      </div>
    </div>
  </section>


  <section class="sm:hidden relative flex justify-center items-center w-full overflow-hidden bg-background_4 pb-12">
    <div ref="slider_events" class="flex gap-4 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
      <div
        v-for="(image, index) in imageUrls"
        :key="index"
        class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0 transition-all duration-500"
        @click="scrollToIndex(index)"
      >
        <img
          :src="image.url"
          :alt="'Image ' + (index + 1)"
          class="w-[270px] object-cover transition-transform duration-500"
        />
      </div>
    </div>
  </section>
  <footer-sf></footer-sf>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";

const imageUrls = ref([
  { url: "/assets/pictures/boudoir-page/boudoir-01.webp" },
  { url: "/assets/pictures/boudoir-page/boudoir-02.webp" },
  { url: "/assets/pictures/boudoir-page/boudoir-03.webp" },
  { url: "/assets/pictures/boudoir-page/boudoir-04.webp" },
  { url: "/assets/pictures/boudoir-page/boudoir-05.webp" }
]);

const slider_events = ref(null);
const currentIndex = ref(2); // Standaard middelste afbeelding

const scrollToIndex = (index) => {
  if (slider_events.value) {
    const tileWidth = 270 + 16; // 270px breedte + 16px gap
    slider_events.value.scrollLeft = index * tileWidth - slider_events.value.clientWidth / 2 + tileWidth / 2;
    currentIndex.value = index;
  }
};

onMounted(() => {
  nextTick(() => scrollToIndex(currentIndex.value));
});
</script>

<style>
/* Verbergt scrollbars */
::-webkit-scrollbar {
  display: none;
}
</style>