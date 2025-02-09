<template>
  <section>
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/branding-page/banner.webp"
        alt="Family Background"
        class="w-full h-full object-cover object-center"style="object-position: center 35%;"
      />
    </div>
    <div>
      <p class="absolute top-1/2 left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        BRANDING
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center px-6 py-10 bg-buttonColor">	
    <div class="w-[70%]">
      <p class="text-white uppercase font-standard font-bold">
        BEDRIJVEN EN ONDERNEMERS
      </p>
    </div>
    <div class="mt-6 w-[70%]">
      <p class="text-white font-standard font-light">
        Een brandingshoot is de perfecte manier om jouw merk of jouw bedrijf visueel 
        tot leven te brengen. Of je nu een ondernemer of creatieveling bent, ik help je om 
        jouw bedrijf of de mensen binnen het bedrijf krachtig en authentiek vast te leggen. 
        Van professionele portretten tot beelden die je bedrijfscultuur en visie weerspiegelen... 
        Jouw foto's passen bij jouw boodschap. Samen creëren we beelden die jouw verhaal vertellen 
        en je bedrijf een gezicht geven dat jouw doelgroep aanspreekt. Professionaliteit begint bij 
        een goede fundering.
      </p>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-12 items-center justify-center py-12 w-full sm:mx-auto bg-background_4">
  
      <!-- Afbeelding -->
      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/branding-page/branding-photo-qoute.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-lg"
        />
      </div>

      <div class="px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/branding-page/branding-qoute-01.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px]"
        />
      </div>
    </div>
  </section>

  <section class="relative">
    <!-- background pic -->
    <div class="h-screen max-h-[calc(100vh-100px)]">
      <nuxt-img
        src="/assets/pictures/branding-page/banner-02.webp"
        alt="Family Background"
        class="w-full h-full object-cover object-center"
      />
    </div>
    <div class="absolute bottom-[5%] right-[8%] transform translate-x-1/2 -translate-y-1/2">
          <button
            @click="redirect('/branding050225-01')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
  </section>

  <section>
    <div class="bg-background_2 flex items-center justify-center py-20">
      <div class="w-[90%] flex flex-row justify-between">
        <!-- Linkerkolom -->
        <div class="flex flex-col w-[48%]">
          <p class="font-playFair text-4xl font-light">
            WHAT TO EXPECT?
          </p>
          <ul class="list-disc pl-6 font-standard text-[14.5px] font-light leading-[1.5rem] py-6">
            <li class="pl-2">Een gesprek om jullie wensen te bespreken en eventueel te brainstormen</li>
            <li class="pl-2">Tips voor de voorbereiding van de shoot en kledingadvies</li>
            <li class="pl-2">Moodboards maken ter inspiratie van de shoot is altijd welkom</li>
            <li class="pl-2">Een ontspannen en gezellige sfeer tijdens de reportage</li>
          </ul>
          <div class="w-full flex items-center justify-center">
            <button
              @click="redirect('/contact')"
              class="px-4 py-2 rounded-full bg-buttonColor_2 bg-opacity-50 hover:bg-opacity-100 font-standard 
              cursor-pointer border-[0.5px] border-white text-black text-[14.5px] uppercase">
              Boek jouw bedrijfsreportage en zorg voor een professionele uitstraling
            </button>
          </div>
        </div> 
        
        <!-- Rechterkolom -->
        <div class="flex flex-col w-[48%]">
          <p class="font-playFair text-4xl font-light">
            PACKAGES AND PRICES
          </p>
          <ul class="list-disc pl-6 font-standard font-light text-[14.5px] leading-[1.5rem] pt-6 pb-2">
            <li class="pl-2">XS:     45 min. shoot       15 foto's         €265 ex</li>
            <li class="pl-2">S:        1 uur shoot          25 foto's        €350 ex</li>
            <li class="pl-2">M:       1,25 uur shoot     35 foto's         €460 ex</li>
            <li class="pl-2">L:        1,5 uur shoot       50 foto's         €575 ex</li>
            <li class="pl-2">XL:      2 uur shoot         65 foto's         €675 ex</li>
            <li class="pl-2">XXL:    4 uur shoot         100 foto's       €1150 ex</li>
            <li class="pl-2">Extra foto's zijn bij te bestellen; los of via voordeelpakketten.</li>
          </ul>
          <p class="font-standard text-[14.5px] font-light">
            Andere wensen? Vraag vrijblijvend een offerte op voor jouw wensen.
          </p>
          <ul class="list-disc pl-6 font-standard font-light text-[14.5px] leading-[1.5rem] py-2">
            <li class="pl-2">Gebruik Daylight Studio La Luz vanaf €115 ex.</li>
            <li class="pl-2">Reiskosten: €0,60 per km. Bij shooten in Daylight Studio La Luz vervalt dit.</li>
          </ul>
        </div> 
      </div>       
    </div>
  </section>

  <section class="bg-background_4">
    <div class="flex relative flex-col items-center justify-center px-6 py-10">
      <!-- Afbeelding -->
      <div class="absolute left-24 -top-[125px]">
        <nuxt-img
        src="/assets/pictures/branding-page/extra-aanbod.webp"
        alt="Extra aanbod"
        class="sm:w-[250px] sm:h-[250px]"
        />
      </div>
      <p class="uppercase text-[#322614] text-[50px] font-playFair">
        BUSINESS STORYTELLING - PACKAGE
      </p>
      <p class="text-center font-standard font-light text-[16px] py-6">
        Een content refresh pakket. Dit is een pakket met 4 repeterende, maar vernieuwende shoots in 
        het jaar (denk daarbij aan elk kwartaal). Dit is ideaal als je je sociale media en website 
        regelmatig wilt updaten met professioneel beeldmateriaal. Elke shoot duurt tot 1,5 uur en dan kan 
        je elke shoot 25 foto's uitzoeken. Dan heb je 8 tot 9 nieuwe foto's per maand om te delen op je kanalen. 
        Je betaalt dan €1299 excl BTW per jaar (met dit pakket bespaar je €251 excl BTW! en betaal je dus nog geen 
        €325 per brandingshoot). Je zou dan bijvoorbeeld één keer mijn studio kunnen inzetten (of vaker als je dit 
        zou willen) voor +€89 excl. BTW per keer, maar je zou ook andere locaties kunnen gebruiken voor nieuwe shoots, 
        zoals je eigen salon, de natuur, een cafeetje of park, een stadscentrum of andere plekken. Dit zorgt ervoor 
        dat je heel erg veel afwisselende beelden verzamelt in dit jaar en voor heel veel content zorgt.

      </p>
      <p class="text-center font-standard font-light text-[16px]">
        <u>Inhoud reportage:</u><br>
        4 shoot per jaar<br>
        Een shoot tot 1,5 uur per keer<br>
        25 professionele foto's per shoot (mogelijkheid om extra foto's bij te bestellen)<br>
        Toegang tot een online galerij om de foto's uit te kiezen <br>
        Advies over kleding en styling<br>
        Concept en locatie in overleg - we bespreken wat passend is voor jullie<br>
        €1299 exclusief BTW<br>
        Reiskosten €0,60 per km
      </p>
      <div class="flex flex-col items-center justify-center py-6 font-standard bg-background_4">
          <button
              @click="redirect('/contact')"
              class="px-6 py-2 rounded-full bg-buttonColor text-[14px] font-standard cursor-pointer uppercase text-white hover:bg-white hover:text-black"
          >
          geweldig! dit wil ik! 
          </button>
        </div>
    </div>
  </section>

  <section class="bg-background_4 flex items-center justify-center px-6 py-12">
    <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/home-page/page_links_01.webp"
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
          src="/assets/pictures/home-page/page_links_01.webp"
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
          src="/assets/pictures/home-page/page_links_01.webp"
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

  <section class="flex flex-col items-center justify-center px-2 py-6 bg-buttonColor">	
    <div class=" w-[100%] flex items-center justify-center">
      <p class="text-center font-playFair text-[32px] leading-[3rem] uppercase text-white">
        A strong personal brand is the key to standing out in a crowded market
        
      </p>
    </div>
  </section>
















    <section class="bg-background_1 flex justify-center">
        <!-- canva image settings 800x300 -->
        <div class="flex items-center justify-center gap-[50px] w-[70%] max-w-[1200px] py-16">
          <div class="w-1/2">
            <nuxt-img
              src="/assets/pictures/branding-page/great-branding.png"
              alt="Branding"
              class="sm:w-[500px] sm:h-[175px] "
            />
          </div>
          <div class="flex-col w-1/2">
            <h1 class="mb-2 text-page_title text-center text-4xl font-playFair uppercase">Bedrijven en Ondernemers</h1>
            <p class="text-gray-700 font-standard">
                Een brandingshoot is de perfecte manier om jouw merk of jouw bedrijf visueel tot leven te brengen. 
                Of je nu een ondernemer of creatieveling bent, ik help je om jouw bedrijf of de mensen binnen het bedrijf 
                krachtig en authentiek vast te leggen. Van professionele portretten tot beelden die je bedrijfscultuur en 
                visie weerspiegelen... Jouw foto's passen bij jouw boodschap. Samen creëren we beelden die jouw verhaal 
                vertellen en je bedrijf een gezicht geven dat jouw doelgroep aanspreekt. Professionaliteit begint bij een
                goede fundering.
            </p>
          </div>
        </div>
  </section>

  <section class="bg-gray-100 flex items-center justify-center px-6">
    <div class="relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-24 sm:px-0 w-[85%]">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/home-page/page_links_01.webp"
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
          src="/assets/pictures/home-page/page_links_01.webp"
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
          src="/assets/pictures/home-page/page_links_01.webp"
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
            src="/assets/pictures/home-page/page_links_01.webp"
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
            src="/assets/pictures/home-page/page_links_01.webp"
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