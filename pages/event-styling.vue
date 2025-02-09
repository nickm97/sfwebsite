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
        class="w-[700px] object-cover object-center absolute top-1/2 right-[50%] transform translate-x-1/2 -translate-y-1/2"
      />
    </div>
  </section>

  <section class="flex flex-col items-center justify-center px-6 py-10 bg-buttonColor">	
    <div class="w-[70%]">
      <p class="text-white uppercase font-standard font-bold">
        VERHUUR VAN STYLING ITEMS VOOR JOUW BRUILOFT, BABYSHOWER, FEEST OF EVENT
      </p>
    </div>
    <div class="mt-6 w-[70%]">
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

      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/savvy-page/styling-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px]"
        />
      </div>
    </div>
  </section>


  <section class="bg-background_4 flex items-center justify-center">
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 py-4 space-y-4 px-4">
      <div v-for="(photo, index) in photos" :key="index">
        <!-- Gebruik nu de nuxt-img component voor lazy loading -->
        <nuxt-img :src="photo.url" :alt="photo.alt" class="w-full break-inside-avoid shadow-lg hover:scale-105 transition-transform duration-300" />
      </div>
    </div>
  </section>

</template>


<script>
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
</script>