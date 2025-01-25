
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
      class="absolute bottom-[40px] text-white left-1/2 transform -translate-x-1/2 font-standard text-center cursor-pointer"
      @click="scrollToNextSection"
    >
      <div>SCROLL TO DISCOVER MORE</div>
      <i class="fa-solid fa-chevron-down text-sm mt-1"></i>
    </div>
  </section>

  <div class="flex items-center justify-center text-center py-12 px-2 pb-[50px]">
    <!-- Title -->
    <h2 class="text-[16px] sm:text-3xl py-6 font-playFair tracking-wider font-extralight">
      FOR THE ONES WHO 
      DARE A LITTLE, <br />
      LET GO A LITTLE 
      AND LOVE TO THE FULLEST
    </h2>
  </div>

  <!-- New Section with Title and Photos -->
  <div class="px-[10px] sm:px-[140px] items flex items-center justify-center pb-20">
    
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

    
  </div>

  <section class="flex items-center justify-center px-6 pb-20">
    <div class="relative grid grid-cols-1 sm:grid-cols-5 gap-24 px-24 sm:px-0 w-[85%] max-w-[1300px]">
      <!-- Tile 1 -->
      <div class="relative group">
        <img
          src="/assets/pictures/home-page/icon_1.webp"
          alt="Tile Image 1"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">WARMTH</h2>
        </div>
      </div>

      <!-- Tile 2 -->
      <div class="relative group">
        <img
          src="/assets/pictures/home-page/icon_2.webp"
          alt="Tile Image 1"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">TOUCH</h2>
        </div>
      </div>

      <!-- Tile 3 -->
      <div class="relative group">
        <img
          src="/assets/pictures/home-page/icon_3.webp"
          alt="Tile Image 1"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">JOY</h2>
        </div>
      </div>
      
      <!-- Tile 4 -->
      <div class="relative group">
        <img
          src="/assets/pictures/home-page/icon_4.webp"
          alt="Tile Image 1"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">EMOTION</h2>
        </div>
      </div>

      <!-- Tile 5 -->
      <div class="relative group">
        <img
          src="/assets/pictures/home-page/icon_5.webp"
          alt="Tile Image 1"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">LOOKS</h2>
        </div>
      </div>

    </div>

  </section>


  <div class="sm:hidden bg-naturalBeige border-t border-gray-400">
    <div class="flex h-[450px]">
        <div class="border-l border-r border-gray-400 flex h-full bg-white justify-center items-center min-w-[60px]">
            <!-- Eén enkele span voor de tekst met &nbsp; voor de spatie -->
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
  </div>
 

  <!-- Updated Section -->
  <section class="hidden sm:flex sm:flex-row h-[800px] w-full bg-naturalBeige border-t border-gray-400">
    
    <!-- Right Side (Text and Small Photo) -->
    <div class="flex-1 flex flex-col h-auto w-[45%]">
      <!-- Top Right Text -->
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

      
      <!-- Bottom Right Small Photo -->
      <div class="w-full h-[45%]">
        <nuxt-img
          src="/assets/pictures/loes2.jpg"
          alt="Sanneloes small photo"
          class="h-full w-full object-cover border-t border-gray-400"
        />
      </div>
    </div>

    <!-- Middle Section (Vertical Text) -->
    <div class="bg-offWhite border-l border-r border-gray-400 flex justify-center items-center w-[20%]">
      <span class="text-gray-700 text-6xl font-textNav tracking-widest transform -rotate-90">
        SANNELOES
      </span>
    </div>

    <!-- Left Side (Photo) -->
    <div class="flex w-[35%]" >
      <nuxt-img
        placeholder
        src="/assets/pictures/loes-index.jpg"	
        alt="Sanneloes"
        class="object-cover object-top"
      />
    </div>

  </section>

  <!-- <love-notes></love-notes>  -->
  
  <reviews-sf></reviews-sf>

  <div class="relative parallax">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20 flex items-center justify-center">
      <!-- Knop -->
      <a
        href="/contact"
        class="text-white text-sm font-semibold border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300">
          Laat mij jullie verhaal vastleggen
      </a>
    </div>
  </div>

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

    min-height: 500px;

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
