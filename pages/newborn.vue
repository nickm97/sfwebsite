<template>
  <section class="hidden sm:block">
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/newborn-page/banner.webp"
        alt="Newborn Background"
        class="w-full h-full object-cover object-center newborn-banner"
        style="object-position: center 30%;"
      />

    </div>
    <div>
      <p class="absolute top-1/2 left-[10%] sm:left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        Newborn
      </p>
    </div>
  </section>

  <section class="sm:hidden">
    <!-- background pic -->
    <div class="bg-[url(/assets/pictures/newborn-page/banner.webp)] h-[500px] bg-cover bg-center relative">
      <p class="absolute top-1/2 left-[10%] sm:left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        Newborn
      </p>
    </div>
  </section>


  <section class="flex flex-col items-center px-4 sm:px-6 py-10 bg-buttonColor">
    <div class="w-full sm:w-[70%]">
      <p class="text-white uppercase font-standard text-left font-bold">
        BABY'S
      </p>
    </div>
    <div class="mt-6 w-full sm:w-[70%]">
      <p class="text-white font-standard font-light">
        De eerste dagen met je kleintje zijn magisch, vol liefde en kleine, kostbare details 
          die je nooit wilt vergeten. Die piepkleine handjes, zachte haartjes en rustige slaapplekjes 
          – ze groeien sneller dan je denkt.<br>
          Met een newborn fotoshoot leg ik deze bijzondere momenten vast op een pure, tijdloze manier. 
          Geen druk, geen haast – alleen liefdevolle beelden van jullie nieuwe begin. We creëren samen 
          een ontspannen sfeer, zodat zowel jullie als jullie kleintje zich op hun gemak voelen.
      </p>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-12 items-center justify-center py-12 w-full sm:mx-auto bg-background_4">
  
      <!-- Afbeelding -->
      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/newborn-page/newborn-photo-qoute.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-lg"
        />
      </div>

      <div class="px-4 mt-8 sm:mt-0 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/newborn-page/newborn-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px]"
        />
      </div>
    </div>
  </section>

  <section>
    <div class="bg-background_2 flex items-center justify-center px-4 pt-12 pb-[90px] sm:px-6 sm:py-20">
      <div class="flex flex-col items-center justify-center relative">
        <div class="sm:w-[80%] sm:gap-6 flex sm:flex-row flex-col">
          <div class="flex flex-col sm:w-[60%]">
            <p class="font-playFair text-center sm:text-left sm:text-4xl text-[25px] font-light">
              WHAT TO EXPECT?
            </p>
            <ul class="list-disc pl-6 font-standard text-[14.5px] font-light sm:leading-[2rem] py-6">
              <li class="pl-2">Een ontspannen fotosessie van 60-90 minuten, met alle tijd voor jullie kleintje</li>
              <li class="pl-2">Échtheid, natuurlijk licht en zachte tinten</li>
              <li class="pl-2">Foto’s vol warmte, liefde en details die je nooit wilt vergeten</li>
              <li class="pl-2">Een fotograaf met rust en geduld</li>
              <li class="pl-2">Een stylingguide en tips voor de voorbereiding van de shoot</li>
            </ul>
            
          </div> 
          <div class="flex flex-col sm:w-[60%]">
            <p class="font-playFair text-center sm:text-left sm:text-4xl text-[25px] font-light">
              PACKAGES AND PRICES
            </p>
            <ul class="list-disc pl-6 font-standard font-light text-[14.5px] sm:leading-[2rem] py-6">
              <li class="pl-2">Een reguliere newbornshoot incl. 20 foto's (zelf te kiezen uit een uitgebreide galerij) - €425</li>
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
            cursor-pointer border-[0.5px] border-white text-black text-[13px] sm:text-[14.5px] uppercase">
            Boek jouw newbornshoot en leg jullie mooiste begin vast
          </button>
        </div>
        <div class="sm:hidden absolute left-[-1px] bottom-[-120px]">
          <nuxt-img
          src="/assets/pictures/newborn-page/extra-aanbod-mobile.webp"
          alt="Extra aanbod"
          class="h-[100px] sm:w-[250px] sm:h-[250px]"
          />
        </div>
      </div>
    </div>
  </section>

  <section class="bg-background_4">
    <div class="flex flex-col items-center justify-center px-4 sm:px-6 py-10">
      <p class="uppercase text-[#322614] text-[50px] font-playFair text-center sm:text-left sm:text-4xl text-[25px] font-light">
        LITTLE MILESTONES - PACKAGE
      </p>
      <p class="text-center font-standard font-light text-[14.5px] sm:text-[16px] py-6">
        Een fotosessie voor elk kwartaal van het eerste levensjaar om de ontwikkeling
        van<br> het eerste levensjaar van je kindje vast te leggen.<br>
        <u>Bijvoorbeeld</u>: 0,3,6,9 maanden  OF   3,6,9,12 maanden
      </p>
      <p class="text-center font-standard font-light text-[14.5px] sm:text-[16px]">
        4 fotoshoots per jaar (één keer per kwartaal)<br>
        7 professionele foto's per shoot (mogelijkheid om extra foto's bij te bestellen)<br>
        Toegang tot een online galerij om de foto's uit te kiezen <br>
        Advies over kleding en styling<br>
        Mogelijk op verschillende locaties<br>
        €725 inclusief BTW
      </p>
    </div>
  </section>

  <section class="bg-background_4 flex items-center justify-center px-6 pb-12">
    <!-- <h1 class="font-playFair uppercase absolute text-6xl left-1/2 transform translate-x-[-50%] top-[-220px]">Newborn</h1> -->
    <div class="absolute ml-[-88%] z-10 hidden sm:block">
      <nuxt-img
        src="/assets/pictures/newborn-page/little-stories.webp"
        alt="Love Stories"
        class="w-100 h-500 sm:w-[80px] sm:h-[250px] "
      />
    </div>

    <div class="sm:hidden flex flex-col items-center relative w-full overflow-hidden ">
      <div v-for="(slider_newborn, index) in 1" :key="index" ref="sliders_newborn" class="flex gap-2 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
        <!-- Tile 1 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/newborn-page/newborn-luen.webp"
            alt="Tile Image 1"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">LUÉN</h2>
            <button
              @click="redirect('/newborn050225-01')"
              class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              View More
            </button>
          </div>
        </div>
        <!-- Tile 2 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/newborn-page/newborn-lois.webp"
            alt="Tile Image 2"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">LOÏS</h2>
            <button
              @click="redirect('/newborn050225-02')"
              class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              View More
            </button>
          </div>
        </div>
        <!-- Tile 3 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/newborn-page/newborn-laurie.webp"
            alt="Tile Image 3"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">LAURIE</h2>
            <button
              @click="redirect('/newborn050225-03')"
              class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
    

    <div class="hidden sm:flex relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/newborn-page/newborn-luen.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">LUÉN</h2>
          <button
            @click="redirect('/newborn050225-01')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/newborn-page/newborn-lois.webp"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">LOÏS</h2>
          <button
            @click="redirect('/newborn050225-02')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/newborn-page/newborn-laurie.webp"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">LAURIE</h2>
          <button
            @click="redirect('/newborn050225-03')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center px-2 py-2 bg-buttonColor">	
    <div class="w-[99%] sm:w-[90%] flex items-center justify-center">
      <nuxt-img
          src="/assets/pictures/newborn-page/timeless-tomorrow.webp"
          alt="Sanneloes Fotografie Newborn"
          class=""
      />
    </div>
  </section>

  <footer-sf></footer-sf>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted, nextTick } from "vue";

  const sliders_newborn = ref([]); // Array van refs voor meerdere sliders

const scrollToMiddle = (slider_newborn) => {
  if (slider_newborn) {
    const tileWidth = 270 +16; // 270px breedte + 8px gap
    const middleTileIndex = 1; // Tweede afbeelding (index 1)

    // Scrollpositie berekenen
    slider_newborn.scrollLeft =
      middleTileIndex * tileWidth - slider_newborn.clientWidth / 2 + tileWidth / 2;
  }
};

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      sliders_newborn.value.forEach((slider_newborn) => scrollToMiddle(slider_newborn));
    }, 500); // Kleine vertraging van 100ms
  });
});

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

<style scoped>
  @media (max-width: 640px) {
  .newborn-banner {
    object-position: 42% 30% !important;
  }
}
</style>