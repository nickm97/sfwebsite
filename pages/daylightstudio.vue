<template>
  <section>
    <div class="flex items-center justify-center w-full">
      <p class="text-1xl font-serif font-light mt-6 tracking-tight font-standard text-center max-w-[700px]">
        Ben je op zoek naar een lichte, inspirerende ruimte voor je volgende fotoshoot? 
        Bij Daylight Studio La Luz beschik ik over een prachtige daglichtstudio, ideaal voor fotografen 
        die gebruik willen maken van een professionele omgeving. De studio is volledig uitgerust en te 
        huur voor uiteenlopende projecten. Daarnaast kun je bij mij ook een shoot boeken, waarin ik met mijn 
        expertise jouw visie tot leven breng. Of je nu fotograaf bent of op zoek bent naar een fotograaf, 
        mijn studio staat klaar voor jou! Neem contact op voor meer informatie of om de studio te reserveren.
      </p>
    </div>

    <section class="py-8 px-4">
      <h1 class="text-3xl font-playFair text-center mb-8">IMPRESSIE</h1>

      <!-- Masonry Grid -->
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <nuxt-img
          v-for="(photo, index) in photos"
          :key="index"
          :src="`/assets/studio/${photo}`"
          :alt="`Foto ${index + 1}`"
          class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  </section>
</template>

<script>
import photoList from '~/assets/photoList.json';

export default {
  data() {
    return {
      photos: photoList, // Foto's laden vanuit JSON-bestand
    };
  },
};
</script>
