<template>
  <section>
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/boudoir-page/banner.webp"
        alt="Family Background"
        class="w-full h-full object-cover object-center"style="object-position: center 35%;"
      />
    </div>
    <div>
      <p class="absolute top-1/2 left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        BOUDOIR
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center px-6 py-10 bg-buttonColor">	
    <div class="w-[70%]">
      <p class="text-white uppercase font-standard font-bold">
        BOUDOIR
      </p>
    </div>
    <div class="mt-6 w-[70%]">
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

  <section class="items-center justify-center">
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
    <div class="h-screen max-h-[calc(100vh-100px)]">
      <nuxt-img
        src="/assets/pictures/boudoir-page/banner-02.webp"
        alt="Family Background"
        class="w-full h-full object-cover object-center"
      />
    </div>
    <div class="absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2 
          text-white tracking-widest font-playFair uppercase text-center">
      <nuxt-img
        src="/assets/pictures/boudoir-page/boudoir-02.webp"
        alt="Family Background"
        class="h-[500px] object-cover object-center rounded-2xl border-2 border-black"
      />
      
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
              <li class="pl-2">Een ontspannen en persoonlijke fotosessie van 60-90 minuten</li>
              <li class="pl-2">Een persoonlijke ervaring: de sessie draait helemaal om jou en jouw unieke schoonheid</li>
              <li class="pl-2">Comfortabele sfeer: een ontspannen omgeving zodat je je volledig op je gemak voelt</li>
              <li class="pl-2">Professionele begeleiding: van tips ter voorbereiding, de outfitkeuze tot poses, ik begeleid je door elke stap</li>
              <li class="pl-2">Het resultaat is een serie foto’s die jouw innerlijke kracht en schoonheid vastleggen</li>
            </ul>
            
          </div> 
          <div class="flex flex-col w-[60%]">
            <p class="font-playFair text-4xl font-light">
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
            cursor-pointer border-[0.5px] border-white text-black text-[14.5px] uppercase">
            Boek jouw boudoirshoot eN LAAT JEZELF STRALEN
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-gray-100 flex items-center justify-center px-6">
    <div class="absolute ml-[-88%] z-10">
      <nuxt-img
        src="/assets/pictures/newborn-page/little-stories.png"
        alt="Love Stories"
        class="w-100 h-500 sm:w-[80px] sm:h-[400px] "
      />
    </div>
    <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/newborn-shoot.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <!-- <h2 class="text-2xl font-playFair mb-2">JAY EN SANNE</h2> -->
          <button
            @click="redirect('/newborn')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/champagne.jpg"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <!-- <h2 class="text-2xl font-playFair mb-2">GUUS EN LISA</h2> -->
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/shoot-02.jpg"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <!-- <h2 class="text-2xl font-playFair mb-2">WARD EN NICKY</h2> -->
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  </section>









  <section class="bg-background_1 flex justify-center">
      <!-- canva image settings 400x150 -->
      <div class="flex items-center justify-center gap-[50px] w-[70%] max-w-[1200px] py-16">
        <div class="w-1/2">
          <nuxt-img
              src="/assets/pictures/boudior-page/every-woman-deserves.png"
              alt="Your story told"
              class="sm:w-[500px] sm:h-[175px] "
          />
        </div>
        <div class="flex-col w-1/2">
          <h1 class="mb-2 text-page_title text-center text-4xl font-playFair uppercase">Boudior</h1>
          <p class="text-gray-700 font-standard">
            Een boudoirshoot is meer dan alleen een fotoshoot – het is jou op je krachtigst neerzetten. 
            Het is een kans om je lichaam, je zelfvertrouwen en je unieke schoonheid te omarmen. Of je nu een 
            speciale gelegenheid viert of gewoon iets voor jezelf doet, deze boudoir sessies zijn ontworpen om 
            je sterk, sexy en mooi te laten voelen in je eigen huid. Boudoirfotografie biedt ruimte voor creativiteit. 
            Voor out of the box denken. Het creëren van kunst. Stap in je zelfvertrouwen en laat mij de echte jij vastleggen.
          </p>
        </div>
      </div>
</section>

<section class="bg-gray-100 flex items-center justify-center px-6">
  <div class="absolute ml-[-88%] z-10">
    <nuxt-img
      src="/assets/pictures/newborn-page/little-stories.png"
      alt="Love Stories"
      class="w-100 h-500 sm:w-[80px] sm:h-[400px] "
    />
  </div>
  <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
    <!-- Tile 1 -->
    <div class="relative group rounded-lg overflow-hidden bg-gray-300">
      <img
        src="/assets/pictures/newborn-shoot.jpg"
        alt="Tile Image 1"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
        <!-- <h2 class="text-2xl font-playFair mb-2">JAY EN SANNE</h2> -->
        <button
          @click="redirect('/newborn')"
          class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          View More
        </button>
      </div>
    </div>
    <!-- Tile 2 -->
    <div class="relative group rounded-lg overflow-hidden bg-gray-300">
      <img
        src="/assets/pictures/champagne.jpg"
        alt="Tile Image 2"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
        <!-- <h2 class="text-2xl font-playFair mb-2">GUUS EN LISA</h2> -->
        <button
          @click="redirect('/strong-women')"
          class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          View More
        </button>
      </div>
    </div>
    <!-- Tile 3 -->
    <div class="relative group rounded-lg overflow-hidden bg-gray-300">
      <img
        src="/assets/pictures/shoot-02.jpg"
        alt="Tile Image 3"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
        <!-- <h2 class="text-2xl font-playFair mb-2">WARD EN NICKY</h2> -->
        <button
          @click="redirect('/strong-women')"
          class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          View More
        </button>
      </div>
    </div>
  </div>
</section>

<div
  class="flex flex-col items-center justify-center cursor-pointer py-10 font-standard bg-background_1"
  @click="scrollToNextSection"
>
  <div>SCROLL TO DISCOVER MORE</div>
  <i class="fa-solid fa-chevron-down text-sm mt-1"></i>
</div>

<section class="bg-gray-100 flex items-center justify-center px-6">
  <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-12 px-24 sm:px-0 w-[85%]">
      <!-- Tile 1 -->
      <div class="relative rounded-lg overflow-hidden flex flex-col">
          <p class="font-playFair text-4xl font-light leading-[3rem] text-right">
              WHAT TO<br>EXPECT?
          </p>
          <!-- <p class="font-standard font-light text-right w-[80%] ml-auto"> -->
          <p class="font-standard font-light text-right pt-4">
            Een ontspannen en persoonlijke fotosessie van 60-90 minuten<br><br>

            Een persoonlijke ervaring: de sessie draait helemaal om jou en jouw unieke schoonheid<br><br>

            Comfortabele sfeer: een ontspannen omgeving zodat je je volledig op je gemak voelt<br><br>

            Professionele begeleiding: van tips ter voorbereiding, de outfitkeuze tot poses, ik begeleid je door elke stap<br><br>

            Het resultaat is een serie foto’s die jouw innerlijke kracht en schoonheid vastleggen
          </p>
      </div>

      <!-- Tile 2 -->   
      <div class="relative group rounded-lg overflow-hidden">
          <img
          src="/assets/pictures/champagne.jpg"
          alt="Tile Image 2"
          class="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <!-- <h2 class="text-2xl font-playFair mb-2">LAURIE</h2> -->
          <button
              @click="redirect('/strong-women')"
              class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
              View More
          </button>
          </div>
      
      </div>

    <!-- Tile 3 -->
    <div class="relative rounded-lg overflow-hidden flex flex-col">
      <p class="font-playFair text-4xl font-light leading-[3rem]">
          PRICES
      </p>
      <p class="font-standard font-light pt-4">
        Een reguliere boudoirshoot incl. 25 foto's (zelf te kiezen uit een uitgebreide galerij) wat plaats zal vinden in Daylight Studio La Luz in Eindhoven<br><br>

        €360 inclusief BTW<br><br>

        Reiskosten zijn inbegrepen als de shoot in de studio plaatsvindt<br><br>

        Extra foto's zijn achteraf bij te bestellen met voordeelpakketten<br><br>

        Fine art 15x15 albumpje - 20 pagina's €49,50 inclusief BTW<br>
        Per extra spread +€4,95 

      </p>
    </div>

  </div>
</section>

<div class="flex flex-col items-center justify-center py-6 font-standard bg-background_1">
  <button
      @click="redirect('/contact')"
      class="px-6 py-2 rounded-full bg-naturalBeige font-standard py-12 cursor-pointer"
  >
  Boek jouw boudoirshoot eN LAAT JEZELF STRALEN
  </button>
</div>

  
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