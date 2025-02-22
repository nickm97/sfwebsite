<template>

  <section class="hidden sm:block">
    <!-- background pic -->
    <div class="relative h-screen max-h-[calc(100vh-150px)]">
      <nuxt-img
        src="/assets/pictures/wedding-page/wedding-banner-01.webp"
        alt="Wedding Background"
        class="w-full h-full object-cover object-center"
        placeholder
      />
    </div>
    <div>
      <p class="absolute top-1/2 left-[10%] sm:left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90">
        Weddings
      </p>
    </div>
  </section>

  <section class="sm:hidden">
    <!-- background pic -->
    <div class="bg-[url(/assets/pictures/wedding-page/banner.jpg)] h-[600px] bg-cover bg-center relative">
      <p class="absolute top-1/2 left-[10%] sm:left-[5%] transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[60px] sm:text-[80px] tracking-widest font-playFair uppercase text-center 
          -rotate-90 whitespace-nowrap">
          Weddings
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center px-6 py-10 bg-buttonColor">
    <div class="w-full sm:w-[70%]">
      <p class="text-white uppercase font-standard text-left font-bold">
        Bruiloften
      </p>
    </div>
    <div class="mt-6 w-full sm:w-[70%]">
      <p class="text-white font-standard font-light">
        WOEHOEEE! Wat ontzettend leuk dat jullie gaan trouwen. Van harte gefeliciteerd! 
        Er zal nu van alles op jullie af komen en jullie zullen voor veel keuzes komen te staan, 
        waaronder het kiezen van een fotograaf voor jullie droomdag. Ik voel me vereerd dat jullie 
        interesse hebben in mij als jullie potentiële fotografe. Ik doe mijn werk met enorm veel passie, 
        liefde en enthousiasme. Hopelijk zoeken jullie precies zo iemand voor jullie bruiloft! 
      </p>
    </div>
  </section>


  <section class="items-center justify-center">
    <div class="flex flex-col sm:flex-row sm:gap-12 items-center justify-center py-12 xl:py-[120px] w-full sm:mx-auto bg-background_2">
    
      <!-- Afbeelding 1 -->
      <div class="sm:px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/wedding-page/wedding-photo-qoute.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] xl:w-[500px] rounded-lg"
        />
      </div>

      <!-- Afbeelding 2 (naar rechts uitgelijnd op kleine schermen) -->
      <div class="sm:px-4 flex sm:items-center justify-center sm:ml-0">
        <nuxt-img
          src="/assets/pictures/wedding-page/wedding-qoute-01.webp"
          alt="Sanneloes"
          class="w-[250px] sm:w-[400px] translate-x-10 sm:translate-x-0 mt-8 sm:mt-0"
        />
      </div>
    </div>
  </section>


  <section class="bg-background_4 sm:flex flex-col sm:flex-row items-center justify-center sm:px-6 py-[75px] bg-background_4">
    <div class="hidden sm:flex items-center justify-center sm:absolute sm:ml-[-75%] sm:z-10">
      <nuxt-img
        src="/assets/pictures/wedding-page/love-stories.webp"
        alt="Love Stories"
        class="w-[100px] sm:w-[80px] sm:h-[400px] rotate-90 sm:rotate-0"
      />
    </div>

    <div class="sm:hidden rotate-90 sm:rotate-0 flex items-center justify-center h-[100px] mb-1 -mt-12">
      <nuxt-img
        src="/assets/pictures/wedding-page/love-stories.webp"
        alt="Love Stories"
        class="w-[70px]"
      />
    </div>

    <div class="sm:hidden flex flex-col items-center relative w-full overflow-hidden ">
      <!-- Slider container -->
      <div v-for="(slider, index) in 1" :key="index" ref="sliders" class="flex gap-2 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
        <!-- Tile 1 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/wedding-page/rick&marlou.webp"
            alt="Tile Image 1"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">RICK EN MARLOU</h2>
            <button @click="redirect('/wedding050225-01')" class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              VIEW MORE
            </button>
          </div>
        </div>

        <!-- Tile 2 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/wedding-page/gijs&britt.webp"
            alt="Tile Image 2"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">GIJS EN BRITT</h2>
            <button @click="redirect('/wedding050225-02')" class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              VIEW MORE
            </button>
          </div>
        </div>

        <!-- Tile 3 -->
        <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
          <img
            src="/assets/pictures/wedding-page/sam&inge.webp"
            alt="Tile Image 3"
            class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
            <h2 class="text-2xl font-playFair mb-2">SAM EN INGE</h2>
            <button @click="redirect('/wedding050225-03')" class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              VIEW MORE
            </button>
          </div>
        </div>
      </div>
    </div>



    <div class="hidden sm:flex relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-0 mx-auto">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 xl:w-[600px] xl:h-[800px]">
        <img
          src="/assets/pictures/wedding-page/rick&marlou.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">RICK EN MARLOU</h2>
          <button
            @click="redirect('/wedding050225-01')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 xl:w-[600px] xl:h-[800px]">
        <img
          src="/assets/pictures/wedding-page/gijs&britt.webp"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">GIJS EN BRITT</h2>
          <button
            @click="redirect('/wedding050225-02')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 xl:w-[600px] xl:h-[800px]">
        <img
          src="/assets/pictures/wedding-page/sam&inge.webp"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">SAM EN INGE</h2>
          <button
            @click="redirect('/wedding050225-03')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="items-center justify-center bg-buttonColor">
    <div class="flex flex-col sm:flex-row sm:gap-16 items-center justify-center py-12 w-full sm:max-w-[1200px] sm:mx-auto">
      <!-- Tekst -->
      <div class="flex flex-col w-full sm:w-1/2 text-left sm:text-left py-0 pb-12 sm:py-0 px-4 sm:px-0">
        <p class="font-standard font-light text-[14.5px] text-white xl:text-[16px]">
          Jij wil <strong>tijdloze foto's</strong> met aandacht voor <strong>pure en échte momenten</strong>. Daarbij vang ik de momenten waarop 
          heel hard gelachen wordt of als er een traan over een wang rolt. Er is aandacht voor kleine dingen, 
          zoals een warme knuffel, een hand op je schouder of een intiem momentje. Ik zie details, voel emoties 
          en lach hard met jullie mee. Wellicht moet ik bij mooie momenten ook af en toe een klein traantje wegpinken, 
          want ‘sorry, not sorry’ ben gevoelig, haha.<br><br>
          Jullie kleurrijke galerij met ‘a touch of black and white’ zal een mix zijn van <strong>documentaire fotografie en editorial</strong>. 
          Er wordt naar mooi licht, sierlijke posities of interessante composities gezocht. Bij groepsfoto's wordt al mijn <strong>enthousiasme</strong>
          uit de kast getrokken om de foto's zo spontaan mogelijk te krijgen. Jullie willen een echte ‘hypegirl’ bij jullie fotomoment met z'n 
          tweetjes, waardoor jullie relaxt en enthousiast worden. Leave that to me! Verder ben ik heel de dag scherp op allerlei warme momenten om te vangen in een foto. Jullie genieten 
          gewoon van de dag, doen jullie ding en ik zorg voor de visuele herinnering van jullie bruiloft.
        </p>
      </div>

      <!-- Carousel Component -->
      <PhotoCarousel :images="weddingImages" />

      <!-- Afbeelding met overlay en animatie -->
      <!-- <div class="relative group rounded-lg overflow-hidden bg-gray-300 shadow-lg w-[350px]">
        <img
          src="/assets/pictures/wedding-page/peter&evy.webp"
          alt="Sanneloes Fotografie"
          class="h-[500px] w-[350px] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105 mx-auto block"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
          <h2 class="text-2xl font-playFair mb-2 tracking-wide">PETER EN EVY</h2>
          <button
            @click="redirect('/wedding050225-03')"
            class="px-6 py-2 border border-white text-white rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
          >
            VIEW MORE
          </button>
        </div>
      </div> -->
      
    </div>
  </section>

  <section>
    <div class="relative sm:h-screen sm:max-h-[calc(100vh)]">
      <nuxt-img
        src="/assets/pictures/wedding-page/banner-i-notice.webp"
        alt="Wedding Background"
        class="h-[calc(100vh-300px)] sm:w-full sm:h-full object-cover sm:object-cover sm:object-bottom"
        style="object-position: center 80%;"
      /> 

      <!-- Tekst gecentreerd bovenin -->
      <p class="absolute w-[99%] top-[15%] sm:top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-white text-[20px] sm:text-[50px] font-bold font-playFair uppercase text-center">
        I notice connections, emotions and details
      </p>

      <!-- Knop onder de tekst -->
      <div class="absolute w-full top-[29%] sm:top-[18%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center">
        <button
          @click="scrollToSection"
          class="px-4 py-2 rounded-full bg-buttonColor_2 bg-opacity-50 hover:bg-opacity-100  font-standard 
          cursor-pointer border-[1px] border-white font-bold text-black text-[12.5px]">
          IK WIL GRAAG MEER INFORMATIE
        </button>
      </div>
    </div>
  </section>

  <section class="flex items-center flex-col justify-center bg-buttonColor pt-12 pb-[100px] sm:pb-12 items-center">
    <div class="flex items-center justify-center gap-[20px] sm:px-12 sm:px-10 px-4 sm:w-[70%]">
      <p class="text-white font-standard font-light text-[14.5px] xl:text-[16px] text-center ">
        YAAAAASSSS! Jullie houden net zo van het <strong>buitenland</strong> als ik. Waarschijnlijk zijn 
        jullie helemaal verzot op het land waar jullie willen gaan trouwen en daar mag je mij zeker mee naartoe nemen, want ‘HALLOOOO, je praat met een héle grote reisfanaat!’ Wie geniet nou niet enorm van al het schoons wat je in andere landen ziet, 
        wat je in Nederland niet of minder tegenkomt?<br><br>

        In 2024 heb ik een prachtige bruiloft in zuid-Spanje mogen vastleggen én mooie editorial foto’s 
        kunnen maken van bruidsparen in Marrakech. In 2025 staat een gave bruiloft in midden Italië gepland en 
        hopelijk zal ik nog meer mooie bruiloften in het buitenland mogen bijwonen én fotograferen. Kan nu al 
        niet wachten op al dat moois! Ook voor <strong>‘Elopement Weddings’</strong> mag je zeker contact met mij opnemen. Ik 
        zie jullie al helemaal staan op een prachtige, unieke plek midden in de natuur! 
      </p>
    </div>
    <div>
      <p class="uppercase text-center text-white font-playFair text-[18px] sm:text-[50px] mt-6 w-full px-4 sm:px-10 sm:px-12">
        Trouwen in het buitenland
      </p>
    </div>
  </section>

  <section class="bg-background_4 sm:flex flex-col sm:flex-row items-center justify-center sm:px-6 py-[75px] bg-background_4">
    <div class="hidden sm:flex items-center justify-center sm:absolute sm:ml-[-75%] sm:z-10">
      <nuxt-img
        src="/assets/pictures/wedding-page/love-stories.webp"
        alt="Love Stories"
        class="w-[100px] sm:w-[80px] sm:h-[400px] rotate-90 sm:rotate-0"
      />
    </div>

    <div class="sm:hidden rotate-90 sm:rotate-0 flex items-center justify-center h-[100px] mb-1 -mt-12">
      <nuxt-img
        src="/assets/pictures/wedding-page/love-stories.webp"
        alt="Love Stories"
        class="w-[70px]"
      />
    </div>

    <div class="sm:hidden flex flex-col items-center relative w-full overflow-hidden ">
      <!-- Slider container -->
      <div v-for="(slider, index) in 1" :key="index" ref="sliders" class="flex gap-2 overflow-x-auto scroll-smooth px-4 whitespace-nowrap w-full">
        <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
        <img
          src="/assets/pictures/wedding-page/tom&cynthia.webp"
          alt="Tile Image 1"
          class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">TOM EN CYNTHIA</h2>
          <button
            @click="redirect('/wedding050225-01')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
        <img
          src="/assets/pictures/wedding-page/brit&lotte.webp"
          alt="Tile Image 2"
          class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">BRIT EN LOTTE</h2>
          <button
            @click="redirect('/wedding050225-02')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 shrink-0">
        <img
          src="/assets/pictures/wedding-page/david&serena.webp"
          alt="Tile Image 3"
          class="w-[270px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">DAVID EN SERENA</h2>
          <button
            @click="redirect('/wedding050225-03')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      </div>
    </div>

    <div class="hidden sm:flex relative grid grid-cols-1 sm:grid-cols-3 gap-2 px-0 mx-auto">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 xl:w-[600px] xl:h-[800px]">
        <img
          src="/assets/pictures/wedding-page/tom&cynthia.webp"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">TOM EN CYNTHIA</h2>
          <button
            @click="redirect('/wedding050225-01')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      <!-- Tile 2 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 xl:w-[600px] xl:h-[800px]">
        <img
          src="/assets/pictures/wedding-page/brit&lotte.webp"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">BRIT EN LOTTE</h2>
          <button
            @click="redirect('/wedding050225-02')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>
      <!-- Tile 3 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300 xl:w-[600px] xl:h-[800px]">
        <img
          src="/assets/pictures/wedding-page/david&serena.webp"
          alt="Tile Image 3"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-end items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">DAVID EN SERENA</h2>
          <button
            @click="redirect('/wedding050225-03')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW MORE
          </button>
        </div>
      </div>

    </div>
  </section>

  <section class="relative parallax">
      <nuxt-img
        src="/assets/pictures/wedding-page/banner-scroll-qoute-white.webp"
        alt="Love Stories"
        class="hidden sm:flex w-[1100px] absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <nuxt-img
        src="/assets/pictures/wedding-page/banner-scroll-qoute-mobile.webp"
        alt="Love Stories"
        class="sm:hidden absolute w-[300px] top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    
  </section>

  <section id="packages" class="flex flex-col items-center justify-center sm:px-6 py-6 sm:py-12 sm:bg-buttonColor bg-[#281c14]">
    <div class="sm:px-6 sm:px-0 flex flex-col items-center justify-center">
      <div class="flex items-center justify-center">
      <nuxt-img
        src="/assets/pictures/wedding-page/wedding-packages.webp"
        alt="Wedding Packages"
        class="h-[100px] sm:h-[150px]"
      />
    </div>
    <div class="flex sm:flex-row flex-col items-center justify-center sm:gap-[20px] sm:w-[70%] sm:px-6 py-6">
      <div class="flex flex-col sm:w-2/3">
        <p class="text-white font-standard font-light w-full px-4 sm:px-0 text-[14.5px] sm:text-[16px] xl:text-[18px]">
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
      <div class="px-4 sm:px-0">
        <button
            @click="redirect('/contact-wedding')"
            class=" px-2 sm:px-6 py-1 sm:py-2 rounded-full bg-transparant text-[14.5px] sm:text-[16px] text-white border-[1px] border-white sm:hover:bg-white sm:hover:text-black sm:w-[400px] font-standard"
          >
          Wij willen de brochure graag ontvangen!
          </button>
      </div>
      
      </div>
      
      <div class="mt-6 sm:mt-0 sm:w-1/3 flex items-center justify-center px-4 sm:px-0">  
        <nuxt-img
          src="/assets/pictures/luuk&mandy.webp"
          alt="packages"
          class="rounded-xl"
        />
      </div>

      <p class="sm:hidden font-standard font-light text-[14.5px] mt-6 px-4 sm:px-4">
          Ik doe mijn best om het gevoel van de dag terug te brengen in alle beelden, zodat jullie 
          jullie droomdag voor eeuwig levendig kunnen blijven herinneren zoals de dag ook écht voelde.<br><br>

          <strong>Jullie verhaal is belangrijk</strong>. Ik wil weten wie jullie zijn, wat jullie belangrijk 
          vinden, waar jullie van dromen, waarom je zo gek bent op elkaar, wat jullie chemie is, 
          wie de belangrijkste mensen voor jullie zijn, enzovoorts, enzovoorts. Mijn oren zijn gespitst. 
          Ik leer jullie graag écht kennen. 

        </p>
    </div>
    </div>
    
  </section>
  
  <section class="sm:hidden">
    <div class="relative">
      <nuxt-img
        src="/assets/pictures/wedding-page/telling-stories.webp"
        alt="Sanneloes"
        class="w-full object-cover"
      />
      <p class="w-full text-center font-playFair text-2xl text-white absolute top-[15%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-10">
        I DON'T TAKE PICTURES<br>
        I TELL STORIES
      </p>
    </div>
  </section>


  <section class="hidden sm:block items-center justify-center">
    <div class="flex sm:flex-row flex-col-reverse sm:flex-row sm:gap-1 items-center justify-center py-8 w-full sm:mx-auto bg-background_4">
  
      <!-- Afbeelding -->
      <div class="w-full sm:w-1/2 sm:px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/wedding-page/telling-stories.webp"
          alt="Sanneloes"
          class="w-[300px] sm:w-[400px] rounded-lg border-[1px] border-black"
        />
      </div>

      <div class="w-1/2 sm:px-12 items-center justify-center">
        <p class="sm:block hidden text-center font-playFair text-4xl w-[80%] py-6">
          I DON'T TAKE PICTURES<br>
          I TELL STORIES
        </p>
        
        <p class="sm:block hidden text-center font-standard font-light w-[80%]">
          Ik doe mijn best om het gevoel van de dag terug te brengen in alle beelden, zodat jullie 
          jullie droomdag voor eeuwig levendig kunnen blijven herinneren zoals de dag ook écht voelde.<br><br>

          <strong>Jullie verhaal is belangrijk</strong>. Ik wil weten wie jullie zijn, wat jullie belangrijk 
          vinden, waar jullie van dromen, waarom je zo gek bent op elkaar, wat jullie chemie is, 
          wie de belangrijkste mensen voor jullie zijn, enzovoorts, enzovoorts. Mijn oren zijn gespitst. 
          Ik leer jullie graag écht kennen. 

        </p>
      </div>
      <div>
      </div>

    </div>
  </section>


  <footer-sf></footer-sf>
</template>


<style scoped>

@media (max-width: 640px) { /* Alleen op schermen kleiner dan 640px */
    #packages {
      background: linear-gradient(to bottom, #281c14 60%, #f7f0ec 40%);
    }
  }

  .parallax {
      /* The image used */
      background-image: url("/public/assets/pictures/wedding-page/banner-scroll.webp");

      min-height: 400px;

      /* Create the parallax scrolling effect */
      background-attachment: fixed;
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: cover;
    }

    /* Turn off parallax scrolling for all tablets and phones. Increase/decrease the pixels if needed */
    @media only screen and (max-device-width: 1366px) {
      .parallax {
        background-attachment: scroll;
      }
    }
    @media only screen and (min-width: 1920px) {
    .parallax {
      min-height: 1000px;
    }
  }
</style>

<script setup>
  import { useRouter } from 'vue-router';

  import { ref, onMounted, nextTick } from "vue";

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
  function scrollToSection() {
    const section = document.getElementById('packages');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const weddingImages = ref([
    { src: "/assets/pictures/wedding-page/ward&nicky.webp", alt: "Ward & Nicky", title: "WARD EN NICKY", link: "/wedding050225-06" },
    { src: "/assets/pictures/wedding-page/peter&evy.webp", alt: "Peter & Evy", title: "PETER EN EVY", link: "/wedding050225-05" },
    { src: "/assets/pictures/wedding-page/martijn&kristel.webp", alt: "Martijn & Kristel", title: "MARTIJN EN KRISTEL", link: "/wedding050225-04" },
  ]);

  const sliders = ref([]); // Array van refs voor meerdere sliders

const scrollToMiddle = (slider) => {
  if (slider) {
    const tileWidth = 270 +16; // 270px breedte + 8px gap
    const middleTileIndex = 1; // Tweede afbeelding (index 1)

    // Scrollpositie berekenen
    slider.scrollLeft =
      middleTileIndex * tileWidth - slider.clientWidth / 2 + tileWidth / 2;
  }
};

onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      sliders.value.forEach((slider) => scrollToMiddle(slider));
    }, 1500); // Kleine vertraging van 100ms
  });
});
</script>
