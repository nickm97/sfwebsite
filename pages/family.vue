<template>
  <section class="hidden sm:block">
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/family-page/banner.webp"
        alt="Family Background"
        class="w-full h-full object-cover object-center"
        style="object-position: center 10%;"
      />
    </div>
    <div class="">
      <p class="absolute top-1/2 left-[10%] sm:left-[8%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90 whitespace-nowrap">
          
        <span class="sm:inline hidden">Little<br>FAMILIES</span>
        <span class="inline sm:hidden">Little FAMILIES</span>

      </p>
    </div>
  </section>

  <section class="sm:hidden">
    <!-- background pic -->
    <div class="bg-[url(/assets/pictures/family-page/banner.webp)] h-[600px] bg-cover bg-center relative">
      <p class="absolute top-1/2 left-[10%] sm:left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90 whitespace-nowrap">
          Little families
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center px-4 sm:px-6 py-10 bg-buttonColor">
    <div class="w-full sm:w-[70%]">
      <p class="text-white uppercase font-standard text-left font-bold">
        FAMILIES
      </p>
    </div>
    <div class="mt-6 w-full sm:w-[70%]">
      <p class="text-white font-standard font-light">
        Echte momenten, waardevolle herinneringen! Een gezin groeit, verandert en leeft volop in het moment. 
        Het zijn die kleine gebaren, knuffels, het gelach en zelfs de chaos die jullie uniek maken. Een gezinsshoot 
        draait om het vastleggen van deze echte momenten – precies zoals jullie zijn.<br><br>

        Geen stijve poses, maar spontane beelden vol warmte en liefde. Of het nu thuis is, 
        buiten in de natuur of op een favoriete plek, ik zorg dat jullie je ontspannen voelen 
        en het plezier kunnen laten spreken.
      </p>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-12 items-center justify-center py-12 w-full sm:mx-auto bg-background_4">
  
      <!-- Afbeelding
      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/family-page/families-photo-qoute.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-lg"
        />
      </div> -->

      <div class="relative group rounded-lg overflow-hidden px-4 flex items-center justify-center rounded-lg">
        <img
          src="/assets/pictures/family-page/families-photo-qoute.webp"
          alt="Tile Image 2"
          class="w-[300px] sm:w-[400px] rounded-lg object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <!-- <h2 class="text-2xl font-playFair mb-2">ASTRID</h2> -->
          <button
            @click="redirect('/family050225-01')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>

      <div class="px-4 mt-8 sm:mt-0 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/family-page/families-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px]"
        />
      </div>
    </div>
  </section>

  <section>
    <div class="bg-background_2 flex items-center justify-center px-4 pt-12 pb-12 sm:px-6 sm:py-20">
      <div class="flex flex-col items-center justify-center relative">
        <div class="sm:w-[80%] sm:gap-6 flex sm:flex-row flex-col">
          <div class="flex flex-col sm:w-[60%]">
            <p class="font-playFair text-center sm:text-left sm:text-4xl text-[25px] font-light">
              WHAT TO EXPECT?
            </p>
            <ul class="list-disc pl-6 font-standard text-[14.5px] font-light leading-[2rem] py-6">
              <li class="pl-2">Een ontspannen fotosessie van 60-90 minuten</li>
              <li class="pl-2">Beelden vol spontaniteit en echtheid</li>
              <li class="pl-2">Herinneringen die een leven lang meegaan</li>
              <li class="pl-2">Een stylingguide en tips voor de voorbereiding van de shoot</li>
            </ul>
            
          </div> 
          <div class="flex flex-col sm:w-[60%] mt-8 sm:mt-0">
            <p class="font-playFair text-center sm:text-left sm:text-4xl text-[25px] font-light">
              PACKAGES AND PRICES
            </p>
            <ul class="list-disc pl-6 font-standard font-light text-[14.5px] leading-[2rem] py-6">
              <li class="pl-2">Een reguliere gezinsshoot tot 4 personen incl. 20 foto's (zelf te kiezen uit een uitgebreide galerij) - €425 inclusief BTW - €25 per extra persoon</li>
              <li class="pl-2">Gebruik studio: +€39,50</li>
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
            Boek jullie gezinsshoot en leg de waardevolle momenten samen vast
          </button>
        </div>
      </div>
    </div>
  </section>  

  <div class="flex flex-col-reverse sm:flex-col">
    <section class="flex flex-col">
        <div class="flex bg-background_4 items-center justify-center relative pt-12 pb-6">
                <!-- Tekstgedeelte -->
                <div class="flex flex-col items-center justify-center pb-6 font-standard bg-background_4 text-center">
                    <p class="font-playFair text-[26px] sm:text-4xl font-light leading-[2.5rem] py-4">
                        OUR LITTLE FAMILY STORY - PACKAGE
                    </p>
                    <p class="font-standard sm:max-w-[1300px] px-4 sm:px-0 text-left sm:text-center">
                        Wil je jouw gezin op een unieke, realistische manier laten vastleggen? Wil jij niet een fase vastleggen, 
                        maar ook een echte ervaring? Met een conceptshoot creëren we samen een fotoserie die helemaal bij jullie 
                        verhaal past. Geen “standaard” shoot in de studio of op de heide, maar beelden vol sfeer, activiteiten en
                        persoonlijkheden – met een unieke twist. Denk aan bijzondere locaties, styling, thema’s en concepten die 
                        jullie als gezin écht weerspiegelen. Dit pakket draait om meer dan alleen het vastleggen van mooie 
                        momenten. Het gaat om een creatief idee dat we samen uitwerken om jullie verhaal op een unieke manier 
                        te vertellen. We creëren beelden die verder gaan dan een standaard fotoshoot.
                    </p>
                </div>

                <!-- Afbeelding -->
                <div class="hidden sm:flex absolute right-24 -top-[125px]">
                    <nuxt-img
                    src="/assets/pictures/newborn-page/extra-aanbod.webp"
                    alt="Extra aanbod"
                    class="sm:w-[250px] sm:h-[250px]"
                    />
                </div>

            </div>

            <div class="flex flex-col sm:flex-row justify-center bg-background_4 gap-6 pb-12">
                    <div class="sm:w-[50%] px-4 sm:px-0">
                        <p class="font-standard text-right font-light">
                        <u class="font-medium">Inhoud reportage:</u><br>
                        Een shoot van 1,5 tot 2 uur<br>
                        25 professionele foto's per shoot (mogelijkheid om extra foto's bij te bestellen)<br>
                        Toegang tot een online galerij om de foto's uit te kiezen <br>
                        Advies over kleding en styling<br>
                        Concept en locatie in overleg - we bespreken wat passend is voor jullie<br>
                        €499 inclusief BTW tot 5 personen - elk persoon extra +€25<br>
                        Reiskosten zijn inbegrepen binnen een straal van 10 km rondom Casteren<br>
                    </p>
                </div>
                <div class="sm:w-[50%] px-4 sm:px-0">
                    <p>
                        <u>Voorbeelden kunnen zijn:</u>
                    </p>
                    <ul class="list-disc pl-6 font-standard font-light leading-[1.5rem]">
                        <li>Picknicken, bloemetjes plukken en vliegeren in de natuur</li>
                        <li>Vingerverven én bodypainten, gewoon omdat het kan!</li>
                        <li>Koekjes bakken en samen versieren</li>
                        <li>Een kampeersetting met campingspelletjes, een kampvuurtje met marshmallows en gitaarmuziek</li>
                        <li>Samen naar de kinderboerderij</li>
                        <li>Spelen en schelpen zoeken op het strand</li>
                        <li>Een stadswandeling of lekker touren met de bakfiets om een ijsje te gaan eten</li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col items-center justify-center pb-12 font-standard bg-background_4">
              <button
                  @click="redirect('/contact')"
                  class="px-6 py-2 rounded-full bg-buttonColor text-[14px] font-standard cursor-pointer uppercase text-white hover:bg-white hover:text-black"
              >
              geweldig! dit wil ik! 
              </button>
            </div>
        </section>

        <section class="bg-background_4 flex items-center justify-center px-6 pt-12 sm:pt-0 sm:pb-12 ">
          <div class="hidden sm:flex absolute ml-[-88%] z-10">
            <nuxt-img
              src="/assets/pictures/newborn-page/little-stories.webp"
              alt="Love Stories"
              class="w-100 h-500 sm:w-[80px] sm:h-[400px] "
            />
          </div>

          <div class="sm:hidden flex flex-col items-center relative w-full overflow-hidden ">

            <div v-for="(slider_families, index) in 1" :key="index" ref="sliders_families" class="flex gap-2 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
              <!-- Tile 1 -->
              <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
                <img
                  src="/assets/pictures/family-page/family-01.webp"
                  alt="Tile Image 1"
                  class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
                  <!-- <h2 class="text-2xl font-playFair mb-2">DAISY</h2> -->
                  <button
                    @click="redirect('/family050225-02')"
                    class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    VIEW MORE
                  </button>
                </div>
              </div>
              <!-- Tile 2 -->
              <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
                <img
                  src="/assets/pictures/family-page/family-02.webp"
                  alt="Tile Image 2"
                  class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
                  <!-- <h2 class="text-2xl font-playFair mb-2">ASTRID</h2> -->
                  <button
                    @click="redirect('/family050225-03')"
                    class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    VIEW MORE
                  </button>
                </div>
              </div>
              <!-- Tile 3 -->
              <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
                <img
                  src="/assets/pictures/family-page/family-03.webp"
                  alt="Tile Image 3"
                  class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
                  <!-- <h2 class="text-2xl font-playFair mb-2">PUCK</h2> -->
                  <button
                    @click="redirect('/family050225-04')"
                    class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
            </div>

          <div class="hidden sm:flex relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
            <!-- Tile 1 -->
            <div class="relative group rounded-lg overflow-hidden bg-gray-300">
              <img
                src="/assets/pictures/family-page/family-01.webp"
                alt="Tile Image 1"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
                <!-- <h2 class="text-2xl font-playFair mb-2">DAISY</h2> -->
                <button
                  @click="redirect('/family050225-02')"
                  class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                >
                  VIEW MORE
                </button>
              </div>
            </div>
            <!-- Tile 2 -->
            <div class="relative group rounded-lg overflow-hidden bg-gray-300">
              <img
                src="/assets/pictures/family-page/family-02.webp"
                alt="Tile Image 2"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
                <!-- <h2 class="text-2xl font-playFair mb-2">ASTRID</h2> -->
                <button
                  @click="redirect('/family050225-03')"
                  class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                >
                  VIEW MORE
                </button>
              </div>
            </div>
            <!-- Tile 3 -->
            <div class="relative group rounded-lg overflow-hidden bg-gray-300">
              <img
                src="/assets/pictures/family-page/family-03.webp"
                alt="Tile Image 3"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
                <!-- <h2 class="text-2xl font-playFair mb-2">PUCK</h2> -->
                <button
                  @click="redirect('/family050225-04')"
                  class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                >
                  VIEW MORE
                </button>
              </div>
            </div>
          </div>
        </section>
  </div>
  

  <section class="flex flex-col items-center justify-center px-2 py-2 bg-buttonColor">  	
    <div class="w-full sm:w-[70%] flex items-center justify-center">
      <nuxt-img
          src="/assets/pictures/family-page/families-qoute-02.webp"
          alt="Sanneloes fotografie familie shoot"
          class=""
      />
    </div>
  </section>

    <footer-sf></footer-sf>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted, nextTick } from "vue";

const sliders_families = ref([]); // Array van refs voor meerdere sliders

const scrollToMiddle = (slider_families) => {
if (slider_families) {
  const tileWidth = 270 +16; // 270px breedte + 8px gap
  const middleTileIndex = 1; // Tweede afbeelding (index 1)

  // Scrollpositie berekenen
  slider_families.scrollLeft =
    middleTileIndex * tileWidth - slider_families.clientWidth / 2 + tileWidth / 2;
}
};

onMounted(() => {
nextTick(() => {
  setTimeout(() => {
    sliders_families.value.forEach((slider_families) => scrollToMiddle(slider_families));
  }, 1500); // Kleine vertraging van 100ms
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