
<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  </head>
  <div class="flex h-[calc(100vh-50px)] w-full relative">
    <!-- Left Image (visible on all screens) -->
    <div class="flex-1">
      <img
        src="/assets/pictures/buik.jpg"
        alt="First Image"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Right Image (hidden on small screens, visible on larger screens) -->
    <div class="hidden sm:block flex-1">
      <img
        src="/assets/pictures/loes.jpg"
        alt="Second Image"
        class="w-full h-full object-cover"
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
    <h2 class="text-center text-[18px] sm:text-3xl font-textNav pb-[50px] sm:pb-[80px] tracking-wider font-extralight">
      FOR THE ONES WHO 
      DARE A LITTLE, <br />
      LET GO A LITTLE 
      AND LOVE TO THE FULLEST
    </h2>

    <!-- Grid of Photos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <!-- Photo 1 -->
      <div class="text-center group">
        <a href="/portfolio" class="relative w-[290px] h-[375px] mx-auto block">
          <img
            src="/assets/pictures/loes3.jpg"
            alt="Sanneloes Fotografie Bruiloften"
            class="w-full h-full object-cover rounded-[2px] transition duration-300 cursor-pointer group-hover:brightness-90"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 rounded-[2px]"
          >
            <span class="text-white text-sm font-semibold border border-white px-4 py-2 rounded">
              PORTFOLIO
            </span>
          </div>
        </a>
        <a
          href="/portfolio"
          class="tracking-wider mt-2 text-lg font-standard group-hover:text-gray-500 transition duration-300 font-thin cursor-pointer block"
        >
          PORTFOLIO
        </a>
      </div>

      <!-- Photo 2 -->
      <div class="text-center group">
        <a href="/bruiloften" class="relative w-[290px] h-[375px] mx-auto block">
          <img
            src="/assets/pictures/sexy1.jpg"
            alt="Sanneloes Fotografie Bruiloften"
            class="w-full h-full object-cover rounded-[2px] transition duration-300 cursor-pointer group-hover:brightness-90"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 rounded-[2px]"
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

      <!-- Photo 3 -->
      <div class="text-center group">
        <a href="/strong-women" class="relative w-[290px] h-[375px] mx-auto block">
          <img
            src="/assets/pictures/sexy2.jpg"
            class="w-full h-full object-cover rounded-[2px] transition duration-300 cursor-pointer group-hover:brightness-90"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 rounded-[2px]"
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
        <a href="/shoots" class="relative w-[290px] h-[375px] mx-auto block">
          <img
            src="/assets/pictures/sexy3.jpg"
            alt="Sanneloes Fotografie Bruiloften"
            class="w-full h-full object-cover rounded-[2px] transition duration-300 cursor-pointer group-hover:brightness-90"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 rounded-[2px]"
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
    </div>
  </div>

  
  <div class="sm:hidden bg-offWhite border-t border-b border-gray-400">
    <div class="flex h-[450px]">
        <div class="border-l border-r border-gray-400 flex h-full bg-white justify-center items-center min-w-[60px]">
            <!-- Eén enkele span voor de tekst met &nbsp; voor de spatie -->
            <span class="text-gray-700 text-2xl font-textNav tracking-widest transform -rotate-90">
                SANNELOES&nbsp;FOTOGRAFIE
            </span>
        </div>
        <img
            src="/public/assets/pictures/loes.jpg"	
            alt="Sanneloes"
            class="w-[250px] object-cover object-top"/>
    </div>
    <div class="pl-4 py-6">
        <h3 class="text-2xl text-black font-textNav font-semibold mb-4">HI THERE!</h3>
        <p class="text-black text-lg font-light font-textNav leading-relaxed">
            Heyy, ik ben Sanneloes. Ik hou ervan om unieke, 
            emotionele momenten vast te leggen die jouw verhaal op de mooiste en meest eerlijke manier vertellen.
            Mijn fotografie gaat over het vinden van magie 
            in het alledaagse en het creëren van herinneringen die voor altijd blijven.
        </p>
    </div>
 </div>



    

  <!-- New Section -->
  <div class="hidden lg:flex h-[600px] bg-offWhite border-t border-gray-400">
    <!-- Left Side (Photo) -->
    <div class="flex-1 flex relative">
      <img
        src="/public/assets/pictures/rsz_1loes-sjaal.jpg"	
        alt="Sanneloes"
        class="w-full h-full object-cover object-top"/>
    </div>

    <!-- Middle Section (Vertical Text) -->
    <div class="border-l border-r border-gray-400 flex justify-center items-center max-w-[300px]">
      <span class="text-gray-700 text-6xl font-textNav tracking-widest transform -rotate-90">
        SANNELOES
      </span>
    </div>

    <!-- Right Side (Text and Small Photo) -->
    <div class="flex-1 flex flex-col justify-between">
      <!-- Top Right Text -->
      <div class="mb-4 mt-[30px] flex-1 px-10">
        <h3 class="text-2xl text-gray-700 font-semibold mb-4">HI THERE!</h3>
        <p class="text-gray-600 text-lg font-light leading-relaxed">
          Heyy, ik ben Sanneloes. Ik hou ervan om unieke, 
          emotionele momenten vast te leggen die jouw verhaal op de mooiste en meest eerlijke manier vertellen.
          Mijn fotografie gaat over het vinden van magie 
          in het alledaagse en het creëren van herinneringen die voor altijd blijven.
        </p>

        <button class="mt-4 hover:-translate-y-1 transform transition duration-300">
          <a href="/about" class="text-sm font-semibold border-2 border-black py-2 px-2 rounded-lg bg-white text-black transition duration-300">
            Meer over Sanneloes
          </a>
        </button>
      </div>
      
      <!-- Bottom Right Small Photo -->
      <div class="h-[50%]">
        <img
          src="/assets/pictures/loes2.jpg"
          alt="Sanneloes small photo"
          class="w-full h-full object-cover border-t border-gray-400"
        />
      </div>
    </div>
  </div>

  <div class="flex flex-col lg:flex-row h-auto bg-orange-100 py-6 px-4 lg:py-[70px] lg:px-[100px] border border-gray-200 items-center lg:justify-center relative">
    
    <svg id="next-button" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer w-[50px] h-8 text-black absolute top-3 right-3 sm:top-6 sm:right-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="0.75">
        <line x1="-10" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>

    <!-- "LIEVE WOORDEN" tekst (horizontaal bovenaan op mobiel) -->
    <div class="w-full text-center mb-4 lg:mb-0 lg:absolute lg:top-[50px] lg:left-[10px]">
      <span class="text-gray-700 text-lg font-textNav tracking-widest lg:text-xl">
        "LIEVE WOORDEN"
      </span>
      <!-- <i id="next-button" class="text-white cursor-pointer fa-solid fa-arrow-right-long scale-x-[50px]"></i> -->
    </div>

    <!-- Foto Sectie -->
    <div id="review-photo" class="flex flex-col items-center lg:flex-row lg:relative lg:flex-1">
      <!-- Alleen de eerste afbeelding op mobiel -->
      <img id="photo1" src="" alt="Review Photo 1" class="w-[200px] h-[300px] lg:w-[250px] lg:h-[400px] object-contain mb-6 lg:mb-0 lg:relative lg:-top-6 lg:left-[10px] z-10"/>
      <img id="photo2" src="" alt="Review Photo 2" class="hidden lg:block w-[250px] h-[400px] object-contain lg:relative lg:top-6 lg:right-[10px] z-0"/>
    </div>

    <!-- Review Tekst Sectie -->
    <div class="w-full lg:w-[600px] p-4 lg:p-8 flex flex-col">
      <div id="review-text" class="flex flex-col space-y-4 text-center lg:text-left">
        <!-- Dynamisch gegenereerde tekst -->
      </div>
    </div>

  </div>


  
  <!-- <div class="relative flex h-[650px] w-full parallax">
    <img
      src="/assets/pictures/liggende_foto.jpg"
      alt="Sanneloes Fotografie contact"
      class="absolute inset-0 w-full h-full object-cover rounded-[2px]"
    />

    <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
      <a
        href="/contact"
        class="text-white text-sm font-semibold border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition duration-300">
          Laat mij jullie verhaal vastleggen
      </a>
    </div>
  </div> -->
  
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

  

  <footer class="bg-offWhite-800 text-black font-textNav py-4 px-4 sm:px-20">
  <!-- Flex Container for Footer -->
  <div class="flex flex-col sm:flex-row items-center justify-center w-full space-y-4 sm:space-y-0">
    
    <!-- Logo -->
    <div class="flex items-center justify-center sm:justify-start -mt-3 sm:mt-0 -mb-4 sm:mb-0">
      <img src="/assets/pictures/logo-klein.svg" alt="Your Logo" class="w-[100px] sm:w-[125px] h-auto" />
    </div>

    <!-- Footer Links -->
    <div class="flex flex-wrap items-center justify-center text-center space-x-2 sm:space-x-4">
      <a href="mailto:info@sanneloesfotografie.nl" class="text-sm sm:text-lg hover:underline">info@sanneloesfotografie.nl</a>
      <span>|</span>
      <a href="tel:+31617193407" class="text-sm sm:text-lg hover:underline">+31617193407</a>
      <span>|</span>
      <a href="/contact" class="text-sm sm:text-lg hover:underline">Contact</a>
      <span>|</span>
      <a href="/algemene-voorwaarde" class="text-sm sm:text-lg hover:underline">Algemene Voorwaarde</a>
      <span>|</span>
      <a href="/privacy-verklaring" class="text-sm sm:text-lg hover:underline">Privacy Verklaring</a>
      <span>|</span>
      <span class="text-sm sm:text-lg">KvK 77018753</span>
    </div>
  </div>

  <!-- Social Media - Outside of Links Section -->
  <div class="flex items-center justify-center mt-2 sm:-mt-8">	
    <a href="https://www.instagram.com/sanneloesfotografie/" target="_blank" class="text-4xl instagram-icon">
      <i class="fa-brands fa-instagram"></i>
    </a>
  </div>

  <!-- Copyright Section -->
  <div class="mt-4 text-center">
    <p class="text-sm">© 2024 Sanneloes Fotografie. All Rights Reserved.</p>
  </div>
</footer>



</template>

<script setup>
  function scrollToNextSection() {
    // Scroll naar de volgende sectie (vervang de selector naar je gewenste sectie)
    window.scrollBy({
      top: window.innerHeight, // scrollt een volledige viewport naar beneden
      behavior: "smooth" // zorgt voor een vloeiende scroll
    });
  };

  import { onMounted } from 'vue';

  onMounted(() => {
    // Array met reviews en bijbehorende foto's
    const reviews = [
      {
        text: "Wij zijn ontzettend blij met de prachtige foto's die Sanneloes voor ons heeft gemaakt tijdens onze bruiloft. Een herinnering voor het leven. Zo'n lieve meid, die vanaf moment één ons een vertrouwd gevoel gaf en ons liet shinen. Met oog voor detail, enthousiasme en passie voor haar vak is zij de beste fotograaf die wij kennen.<br><br> Wij zijn Sanneloes dankbaar voor deze onvergetelijke herinnering aan onze dag.<br><br> Liefs Ward & Nicky",
        photo1: "/assets/pictures/wedding.jpg",
        photo2: "/assets/pictures/wedding-nicky.jpg"
      },
      {
        text: "Sanneloes heeft onze bruiloft vastgelegd op de mooiste manier die we ons konden voorstellen. Ze maakte ons helemaal op ons gemak en haar foto’s spreken voor zich. Bedankt voor alles, Sanneloes! Groetjes, Lisa & Mark",
        photo1: "/assets/pictures/sexy1.jpg",
        photo2: "/assets/pictures/sexy2.jpg"
      },
      {
        text: "Wat een fantastische ervaring met Sanneloes! Ze is professioneel, vriendelijk en weet precies hoe ze de mooiste momenten vastlegt. We zouden haar voor geen goud willen missen. Bedankt voor alles, Kim & Tom",
        photo1: "/assets/pictures/loes3.jpg",
        photo2: "/assets/pictures/loes2.jpg"
      }
    ];

    let currentReviewIndex = 0;

    const reviewText = document.getElementById('review-text');
    const photo1 = document.getElementById('photo1');
    const photo2 = document.getElementById('photo2');

    // Functie om de review en foto's dynamisch bij te werken
    function updateReview() {
      const review = reviews[currentReviewIndex];

      // Update tekst en afbeeldingen
      reviewText.innerHTML = `
        <span class="text-gray-600 text-l italic font-textNav tracking-wider font-extralight">
          ${review.text}
        </span>
      `;
      photo1.src = review.photo1;
      photo2.src = review.photo2;
    }

    // Functie om naar de volgende review te gaan met fade-effect
    function showNextReview() {
      // Voeg fade-out klasse toe
      reviewText.classList.add('fade-out');
      photo1.classList.add('fade-out');
      photo2.classList.add('fade-out');

      // Wacht tot de fade-out transitie voltooid is
      setTimeout(() => {
        // Update de review
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        updateReview();

        // Voeg fade-in klasse toe
        reviewText.classList.remove('fade-out');
        photo1.classList.remove('fade-out');
        photo2.classList.remove('fade-out');
        reviewText.classList.add('fade-in');
        photo1.classList.add('fade-in');
        photo2.classList.add('fade-in');

        // Verwijder de fade-in klasse na de animatie
        setTimeout(() => {
          reviewText.classList.remove('fade-in');
          photo1.classList.remove('fade-in');
          photo2.classList.remove('fade-in');
        }, 500); // Zelfde tijd als de transitie
      }, 500); // Zelfde tijd als de fade-out transitie
    }

    // Event listener voor de "next" knop
    document.getElementById('next-button').addEventListener('click', showNextReview);

    // Eerste review laden
    updateReview();
  });
</script>


<style scoped>
  .parallax {
    /* The image used */
    background-image: url("/assets/pictures/liggende_foto.jpg");

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

  .fade {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }

  .fade-out {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .fade-in {
    opacity: 1;
    transition: opacity 1s ease-in-out;
  }

</style>
