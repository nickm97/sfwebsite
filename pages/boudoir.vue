<template>
  <section class="hidden sm:block">
    <!-- background pic -->
    <div class="hidden sm:block relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/boudoir-page/banner.webp"
        alt="Sanneloes fotografie boudoir"
        class="w-full h-full object-cover object-center"
        style="object-position: center 35%;"
      />
    </div>
    <div class="sm:hidden relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/boudoir-page/boudoir-photo-qoute.webp"
        alt="Sanneloes fotografie boudoir"
        class="w-full h-full object-cover object-center"
      />
    </div>
    <div>
      <p class="absolute top-1/2 left-[10%] sm:left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        BOUDOIR
      </p>
    </div>
  </section>

  <section class="sm:hidden">
    <!-- background pic -->
    <div class="bg-[url(/assets/pictures/boudoir-page/boudoir-photo-qoute.webp)] h-[500px] bg-cover bg-center relative">
      <p class="absolute top-1/2 left-[10%] sm:left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90 whitespace-nowrap">
          Boudoir
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center px-4 sm:px-6 py-10 bg-buttonColor">
    <div class="w-full sm:w-[70%]">
      <p class="text-white uppercase font-standard text-left font-bold">
        BOUDOIR
      </p>
    </div>
    <div class="mt-6 w-full sm:w-[70%]">
      <p class="text-white font-standard font-light">
        Een boudoirshoot is meer dan alleen een fotoshoot – het is jou op je krachtigst neerzetten. 
        Het is een kans om je lichaam, je zelfvertrouwen en je unieke schoonheid te omarmen. Of je 
        nu een speciale gelegenheid viert of gewoon iets voor jezelf doet, deze boudoir sessies zijn 
        ontworpen om je sterk, sexy en mooi te laten voelen in je eigen huid. Boudoirfotografie biedt 
        ruimte voor creativiteit. Voor out of the box denken. Het creëren van kunst. Stap in je zelfvertrouwen
        en laat mij de echte jij vastleggen.
      </p>
    </div>
  </section>

  <section class="hidden sm:block items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-12 items-center justify-center py-12 w-full sm:mx-auto bg-background_4">
  
      <!-- Afbeelding -->
      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/boudoir-page/boudoir-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-lg"
        />
      </div>

      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/boudoir-page/boudoir-photo-qoute.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-lg"
        />
      </div>
    </div>
  </section>

  <section class="relative">
    <!-- background pic -->
    <div class="max-h-[calc(100vh-150px)] sm:h-screen sm:max-h-[calc(100vh-100px)]">
      <nuxt-img
        src="/assets/pictures/boudoir-page/banner-02.webp"
        alt="Family Background"
        class="w-full h-full object-cover object-center"
      />
    </div>
    <div class="absolute top-1/2 left-1/2 sm:left-[25%] transform -translate-x-1/2 -translate-y-1/2 
          text-white tracking-widest uppercase text-center w-[300px]">
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 w-full">
        <img
          src="/assets/pictures/boudoir-page/boudoir-photo-02.webp"
          alt="Tile Image 1"
          class="w-full max-w-[400px] sm:max-w-[350px] xl:max-w-[800px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <!-- <h2 class="text-2xl font-playFair mb-2">JAY EN SANNE</h2> -->
          <button
            @click="redirect('/boudoir050225-01')"
            class="px-6 py-2 border border-white text-white uppercase rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View more
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
              <li class="pl-2">Een ontspannen en persoonlijke fotosessie van 60-90 minuten</li>
              <li class="pl-2">Een persoonlijke ervaring: de sessie draait helemaal om jou en jouw unieke schoonheid</li>
              <li class="pl-2">Comfortabele sfeer: een ontspannen omgeving zodat je je volledig op je gemak voelt</li>
              <li class="pl-2">Professionele begeleiding: van tips ter voorbereiding, de outfitkeuze tot poses, ik begeleid je door elke stap</li>
              <li class="pl-2">Het resultaat is een serie foto’s die jouw innerlijke kracht en schoonheid vastleggen</li>
            </ul>
            
          </div> 
          <div class="flex flex-col sm:w-[60%]">
            <p class="font-playFair text-center sm:text-left sm:text-4xl text-[25px] font-light">
              PACKAGES AND PRICES
            </p>
            <ul class="list-disc pl-6 font-standard font-light text-[14.5px] leading-[2rem] py-6">
              <li class="pl-2">Een reguliere boudoirshoot incl. 20 foto's (zelf te kiezen uit een uitgebreide galerij) wat plaats zal vinden in Daylight Studio La Luz in Eindhoven - €360 inclusief BTW</li>
              <li class="pl-2">Reiskosten zijn inbegrepen als de shoot in de studio plaatsvindt</li>
              <li class="pl-2">Extra foto's zijn achteraf bij te bestellen met voordeelpakketten</li>
              <li class="pl-2">Fine art 15x15 albumpje - 20 pagina's €49,50 inclusief BTW - per extra spread +€4,95</li>
            </ul>
            
          </div> 
        </div>       
        <div class="w-full flex items-center justify-center">
          <button
            @click="redirect('/contact')"
            class="px-4 py-2 rounded-full bg-buttonColor_2 bg-opacity-50 hover:bg-opacity-100  font-standard 
            cursor-pointer border-[0.5px] border-white text-black text-[13px] sm:text-[14.5px] uppercase">
            Boek jouw boudoirshoot eN LAAT JEZELF STRALEN
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-background_4 flex items-center justify-center px-6 py-12">
    <!-- <div class="absolute ml-[-88%] z-10">
      <nuxt-img
        src="/assets/pictures/newborn-page/little-stories.png"
        alt="Love Stories"
        class="w-100 h-500 sm:w-[80px] sm:h-[400px] "
      />
    </div> -->
    <div class="sm:hidden flex flex-col items-center relative w-full overflow-hidden ">
      <div v-for="(slider_boudoir, index) in 1" :key="index" ref="sliders_boudoir" class="flex gap-2 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
        <!-- Tile 1 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/boudoir-page/boudoir-01.webp"
            alt="Tile Image 1"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <!-- <h2 class="text-2xl font-playFair mb-2">JAY EN SANNE</h2> -->
            <button
              @click="redirect('/boudoir050225-01')"
              class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              View More
            </button>
          </div>
        </div>
        <!-- Tile 2 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/boudoir-page/boudoir-02.webp"
            alt="Tile Image 2"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <!-- <h2 class="text-2xl font-playFair mb-2">GUUS EN LISA</h2> -->
            <button
              @click="redirect('/boudoir050225-02')"
              class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              View More
            </button>
          </div>
        </div>
        <!-- Tile 3 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/boudoir-page/boudoir-03.webp"
            alt="Tile Image 3"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <!-- <h2 class="text-2xl font-playFair mb-2">WARD EN NICKY</h2> -->
            <button
              @click="redirect('/boudoir050225-03')"
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
          src="/assets/pictures/boudoir-page/boudoir-01.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <!-- <h2 class="text-2xl font-playFair mb-2">JAY EN SANNE</h2> -->
          <button
            @click="redirect('/boudoir050225-01')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/boudoir-page/boudoir-02.webp"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <!-- <h2 class="text-2xl font-playFair mb-2">GUUS EN LISA</h2> -->
          <button
            @click="redirect('/boudoir050225-02')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/boudoir-page/boudoir-03.webp"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <!-- <h2 class="text-2xl font-playFair mb-2">WARD EN NICKY</h2> -->
          <button
            @click="redirect('/boudoir050225-03')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center px-2 py-2 bg-buttonColor">	
    <div class="w-full sm:w-[70%] flex items-center justify-center">
      <nuxt-img
          src="/assets/pictures/boudoir-page/boudoir-qoute-02.webp"
          alt="Sanneloes fotografie boudoir"
          class=""
      />
    </div>
  </section>

  
  <footer-sf></footer-sf>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, nextTick } from "vue";

  const sliders_boudoir = ref([]); // Array van refs voor meerdere sliders

const scrollToMiddle = (slider_boudoir) => {
  if (slider_boudoir) {
    const tileWidth = 270 +16; // 270px breedte + 8px gap
    const middleTileIndex = 1; // Tweede afbeelding (index 1)

    // Scrollpositie berekenen
    slider_boudoir.scrollLeft =
      middleTileIndex * tileWidth - slider_boudoir.clientWidth / 2 + tileWidth / 2;
  }
};

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      sliders_boudoir.value.forEach((slider_boudoir) => scrollToMiddle(slider_boudoir));
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