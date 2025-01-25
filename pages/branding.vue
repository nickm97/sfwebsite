<template>
    <section class="bg-background_1 flex justify-center">
        <!-- canva image settings 800x300 -->
        <div class="flex items-center justify-center gap-[50px] w-[70%] max-w-[1200px] py-16">
            <nuxt-img
                src="/assets/pictures/branding-page/great-branding.png"
                alt="Branding"
                class="sm:w-[500px] sm:h-[175px] "
            />
            <p class="text-gray-700 font-standard">
                Een brandingshoot is de perfecte manier om jouw merk of jouw bedrijf visueel tot leven te brengen. 
                Of je nu een ondernemer of creatieveling bent, ik help je om jouw bedrijf of de mensen binnen het bedrijf 
                krachtig en authentiek vast te leggen. Van professionele portretten tot beelden die je bedrijfscultuur en 
                visie weerspiegelen... Jouw foto's passen bij jouw boodschap. Samen creëren we beelden die jouw verhaal 
                vertellen en je bedrijf een gezicht geven dat jouw doelgroep aanspreekt. Professionaliteit begint bij een
                goede fundering.
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
          <h2 class="text-2xl font-playFair mb-2">O-KAY HAARMODE</h2>
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
          <h2 class="text-2xl font-playFair mb-2">CLASSIC TRUST</h2>
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
          <h2 class="text-2xl font-playFair mb-2">LA FORMA</h2>
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
    <div class="flex gap-6 px-24 sm:px-0 w-[95%]">

        <!-- Tile 1 -->
        <div class="relative rounded-lg overflow-hidden flex flex-col">
        <p class="font-playFair text-4xl font-light leading-[3rem] text-right">
            WHAT TO<br>EXPECT?
        </p>
        <p class="font-standard font-light text-right pt-4">
            Een gesprek om jullie wensen te bespreken en eventueel te brainstormen<br><br>
            Tips voor de voorbereiding van de shoot en kledingadvies<br><br>
            Moodboards maken ter inspiratie van de shoot is altijd welkom<br><br>
            Een ontspannen en gezellige sfeer tijdens de reportage<br><br>
        </p>
        </div>

        <!-- Container for Images -->
        <div class="flex gap-2 sm:gap-2 [900px] xl:w-[900px] items-center justify-center">
        <!-- Tile 2 -->   
        <div class="relative group rounded-lg overflow-hidden">
            <img
            src="/assets/pictures/champagne.jpg"
            alt="Tile Image 2"
            class="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">STUDIO KEA</h2>
            <button
                @click="redirect('/strong-women')"
                class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
                View More
            </button>
            </div>
        </div>
        
        <!-- Tile 3 -->   
        <div class="relative group rounded-lg overflow-hidden">
            <img
            src="/assets/pictures/champagne.jpg"
            alt="Tile Image 2"
            class="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">DOCTOR S</h2>
            <button
                @click="redirect('/strong-women')"
                class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
                View More
            </button>
            </div>
        </div>
        </div>

        <!-- Tile 4 (PRICES) -->
        <div class="relative rounded-lg overflow-hidden flex flex-col">
        <p class="font-playFair text-4xl font-light leading-[3rem]">
            PRICES
        </p>
        <p class="font-standard font-light pt-4">
            XS  - 45 min. shoot  - 15 foto's  - €265 ex<br>
            S   - 1 uur shoot    - 25 foto's  - €350 ex<br>
            M   - 1,25 uur shoot - 35 foto's  - €460 ex<br>
            L   - 1,5 uur shoot  - 50 foto's  - €575 ex<br>
            XL  - 2 uur shoot    - 65 foto's  - €675 ex<br>
            XXL - 4 uur shoot    - 100 foto's - €1150 ex<br><br>

            Andere wensen? Vraag vrijblijvend een offerte op voor jouw wensen.<br><br>

            Gebruik Daylight Studio La Luz vanaf €115 ex.<br><br>

            Extra foto's zijn bij te bestellen; los of via voordeelpakketten.<br><br>

            Reiskosten: €0,60 per km. Bij shooten in Daylight Studio La Luz vervalt dit.<br><br>
        </p>
        </div>

    </div>
    </section>


  <div class="flex flex-col items-center justify-center py-6 font-standard bg-background_1">
    <button
        @click="redirect('/contact')"
        class="px-6 py-2 rounded-full bg-naturalBeige font-standard py-12 cursor-pointer"
    >
    Boek jouw bedrijfsreportage en zorg voor een professionele uitstraling
    </button>
  </div>

    <section class="flex flex-col">
        <div class="flex bg-background_1 items-center justify-center relative pb-2 pt-20">
            <!-- Tekstgedeelte -->
            <div class="flex flex-col items-center justify-center pb-6 font-standard bg-background_1 text-center">
                <p class="font-playFair text-4xl font-light leading-[2.5rem] py-4">
                    BUSINESS STORYTELLING - PACKAGE
                </p>
                <p class="font-standard max-w-[1300px]">
                    Een content refresh pakket. Dit is een pakket met 4 repeterende, maar vernieuwende shoots 
                    in het jaar (denk daarbij aan elk kwartaal). Dit is ideaal als je je sociale media en website 
                    regelmatig wilt updaten met professioneel beeldmateriaal. Elke shoot duurt tot 1,5 uur en dan 
                    kan je elke shoot 25 foto's uitzoeken. Dan heb je 8 tot 9 nieuwe foto's per maand om te delen 
                    op je kanalen. Je betaalt dan €1299 excl BTW per jaar (met dit pakket bespaar je €251 excl BTW! 
                    en betaal je dus nog geen €325 per brandingshoot). Je zou dan bijvoorbeeld één keer mijn studio 
                    kunnen inzetten (of vaker als je dit zou willen) voor +€89 excl. BTW per keer, maar je zou ook 
                    andere locaties kunnen gebruiken voor nieuwe shoots, zoals je eigen salon, de natuur, een cafeetje'
                    of park, een stadscentrum of andere plekken. Dit zorgt ervoor dat je heel erg veel afwisselende beelden 
                    verzamelt in dit jaar en voor heel veel content zorgt.
                </p>
            </div>

            <!-- Afbeelding -->
            <div class="absolute right-24 -top-[120px]">
                <nuxt-img
                src="/assets/pictures/newborn-page/extra-aanbod.png"
                alt="Extra aanbod"
                class="sm:w-[250px] sm:h-[250px]"
                />
            </div>

        </div>

        <div class="flex justify-center bg-background_1">
            <p class="font-standard font-light text-center">
                <u class="font-medium">Inhoud reportage:</u><br>
                4 shoot per jaar<br>
                Een shoot tot 1,5 uur per keer<br>
                25 professionele foto's per shoot (mogelijkheid om extra foto's bij te bestellen)<br>
                Toegang tot een online galerij om de foto's uit te kiezen <br>
                Advies over kleding en styling<br>
                Concept en locatie in overleg - we bespreken wat passend is voor jullie<br>
                €1299 exclusief BTW<br>
                Reiskosten €0,60 per km
            </p>
           
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