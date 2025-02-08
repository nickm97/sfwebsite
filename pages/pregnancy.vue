<template>
  <section>
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/pregnancy-page/banner.webp"
        alt="Newborn Background"
        class="w-full h-full object-cover object-center"style="object-position: center 30%;"
      />
    </div>
    <div>
      <p class="absolute top-1/2 left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        Pregnancy
      </p>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-12 items-center justify-center py-12 w-full sm:mx-auto bg-background_4">
      
      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/pregnancy-page/pregnancy-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px]"
        />
      </div>

      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/pregnancy-page/pregnancy-astrid.webp"
          alt="Tile Image 1"
          class="w-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">ASTRID</h2>
          <button
            @click="redirect('/pregnancy050225-02')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="bg-background_2 flex items-center justify-center px-6 py-20">
      <div class="flex flex-col items-center justify-center">
        <div class="w-[90%] flex flex-row">
          <div class="flex flex-col w-[60%]">
            <p class="font-playFair text-4xl font-light">
              WHAT TO EXPECT?
            </p>
            <ul class="list-disc pl-6 font-standard text-[14.5px] font-light leading-[2rem] py-6">
              <li class="pl-2">Een ontspannen fotosessie van 45-60 minuten</li>
              <li class="pl-2">Tijdloze beelden die jouw unieke verhaal vertellen</li>
              <li class="pl-2">Ruimte om jezelf te zijn en deze bijzondere reis vast te leggen</li>
              <li class="pl-2">Een stylingguide en tips voor de voorbereiding van de shoot</li>
            </ul>
            
          </div> 
          <div class="flex flex-col w-[60%]">
            <p class="font-playFair text-4xl font-light">
              PACKAGES AND PRICES
            </p>
            <ul class="list-disc pl-6 font-standard font-light text-[14.5px] leading-[2rem] py-6">
              <li class="pl-2">Een reguliere zwangerschapsshoot incl. 20 foto's (zelf te kiezen uit een uitgebreide galerij) - €330 met partner, €285 alleen, €400 met gezin - inclusief BTW </li>
              <li class="pl-2">Een combishoot; zwangerschap én newborn incl. 20 foto's bij elke fotoshoot (zelf te kiezen uit een uitgebreide galerij) - €695</li>
              <li class="pl-2">Gebruik studio: +€39,50, bij gebruikmaken La Luz voor beide shoots +€54,50</li>
              <li class="pl-2">Reiskosten zijn inbegrepen binnen een straal van 10 km rondom Casteren.</li>
              <li class="pl-2">Extra foto's zijn achteraf bij te bestellen met voordeelpakketten.</li>
              <li class="pl-2">Fine art 15x15 albumpje - 20 pagina's €49,50 inclusief BTW - per extra spread +€4,95</li>
            </ul>
            
          </div> 
        </div>       
        <div class="w-full flex items-center justify-center">
          <button
            @click="redirect('/contact')"
            class="px-4 py-2 rounded-full bg-buttonColor_2 bg-opacity-50 hover:bg-opacity-100  font-standard 
            cursor-pointer border-[0.5px] border-white text-black text-[14.5px] uppercase">
            BOEK JOUW ZWANGERSCHAPSSHOOT
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-background_4 flex items-center justify-center px-6 py-12">
    <div class="absolute ml-[-88%] z-10">
      <nuxt-img
        src="/assets/pictures/newborn-page/little-stories.webp"
        alt="Love Stories"
        class="w-100 h-500 sm:w-[80px] sm:h-[400px] "
      />
    </div>
    <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/pregnancy-page/pregnancy-daisy.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">DAISY</h2>
          <button
            @click="redirect('/pregnancy050225-01')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/pregnancy-page/pregnancy-desiree.webp"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">DESIREE</h2>
          <button
            @click="redirect('/pregnancy050225-04')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/pregnancy-page/pregnancy-jackie.webp"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">JACKIE</h2>
          <button
            @click="redirect('/pregnancy050225-03')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- canva image settings 1000x75 -->
  <section class="flex flex-col items-center justify-center px-2 py-2 bg-buttonColor">  	
    <div class=" w-[90%] flex items-center justify-center">
      <nuxt-img
          src="/assets/pictures/pregnancy-page/greatest-love-story.webp"
          alt="Tell Stories"
          class=""
      />
    </div>
  </section>
    

  <footer-sf></footer-sf>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();
  function scrollToNextSection() {
    // Scroll naar de volgende sectie (vervang de selector naar je gewenste sectie)
    window.scrollBy({
      top: window.innerHeight, // scrollt een volledige viewport naar beneden
      behavior: "smooth" // zorgt voor een vloeiende scroll
    });
  };
  function redirect(path) {
    router.push(path); // Navigeer naar de gewenste route
  }
</script>