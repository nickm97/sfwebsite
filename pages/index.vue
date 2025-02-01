
<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  </head>
  <section class="flex h-[calc(100vh-70px)] w-full relative">
    <!-- Left Image (Slideshow) -->
    <div class="hidden sm:block flex-1 relative overflow-hidden">
      <nuxt-img
        v-for="(image, index) in leftImages"
        :key="'left-' + index"
        :src="image"
        alt="Left Image"
        class="w-full h-full object-cover absolute transition-opacity duration-1000 object-top"style="object-position: center 90%;"
        :style="{ opacity: currentLeftImage === index ? 1 : 0 }"
      />
    </div>

    <!-- Right Image (Slideshow) -->
    <div class="sm:block flex-1 relative overflow-hidden">
      <nuxt-img
        v-for="(image, index) in rightImages"
        :key="'right-' + index"
        :src="image"
        alt="Right Image"
        class="w-full h-full object-cover absolute transition-opacity duration-1000 object-top"style="object-position: center 20%;"
        :style="{ opacity: currentRightImage === index ? 1 : 0 }"
      />
    </div>

    <!-- Discover More (Overlapping) -->
    <div
      class="absolute bottom-[65px] sm:bottom-[40px] text-white left-1/2 transform -translate-x-1/2 font-standard text-center cursor-pointer"
      @click="scrollToNextSection"
    >
      <div>SCROLL TO DISCOVER MORE</div>
      <i class="fa-solid fa-chevron-down text-sm mt-1"></i>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center text-center py-12 px-2 pb-[50px] bg-buttonColor">
    <nuxt-img
      src="/assets/pictures/home-page/dare_a_little.webp"
      alt="Sanneloes Fotografie Logo"
      class="object-cover h-[45px] sm:h-[150px]"
    />
    <div class="sm:flex sm:w-[1250px] text-center sm:text-left text-white items-center sm:gap-12 py-6 font-standard font-light">
      <p class="sm:w-1/2">
        Sanneloes is een professionele en creatieve fotografe die de kunst 
        van het vastleggen van bijzondere momenten beheerst. Met een oog voor 
        detail en een passie voor storytelling, biedt Sanneloes Fotografie unieke
        fotosessies die emoties en spontaniteit benadrukken. Liefde voor jezelf of 
        elkaar staat voorop. 
      </p>
      <p class="sm:w-1/2">
        Of het nu gaat om pure portretten, bruiloften of plezierige gezinsfoto's, 
        de stijl van Sanneloes combineert warmte en authenticiteit. De beelden vertellen
        een verhaal dat je keer op keer wilt herbeleven. Perfect voor iedereen die op zoek 
        is naar tijdloze herinneringen! Dat alles in een jasje van liefde, plezier en echtheid.
      </p>
    </div>
    <p class="text-white font-standard pt-6 font-light">
      Fotograaf voor bruiloften, branding en lifestyle shoots omgeving Eindhoven, Noord-Brabant
    </p>
  </section>

  <section class="relative parallax">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
      <!-- Knop -->
      <a
        href="/contact"
        class="text-white text-sm font-semibold border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300">
          Laat mij jullie verhaal vastleggen
      </a>
    </div>
  </section>

  <section class="items-center justify-center">
    <div class="flex gap-16 items-center justify-center py-12 w-full max-w-[1200px] mx-auto">
      <div class="w-1/2 px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/home-page/review-home-page.webp"
          alt="Sanneloes"
          class="w-[400px]"
        />
      </div>
      <div class="flex-col w-1/2">
        <p class="font-standard font-light text-left">
          “Hoe zoek je nou dé juiste fotograaf voor je bruiloft? Nou: boek Sanneloes!<br><br>
          Zij is diegene die je er bij wilt hebben op je dag: vrolijk, energiek, enthousiast en 
          gepassioneerd. Een daggast met een camera in haar handen! De foto’s overtroffen al onze 
          verwachtingen! Na een paar dagen al de méga preview en wat later alle foto’s. Ze zijn 
          prachtig en hebben alles zo vastgelegd dat we de dag telkens opnieuw kunnen beleven én
          momenten konden beleven waar we zelf niet bij waren geweest.”
        </p>
        <nuxt-img
          src="/assets/pictures/home-page/review-name.webp"
          alt="Sanneloes"
          class="w-[100px]"
        />
      </div>
    </div>
  </section>

  <!-- New Section with Title and Photos -->
  <section class="px-[10px] sm:px-[140px] items flex-col items-center justify-center pb-20">
    <p class="text-5xl font-playFair font-light text-center mb-8 mt-12">
      PHOTOGRAPHY AND INFORMATION
    </p>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-10xl w-full">
      <!-- Tile 1 -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <!-- Background Image -->
        <img
          src="/assets/pictures/wedding-index.jpg"
          alt="Tile Image 1"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <!-- White Border Inside -->
        <!-- <div class="absolute inset-3 border-2 border-white pointer-events-none"></div> -->
        <!-- Content Overlay -->
        <div
          class="absolute inset-0 flex items-center justify-center flex-col text-white"
        >
          <!-- <h2 class="text-2xl font-bold mb-4">Gallery 1</h2> -->
          <button
            @click="redirect('/weddings')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            WEDDINGS
          </button>
        </div>
      </div>

      <!-- Repeat for the other 3 tiles -->
      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/shoot-02.jpg"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <!-- <div class="absolute inset-3 border-2 border-white pointer-events-none"></div> -->
        <div
          class="absolute inset-0 flex items-center justify-center flex-col text-white"
        >
          <!-- <h2 class="text-2xl font-bold mb-4">Gallery 2</h2> -->
          <button
            @click="redirect('/shoots')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            SHOOTS
          </button>
        </div>
      </div>

      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <nuxt-img
          src="/assets/pictures/strong-woman-index.jpg"
          alt="Tile Image 3"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <!-- <div class="absolute inset-3 border-2 border-white pointer-events-none"></div> -->
        <!-- <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        > -->
        <div
          class="absolute inset-0 flex items-center justify-center flex-col text-white"
        >
          <!-- <h2 class="text-2xl font-bold mb-4">Gallery 3</h2> -->
          <button
            @click="redirect('/strong-women')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            STRONG WOMEN
          </button>
        </div>
      </div>

      <div class="relative group rounded-lg overflow-hidden bg-gray-300">
        <nuxt-img
          src="/assets/pictures/branding-index.jpg"
          alt="Tile Image 4"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <!-- <div class="absolute inset-3 border-2 border-white pointer-events-none"></div> -->
        <div
          class="absolute inset-0 flex items-center justify-center flex-col text-white"
        >
          <!-- <h2 class="text-2xl font-bold mb-4">Gallery 4</h2> -->
          <button
            @click="redirect('/commercial')"
            class="px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            BRANDING
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="items-center justify-center bg-background_2">
    <div class="flex gap-16 items-center justify-center py-12 w-full max-w-[1200px] mx-auto">
      <div class="w-1/2 px-4 flex items-center justify-center">
        <nuxt-img
          src="/assets/pictures/home-page/about-home-page.webp"
          alt="Sanneloes"
          class="w-[400px]"
        />
      </div>
      <div class="flex-col w-1/2 relative">
        <!-- "ABOUT" tekst met absolute positie en naar boven verplaatst -->
        <p class="absolute text-[125px] font-playFair left-1/2 transform translate-x-[-50%] top-[-220px]">ABOUT</p>
        <div class="absolute left-1/2 transform translate-x-[-50%] top-[-125px]">
          <nuxt-img
            src="/assets/pictures/home-page/about-sanneloes.webp"
            alt="Sanneloes"
            class="w-[250px]"
          />
        </div>
        <p class="uppercase font-playFair text-2xl mb-4 w-full text-left">hi there</p>
        <p class="font-standard font-light text-left">
            Dag lieve lezer! Welkom op mijn website. Ik ben Sanneloes van Kessel, 
            fulltime ondernemer; professioneel fotograaf, eigenaar van 
            <a href="https://daylightstudio-laluz.nl/" target="_blank" style="text-decoration: underline;">Daylight Studio La Luz</a> 
            en mede-oprichter van 
            <a href="https://savvy-styling.nl/" target="_blank" style="text-decoration: underline;">Savvy Styling</a>. 
            Een bezig bijtje kan je wel stellen.<br><br>

            Ik hou ervan om unieke, échte en emotionele momenten vast te leggen die jouw 
            verhaal op de mooiste en meest eerlijke manier vertelt. Ik wil dat connecties 
            en dierbare momenten bevroren worden in de tijd, zodat jij, maar ook anderen 
            na tientallen jaren nog veel plezier kunnen hebben van de foto’s. Zo blijven 
            dierbare herinneringen en personen bevroren en zullen ze nooit vergeten worden.<br><br>

            Benieuwd naar wat ik maak? Neem rustig een kijkje op mijn website en kom meer 
            te weten. Bij vragen, weet me te vinden via mijn 
            <a href="https://sanneloesfotografie.nl/contact" style="text-decoration: underline;">contactpagina</a>.
        </p>

        <div class="flex flex-col items-center justify-center py-6 font-standard">
          <button
            @click="redirect('/about')"
            class="px-6 py-2 rounded-full bg-naturalBeige font-standard py-12 cursor-pointer"
          >
            MEER OVER SANNELOES
          </button>
        </div>
      </div>

    </div>
  </section>
  
  


  <!-- <div class="sm:hidden bg-naturalBeige border-t border-gray-400">
    <div class="flex h-[450px]">
        <div class="border-l border-r border-gray-400 flex h-full bg-white justify-center items-center min-w-[60px]">
            <span class="text-gray-700 text-2xl font-textNav tracking-widest transform -rotate-90">
                SANNELOES&nbsp;FOTOGRAFIE
            </span>
        </div>
        <nuxt-img
            src="/assets/pictures/loes-index.jpg"	
            alt="Sanneloes"
            class="w-[250px] object-cover object-top"/>
    </div>
    <div class="pl-4 py-10">
        <h3 class="text-2xl text-black font-textNav font-semibold mb-4">HI THERE!</h3>
      <p class="text-black text-lg font-bold tracking-wider font-extralight">
          Heyy, ik ben Sanneloes. Ik hou ervan om unieke, 
          emotionele momenten vast te leggen die jouw verhaal op de mooiste en meest eerlijke manier vertellen.
          Mijn fotografie gaat over het vinden van magie 
          in het alledaagse en het creëren van herinneringen die voor altijd blijven.
      </p>
        
      <button class="mt-4 hover:-translate-y-1 transform transition duration-300 bg-buttonColor rounded-lg py-2 px-2">
        <a href="/about" class="text-sm font-semibold text-white transition duration-300">
          MEER OVER SANNELOES
        </a>
      </button>
    </div>
  </div> -->
 

  <!-- Updated Section -->
  <!-- <section class="hidden sm:flex sm:flex-row h-[800px] w-full bg-naturalBeige border-t border-gray-400">
    
    <div class="flex-1 flex flex-col h-auto w-[45%]">
      <div class="flex flex-col justify-center h-[55%] px-10"> 
          <h3 class="text-2xl text-gray-700 font-semibold mb-1 mt-4">HI THERE!</h3>
          <p class="text-black text-lg font-bold tracking-wider font-extralight">
            Dag lieve lezer! Welkom op mijn website.
            Ik ben Sanneloes, fulltime ondernemer; professioneel fotograaf, 
            eigenaar van Daylight Studio La Luz en mede-oprichter van Savvy Styling. 
            Een bezig bijtje kan je wel stellen. Ik hou ervan om unieke, 
            échte en emotionele momenten vast te leggen die jouw verhaal op de mooiste en meest eerlijke manier vertelt. 
            Ik wil dat momenten bevroren worden in de tijd, zodat jij, maar ook anderen na tientallen jaren nog veel 
            plezier kunnen hebben van de foto's. Zo blijven dierbare herinneringen en personen bevroren en zullen ze 
            nooit vergeten worden. 
          </p>
          <div>
            <button
              @click="redirect('/commercial')"
              class="px-6 py-2 mt-4 border border-white text-white rounded-full hover:scale-105 hover:bg-white hover:text-black transition-colors duration-500"
            >
              MEER OVER MIJ
            </button>
          </div>
      </div>

      <div class="w-full h-[45%]">
        <nuxt-img
          src="/assets/pictures/loes2.jpg"
          alt="Sanneloes small photo"
          class="h-full w-full object-cover border-t border-gray-400"
        />
      </div>
    </div>

    <div class="bg-offWhite border-l border-r border-gray-400 flex justify-center items-center w-[20%]">
      <span class="text-gray-700 text-6xl font-textNav tracking-widest transform -rotate-90">
        SANNELOES
      </span>
    </div>

    <div class="flex w-[35%]" >
      <nuxt-img
        placeholder
        src="/assets/pictures/loes-index.jpg"	
        alt="Sanneloes"
        class="object-cover object-top"
      />
    </div>

  </section> -->
  
  
  <reviews-sf></reviews-sf>

  <section class="bg-buttonColor flex items-center justify-center py-12">
    <div class="flex-col">
      <div class="flex items-center justify-center text-white text-center font-standard font-light max-w-[600px] px-4">
        <p>
          Sanneloes Fotografie focust zich met name op bruiloften, gezinsfotografie, 
          boudoir, zwangerschappen, newborns en enthousiaste ondernemers die content 
          nodig hebben voor hun website of sociale media.
        </p>
      </div>
      <div class="flex flex-col items-center justify-center py-6 font-standard">
        <button
          @click="redirect('/contact')"
          class="px-6 py-2 rounded-full bg-buttonColor border border-1-white text-white font-standard py-12 cursor-pointer hover:bg-white hover:text-black"
        >
        Top! Dan kan jij me vast helpen
        </button>
      </div>
    </div>
  </section>

  <section>
    <div class="flex-col items-center justify-center ">
      <div class="flex items-center justify-center py-12 ">
        <p class="uppercase font-standard text-2xl font-light">
          #SANNELOESFOTOGRAFIE
        </p>
      </div>
      <div class="flex gap-6 items-center justify-center">
        <a href="https://www.instagram.com/sanneloesfotografie" target="_blank">
          <nuxt-img
            src="/assets/pictures/home-page/social_link_1.webp"
            alt="Sanneloes Fotografie Logo"
            class="object-cover h-[45px] sm:h-[200px]"
          />
        </a>

        <a href="https://www.instagram.com/sanneloesfotografie" target="_blank">
          <nuxt-img
            src="/assets/pictures/home-page/social_link_2.webp"
            alt="Sanneloes Fotografie Logo"
            class="object-cover h-[45px] sm:h-[200px]"
          />
        </a>

        <a href="https://www.instagram.com/sanneloesfotografie" target="_blank">
          <nuxt-img
            src="/assets/pictures/home-page/social_link_3.webp"
            alt="Sanneloes Fotografie Logo"
            class="object-cover h-[45px] sm:h-[200px]"
          />
        </a>

        <a href="https://www.instagram.com/sanneloesfotografie" target="_blank">
          <nuxt-img
            src="/assets/pictures/home-page/social_link_4.webp"
            alt="Sanneloes Fotografie Logo"
            class="object-cover h-[45px] sm:h-[200px]"
          />
        </a>

        <a href="https://www.instagram.com/sanneloesfotografie" target="_blank">
          <nuxt-img
            src="/assets/pictures/home-page/social_link_5.webp"
            alt="Sanneloes Fotografie Logo"
            class="object-cover h-[45px] sm:h-[200px]"
          />
        </a>

        <a href="https://www.instagram.com/sanneloesfotografie" target="_blank">
          <nuxt-img
            src="/assets/pictures/home-page/social_link_6.webp"
            alt="Sanneloes Fotografie Logo"
            class="object-cover h-[45px] sm:h-[200px]"
          />
        </a>

        <a href="https://www.instagram.com/sanneloesfotografie" target="_blank">
          <nuxt-img
            src="/assets/pictures/home-page/social_link_7.webp"
            alt="Sanneloes Fotografie Logo"
            class="object-cover h-[45px] sm:h-[200px]"
          />
        </a>

      </div>
    </div>

  </section>
  <footer-sf></footer-sf>
</template>


<script setup>
  import { useRouter } from 'vue-router';
  import { ref, onMounted } from 'vue';

  // Vue-router voor navigatie
  const router = useRouter();

  // Scroll naar de volgende sectie
  function scrollToNextSection() {
    window.scrollBy({
      top: window.innerHeight, // Scrollt een volledige viewport naar beneden
      behavior: "smooth" // Vloeiende scroll animatie
    });
  };

  // Redirect naar een nieuwe route
  function redirect(path) {
    router.push(path); // Navigeer naar de gewenste route
  }

  // Afwisselende afbeeldingen voor de slideshow
  const leftImages = [
    "/assets/pictures/home-page/banner-image-01.webp",
    "/assets/pictures/home-page/banner-image-02.webp"  // Voeg hier de alternatieve afbeelding toe
  ];
  const rightImages = [
    "/assets/pictures/home-page/banner-image-03.webp",
    "/assets/pictures/home-page/banner-image-03.webp"    // Voeg hier de alternatieve afbeelding toe
  ];

  const currentLeftImage = ref(0); // Hou bij welke afbeelding zichtbaar is aan de linkerkant
  const currentRightImage = ref(0); // Hou bij welke afbeelding zichtbaar is aan de rechterkant

  // Functie om de afbeelding om de zoveel tijd te wisselen
  function startSlideshow() {
    setInterval(() => {
      currentLeftImage.value = (currentLeftImage.value + 1) % leftImages.length;
      currentRightImage.value = (currentRightImage.value + 1) % rightImages.length;
    }, 7000); // Wisselt elke 5 seconden
  }

  // Start de slideshow zodra het component is geladen
  onMounted(() => {
    startSlideshow();
  });
</script>

<style scoped>
  .parallax {
    /* The image used */
    background-image: url("/public/assets/pictures/SF_00707.jpg");

    min-height: 350px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  /* Turn off parallax scrolling for all tablets and phones. Increase/decrease the pixels if needed */
  @media only screen and (max-device-width: 1366px) {
    .parallax {
      background-attachment: scroll;
    }
  }

</style>
