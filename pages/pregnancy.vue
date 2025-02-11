<template>
  <section>
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)] hidden sm:block">
      <nuxt-img
        src="/assets/pictures/pregnancy-page/banner.webp"
        alt="Newborn Background"
        class="w-full h-full object-cover object-center"style="object-position: center 30%;"
      />
    </div>
    <div class="relative h-screen max-h-[calc(100vh-150px)] sm:hidden">
      <nuxt-img
        src="/assets/pictures/pregnancy-page/banner-mobile.webp"
        alt="Shoots Background"
        class="w-full h-full object-cover object-center"style="object-position: center 45%;"
      />
    </div>
    <div class="sm:hidden">
      <p class="absolute top-[50%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        Pregnancy
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center px-4 sm:px-6 py-10 bg-buttonColor">
    <div class="w-full sm:w-[70%]">
      <p class="text-white uppercase font-standard text-left font-bold">
        ZWANGERSCHAP
      </p>
    </div>
    <div class="mt-6 w-full sm:w-[70%]">
      <p class="text-white font-standard font-light">
        Vier het begin van een nieuw leven! Zwangerschap is een magische tijd vol liefde, 
        verwachting en veranderingen. Je draagt niet alleen een nieuw leven, maar ook een 
        verhaal dat het waard is om vastgelegd te worden. Een zwangerschapsshoot is een moment 
        om stil te staan bij deze bijzondere fase – om de groei, de verbinding en de liefde te vieren.<br><br>

        Of je nu kiest voor een intieme studiosessie of een fotoshoot op locatie, ik zorg voor beelden die 
        de kracht en schoonheid van jouw zwangerschap laten stralen. Puur, tijdloos en vol emotie.<br><br>

        Dit is het begin van jullie mooiste verhaal. Laten we het samen vastleggen.
      </p>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex flex-col-reverse sm:flex-row sm:gap-12 items-center justify-center py-6 sm:py-12 w-full sm:mx-auto bg-background_4">
      
      <div class="px-4 flex items-center justify-center mt-8 sm:mt-0">
        <nuxt-img
          src="/assets/pictures/pregnancy-page/pregnancy-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px]"
        />
      </div>

      <!-- Tile 1 -->
      <div class="relative group rounded-xl overflow-hidden px-4">
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
    <div class="bg-background_2 flex items-center justify-center px-4 pt-12 pb-[90px] sm:px-6 sm:py-20">
      <div class="flex flex-col items-center justify-center relative">
        <div class="sm:w-[80%] sm:gap-6 flex sm:flex-row flex-col">
          <div class="flex flex-col sm:w-[60%]">
            <p class="font-playFair text-center sm:text-left sm:text-4xl text-[25px] font-light">
              WHAT TO EXPECT?
            </p>
            <ul class="list-disc pl-6 font-standard text-[14.5px] font-light leading-[2rem] py-6">
              <li class="pl-2">Een ontspannen fotosessie van 45-60 minuten</li>
              <li class="pl-2">Tijdloze beelden die jouw unieke verhaal vertellen</li>
              <li class="pl-2">Ruimte om jezelf te zijn en deze bijzondere reis vast te leggen</li>
              <li class="pl-2">Een stylingguide en tips voor de voorbereiding van de shoot</li>
            </ul>
            
          </div> 
          <div class="flex flex-col sm:w-[60%]">
            <p class="font-playFair text-center sm:text-left sm:text-4xl text-[25px] font-light">
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
            cursor-pointer border-[0.5px] border-white text-black text-[13px] sm:text-[14.5px] uppercase">
            BOEK JOUW ZWANGERSCHAPSSHOOT
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-background_4 flex items-center justify-center px-6 py-12">
    <div class="absolute ml-[-88%] z-10 hidden sm:block">
      <nuxt-img
        src="/assets/pictures/newborn-page/little-stories.webp"
        alt="Love Stories"
        class="w-100 h-500 sm:w-[80px] sm:h-[400px] "
      />
    </div>

    <div class="sm:hidden flex flex-col items-center relative w-full overflow-hidden ">
      <div v-for="(slider_pregnancy, index) in 1" :key="index" ref="sliders_pregnancy" class="flex gap-2 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
        <!-- Tile 1 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/pregnancy-page/pregnancy-daisy.webp"
            alt="Tile Image 1"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
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
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/pregnancy-page/pregnancy-desiree.webp"
            alt="Tile Image 2"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
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
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/pregnancy-page/pregnancy-jackie.webp"
            alt="Tile Image 3"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
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
    </div>


    <div class="hidden sm:flex relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
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
    <div class="hidden w-[90%] sm:flex items-center justify-center">
      <nuxt-img
          src="/assets/pictures/pregnancy-page/greatest-love-story.webp"
          alt="Sanneloes fotografie zwangerschap"
          class=""
      />
    </div>
    <div class="w-[90%] flex sm:hidden items-center justify-center">
      <nuxt-img
          src="/assets/pictures/pregnancy-page/qoute-02.webp"
          alt="Sanneloes fotografie zwangerschap"
          class=""
      />
    </div>
  </section>
    

  <footer-sf></footer-sf>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted, nextTick } from "vue";

  const sliders_pregnancy = ref([]); // Array van refs voor meerdere sliders

const scrollToMiddle = (slider_pregnancy) => {
  if (slider_pregnancy) {
    const tileWidth = 270 +16; // 270px breedte + 8px gap
    const middleTileIndex = 1; // Tweede afbeelding (index 1)

    // Scrollpositie berekenen
    slider_pregnancy.scrollLeft =
      middleTileIndex * tileWidth - slider_pregnancy.clientWidth / 2 + tileWidth / 2;
  }
};

onMounted(() => {
  nextTick(() => {
    sliders_pregnancy.value.forEach((slider_pregnancy) => scrollToMiddle(slider_pregnancy));
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