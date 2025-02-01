<template>
  <section class="bg-gray-100 flex justify-center">
    <div class="flex items-center justify-center gap-[50px] w-[70%] py-16">
      <div class="w-1/2">
        <nuxt-img
          src="/assets/pictures/studio-page/studio_qoute.webp"
          alt="Your story told"
          class=""
        />
      </div>
      <div class="flex-col w-1/2">
        <h1 class="mb-2 text-page_title text-center text-4xl font-playFair uppercase">DAYLIGHT STUDIO LA LUZ</h1>
        <p class="text-gray-700 font-standard">
          Eind 2023 begon ik Daylight Studio La Luz. Een droom die werkelijkheid werd. 
          Een eigen studioruimte met veel daglicht, gezellig, maar neutraal ingericht waar 
          ik mooie en creatieve beelden kan maken, maar ook collega´s kan laten profiteren van de ruimte. 
          Elkaar vooruit helpen is zeker een doel wat betreft de studio. Met hulp van mijn lieve 
          familieleden en vriend werd mijn visie realiteit.<br><br>

          Inmiddels wordt de studio niet alleen door mij veel gebruikt, 
          maar ook door twee andere fotografen én wordt de ruimte nog los verhuurd aan derden.<br><br>

          Ben je op zoek naar een lichte, inspirerende ruimte voor je volgende fotoshoot? 
          Bij Daylight Studio La Luz beschik ik over een prachtige daglichtstudio, ideaal 
          voor fotografen die gebruik willen maken van een professionele omgeving, maar ook 
          ideaal voor particulieren en ondernemers om hun shoot hier te plannen. 
          De studio is volledig ingericht en te huur voor uiteenlopende projecten. Daarnaast 
          kun je bij mij ook een shoot op deze locatie boeken, waarin ik met mijn expertise jouw 
          visie tot leven breng.<br><br>

          Of je nu fotograaf bent of op zoek bent naar een fotograaf, La Luz staat klaar voor 
          jou! Neem contact op voor meer informatie of om de studio te reserveren. 
          Neem gerust een kijkje op <a href="https://daylightstudio-laluz.nl/" target="_blank" style="text-decoration: underline;">Daylightstudio-laluz.nl</a>. 
        </p>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 flex items-center justify-center">

    <section class="py-8 px-4">
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
