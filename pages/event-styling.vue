<template>
    <section class="bg-gray-100 flex justify-center">
      <div class="flex items-center justify-center gap-[50px] w-[80%] py-16">
        <div class="w-1/2">
          <nuxt-img
            src="/assets/pictures/savvy-page/savvy-qoute.webp"
            alt="Your story told"
            class=""
          />
        </div>
        <div class="flex-col w-1/2">
          <h1 class="mb-2 text-page_title text-center text-4xl font-playFair uppercase">SAVVY STYlING</h1>
          <p class="text-gray-700 font-standard">
            Half 2024 startte ik samen met mijn lieve moeder Yvette, Savvy Styling. 
            Al járen dacht ik iets te willen doen met aankleding van bruiloften, maar
            hoe en wat wist ik niet precies, totdat ik op een lange reis was. Ik kreeg 
            inspiratie en wist het ineens. Samen met mijn c reatieve moeder wil ik een 
            bedrijf beginnen die zich focust op het maken van decoratie en backdrops voor bruiloften, 
            babyshowers feesten en evenementen. We focussen ons op duurzaamheid, creativiteit en stoppen 
            zelf veel liefde en tijd in al onze decoratiestukken die we dan aan klanten kunnen verhuren.<br><br>

            Sinds dat ik zelf feestjes geef, vind ik aankleding super belangrijk. Het maakt je feestje 
            persoonlijk én het brengt direct sfeer. Om de stylingitems persoonlijk te maken, werken we 
            met verschillende stijlen, kleuren, bloemen, vormen en teksten. Voor ieder wat wils.<br><br>

            Ga jij trouwen, geef je een groot feest, organiseer je een babyshower of een bedrijfsfeest? 
            Wellicht zijn onze decoratiestukken dan wel wat voor jou! En weet je wat het leuke is? Boek 
            je Sanneloes Fotografie voor jouw bruiloft of event, maar zoek je ook nog aankleding? Dan 
            hebben wij speciale kortingen voor jouw decoratie items die jij huurt bij Savvy Styling!<br><br>

            Dus... Zoek jij persoonlijke, handgemaakte en mooie eyecatching decoratie voor jouw event? 
            Neem contact op voor mogelijkheden of om decoratie items te reserveren. Bezoek 
            <a href="https://savvy-styling.nl/" target="_blank" style="text-decoration: underline;">Savvy-styling.nl</a> 
            voor meer informatie. 
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