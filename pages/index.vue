
<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  </head>
  <div class="flex h-[calc(100vh-50px)] w-full relative">
    <!-- Left Image (visible on all screens) -->
    <div class="hidden sm:block flex-1">
      <nuxt-img
        placeholder
        src="/assets/pictures/wedding-07.jpg"
        alt="First Image"
        class="w-full h-full object-cover object-top"style="object-position: center 20%;"
      />
    </div>

    <!-- Right Image (hidden on small screens, visible on larger screens) -->
    <div class="sm:block flex-1">
      <nuxt-img
        placeholder
        src="/assets/pictures/wedding-03.jpg"
        alt="Second Image"
        class="w-full h-full object-cover object-top"style="object-position: center 90%;"
      />
    </div>

    <!-- Scroll to Discover Text -->
    <div
      class="text-center absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-base italic font-textNav cursor-pointer mt-[-20px]"
      @click="scrollToNextSection">
      <div>Scroll to Discover</div>
      <!-- Chevron Icon -->
      <i class="fa-solid fa-chevron-down text-sm mt-1 white"></i>
    </div>
  </div>

  <div class="flex items-center justify-center text-center py-12 px-2 pb-[50px]">
    <!-- Title -->
    <h2 class="text-[16px] sm:text-3xl font-textNav tracking-wider font-extralight">
      FOR THE ONES WHO 
      DARE A LITTLE, <br />
      LET GO A LITTLE 
      AND LOVE TO THE FULLEST
    </h2>
  </div>

  <!-- New Section with Title and Photos -->
  <div class="py-[50px] sm:py-0 sm:pb-12 px-[0px] sm:px-[140px] items flex items-center justify-center">
    

    <div class="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-10xl w-full">
      <!-- Tile 1 -->
      <div class="relative group overflow-hidden bg-gray-300">
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
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
      <div class="relative group overflow-hidden bg-gray-300">
        <img
          src="/assets/pictures/shoot-02.jpg"
          alt="Tile Image 2"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <!-- <div class="absolute inset-3 border-2 border-white pointer-events-none"></div> -->
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
        <div
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
          class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
 

  <!-- New Section -->
  <div class="hidden sm:flex h-[600px] bg-naturalBeige border-t border-gray-400">
    

    <!-- Right Side (Text and Small Photo) -->
    <div class="flex-1 flex flex-col justify-between">
      <!-- Top Right Text -->
      <div class="mb-4 mt-[30px] flex-1 px-10">
        <h3 class="text-2xl text-gray-700 font-semibold mb-4">HI THERE!</h3>
        <p class="text-black text-lg font-bold tracking-wider font-extralight">
          Heyy, ik ben Sanneloes. Ik hou ervan om unieke, 
          emotionele momenten vast te leggen die jouw verhaal op de mooiste en meest eerlijke manier vertellen.
          Mijn fotografie gaat over het vinden van magie 
          in het alledaagse en het creëren van herinneringen die voor altijd blijven.
        </p>

        <button class="mt-4 hover:-translate-y-1 transform transition duration-300 bg-buttonColor rounded-lg py-2 px-2">
          <a href="/about" class="text-sm font-bold text-white transition duration-300">
            MEER OVER SANNELOES
          </a>
        </button>
      </div>
      
      <!-- Bottom Right Small Photo -->
      <div class="h-[50%]">
        <nuxt-img
          src="/assets/pictures/loes2.jpg"
          alt="Sanneloes small photo"
          class="w-full h-full object-cover border-t border-gray-400"
        />
      </div>
    </div>

    <!-- Middle Section (Vertical Text) -->
    <div class="bg-offWhite border-l border-r border-gray-400 flex justify-center items-center max-w-[300px]">
      <span class="text-gray-700 text-6xl font-textNav tracking-widest transform -rotate-90">
        SANNELOES
      </span>
    </div>

    <!-- Left Side (Photo) -->
    <div class=" flex ">
      <nuxt-img
        placeholder
        src="/assets/pictures/loes-index.jpg"	
        alt="Sanneloes"
        class="h-full object-cover object-top"/>
    </div>

    
  </div>

  <!-- <love-notes></love-notes>  -->
  
  <reviews-sf></reviews-sf>

  <div class="relative parallax">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
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


<style scoped>
  .parallax {
    /* The image used */
    background-image: url("/public/assets/pictures/wedding-01.jpg");

    /* Set a specific height */
    min-height: 500px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  /* Turn off parallax scrolling for all tablets and phones. Increase/decrease the pixels if needed */
  @media only screen and (max-device-width: 1366px) {
    .parallax {
      background-attachment: scroll;
    }
  }

  .instagram-icon i {
    background: linear-gradient(45deg, #F77737, #FDCB82, #9B59B6);
    background-clip: text;
    color: transparent;
  }



</style>
