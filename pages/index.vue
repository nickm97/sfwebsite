
<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

  </head>
  <div class="flex h-[calc(100vh-50px)] w-full relative">
    <!-- Left Image (visible on all screens) -->
    <div class="hidden sm:block flex-1">
      <nuxt-img
        src="/assets/pictures/wedding-07.jpg"
        alt="First Image"
        class="w-full h-full object-cover object-top"style="object-position: center 20%;"
      />
    </div>

    <!-- Right Image (hidden on small screens, visible on larger screens) -->
    <div class="sm:block flex-1">
      <nuxt-img
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
            class="w-full h-full object-cover rounded-[2px] transition duration-300 cursor-pointer group-hover:brightness-90 object-top"style="object-position: center 100%;"
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

      <!-- Photo 2 -->
      <div class="text-center group">
        <a href="/shoots" class="relative w-[290px] h-[375px] mx-auto block">
          <nuxt-img
            src="/assets/pictures/shoot-02.jpg"
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

      <!-- Photo 3 -->
      <div class="text-center group">
        <a href="/strong-women" class="relative w-[290px] h-[375px] mx-auto block">
          <nuxt-img
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
        <a href="/commercial" class="relative w-[290px] h-[375px] mx-auto block">
          <nuxt-img
            src="/assets/pictures/branding-01.jpg"
            alt="Sanneloes Fotografie Bruiloften"
            class="w-full h-full object-cover rounded-[2px] transition duration-300 cursor-pointer group-hover:brightness-90"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300 rounded-[2px]"
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
    <div class="flex-1 flex relative">
      <nuxt-img
        src="/assets/pictures/rsz_1loes-sjaal.jpg"	
        alt="Sanneloes"
        class="w-full h-full object-cover object-top"/>
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

  <div class="flex flex-col sm:py-4 h-auto sm:h-auto bg-lightBeige items-center"> 

    <div class="flex flex-col sm:flex-row sm:gap-[75px] items-center">
      <div class="hidden sm:flex">
        <i @click="showNextReview('previous')" class="fa-solid fa-chevron-left text-3xl text-white cursor-pointer"></i>
      </div>

      <div class="sm:hidden flex h-[400px]">
        <div id="review-photo">
          <nuxt-img :src="imageSrc" alt="Review Photo 1" class="review-photo w-full h-[400px] sm:px-0 sm:w-[350px] sm:h-[400px] object-cover sm:mb-0"/>
        </div>
        <div class="border-r border-gray-400 flex h-full bg-white justify-center items-center min-w-[20px] w-[100px]">
            <span class="text-gray-700 text-2xl font-textNav tracking-widest transform -rotate-90">
                "LOVE&nbsp;NOTES"
            </span>
        </div>
      </div>

      <div class="gap-10 flex flex-col sm:flex-row py-2 h-auto items-center">    
        <!-- <div id="review-photo" class="sm:flex hidden "> -->
          <!-- <nuxt-img src="" alt="Review Photo 1" class="review-photo w-[200px] h-[300px] sm:px-0 sm:w-[350px] sm:h-[400px] object-contain sm:mb-0"/> -->
        <!-- </div> -->
        <div id="review-photo" class="sm:flex hidden">
          <nuxt-img 
            :src="imageSrc" 
            alt="Review Photo 1" 
            class="review-photo w-[200px] h-[300px] sm:px-0 sm:w-[350px] sm:h-[400px] object-contain sm:mb-0"
            style="object-position: center 20%;" />
        </div>


        <div class="w-full py-0 sm:w-[600px] flex sm:block items-center">
          <div class="hidden mb-4 mr-6 sm:mb-4 sm:block">
            <span class="text-black text-lg font-textNav tracking-widest lg:text-xl">
              "LOVE NOTES"
            </span>
          </div>

          <div class="sm:hidden px-4">
            <i @click="showNextReview('previous')" class="fa-solid fa-chevron-left text-xl text-white cursor-pointer"></i>
          </div>

          <div id="review-text" class="flex text-left sm:text-left py-10">
          </div>

          <div class="sm:hidden px-4">
            <i id="next-button" @click="showNextReview('next')" class="fa-solid fa-chevron-right text-xl text-white cursor-pointer"></i>
          </div>
        </div>
      </div>

      <div class="py-2 sm:py-0 hidden sm:flex">
        <i id="next-button" @click="showNextReview('next')" class="fa-solid fa-chevron-right text-3xl text-white cursor-pointer"></i>
      </div>
      
    </div>
  </div>
  
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
  
  var currentReviewIndex = 0;

  // Array met reviews en bijbehorende foto's
  const reviews = [
      {
        text: "&quot;Wij zijn ontzettend blij met de prachtige foto's die Sanneloes voor ons heeft gemaakt tijdens onze bruiloft. Een herinnering voor het leven. Zo'n lieve meid, die vanaf moment één ons een vertrouwd gevoel gaf en ons liet shinen. Met oog voor detail, enthousiasme en passie voor haar vak is zij de beste fotograaf die wij kennen.<br><br> Wij zijn Sanneloes dankbaar voor deze onvergetelijke herinnering aan onze dag.<br><br> Liefs Ward & Nicky&quot;",
        photo1: "/assets/pictures/wedding.jpg",
      },
      {
        text: "Sanneloes heeft onze bruiloft vastgelegd op de mooiste manier die we ons konden voorstellen. Ze maakte ons helemaal op ons gemak en haar foto’s spreken voor zich. Bedankt voor alles, Sanneloes! Groetjes, Lisa & Mark",
        photo1: "/assets/pictures/sexy1.jpg",
      },
      {
        text: "Wat een fantastische ervaring met Sanneloes! Ze is professioneel, vriendelijk en weet precies hoe ze de mooiste momenten vastlegt. We zouden haar voor geen goud willen missen. Bedankt voor alles, Kim & Tom",
        photo1: "/assets/pictures/loes3.jpg",
      }
    ];
    
    import { ref } from 'vue';

    const imageSrc = ref(''); // Reageerbare variabele voor de afbeelding

    // Je kunt de 'imageSrc' variabele ergens in je code bijwerken
    function updateImageSource(newSrc) {
      imageSrc.value = newSrc;
    }

    // Update functie
    function updateReview() {
      
      const reviewText = document.getElementById('review-text');
      const photos = document.querySelectorAll('.review-photo'); // Selecteer alle foto's met de class 'review-photo'

      const review = reviews[currentReviewIndex];

      reviewText.innerHTML = `
        <span class="text-black text-l font-bold tracking-wider font-extralight">
          ${review.text}
        </span>
      `;

      updateImageSource(review.photo1);
      // Loop door de foto's en update de 'src' afhankelijk van de index
      photos.forEach((photo, index) => {
        photo.src = review.photo1;
      });
    }

    function showNextReview(handling) {
      const reviewText = document.getElementById('review-text');
      const photos = document.querySelectorAll('.review-photo'); // Selecteer alle foto's met de class 'review-photo'
      
      // Voeg fade-out klasse toe
      reviewText.classList.add('fade-out');
      photos.forEach(photo => photo.classList.add('fade-out'));

      // Wacht tot de fade-out transitie voltooid is
      setTimeout(() => {
        // Update de review (tekst en afbeelding) na fade-out
        if (handling === "next") {
          currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        } else {
          currentReviewIndex = currentReviewIndex - 1 < 0 ? reviews.length - 1 : currentReviewIndex - 1;
        }

        console.log(currentReviewIndex);

        // Update de review en afbeelding pas na de fade-out
        updateReview();

        // Voeg fade-in klasse toe
        reviewText.classList.remove('fade-out');
        photos.forEach(photo => photo.classList.remove('fade-out'));

        reviewText.classList.add('fade-in');
        photos.forEach(photo => photo.classList.add('fade-in'));

        // Verwijder de fade-in klasse na de animatie
        setTimeout(() => {
          reviewText.classList.remove('fade-in');
          photos.forEach(photo => photo.classList.remove('fade-in'));
        }, 1000); // Zelfde tijd als de transitie
      }, 1000); // Zelfde tijd als de fade-out transitie
    }


  import { onMounted } from 'vue';

  onMounted(() => {

  // Eerste review laden
    updateReview();
  });
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
