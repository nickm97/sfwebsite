
<template>
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
                :placeholder
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
</template>

<script setup>
  
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

    function updateReview() {
      const reviewText = document.getElementById('review-text');
      const photos = document.querySelectorAll('.review-photo'); // Selecteer alle foto's met de class 'review-photo'

      const review = reviews[currentReviewIndex];

      reviewText.innerHTML = `
        <span class="text-black text-l font-bold tracking-wider font-extralight">
          ${review.text}
        </span>
      `;

      // Hier wachten we totdat de afbeelding volledig geladen is
      const img = new Image();
      img.src = review.photo1;

      img.onload = function () {
        // Pas de afbeelding pas aan wanneer deze is geladen
        updateImageSource(review.photo1);
        
        // // Start de fade-in animatie
        // setTimeout(() => {
        //   const photoElement = document.querySelector('#review-photo img');
        //   photoElement.src = review.photo1;
        //   photoElement.classList.add('fade-in');
        //   photoElement.classList.remove('fade-out');
        // }, 100);
      };
  
    }


  function showNextReview(handling) {
    const reviewText = document.getElementById('review-text');
    const photos = document.querySelectorAll('.review-photo'); // Selecteer alle foto's met de class 'review-photo'
    
    // Voeg fade-out klasse toe
    // reviewText.classList.add('fade-out');
    // photos.forEach(photo => photo.classList.add('fade-out'));

      // Update de review (tekst en afbeelding) na fade-out
      if (handling === "next") {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      } else {
        currentReviewIndex = currentReviewIndex - 1 < 0 ? reviews.length - 1 : currentReviewIndex - 1;
      }
      updateReview();
  }


  import { onMounted } from 'vue';

  onMounted(() => {

  // Eerste review laden
    updateReview();
  });
</script>


<style scoped>
  .fade-out {
    opacity: 0;
    transition: opacity 1s ease-out;
  }

  .fade-in {
    opacity: 1;
    transition: opacity 1s ease-in;
  }

</style>