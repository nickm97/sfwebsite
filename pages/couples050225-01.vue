<template>
  <section>
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/couples-page/banner.webp"
        alt="Family Background"
        class="w-full h-full object-cover object-center"style="object-position: center 50%;"
      />
    </div>
    <div>
      <p class="absolute top-1/2 right-[5%] transform translate-x-1/2 -translate-y-1/2 
          text-white text-[80px] tracking-widest font-playFair uppercase text-center 
          rotate-90">
        LOVERS
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center px-6 py-10 bg-buttonColor">	
    <div class="w-[70%]">
      <p class="text-white uppercase font-standard font-bold">
        KOPPELS
      </p>
    </div>
    <div class="mt-6 w-[70%]">
      <p class="text-white font-standard font-light">
        Jullie liefde verdient het om vastgelegd te worden. Een koppelshoot draait om verbinding, 
        spontaniteit en échte momenten. Of je nu net verloofd bent, een jubileum viert of gewoon 
        jullie verhaal wilt bevriezen in de tijd – ik zorg voor beelden die laten zien wie jullie zijn samen.<br><br>

        Geen standaard poses, maar pure emoties, warmte, veel plezier en liefdevolle blikken en 
        aanrakingen. We zoeken samen naar een locatie die bij jullie past en creëren een ontspannen 
        sfeer waarin jullie gewoon jezelf kunnen zijn, want de mooiste beelden beginnen met jullie connectie en verhaal.
      </p>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-12 items-center justify-center py-12 w-full sm:mx-auto bg-background_4">
  
      <!-- Afbeelding -->
      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/couples-page/couples-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-lg"
        />
      </div>

      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/couples-page/couples-photo-qoute.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[300px] rounded-lg"
        />
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
              <li class="pl-2">Beelden vol spontaniteit en echtheid</li>
              <li class="pl-2">Ruimte om jezelf te zijn en deze bijzondere connectie vast te leggen</li>
              <li class="pl-2">Een stylingguide en tips voor de voorbereiding van de shoot</li>
            </ul>
            
          </div> 
          <div class="flex flex-col w-[60%]">
            <p class="font-playFair text-4xl font-light">
              PACKAGES AND PRICES
            </p>
            <ul class="list-disc pl-6 font-standard font-light text-[14.5px] leading-[2rem] py-6">
              <li class="pl-2">Een reguliere loveshoot incl. 20 foto's (zelf te kiezen uit een uitgebreide galerij) - €330 incl BTW</li>
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
            cursor-pointer border-[0.5px] border-black text-black text-[14.5px] uppercase">
            Boek jouw koppelshoot en vereeuwig jullie liefde
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="flex flex-col">
        <div class="flex bg-background_4 items-center justify-center relative pt-12 pb-6">
            <!-- Tekstgedeelte -->
            <div class="flex flex-col items-center justify-center pb-6 font-standard bg-background_4 text-center">
                <p class="font-playFair text-4xl font-light leading-[2.5rem] py-4">
                    OUR LOVE STORY - PACKAGE
                </p>
                <p class="font-standard max-w-[1300px]">
                  Wil je jullie relatie op een unieke, realistische manier laten vastleggen? Wil jij niet een 
                  fase vastleggen, maar ook een echte ervaring? Met een conceptshoot creëren we samen een fotoserie 
                  die helemaal bij jullie verhaal past. Geen “standaard” shoot in de studio of op de heide, maar 
                  beelden vol sfeer, activiteiten en persoonlijkheid – met een unieke twist. Denk aan bijzondere 
                  locaties, styling, thema’s en concepten die jullie als koppel écht weerspiegelen. Dit pakket 
                  draait om meer dan alleen het vastleggen van mooie momenten. Het gaat om een creatief idee dat 
                  we samen uitwerken om jullie verhaal op een unieke manier te vertellen. We creëren beelden die 
                  verder gaan dan een standaard fotoshoot.
                </p>
            </div>

            <!-- Afbeelding -->
            <div class="absolute right-24 -top-[125px]">
                <nuxt-img
                src="/assets/pictures/newborn-page/extra-aanbod.webp"
                alt="Extra aanbod"
                class="sm:w-[250px] sm:h-[250px]"
                />
            </div>

        </div>

        <div class="flex justify-center bg-background_4 gap-6 pb-12">
            <div class="w-[50%]">
                <p class="font-standard text-right font-light">
                    <u class="font-medium">Inhoud reportage:</u><br>
                    Een shoot van 1 tot 1.5 uur<br>
                    25 professionele foto's per shoot (mogelijkheid om extra foto's bij te bestellen)<br>
                    Toegang tot een online galerij om de foto's uit te kiezen <br>
                    Advies over kleding en styling<br>
                    Concept en locatie in overleg - we bespreken wat passend is voor jullie<br>
                    €385 inclusief BTW<br>
                    Reiskosten zijn inbegrepen binnen een straal van 10 km rondom Casteren<br>
                </p>
            </div>
            <div class="w-[50%]">
                <p>
                    <u>Voorbeelden kunnen zijn:</u>
                </p>
                <ul class="list-disc pl-6 font-standard font-light leading-[1.5rem]">
                    <li>Picknicken en vliegeren in de natuur</li>
                    <li>Vingerverven én bodypainten, gewoon omdat het kan!</li>
                    <li>Koekjes bakken en samen versieren</li>
                    <li>Een kampeersetting met campingspelletjes, een kampvuurtje met marshmallows en gitaarmuziek</li>
                    <li>Samen naar een museum, cafeetje, kermis en maak een stadswandeling</li>
                    <li>Chillen, rennen, dansen en schelpen zoeken op het strand</li>
                    <li>Varen in een bootje en een drankje doen bij het water</li>
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

  <section class="bg-background_4 flex items-center justify-center px-6 pb-12">
    <div class="absolute ml-[-88%] z-10">
      <nuxt-img
        src="/assets/pictures/newborn-page/little-stories.webp"
        alt="Love Stories"
        class="w-100 h-500 sm:w-[80px] sm:h-[300px] "
      />
    </div>
    <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/couples-page/jay&sanne.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">JAY EN SANNE</h2>
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
          src="/assets/pictures/couples-page/guus&lisa.webp"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">GUUS EN LISA</h2>
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
          src="/assets/pictures/couples-page/ward&nicky.webp"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">WARD EN NICKY</h2>
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

  <section class="flex flex-col items-center justify-center px-2 py-2 bg-buttonColor">  	
    <div class=" w-[70%] flex items-center justify-center">
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