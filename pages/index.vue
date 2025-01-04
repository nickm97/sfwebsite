
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



  <!-- New Section with Title and Photos -->
  <div class="bg-offWhite py-[50px] sm:py-[80px] px-[0px] lg:px-[140px]">
    <!-- Title -->
    <h2 class="text-center text-[16px] sm:text-3xl font-textNav px-2 pb-[50px] sm:pb-[80px] tracking-wider font-extralight">
      FOR THE ONES WHO 
      DARE A LITTLE, <br />
      LET GO A LITTLE 
      AND LOVE TO THE FULLEST
    </h2>

    <!-- Grid of Photos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <!-- Photo 1 -->
      <div class="text-center group">
        <a href="/bruiloften" class="relative w-[290px] h-[375px] mx-auto block">
          <nuxt-img
            src="/assets/pictures/wedding-09.jpg"
            alt="Sanneloes Fotografie Bruiloften"
            class="w-full h-full object-cover rounded-[2px] transition duration-300 cursor-pointer group-hover:brightness-90 object-top group-hover:scale-105 transition-transform duration-500"style="object-position: center 100%;"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 rounded-[2px] group-hover:scale-105 transition-transform duration-500"
          >
            <span class="text-white text-sm font-semibold border border-white px-4 py-2 rounded">
              WEDDINGS
            </span>
          </div>
        </a>
        <a
          href="/bruiloften"
          class="tracking-wider mt-2 text-lg font-standard group-hover:text-gray-500 transition duration-300 font-thin cursor-pointer block"
        >
          WEDDINGS
        </a>
      </div>

      <!-- Photo 2 -->
      <div class="text-center group">
        <a href="/shoots" class="relative w-[290px] h-[375px] mx-auto block">
          <nuxt-img
            src="/assets/pictures/shoot-02.jpg"
            alt="Sanneloes Fotografie Bruiloften"
            class="w-full h-full object-cover rounded-[2px] transition duration-300 cursor-pointer group-hover:brightness-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 rounded-[2px] group-hover:scale-105 transition-transform duration-500"
          >
            <span class="text-white text-sm font-semibold border border-white px-4 py-2 rounded">
              SHOOTS
            </span>
          </div>
        </a>
        <a
          href="/shoots"
          class="tracking-wider mt-2 text-lg font-standard group-hover:text-gray-500 transition duration-300 font-thin cursor-pointer block"
        >
          SHOOTS
        </a>
      </div>      

      <!-- Photo 3 -->
      <div class="text-center group">
        <a href="/strong-women" class="relative w-[290px] h-[375px] mx-auto block">
          <nuxt-img
            src="/assets/pictures/sexy2.jpg"
            class="w-full h-full object-cover rounded-[2px] transition duration-300 cursor-pointer group-hover:brightness-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 rounded-[2px] group-hover:scale-105 transition-transform duration-500"
          >
            <span class="text-white text-sm font-semibold border border-white px-4 py-2 rounded">
              STRONG WOMEN
            </span>
          </div>
        </a>
        <a
          href="/strong-women"
          class="tracking-wider mt-2 text-lg font-standard group-hover:text-gray-500 transition duration-300 font-thin cursor-pointer block"
        >
          STRONG WOMEN
        </a>
      </div>

      <!-- Photo 4 -->
      
      <div class="text-center group">
        <a href="/commercial" class="relative w-[290px] h-[375px] mx-auto block">
          <nuxt-img
            src="/assets/pictures/branding-01.jpg"
            alt="Sanneloes Fotografie Bruiloften"
            class="w-full h-full object-cover rounded-[2px] transition duration-300 cursor-pointer group-hover:brightness-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 rounded-[2px] group-hover:scale-105 transition-transform duration-500"
          >
            <span class="text-white text-sm font-semibold border border-white px-4 py-2 rounded">
              BRANDING
            </span>
          </div>
        </a>
        <a
          href="/commercial"
          class="tracking-wider mt-2 text-lg font-standard group-hover:text-gray-500 transition duration-300 font-thin cursor-pointer block"
        >
          BRANDING
        </a>
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
            src="/assets/pictures/loes.jpg"	
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
    <!-- Left Side (Photo) -->
    <div class=" flex ">
      <nuxt-img
        placeholder
        src="/assets/pictures/rsz_1loes-sjaal.jpg"	
        alt="Sanneloes"
        class="h-full object-cover object-top"/>
    </div>

    <!-- Middle Section (Vertical Text) -->
    <div class="bg-offWhite border-l border-r border-gray-400 flex justify-center items-center max-w-[300px]">
      <span class="text-gray-700 text-6xl font-textNav tracking-widest transform -rotate-90">
        SANNELOES
      </span>
    </div>

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
  function scrollToNextSection() {
    // Scroll naar de volgende sectie (vervang de selector naar je gewenste sectie)
    window.scrollBy({
      top: window.innerHeight, // scrollt een volledige viewport naar beneden
      behavior: "smooth" // zorgt voor een vloeiende scroll
    });
  };
  
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
    background-size: cover;
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
