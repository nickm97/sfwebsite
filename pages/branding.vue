<template>
  <section class="hidden sm:block">
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/branding-page/banner.webp"
        alt="Family Background"
        placeholder
        class="w-full h-full object-cover object-center"style="object-position: center 35%;"
        
      />
    </div>
    <div>
      <p class="absolute top-1/2 left-[10%] sm:left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        BRANDING
      </p>
    </div>
  </section>

  <section class="sm:hidden">
    <!-- background pic -->
    <div class="bg-[url(/assets/pictures/branding-page/banner.webp)] h-[600px] bg-cover bg-center relative">
      <p class="absolute top-1/2 left-[10%] sm:left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90 whitespace-nowrap">
          Branding
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center px-4 sm:px-6 py-10 bg-buttonColor">
    <div class="w-full sm:w-[70%]">
      <p class="text-white uppercase font-standard text-left font-bold">
        BEDRIJVEN EN ONDERNEMERS
      </p>
    </div>
    <div class="mt-6 w-full sm:w-[70%]">
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
          class="w-[300px] sm:w-[400px] xl:sm:w-[500px] rounded-lg"
        />
      </div>

      <div class="px-4 mt-8 sm:mt-0 flex items-center justify-center">
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
    <div class="h-screen max-h-[calc(100vh-300px)]">
      <nuxt-img
        src="/assets/pictures/branding-page/banner-02.webp"
        alt="Family Background"
        class="w-full h-full object-cover object-center"
      />
    </div>
    <div class="absolute bottom-[-3%] right-1/2 sm:bottom-[5%] sm:right-[8%] transform translate-x-1/2 -translate-y-1/2">
      <h2 class="text-2xl font-playFair mb-4 text-white text-center">STUDIO KAE</h2>    
      <button
            @click="redirect('/branding050225-01')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
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
            <ul class="list-disc pl-6 font-standard text-[14.5px] font-light leading-[1.5rem] py-6">
              <li class="pl-2">Een gesprek om jullie wensen te bespreken en eventueel te brainstormen</li>
              <li class="pl-2">Tips voor de voorbereiding van de shoot en kledingadvies</li>
              <li class="pl-2">Moodboards maken ter inspiratie van de shoot is altijd welkom</li>
              <li class="pl-2">Een ontspannen en gezellige sfeer tijdens de reportage</li>
            </ul>
            <div class="w-full flex xs:justify-start justify-center">
              <button
                @click="redirect('/contact')"
                class="px-4 py-2 rounded-full bg-buttonColor_2 bg-opacity-50 hover:bg-opacity-100  font-standard 
                cursor-pointer border-[0.5px] border-white text-black text-[13px] sm:text-[14.5px] uppercase">
                Boek jouw bedrijfsreportage
              </button>
            </div>
          </div> 
          
          <div class="flex flex-col sm:w-[60%] mt-8 sm:mt-0">
            <p class="font-playFair text-center sm:text-left sm:text-4xl text-[25px] font-light">
              PACKAGES AND PRICES
            </p>
            <ul class="list-disc pl-6 font-standard font-light text-[14.5px] leading-[1.5rem] pt-6 pb-2">
              <!-- <li class="pl-2">XS:     45 min. shoot       15 foto's         €265 ex</li> -->
              <li class="pl-2">        1 uur shoot       -   25 foto's   -     €350 excl.</li>
              <!-- <li class="pl-2">M:       1,25 uur shoot     35 foto's         €460 ex</li> -->
              <li class="pl-2">        1,5 uur shoot    -   50 foto's    -     €575 excl.</li>
              <li class="pl-2">      2 uur shoot   -      65 foto's    -     €675 excl.</li>
              <li class="pl-2">    4 uur shoot      -   100 foto's  -     €1150 excl.</li>
              <li class="pl-2">Extra foto's zijn bij te bestellen; los of via voordeelpakketten</li>
            </ul>
            
            <ul class="list-disc pl-6 font-standard font-light text-[14.5px] leading-[1.5rem] py-2">
              <li class="pl-2">Gebruik Daylight Studio La Luz vanaf €115 ex.</li>
              <li class="pl-2">Reiskosten: €0,60 per km. Bij shooten in Daylight Studio La Luz vervalt dit.</li>
            </ul>
            <p class="font-standard text-[14.5px] font-light">
              Andere wensen? Vraag vrijblijvend een offerte op voor jouw wensen.
            </p>
          </div> 
        </div>       
      </div>
    </div>
  </section>

  <section class="bg-background_4">
    <div class="flex relative flex-col items-center justify-center px-6 py-10">
      <!-- Afbeelding -->
      <div class="hidden sm:flex absolute left-24 -top-[125px]">
        <nuxt-img
        src="/assets/pictures/branding-page/extra-aanbod.webp"
        alt="Extra aanbod"
        class="sm:w-[250px] sm:h-[250px]"
        />
      </div>
      <p class="uppercase text-[#322614] text-[26px] sm:text-[50px] font-playFair">
        BUSINESS STORYTELLING - PACKAGE
      </p>
      <p class="sm:text-center font-standard font-light text-left text-[16px] py-6">
        Een content refresh pakket met 4 repeterende, maar vernieuwende shoots in 
        het jaar (denk daarbij aan elk kwartaal). Dit is ideaal als je je sociale media en website 
        regelmatig wilt updaten met professioneel beeldmateriaal. 
        Zo heb je 8 tot 9 nieuwe foto's per maand om te delen op je kanalen. Je zou dan bijvoorbeeld één keer 
        mijn studio kunnen inzetten (of vaker als je dit zou willen) voor +€89 excl. BTW per keer, 
        maar je zou ook andere locaties kunnen gebruiken voor nieuwe shoots, 
        zoals je eigen salon, de natuur, een cafeetje of park, een stadscentrum of andere plekken. Dit zorgt ervoor 
        dat je heel erg veel afwisselende beelden verzamelt in dit jaar en voor heel veel content zorgt.

      </p>
      <p class="font-medium font-bold text-left xs:text-right">
                      Inhoud reportage
                    </p>
      <p class="text-center font-standard font-light text-[16px]">
        
        4 shoots per jaar<br>
        Een shoot tot 1,5 uur per keer<br>
        25 professionele foto's per shoot (mogelijkheid om extra foto's bij te bestellen)<br>
        Toegang tot een online galerij om de foto's uit te kiezen <br>
        Investering van €1299 excl. BTW per jaar (met dit pakket bespaar je €251 excl. BTW!) <br>
        Advies over kleding en styling<br>
        Concept en locatie in overleg - we bespreken wat passend is voor jullie<br>
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

  <section class="bg-background_4 flex items-center justify-center px-6 pb-12">
    <div class="sm:hidden flex flex-col items-center relative w-full overflow-hidden ">

      <div v-for="(slider_branding, index) in 1" :key="index" ref="sliders_branding" class="flex gap-2 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
        <!-- Tile 1 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/branding-page/branding-01.webp"
            alt="Tile Image 1"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">O-KAY HAARMODE</h2>
            <button
              @click="redirect('/branding050225-02')"
              class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              VIEW MORE
            </button>
          </div>
        </div>
        <!-- Tile 2 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/branding-page/branding-02.webp"
            alt="Tile Image 2"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">CLASSIC TRUST</h2>
            <button
              @click="redirect('/branding050225-03')"
              class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              VIEW MORE
            </button>
          </div>
        </div>
        <!-- Tile 3 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/branding-page/branding-03.webp"
            alt="Tile Image 3"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">LA FORMA</h2>
            <button
              @click="redirect('/branding050225-04')"
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
          src="/assets/pictures/branding-page/branding-01.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">O-KAY HAARMODE</h2>
          <button
            @click="redirect('/branding050225-02')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/branding-page/branding-02.webp"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">CLASSIC TRUST</h2>
          <button
            @click="redirect('/branding050225-03')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/branding-page/branding-03.webp"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">LA FORMA</h2>
          <button
            @click="redirect('/branding050225-04')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  </section>  

  <section class="flex flex-col items-center justify-center px-2 py-2 sm:py-6 bg-buttonColor">	
    <div class=" w-[100%] flex items-center justify-center">
      <p class="text-center font-playFair text-[26px] sm:text-[32px] sm:leading-[3rem] uppercase text-white">
        A strong personal brand is the key to standing out in a market
        
      </p>
    </div>
  </section>

  <section class="bg-background_4 flex items-center justify-center px-6 pt-12 pb-24">
    <div class="sm:hidden flex flex-col items-center relative w-full overflow-hidden ">

      <div v-for="(slider_branding, index) in 1" :key="index" ref="sliders_branding" class="flex gap-2 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
        <!-- Tile 1 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/branding-page/branding-04.webp"
            alt="Tile Image 1"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">DUTCH TOTAAL FOTOGRAFIE</h2>
            <button
              @click="redirect('/branding050225-05')"
              class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              VIEW MORE
            </button>
          </div>
        </div>
        <!-- Tile 2 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/branding-page/branding-05.webp"
            alt="Tile Image 2"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">DOKTER ES</h2>
            <button
              @click="redirect('/branding050225-06')"
              class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              VIEW MORE
            </button>
          </div>
        </div>
        <!-- Tile 3 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/branding-page/branding-06.webp"
            alt="Tile Image 3"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">LIANNE RIETBERG</h2>
            <h2 class="text-xl font-playFair mb-2">EXCLUSIVE WEDDINGS AND EVENTS</h2>
            <button
              @click="redirect('/branding050225-07')"
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
          src="/assets/pictures/branding-page/branding-04.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">DUTCH TOTAAL FOTOGRAFIE</h2>
          <button
            @click="redirect('/branding050225-05')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/branding-page/branding-05.webp"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">DOKTER ES</h2>
          <button
            @click="redirect('/branding050225-06')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/branding-page/branding-06.webp"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">LIANNE RIETBERG</h2>
          <h2 class="text-xl font-playFair mb-2">EXCLUSIVE WEDDINGS AND EVENTS</h2>
          <button
            @click="redirect('/branding050225-07')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  </section>

  <footer-sf></footer-sf>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted, nextTick } from "vue";

  const sliders_branding = ref([]); // Array van refs voor meerdere sliders

const scrollToMiddle = (slider_branding) => {
  if (slider_branding) {
    const tileWidth = 270 +16; // 270px breedte + 8px gap
    const middleTileIndex = 1; // Tweede afbeelding (index 1)

    // Scrollpositie berekenen
    slider_branding.scrollLeft =
      middleTileIndex * tileWidth - slider_branding.clientWidth / 2 + tileWidth / 2;
  }
};

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      sliders_branding.value.forEach((slider_branding) => scrollToMiddle(slider_branding));
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