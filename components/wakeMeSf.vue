<template>
  <div class="flex flex-col items-center px-4 py-16 sm:h-[600px] bg-[url('/assets/pictures/about-page/banner-wake-me-up-01.webp')] bg-cover  sm:bg-[center_top_85%]">  
    <p class="hidden sm:flex uppercase font-standard text-black font-light text-center text-sm sm:text-md mb-8">
            TAP TO READ
        </p>
    <!-- Desktop Grid Layout -->
    <div class="hidden sm:grid grid-cols-9 gap-6 justify-center items-center">
      <WordsAbout v-for="(wakeMe, index) in wakeMes" :key="index" :wordsAbout="wakeMe" />
    </div>

    <!-- Mobile Slider -->
    <div class="sm:hidden flex flex-col items-center relative w-full">
      <WordsAbout :wordsAbout="wakeMes[currentIndex]" />
      
      <!-- Navigatie Knoppen -->
      <div class="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
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

// Data
const wakeMes = ref([
  { word: "Kaas", text: "IK HOU VAN KAAS. Altijd als ik op reis ben, verlang ik naar kaas. Of het nou jong belegen, oude, feta, brie, fondue of geitenkaas is. Ik word er blij van." },
  { word: "EEN MOOIE REIS", text: "Reizen maakt me echt happy. Andere omgevingen, mooie natuur, nieuwe culturen en mensen... Het zorgt voor rust in je hoofd én je kan lekker doen waar je zin in hebt." },
  { word: "INTERIEUR STYLING", text: "Iets wat voor mij echt verslavend kan werken. Ik kan uuuren huizen inrichten, inspiratie opdoen en experimenteren met kleuren, vormen en materialen. Love it." },
  { word: "EEN GOED BUBBELTJE", text: "Yes please!. Maar... een goed glas wijn (rood, wit, rosé I don't care) of een koud wit speciaal biertje in de zomer is ook heaven. Af en toe dan, want wel met mate uiteraard." },
  { word: "EEN TOFFE VRIJ WERK SHOOT", text: "Hier ga ik van AAN! Dit geeft me heel veel energie. Ik word enthousiast, creatief en kan niet stoppen met fotograferen. Zou het vaker moeten doen!" },
  { word: "CREA BEA DINGEN DOEN", text: "Ook dit doe ik eigenlijk te weinig, maar ik probeer het meer op te pakken. Dit geeft me heel veel mentale rust én ik vind het enorm leuk om te doen." },
  { word: "BROODJE KROKET", text: "M'n guilty pleasure. Het liefst een bourgondische kroket en uiteraard mét mosterd. Zo enorm slecht, maar goed. Men zegt dat een broodje kaas nog slechter is - tja.." },
  { word: "KNUFFELEN", text: "Niet per se met iedereen hoor, maar met m'n vriend... Ja.... een echte kroelkip zoals m'n moeder altijd zei. Het geeft me geborgenheid, liefde én rust in m'n koppie. Zo fijn." },
  { word: "FAMILIE", text: "Ik ben een echt familiemens. Ben graag bij m'n ouders en zusje. Ze kennen me door en door en ik word er altijd blij en ontspannen van. Lekker bijkletsen en lachen samen." }
])

const currentIndex = ref(0)

// Navigatie functies
const nextReview = () => {
  currentIndex.value = (currentIndex.value + 1) % wakeMes.value.length
}
const prevReview = () => {
  currentIndex.value = (currentIndex.value - 1 + wakeMes.value.length) % wakeMes.value.length
}
</script>
