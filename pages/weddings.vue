<template>

  <section class="bg-gray-100 flex justify-center">
    <div class="flex items-center justify-center gap-[100px] w-[70%]">
      <nuxt-img
        src="/assets/pictures/wedding-page/lets-get-married.png"
        alt="Bruiloft"
        class="w-500 h-500 sm:w-[500px] sm:h-[300px] "
      />
      <p class="text-gray-700 font-standard">
        WOEHOEEE! Wat ontzettend leuk dat jullie gaan trouwen. Van harte gefeliciteerd!
        Er zal nu van alles op jullie af komen en jullie zullen voor veel keuzes komen te staan,
        waaronder het kiezen van een fotograaf voor jullie droomdag. Ik voel me vereerd dat jullie
        interesse hebben in mij als jullie potentiële fotografe. Ik doe mijn werk met enorm veel passie,
        liefde en enthousiasme. Hopelijk zoeken jullie precies zo iemand voor jullie bruiloft!
      </p>
    </div>
  </section>

  <section class="bg-gray-100 flex items-center justify-center px-6 py-6">
    <div class="absolute ml-[-88%] z-10">
      <nuxt-img
        src="/assets/pictures/wedding-page/love-stories.png"
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
          <h2 class="text-2xl font-playFair mb-2">RICK & MARLOU</h2>
          <button
            @click="redirect('/strong-women')"
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
          <h2 class="text-2xl font-playFair mb-2">GIJS & BRITT</h2>
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
          <h2 class="text-2xl font-playFair mb-2">SAM & INGE</h2>
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>

      <!-- Scroll to Discover Text -->
      <!-- <div
        class="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 text-black text-base text-center cursor-pointer"
        @click="scrollToNextSection"
      >
        <div>SCROLL TO DISCOVER</div>
        <i class="fa-solid fa-chevron-down text-sm mt-1"></i>
      </div> -->
    </div>
  </section>

  <section class="bg-gray-100 flex justify-center">
    <div class="flex items-center justify-center gap-[20px] w-[70%] px-6 py-6">
      <p class="text-gray-700 font-standard">
        Ik maak <strong>tijdloze foto's</strong> met aandacht voor <strong>pure en échte momenten</strong>. Ik vang de momenten waarop 
        heel hard gelachen wordt of als er een traan over een wang rolt. Ik heb aandacht voor kleine dingen, 
        zoals een warme knuffel, een hand op je schouder of een intiem momentje. Ik zie details, ik voel emoties 
        en ik lach hard met jullie mee. Wellicht moet ik bij mooie momenten ook af en toe een klein traantje wegpinken, 
        want ‘sorry, not sorru’ ik ben gevoelig, haha.<br><br>
        Jullie kleurrijke galerij met ‘a touch of black and white’ zal een mix zijn van <strong>documentaire fotografie en editorial</strong>. 
        Ik zoek naar mooi licht, sierlijke posities of interessante composities. Bij groepsfoto's trek ik al mijn <strong>enthousiasme </strong>
        uit de kast om de foto's zo spontaan mogelijk te krijgen. Ik ben jullie ‘hypegirl’ bij jullie fotomoment met z'n 
        tweetjes en verder ben ik heel de dag scherp op allerlei warme momenten om te vangen in een foto. Jullie genieten 
        gewoon van de dag, doen jullie ding en ik zorg voor de visuele herinnering van jullie bruiloft. 
      </p>
      <nuxt-img
        src="/assets/pictures/wedding-page/i-notice.png"
        alt="i-notice"
        class="w-500 h-500 sm:w-[400px] sm:h-[150px] "
      />
    </div>
  </section>

  <section class="bg-gray-100 flex items-center justify-center px-6 py-6">
    <div class="absolute ml-[-88%] z-10">
      <nuxt-img
        src="/assets/pictures/wedding-page/love-stories.png"
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
          <h2 class="text-2xl font-playFair mb-2">MARTIJN & KRISTEL</h2>
          <button
            @click="redirect('/strong-women')"
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
          <h2 class="text-2xl font-playFair mb-2">PETER & EVY</h2>
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
          <h2 class="text-2xl font-playFair mb-2">WARD & NICKY</h2>
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

  <section class="bg-gray-100 flex justify-center">
    <div class="flex items-center justify-center gap-[20px] w-[70%] py-6 px-6">
      <nuxt-img
        src="/assets/pictures/wedding-page/lets-go-on-an-adventure.png"
        alt="lets go on an adventure"
        class="w-500 h-500 sm:w-[500px] sm:h-[300px] "
      />
      <p class="text-gray-700 font-standard">
        YAAAAASSSS! Jullie houden net zo van het <strong>buitenland</strong> als ik. Waarschijnlijk zijn jullie helemaal 
        verzot op het land waar jullie willen gaan trouwen en daar ga ik maar al te graag mee naartoe, 
        want ‘HALLOOOO, je praat met een héle grote reisfanaat!’ Zelf heb ik al vele mooie reizen gemaakt
        in bijna alle continenten en ik geniet enorm van al het schoons wat je in andere landen ziet, wat 
        je in Nederland niet of minder tegenkomt. 
        In 2024 heb ik een prachtige bruiloft in zuid-Spanje mogen vastleggen én heb ik mooie editorial foto’s 
        kunnen maken van bruidsparen in Marrakech. In 2025 staat een gave bruiloft in midden Italië gepland en 
        hopelijk zal ik nog meer mooie bruiloften in het buitenland mogen bijwonen én fotograferen. Kan nu al 
        niet wachten op al dat moois! Ook voor <strong>‘Elopement Weddings’</strong> mag je zeker contact met mij opnemen. 
        Ik zie jullie al helemaal staan op een prachtige, unieke plek midden in de natuur! 
      </p>
    </div>
  </section>

  <section class="bg-gray-100 flex items-center justify-center px-6 py-6">
    <div class="absolute ml-[-88%] z-10">
      <nuxt-img
        src="/assets/pictures/wedding-page/love-stories.png"
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
          <h2 class="text-2xl font-playFair mb-2">TOM & CYNTHIA</h2>
          <button
            @click="redirect('/strong-women')"
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
          <h2 class="text-2xl font-playFair mb-2">BRIT & LOTTE</h2>
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
          <h2 class="text-2xl font-playFair mb-2">DAVID & SERENA</h2>
          <button
            @click="redirect('/wedding01082502')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  </section>
  
  <section class="bg-gray-100 flex flex-col items-center justify-center px-6 py-12">
    <div class="flex items-center justify-center">
      <nuxt-img
        src="/assets/pictures/wedding-page/wedding-packages.png"
        alt="Wedding Packages"
        class="w-[500px] h-[150px] "
      />
    </div>
    <div class="flex items-center justify-center gap-[20px] w-[70%] px-6 py-6">
      <div class="flex flex-col w-2/3">
        <p class="text-gray-700 font-standard">
        Prijzen vanaf €1800 inclusief BTW.<br>
        Vanaf 6 uur fotografie.<br><br>

        Wat is inbegrepen?<br><br>

        - Minstens 400 bewerkte beelden<br>
        - Een preview binnen 5 werkdagen na jullie bruiloft<br>
        - Een usb-stick met de digitale beelden<br>
        - Fotoafdrukken (afhankelijk van het gekozen pakket)<br>
        - Een mini verrassingsalbum<br><br>

        Wat is <u>niet</u> inbegrepen?<br><br>

        - Reiskosten vanaf Casteren (€ 0,60 cent per km.)<br><br>

        De pakketten zijn uit te breiden met extra uren, een groter, luxer album, of een pre-wedding shoot. Ook is het mogelijk om de foto's sneller te ontvangen tegen betaling. <br><br>

        Ga je voor een kleine gemeentebruiloft en wil je toch even graag bij mij informeren voor een klein pakketje? Of heb je plannen om in het buitenland te trouwen? Neem gerust contact op. <br><br>
      </p>
      <button
            @click="redirect('/contact')"
            class="px-6 py-2 rounded-full bg-naturalBeige w-[400px] font-standard"
          >
          Wij willen de brochure graag ontvangen!
          </button>
      </div>
      
      <div class="w-1/3 flex items-center justify-center">  
        <nuxt-img
          src="/assets/pictures/luuk&mandy.jpg"
          alt="packages"
          class=""
        />
      </div>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center px-6 py-10 bg-buttonColor">	
    <div class=" w-[50%] m-[-50px]">
      <nuxt-img
        src="/assets/pictures/wedding-page/tell-stories.png"
        alt="Tell Stories"
        class=""
      />
    </div>
    <div class="mt-12 w-[70%]">
      <p class="text-white">
        Ik doe mijn best om het gevoel van de dag terug te brengen in 
        alle beelden, zodat jullie jullie droomdag voor eeuwig levendig kunnen blijven herinneren zoals de dag ook écht voelde.<br><br> 

        <strong>Ik vind jullie verhaal belangrijk</strong>. Ik wil weten wie jullie zijn, wat jullie belangrijk vinden, waar jullie van dromen,
        waarom je zo gek bent op elkaar, wat jullie chemie is, wie de belangrijkste mensen voor jullie zijn, enzovoorts, 
        enzovoorts. <br><br>
        Ik luister naar jullie. Ik leer jullie graag écht kennen. 

      </p>
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
