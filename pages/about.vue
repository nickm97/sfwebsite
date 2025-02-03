
<template class="bg-white">

  <section id="banner" class="flex">
    <div>
      <nuxt-img
        placeholder
        src="/assets/pictures/about-page/banner-background.webp"
        alt="Sanneloes fotografie"
        width="1920"
        height="700"
        fit="cover"
        class="w-[100%] h-[600px] bg-cover bg-center"
      />
    </div>
    <div class="absolute" style="top: 18%; left: 5%;">
      <nuxt-img
        placeholder
        src="/assets/pictures/about-page/banner-photo.webp"
        alt="Sanneloes fotografie"
        class="w-[430px] h-[600px]"
      />
    </div>
    <div class="absolute" style="top: 18%; right: 33%;">
      <h1 class="uppercase font-playFair text-[70px] tracking-widest">About</h1>
    </div>
    <div class="absolute" style="top: 27%; right: 31%;">
      <nuxt-img
        placeholder
        src="/assets/pictures/about-page/banner-name.webp"
        alt="Sanneloes fotografie"
        class="w-[100%] h-[175px] bg-cover bg-center"
      />
    </div>
  </section>

  <section class="flex flex-col items-center justify-center text-center py-0 px-2 pb-[50px] bg-buttonColor">
    <nuxt-img
      src="/assets/pictures/about-page/about-qoute.webp"
      alt="Sanneloes Fotografie Logo"
      class="object-cover h-[45px] sm:h-[150px] z-10 "
    />
    <div class="sm:flex sm:w-[1300px] text-center sm:text-left text-white sm:gap-12 py-0 font-standard font-light">
      <p class="sm:w-1/2">
        Hi! Mijn naam is Sanneloes van Kessel. Geboren in ‘98 en woon al zolang ik me kan herinneren 
        in het kleine dorpje Casteren. Op de middelbare school begon mijn passie voor fotografie. 
        M'n zusje stond vaak model en ik gebruikte mijn creativiteit voor het stylen, opmaken en het 
        vinden van mooie houdingen. We konden uren bezig zijn met het maken van de foto's en alles eromheen.  
      </p>
      <p class="sm:w-1/2">
        Toen ik eenmaal een studie moest kiezen, ben ik toch de PABO gaan doen. Het lesgeven sprak 
        me namelijk toch ook wel heel erg aan, maar de interesse voor fotografie bleef. Tijdens 
        mijn studie heb ik een minor gedaan in ‘Fotojournalistiek en Beeldredactie’ aan de Hogeschool 
        Utrecht. Dit vond ik ZO leuk, dat ik dacht: ‘hier wil ik iets mee gaan doen’. Ik ben altijd al 
        gegaan voor wat ik wil, dus zo gezegd, zo gedaan. 
      </p>
    </div>
  </section>

  <section class="px-[10px] sm:px-[10px] items flex-col items-center justify-center pb-20">
    <p class="text-3xl font-playFair font-light text-center mb-2 mt-10 uppercase">
      Words that describe me
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-7 gap-4 max-w-10xl w-full">
      <!-- Tile 1 -->
      <div class="relative group overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="\assets\pictures\about-page\lief.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <h1 class="uppercase font-playFair text-2xl text-white z-10">Lief</h1>
        </div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Tile 2 -->
      <div class="relative group overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="\assets\pictures\about-page\creatief.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <h1 class="uppercase font-playFair text-2xl text-white z-10">Creatief</h1>
        </div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Tile 3 -->
      <div class="relative group overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="\assets\pictures\about-page\zorgzaam.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <h1 class="uppercase font-playFair text-2xl text-white z-10">Zorgzaam</h1>
        </div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Tile 4 -->
      <div class="relative group overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="\assets\pictures\about-page\harde-werker.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <h1 class="uppercase font-playFair text-2xl text-white z-10">Harde<br>werker</h1>
        </div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Tile 5 -->
      <div class="relative group overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="\assets\pictures\about-page\reislustig.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <h1 class="uppercase font-playFair text-2xl text-white z-10">Reislustig</h1>
        </div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Tile 6 -->
      <div class="relative group overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="\assets\pictures\about-page\open.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <h1 class="uppercase font-playFair text-2xl text-white z-10">Open</h1>
        </div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <!-- Tile 7 -->
      <div class="relative group overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="\assets\pictures\about-page\enthousiast.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <!-- Content Overlay -->
        <div class="absolute inset-0 flex items-center justify-center flex-col">
          <h1 class="uppercase font-playFair text-2xl text-white z-10">Enthousiast</h1>
        </div>
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center text-center py-12 px-2 bg-buttonColor">
    <div class="sm:flex sm:w-[1300px] text-center sm:text-left text-white sm:gap-12 py-0 font-standard font-light">
      <p class="sm:w-1/2">
        Na het behalen van mijn diploma als leerkracht basisonderwijs, heb ik me vrijwel direct 
        ingeschreven bij de KVK onder de naam ‘Sanneloes Fotografie’. Het avontuur begon. Het opbouwen 
        van een klantenkring, ervaring opdoen, een portfolio opbouwen, fouten maken en heel veel leren. 
        Ik bleef 3 dagen in de week in het onderwijs als juf werken, maar bouwde ondertussen hard aan mijn 
        eigen bedrijf. Na 3,5 jaar ben ik naar 2 dagen in de week voor de klas gegaan. Het beginnen van een 
        daglicht studio popte op in mijn hoofd en ik besloot dit idee met veel enthousiasme en doorzettingsvermogen 
        aan te pakken. ZO GAAF!
      </p>
      <p class="sm:w-1/2">
        Begin 2024 besloot ik samen met mijn vriend 3 maanden te gaan reizen in Azië. Een droom van ons beiden 
        om samen dit avontuur aan te gaan en herinneringen te maken. Het was ergens stiekem ook wel een beetje nodig. 
        Rust in mijn hoofd. Het is niet niks om een eigen bedrijf te runnen, ook in loondienst te zijn, het huishouden, 
        je sociale leven en het oprichten van een nieuwe studio. Steeds weer een andere focus... Eenmaal de rust 
        gevonden op reis, kwam ik met ingevingen. Ik wil stoppen met het onderwijs, want hier ligt helaas gewoon 
        niet echt mijn passie, meer tijd voor creativiteit EN ik wil weer een nieuw bedrijf starten, namelijk Savvy 
        Styling. Ja... Als je eenmaal de ondernemersdrive te pakken hebt... LET'S GOOOOO!
      </p>
    </div>
  </section>
  
  <div class="bg-lightBeige">
    
    <div class="justify-center flex flex-col items-center">
      <h2 class="text-sm font-serif font-thin mt-12 tracking-widest">BEHIND THE BRAND</h2>
      <p class="text-3xl font-serif font-light mt-6 tracking-tight font-black">Photographer & Your Newest Hype Woman</p>
      <nuxt-img
        placeholder
        src="/assets/pictures/loes2.jpg"
        alt="First Image"
        width="800"
        height="400"
        fit="cover"
        class="mt-12 filter grayscale"
      />

      <div class="flex flex-row mt-12 pb-12">
        <div class="w-[50%] px-36">
          <h4 class="text-2xl font-serif font-normal tracking-tight font-black">
            Hi, I'm Sanneloes
          </h4>
          <p class="text-2xl font-fancy mt-6 tracking-tight">
            If you like raw & honest photos,<br>I'm your wing woman.
          </p>
          <p class="text-lg font-sans font-light mt-6 tracking-tight">
            I'm a photographer based in the Netherlands. I love capturing the beauty of everyday life and the people in it. I'm here to help you feel confident and beautiful in front of the camera. Let's create some magic together!
          </p>
        </div>
        <div class="w-[50%] px-24">
          <nuxt-img
            placeholder
            src="/assets/pictures/loes-schattig.jpg"
            alt="First Image"
            class=""
          />
        </div>
      </div>
    </div>

  </div>
  <footer-sf></footer-sf>
</template>
  
  
<script setup>
  // setup() {
</script>
<style scoped>
  
</style>
  