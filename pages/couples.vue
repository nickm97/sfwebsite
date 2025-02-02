<template>
    <section class="bg-background_1 flex justify-center">
        <!-- canva image settings 400x150 -->
        <div class="flex items-center justify-center gap-[50px] w-[70%] max-w-[1200px] py-16">
          <div class="w-1/2">  
            <nuxt-img
                src="/assets/pictures/couples-page/freeze-the-moment.png"
                alt="Your story told"
                class="sm:w-[500px] sm:h-[175px] "
            />
          </div>
          <div class="flex-col w-1/2">
            <h1 class="mb-2 text-page_title text-center text-4xl font-playFair uppercase">Koppels</h1>
            <p class="text-gray-700 font-standard">
                Jullie liefde verdient het om vastgelegd te worden. Een koppelshoot draait om verbinding, 
                spontaniteit en échte momenten. Of je nu net verloofd bent, een jubileum viert of gewoon 
                jullie verhaal wilt bevriezen in de tijd – ik zorg voor beelden die laten zien wie jullie zijn samen.<br><br>

                Geen standaard poses, maar pure emoties, warmte, veel plezier en liefdevolle blikken en aanrakingen. 
                We zoeken samen naar een locatie die bij jullie past en creëren een ontspannen sfeer waarin jullie gewoon 
                jezelf kunnen zijn, want de mooiste beelden beginnen met jullie connectie en verhaal.
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
          src="/assets/pictures/champagne.jpg"
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
          src="/assets/pictures/shoot-02.jpg"
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
                Een ontspannen en persoonlijke fotosessie van 45-60 minuten<br><br>
                Tijdloze beelden die jullie unieke verhaal vertellen<br><br>
                Ruimte om jezelf te zijn en deze bijzondere connectie vast te leggen<br><br>
                Een stylingguide en tips voor de voorbereiding van de shoot<br><br>
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
            <h2 class="text-2xl font-playFair mb-2">LAURIE</h2>
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
          Een reguliere loveshoot incl. 25 foto's (zelf te kiezen uit een uitgebreide galerij)<br><br>
          €330 inclusief BTW<br><br>
          Reiskosten zijn inbegrepen binnen een straal van 10 km rondom Casteren.<br><br>
          Extra foto's zijn achteraf bij te bestellen met
          voordeelpakketten<br><br>
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
    Boek jouw koppelshoot en vereeuwig jullie liefde 
    </button>
  </div>

    <section class="flex flex-col">
        <div class="flex bg-background_1 items-center justify-center relative pb-6">
            <!-- Tekstgedeelte -->
            <div class="flex flex-col items-center justify-center pb-6 font-standard bg-background_1 text-center">
                <p class="font-playFair text-4xl font-light leading-[2.5rem] py-4">
                    OUR LOVE STORY - PACKAGE
                </p>
                <p class="font-standard max-w-[1300px]">
                    Wil je jullie relatie op een unieke, realistische manier laten vastleggen? 
                    Wil jij niet een fase vastleggen, maar ook een echte ervaring? Met een conceptshoot 
                    creëren we samen een fotoserie die helemaal bij jullie verhaal past. Geen “standaard” 
                    shoot in de studio of op de heide, maar beelden vol sfeer, activiteiten en persoonlijkheid – met 
                    een unieke twist. Denk aan bijzondere locaties, styling, thema’s en concepten die jullie als 
                    koppel écht weerspiegelen. Dit pakket draait om meer dan alleen het vastleggen van mooie momenten. 
                    Het gaat om een creatief idee dat we samen uitwerken om jullie verhaal op een unieke manier te vertellen. 
                    We creëren beelden die verder gaan dan een standaard fotoshoot.
                </p>
            </div>

            <!-- Afbeelding -->
            <div class="absolute right-24 -top-[200px]">
                <nuxt-img
                src="/assets/pictures/newborn-page/extra-aanbod.png"
                alt="Extra aanbod"
                class="sm:w-[250px] sm:h-[250px]"
                />
            </div>

        </div>

        <div class="flex justify-center bg-background_1 gap-6">
            <div class="w-[50%]">
                <p class="font-standard text-right font-light">
                    <u class="font-medium">Inhoud reportage:</u><br>
                    Een shoot van 1 tot 1,5 uur<br>
                    25 professionele foto's per shoot (mogelijkheid om extra foto's bij te bestellen)<br>
                    Toegang tot een online galerij om de foto's uit te kiezen <br>
                    Advies over kleding en styling<br>
                    Concept en locatie in overleg - we bespreken wat passend is voor jullie<br>
                    €385 inclusief BTW - elk persoon extra +€25<br>
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
    </section>
    
    <div class="flex flex-col items-center justify-center py-12 font-standard bg-background_1">
        <button
            @click="redirect('/contact')"
            class="px-6 py-2 rounded-full bg-buttonColor font-standard py-12 cursor-pointer uppercase text-white"
        >
        geweldig! dit wil ik! 
        </button>
    </div>

    <!-- <section class="flex flex-col items-center justify-center px-2 py-2 bg-buttonColor">	
        <div class=" w-[90%] flex items-center justify-center">
        <nuxt-img
            src="/assets/pictures/newborn-page/timeless-tomorrow.png"
            alt="Tell Stories"
            class=""
        />
        </div>
    </section> -->

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