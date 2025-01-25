<template>
    <section class="bg-background_1 flex justify-center">
        <!-- canva image settings 400x150 -->
        <div class="flex items-center justify-center gap-[50px] w-[70%] max-w-[1200px] py-16">
            <nuxt-img
                src="/assets/pictures/pregnancy-page/no-greather-power.png"
                alt="Your story told"
                class="sm:w-[500px] sm:h-[175px] "
            />
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
  </section>

  <section class="bg-gray-100 flex items-center justify-center px-6">
    <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/newborn-shoot.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">DAISY</h2>
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
          <h2 class="text-2xl font-playFair mb-2">ASTRID</h2>
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
          <h2 class="text-2xl font-playFair mb-2">PUCK</h2>
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
                <p class="font-playFair text-4xl font-light leading-[2.5rem] text-right pt-4">
                    WHAT TO<br>EXPECT?
                </p>
                <!-- <p class="font-standard font-light text-right w-[80%] ml-auto"> -->
                <p class="font-standard font-light text-right">
                    Een ontspannen en persoonlijke fotosessie van 45-60 minuten<br><br>
                    Tijdloze beelden die jouw unieke verhaal vertellen<br><br>
                    Ruimte om jezelf te zijn en deze bijzondere reis vast te leggen<br><br>
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
                <h2 class="text-2xl font-playFair mb-2">DESIREE</h2>
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
                <p class="font-playFair text-4xl font-light leading-[2.5rem]">
                    PRICES
                </p>
                <p class="font-standard font-light pt-4">
                    Een reguliere newbornshoot incl. 25 foto's (zelf te kiezen uit een uitgebreide galerij)<br>
                    €425<br><br>
                    Een combishoot; zwangerschap én newborn incl. 
                    25 foto's bij elke fotoshoot (zelf te kiezen uit een uitgebreide galerij)<br>
                    €695<br><br>
                    Reiskosten zijn inbegrepen binnen een straal van 10 km rondom Casteren.<br><br>
                    Extra foto's zijn achteraf bij te bestellen met voordeelpakketten.<br><br>
                    Fine art 15x15 albumpje - 20 pagina's €49,50 inclusief BTW<br>
                    Per extra spread +€4,95
                </p>
            </div>

        </div>    
    </section>

    <div class="flex flex-col items-center justify-center py-6 font-standard bg-background_1">
        <button
            @click="redirect('/contact')"
            class="px-6 py-2 rounded-full bg-naturalBeige font-standard py-12 cursor-pointer uppercase"
        >
        Boek jouw zwangerschapsshoot
        </button>
    </div>

    <!-- canva image settings 1000x75 -->
    <section class="flex flex-col items-center justify-center px-2 py-2 bg-buttonColor">  	
        <div class=" w-[90%] flex items-center justify-center">
        <nuxt-img
            src="/assets/pictures/pregnancy-page/greatest-love-story.png"
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