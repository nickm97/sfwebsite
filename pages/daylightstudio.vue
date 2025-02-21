<template>
  <section class="hidden sm:block">
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/studio-page/banner.webp"
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
        src="/assets/pictures/studio-page/banner-title.webp"
        alt="Family Background"
        class="w-[400px] object-cover object-center absolute top-1/2 right-1/2 sm:right-[25%] transform translate-x-1/2 -translate-y-1/2"
      />
    </div>
  </section>

  <section class="sm:hidden">
    <div class="bg-[url(/assets/pictures/studio-page/banner.webp)] h-[600px] bg-cover bg-center relative">
      <div>
        <nuxt-img
          src="/assets/pictures/studio-page/banner-title.webp"
          alt="Family Background"
          class="w-[400px] object-cover object-center absolute top-1/2 right-1/2 sm:right-[25%] transform translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  </section>



  <!-- <section>
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/studio-page/banner.webp"
        alt="Family Background"
        class="w-full h-full object-cover object-center"style="object-position: center 60%;"
      />
    </div>
    <div>
      <nuxt-img
        src="/assets/pictures/studio-page/banner-title.webp"
        alt="Family Background"
        class="w-[400px] object-cover object-center absolute top-1/2 right-1/2 sm:right-[25%] transform translate-x-1/2 -translate-y-1/2"
      />
    </div>
  </section> -->

  <section class="flex flex-col items-center px-4 sm:px-6 py-10 bg-background_2">
    <div class="w-full sm:w-[70%]">
      <p class="text-white uppercase font-standard text-left font-bold">
        Daylight studio
      </p>
    </div>
    <div class="mt-6 w-full sm:w-[70%]">
      <p class="text-white font-standard font-light">
        Eind 2023 begon ik Daylight Studio La Luz. Een droom die werkelijkheid werd. Een eigen studioruimte met 
        veel daglicht, gezellig, maar neutraal ingericht waar ik mooie en creatieve beelden kan maken, maar ook 
        collega´s kan laten profiteren van de ruimte. Elkaar vooruit helpen is zeker een doel wat betreft de studio.<br><br>

        Inmiddels wordt de studio niet alleen door mij veel gebruikt, maar ook door twee andere fotografen én wordt 
        de ruimte nog los verhuurd aan derden.<br><br>

        Ben je op zoek naar een lichte, inspirerende ruimte voor je volgende fotoshoot? Bij Daylight Studio La 
        Luz beschik ik over een prachtige daglichtstudio, ideaal voor fotografen die gebruik willen maken van een 
        professionele omgeving, maar ook ideaal voor particulieren en ondernemers om hun shoot hier te plannen. <br><br>

        De studio is volledig ingericht en te huur voor uiteenlopende projecten. Daarnaast kun je bij mij ook een 
        shoot op deze locatie boeken, waarin ik met mijn expertise jouw visie tot leven breng. <br><br>

        Of je nu fotograaf bent of op zoek bent naar een fotograaf, La Luz staat klaar voor jou! Neem contact op
        voor meer informatie of om de studio te reserveren. <br>
        Neem gerust een kijkje op <a href="https://daylightstudio-laluz.nl/" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">
            Daylightstudio-laluz.nl
          </a>.
      </p>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-[100px] items-center justify-center py-12 w-full sm:mx-auto bg-background_4">
 
      <!-- Afbeelding -->
      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/studio-page/studio-photo-qoute.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-xl border-[1px] border-black"
        />
      </div>

      <div class="px-4 flex items-center justify-center sm:w-[500px] text-center mt-8 sm:mt-0">
        <p class="font-playFair text-[26px] sm:text-[50px] text-[#ad9989] uppercase">
          Where there is light there is creativity 
          And where there is creativity, there are endless possibilities
        </p>
        
      </div>
    </div>
  </section>


  <section class="hidden bg-background_4 sm:flex items-center justify-center">

    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 py-4 space-y-4 px-4">
    <div v-for="(photo, index) in imageUrls" :key="index">
      <!-- Gebruik nu de nuxt-img component voor lazy loading -->
      <nuxt-img :src="photo.url" class="w-full max-w-[500px] break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300" />
    </div>
  </div>
  </section>


  <section class="sm:hidden relative flex justify-center items-center w-full overflow-hidden bg-background_4 pb-12">
    <div ref="slider" class="flex gap-4 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
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

const slider = ref(null);
const currentIndex = ref(2); // Standaard middelste afbeelding

const scrollToIndex = (index) => {
  if (slider.value) {
    const tileWidth = 270 + 16; // 270px breedte + 16px gap
    slider.value.scrollLeft = index * tileWidth - slider.value.clientWidth / 2 + tileWidth / 2;
    currentIndex.value = index;
  }
};

onMounted(() => {
  nextTick(() => scrollToIndex(currentIndex.value));
});
</script>


<!-- <script>
export default {
  data() {
    return {
      photos: [ 
      { url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_08772-2.webp', alt: 'SF_08772-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_08781-2.webp', alt: 'SF_08781-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09098.webp', alt: 'SF_09098.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09105.webp', alt: 'SF_09105.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09140.webp', alt: 'SF_09140.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09158.webp', alt: 'SF_09158.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09165.webp', alt: 'SF_09165.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09166.webp', alt: 'SF_09166.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09172.webp', alt: 'SF_09172.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09176.webp', alt: 'SF_09176.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09269.webp', alt: 'SF_09269.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09283.webp', alt: 'SF_09283.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09311.webp', alt: 'SF_09311.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09338.webp', alt: 'SF_09338.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09372.webp', alt: 'SF_09372.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09566-2.webp', alt: 'SF_09566-2.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09635.webp', alt: 'SF_09635.webp' },
{ url: '/assets/pictures/wedding-page/wedding-010825-02/pictures/SF_09938.webp', alt: 'SF_09938.webp' }
] 
    };
  }
};
</script> -->

