<template>
  <section>
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
        class="w-[400px] object-cover object-center absolute top-1/2 right-[25%] transform translate-x-1/2 -translate-y-1/2"
      />
    </div>
  </section>

  <section class="flex flex-col items-center justify-center px-6 py-10 bg-background_2">	
    <div class="w-[70%]">
      <p class="text-black uppercase font-standard font-bold">
        Daylight studio
      </p>
    </div>
    <div class="mt-6 w-[70%]">
      <p class="text-black font-standard font-light">
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
    <div class="flex flex-col sm:flex-row sm:gap-12 items-center justify-center py-12 w-full sm:mx-auto bg-background_4">
  
      <!-- Afbeelding -->
      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/studio-page/studio-photo-qoute.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-xl border-[1px] border-black"
        />
      </div>

      <div class="px-4 flex items-center justify-center w-[50%] text-center">
        <p class="font-playFair text-[50px] text-[#ad9989] uppercase">
          Where there is light there is creativity 
          And where there is creativity, there are endless possibilities
        </p>
        
      </div>
    </div>
  </section>


  <section class="bg-background_4 flex items-center justify-center">

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
