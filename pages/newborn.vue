<template>
  <section>
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/newborn-page/banner.webp"
        alt="Newborn Background"
        class="w-full h-full object-cover object-center"style="object-position: center 30%;"
      />
    </div>
    <div>
      <p class="absolute top-1/2 left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        Newborn
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center px-6 py-10 bg-buttonColor">	
    <div class="w-[70%]">
      <p class="text-white uppercase font-standard font-bold">
        BABY'S
      </p>
    </div>
    <div class="mt-6 w-[70%]">
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

      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/newborn-page/newborn-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px]"
        />
      </div>
    </div>
  </section>








  <section class="bg-gray-100 flex justify-center">
    <div class="flex items-center justify-center gap-[50px] w-[70%] py-16">
      <div>
        <nuxt-img
          src="/assets/pictures/newborn-page/new-chapter.png"
          alt="Your story told"
          class="sm:w-[500px] sm:h-[175px] "
        />
      </div>
      <div class="flex-col w-1/2">
        <h1 class="mb-2 text-page_title text-center text-4xl font-playFair uppercase">Baby's</h1>
        <p class="text-gray-700 font-standard">
          De eerste dagen met je kleintje zijn magisch, vol liefde en kleine, 
          kostbare details die je nooit wilt vergeten. Die piepkleine handjes en
          zachte haartjes, ze groeien sneller dan je denkt.<br><br>
          Met een newborn fotoshoot leg ik deze bijzondere momenten vast op een pure,
          tijdloze manier. Geen druk, geen haast alleen liefdevolle beelden van jullie nieuwe begin.
          We creëren samen een ontspannen sfeer, zodat zowel jullie als jullie kleintje zich op hun gemak voelen.<br><br>

          Kleine momenten. Grote herinneringen.
          Laten we samen deze eerste bladzijde in jullie verhaal vereeuwigen. 
        </p>
      </div>
    </div>
  </section>

  <section class="bg-background_1 flex items-center justify-center px-6">
    <h1 class="font-playFair uppercase absolute text-6xl left-1/2 transform translate-x-[-50%] top-[-220px]">Newborn</h1>
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
          src="/assets/pictures/champagne.jpg"
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
          src="/assets/pictures/shoot-02.jpg"
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
            <p class="font-playFair text-4xl font-light leading-[2.5rem] text-right">
                WHAT TO<br>EXPECT?
            </p>
            <!-- <p class="font-standard font-light text-right w-[80%] ml-auto"> -->
            <p class="font-standard font-light text-right pt-4">
                Een ontspannen fotosessie van 60-90 minuten, met alle tijd voor jullie kleintje<br><br>
                Échtheid, natuurlijk licht en zachte tinten<br><br>
                Foto’s vol warmte, liefde en details die je nooit wilt vergeten<br><br>
                Een fotograaf met rust en geduld<br><br>
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
            <h2 class="text-2xl font-playFair mb-2">LOTUS</h2>
            <button
                @click="redirect('/newborn050225-04')"
                class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
                View More
            </button>
            </div>
        
        </div>

      <!-- Tile 3 -->
      <div class="relative rounded-lg overflow-hidden flex flex-col">
        <p class="font-playFair text-4xl font-light leading-[2.5rem]">
            PRICES
        </p>
        <p class="font-standard font-light pt-4">
          Een reguliere zwangerschapsshoot incl. 25 foto's (zelf te kiezen uit een uitgebreide galerij)<br>
          €330 met partner, €285 alleen, €400 met gezin - inclusief BTW<br><br>
          Een combishoot; zwangerschap én newborn incl. 25 foto's bij elke fotoshoot (zelf te kiezen uit een uitgebreide galerij)<br>
          €695 inclusief BTW<br><br>
          Reiskosten zijn inbegrepen binnen een straal van 10 km rondom Casteren.<br><br>
          Extra foto's zijn achteraf bij te bestellen met voordeelpakketten<br><br>
          Fine art 15x15 albumpje - 20 pagina's €49,50 inclusief BTW
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
    Boek jouw newbornshoot en leg jullie mooiste begin vast
    </button>
  </div>

    <div class="flex bg-background_1 items-center justify-center relative pb-6">
        <!-- Tekstgedeelte -->
        <div class="flex flex-col items-center justify-center pb-6 font-standard bg-background_1 text-center">
            <p class="font-playFair text-4xl font-light leading-[2.5rem] py-4">
            LITTLE MILESTONES - PACKAGE
            </p>
            <p>
            Een fotosessie voor elk kwartaal van het eerste levensjaar om de ontwikkeling van<br>
            het eerste levensjaar van je kindje vast te leggen.<br>
            <u>Bijvoorbeeld:</u> 0,3,6,9 maanden OF 3,6,9,12 maanden<br><br>
            4 fotoshoots per jaar (één keer per kwartaal)<br>
            7 professionele foto's per shoot (mogelijkheid om extra foto's bij te bestellen)<br>
            Toegang tot een online galerij om de foto's uit te kiezen<br>
            Advies over kleding en styling<br>
            Mogelijk op verschillende locaties<br>
            €725 inclusief BTW
            </p>
        </div>

        <!-- Afbeelding -->
        <div class="absolute right-24 -top-10">
            <nuxt-img
            src="/assets/pictures/newborn-page/extra-aanbod.png"
            alt="Extra aanbod"
            class="sm:w-[250px] sm:h-[250px]"
            />
        </div>
    </div>

    <section class="flex flex-col items-center justify-center px-2 py-2 bg-buttonColor">	
        <div class=" w-[90%] flex items-center justify-center">
        <nuxt-img
            src="/assets/pictures/newborn-page/timeless-tomorrow.png"
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
