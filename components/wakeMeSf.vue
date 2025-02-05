<template>
    <div class="flex flex-col items-center px-4 py-16 bg-[url('/assets/pictures/about-page/banner-wake-me-up.webp')] bg-cover bg-center">  
      <!-- Desktop Grid Layout -->
      <div class="hidden sm:grid grid-cols-9 gap-4">
        <WakeMeCard v-for="(review, index) in reviews" :key="index" :review="review" />
      </div>
  
      <!-- Mobile Slider -->
      <div class="sm:hidden flex flex-col items-center relative w-full">
        <WakeMeCard :review="reviews[currentIndex]" />
        
        <!-- Navigatie Knoppen -->
        <div class="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-0">
          <button @click="prevReview" class="skip-button text-white p-2 rounded-full">
            <i class="fa-solid fa-chevron-left text-3xl"></i>
          </button>
          <button @click="nextReview" class="skip-button text-white p-2 rounded-full">
            <i class="fa-solid fa-chevron-right text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Review data
  const reviews = ref([
    {
      name: "Kaas",
      text: "IK HOU VAN KAAS. Altijd als ik op reis ben, verlang ik naar kaas. Of het nou jong belegen, oude, feta, brie, fondue of geitenkaas is. Ik word er blij van."
    },
    {
      name: "EEN MOOIE REIS",
      text: "Reizen maakt me echt happy. Andere omgevingen, mooie natuur, nieuwe culturen en mensen... Het zorgt voor rust in je hoofd én je kan lekker doen waar je zin in hebt."
    },
    {
      name: "INTERIEUR STYLING",
      text: "Iets wat voor mij echt verslavend kan werken. Ik kan uuuren huizen inrichten, inspiratie opdoen en experimenteren met kleuren, vormen en materialen. Love it."
    },
    {
      name: "EEN GOED BUBBELTJE",
      text: "Yes please!. Maar... een goed glas wijn (rood, wit, rosé I don't care) of een koud wit speciaal biertje in de zomer is ook heaven. Af en toe dan, want wel met mate uiteraard."
    },
    {
      name: "EEN TOFFE VRIJ WERK SHOOT",
      text: "Hier ga ik van AAN! Dit geeft me heel veel energie. Ik word enthousiast, creatief en kan niet stoppen met fotograferen. Zou het vaker moeten doen!"
    },
    {
      name: "CREA BEA DINGEN DOEN",
      text: "Ook dit doe ik eigenlijk te weinig, maar ik probeer het meer op te pakken. Dit geeft me heel veel mentale rust én ik vind het enorm leuk om te doen."
    },
    {
      name: "BROODJE KROKET",
      text: "M'n guilty pleasure. Het liefst een bourgondische kroket en uiteraard mét mosterd. Zo enorm slecht, maar goed. Men zegt dat een broodje kaas nog slechter is - tja.."
    },
    {
      name: "KNUFFELEN",
      text: "Niet per se met iedereen hoor, maar met m'n vriend... Ja.... een echte kroelkip zoals m'n moeder altijd zei. Het geeft me geborgenheid, liefde én rust in m'n koppie. Zo fijn."
    },
    {
      name: "FAMILIE",
      text: "Ik ben een echt familiemens. Ben graag bij m'n ouders en zusje. Ze kennen me door en door en ik word er altijd blij en ontspannen van. Lekker bijkletsen en lachen samen."
    }
  ])
  
  const currentIndex = ref(0)
  
  // Navigatie functies
  const nextReview = () => {
    currentIndex.value = (currentIndex.value + 1) % reviews.value.length
  }
  const prevReview = () => {
    currentIndex.value = (currentIndex.value - 1 + reviews.value.length) % reviews.value.length
  }
  </script>
  
  <style scoped>
    
  </style>
  
      <!-- Titel -->
      <!-- <div class="pb-2">
        <nuxt-img
          placeholder
          src="/assets/pictures/home-page/reviews.webp"
          alt="Reviews"
          class="h-[130px]"
        />
      </div> -->