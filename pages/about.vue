
<template class="bg-white">

  <!-- <section id="banner">
    <div class="h-[400px] sm:h-[600px]">
      <nuxt-img
        placeholder
        src="/assets/pictures/about-page/banner-background.webp"
        alt="Sanneloes fotografie"
        class="w-[100%] h-full object-cover object-center"
      />
    </div>
    <div class="absolute top-[38%] left-[32%] sm:left-[25%] sm:top-[60%] transform -translate-x-1/2 -translate-y-1/2 ">
      
      <nuxt-img
        placeholder
        src="/assets/pictures/about-page/banner-photo.webp"
        alt="Sanneloes fotografie"
        class="h-[300px] w-[205px] sm:w-[430px] sm:h-[600px]"
      />
    </div>
    <div class="absolute top-[15%] right-[-15%] sm:right-[23%] sm:top-[25%] transform -translate-x-1/2 -translate-y-1/2 ">
      <h1 class="uppercase font-playFair text-[40px] sm:text-[70px] tracking-widest">About</h1>
    </div>
    <div class="absolute top-[22.5%] right-[-20%] sm:right-[20%] sm:top-[40%] transform -translate-x-1/2 -translate-y-1/2 ">
      <nuxt-img
        placeholder
        src="/assets/pictures/about-page/banner-name.webp"
        alt="Sanneloes fotografie"
        class="w-[100%] h-[100px] sm:h-[175px] bg-cover bg-center"
      />
    </div>
  </section> -->
  <section id="banner" class="relative w-full h-[400px] sm:h-[600px] xl:h-[800px]">
  <!-- Achtergrondafbeelding -->
  <div class="absolute inset-0">
    <nuxt-img
      placeholder
      src="/assets/pictures/about-page/banner-background.webp"
      alt="Sanneloes fotografie"
      class="w-full h-full object-cover"
    />
  </div>

  <!-- Afbeelding iets meer naar links en naar beneden -->
<div class="absolute top-[70%] left-[30%] sm:top-[60%] sm:left-[25%] xl:top-[70%] xl:left-[25%] transform -translate-x-1/2 -translate-y-1/2">
  <nuxt-img
    placeholder
    src="/assets/pictures/about-page/banner-photo.webp"
    alt="Sanneloes fotografie"
    class="w-[205px] h-[300px] sm:w-[430px] sm:h-[600px]"
  />
</div>


  <!-- Titel "About" rechtsboven -->
  <div class="absolute top-[15%] right-4 sm:right-[30%] sm:top-[10%] xl:right-[35%] xl:top-[17%]">
    <h1 class="uppercase font-playFair text-[40px] sm:text-[70px] tracking-widest">
      About
    </h1>
  </div>

  <!-- Naam afbeelding onder de titel -->
  <div class="absolute top-[25%] right-4 sm:right-[30%] sm:top-[20%] xl:right-[35%] xl:top-[25%]">
    <nuxt-img
      placeholder
      src="/assets/pictures/about-page/banner-name.webp"
      alt="Sanneloes fotografie"
      class="h-[100px] sm:h-[175px] w-auto"
    />
  </div>
</section>


  <section class="flex flex-col items-center justify-center text-center py-0 px-2 pb-[50px] bg-buttonColor">
    <div class="hidden sm:flex items-center justify-center z-10">
      <nuxt-img
        src="/assets/pictures/about-page/about-qoute.webp"
        alt="Sanneloes Fotografie Logo"
        class="object-cover h-[45px] sm:h-[150px] z-10 "
      />
    </div>
    <div class="sm:hidden items-center justify-center z-10 mt-4">
      <nuxt-img
        src="/assets/pictures/about-page/about-qoute-mobile.webp"
        alt="Sanneloes Fotografie Logo"
        class="object-cover h-[70px] sm:h-[150px] z-10 "
      />
    </div>
    <div class="text-left px-4 sm:flex sm:w-[1300px] sm:text-left text-white sm:gap-12 py-0 font-standard font-light sm:text-[14.5px] text-[14.5px]">
      <p class="sm:w-1/2">
        Hi! Mijn naam is Sanneloes van Kessel en inderdaad mijn ouders konden niet kiezen tussen Sanne en Loes! Geboren in ‘98 en woon al zolang ik me kan herinneren 
        in het kleine dorpje Casteren. Op de middelbare school begon mijn passie voor fotografie. 
        M'n zusje stond vaak model en ik gebruikte mijn creativiteit voor het stylen, opmaken en het 
        vinden van mooie houdingen. We konden uren bezig zijn met het maken van de foto's en alles eromheen.  
      </p>
      <p class="sm:w-1/2">
        Toen ik eenmaal een studie moest kiezen, ben ik toch de PABO gaan doen. Het lesgeven sprak 
        me namelijk toch ook wel heel erg aan, maar de interesse voor fotografie bleef. Tijdens 
        mijn studie heb ik een minor gedaan in ‘Fotojournalistiek en Beeldredactie’ aan de Hogeschool 
        Utrecht. Dit vond ik ZO leuk, dat ik dacht: ‘hier wil ik iets mee gaan doen en van m'n hobby m'n werk maken’. Ik ben altijd 
        gegaan voor wat ik wil, dus zo gezegd, zo gedaan. 
      </p>
    </div>
    <p class="max-w-[1200px] text-left xs:text-center px-4 text-white mt-6 font-standard font-light sm:text-[14.5px] text-[14.5px]">
        Leuk weetje over bovenstaande quote: heel veel klanten geven aan dat mijn enthousiasme aanstekelijk werkt en omdat ik dat compliment ZO fijn vind, MOEST ik hem even benoemen. Als klanten op hun gemak en heel vrolijk zijn, straalt dat namelijk direct van de foto's en dáár ga ik voor!
      </p>
  </section>

  <describe-me></describe-me>
  <section class="flex flex-col items-center justify-center text-center py-6 sm:py-12 sm:px-2 bg-buttonColor">
    <div class="sm:flex sm:w-[1300px] text-center sm:text-left px-4 text-white sm:gap-12 py-0 font-standard font-light text-[14.5px]">
      <p class="sm:w-1/2 text-left sm:text-center px-4">
        Na het behalen van mijn diploma als leerkracht basisonderwijs, heb ik me vrijwel direct 
        ingeschreven bij de KVK onder de naam ‘Sanneloes Fotografie’. Het avontuur begon. Het opbouwen 
        van een klantenkring, ervaring opdoen, een portfolio opbouwen, fouten maken en heel veel leren. 
        Ik bleef 3 dagen in de week in het onderwijs als juf werken, maar bouwde ondertussen hard aan mijn 
        eigen bedrijf. Na 3,5 jaar ben ik naar 2 dagen in de week voor de klas gegaan. Het beginnen van een 
        daglicht studio popte op in mijn hoofd en ik besloot dit idee met veel enthousiasme en doorzettingsvermogen 
        aan te pakken. ZO GAAF!
      </p>
      <p class="sm:w-1/2 text-left sm:text-center mt-4 sm:mt-0 px-4">
        Begin 2024 besloot ik samen met mijn vriend 3 maanden te gaan reizen in Azië. Een droom van ons beiden 
        om samen dit avontuur aan te gaan en herinneringen te maken. Het was ergens stiekem ook wel een beetje nodig. 
        Rust in mijn hoofd. Het is niet niks om een eigen bedrijf te runnen, ook in loondienst te zijn, het huishouden, 
        je sociale leven en het oprichten van een nieuwe studio. Steeds weer een andere focus... Eenmaal de rust 
        gevonden op reis, kwam ik met ingevingen. Ik wil stoppen met het onderwijs, want hier ligt helaas gewoon 
        niet echt mijn passie, meer tijd voor creativiteit EN ik wil weer een nieuw bedrijf starten, namelijk Savvy 
        Styling. Ja... Als je eenmaal de ondernemersdrive te pakken hebt... LET'S GOOOOO!
      </p>
    </div>
  </section>
  
  <section>
  <div class="parallax-03 flex items-center justify-center">
    <!-- bg-[url('/assets/pictures/about-page/me-banner.webp')] -->
    <!-- Container voor foto's en tekst -->
    <div class="relative flex flex-row items-center justify-center py-4 px-4 bg-buttonColor">
      <!-- Foto's -->
      <nuxt-img
        src="/assets/pictures/about-page/me-01.webp"
        alt="Sanneloes Fotografie"
        class="object-cover h-[155px] sm:h-[350px] z-10"
      />
      <nuxt-img
        src="/assets/pictures/about-page/me-02.webp"
        alt="Sanneloes Fotografie"
        class="object-cover h-[155px] sm:h-[350px] z-10"
      />
      <nuxt-img
        src="/assets/pictures/about-page/me-03.webp"
        alt="Sanneloes Fotografie"
        class="object-cover h-[155px] sm:h-[350px] z-10"
      />

      <div class="absolute flex z-10 top-1/2 sm:top-[50%] left-[33.9%] sm:left-[33.9%] transform -translate-x-1/2 -translate-y-1/2 ">
        <!-- <div class="absolute flex z-10" style="top: 16%; left: 29.75%;"> -->
        <p class="text-black text-[22px] sm:text-[50px] font-playFair uppercase text-center">
          sa<br>nn<br>e
        </p>
      </div>
      <div class="absolute flex z-10 top-1/2 sm:top-[50%] right-[33.9%] sm:right-[33.9%] transform translate-x-1/2 -translate-y-1/2">
        <!-- <div class="absolute flex z-10" style="top: 16%; right: 29.75%;"> -->
        <p class="text-black text-[22px] sm:text-[50px] font-playFair uppercase text-center">
          lo<br>es
        </p>
      </div>
    </div>
  </div>
</section>


  <section class="flex flex-col items-center justify-center text-left sm:text-center py-0 px-2 pb-[50px] bg-white">
    <nuxt-img
      src="/assets/pictures/about-page/my-vision.webp"
      alt="Sanneloes Fotografie Logo"
      class="object-cover h-[100px] sm:h-[150px] z-10 "
    />
    <div class="sm:flex sm:w-[1300px] text-center sm:text-left text-black sm:gap-12 px-4 sm:px-0 py-0 font-standard text-[14.5px]">
      <p class="sm:w-1/2 text-left sm:text-center">
        Waarom werd ik fotograaf? Wat maakt nou dat ik zo veel om dit vak geef? Dat ik zo veel waarde hecht 
        aan foto's? Een moeilijke vraag, waar ik echt wel even over na moest denken.<br><br>

        Voor mij zit het hem niet alleen in creatief bezig zijn of in het aandacht hebben voor 
        grote dingen die gebeuren... In het vastleggen van gebeurtenissen of gewoon een mooie foto maken.....<br><br>

        Voor mij zit het hem in <strong>connecties</strong>, in schoonheid (absoluut niet het ideaalbeeld, maar
        juist om alle kleine imperfecties die mooi worden), in <strong>puurheid</strong>, in <strong>liefde</strong> tussen mensen vastleggen.... 
        In aanrakingen, emoties vangen, kleine dingen waar jij misschien niet eens aan zou denken om te fotograferen.
        Om licht, creativiteit, vrijheid en nog het meest om iets te creëren wat <strong>waardevol</strong> is voor mijn klanten.   
      </p>
      <p class="sm:w-1/2 text-left sm:text-center">
        Uiteindelijk gaat het om mooie of bijzondere <strong>herinneringen</strong> voor de klant vastleggen, 
        zodat zij daar nog jaren van kunnen genieten, maar ook zodat zij af en toe eens 
        te kunnen <strong>ontsnappen uit het hier en nu</strong> en terug te kunnen naar een waardevolle tijd 
        of een fijn moment. Elke keer als ik foto's van mezelf uit het verleden terugkijk, 
        gaat er zo veel door me heen. Euforie, herinneringen, warme gevoelens... Het is fijn 
        om soms kort terug te kunnen naar toen en nu voor even te kunnen vergeten.<br><br>

        Ook gaat het me om beelden te kunnen creëren waar iemand <strong>trots</strong> op is. ‘Kijk eens hoe mooi 
        deze foto's zijn... dit ben IK gewoon!’ Hoe tof is het als je iemand <strong>zelfvertrouwen</strong> en wat 
        liefde voor henzelf mee kan geven? IEDEREEN kan foto's van zichzelf hebben waar hij of zij 
        blij van wordt. Dat je trots kan zijn op jezelf en je blij bent met hoe je bent. Laat jezelf 
        eens door een professional vastleggen.
      </p>
    </div>
  </section>

  <section class="flex flex-col items-center justify-center text-center pt-12 pb-12 px-2 bg-[#d3c9bf]">
    <p class="uppercase font-playFair text-2xl sm:text-[50px] text-black">
      You can wake me up for
    </p>
    <p class="font-standard text-black text-sm mt-5 px-4 sm:px-0">
      Laten we meteen starten met een disclaimer: JE MAG ME NIET WAKKER MAKEN. Mijn slaap is veel te heilig. Ik slaap het liefst minstens 9 uur per nacht, dus mij niet bellen. 
    </p>
    
  </section>

  <wake-me-sf></wake-me-sf>
  
  <div class="bg-white h-[inherit] py-[1px] px-2"></div>
  <!-- [#d3c9bf] -->
  <section>
    <div class="parallax-04 flex flex-col sm:flex-row justify-center w-full sm:pt-[100px] pb-[50px] xl:py-[150px] px-0 sm:px-4 sm:pl-[100px] sm:pr-12 bg-cover  sm:bg-[center_top_85%]">
      <!-- bg-[url('/assets/pictures/about-page/banner-wake-me-up-02.webp')] -->
      <!-- <div class="flex relative items-center justify-center w-full sm:w-1/2">
        <div>
          <nuxt-img
            src="/assets/pictures/about-page/describe-me-01.webp"
            alt="Sanneloes Fotografie Logo"
            class="object-cover w-full h-auto sm:h-[550px]"
          />
        </div>
        <div class="hidden sm:flex p-1 bg-white absolute z-10 top-[50%] left-[70%] sm:top-[50%] sm:left-[70%] xl:top-[50%] xl:left-[70%] transform -translate-x-1/2 -translate-y-1/2">
          <nuxt-img
            src="/assets/pictures/about-page/describe-me-02.webp"
            alt="Sanneloes Fotografie Logo"
            class="object-cover h-[45px] sm:h-[375px] sm:w-[250px]"
          />
        </div>
      </div> -->
      <div class="px-12 py-12 sm:py-0 sm:px-0">
        <nuxt-img
          src="/assets/pictures/about-page/describe-me-03.webp"
          alt="Sanneloes Fotografie Logo"
          class="object-cover  sm:h-[600px] rounded-xl border-[2px] border-white"
        />
      </div>

      <div class="sm:w-[calc(50%)] flex flex-col items-center justify-center text-center px-4 text-white">
        <div class="flex justify-center py-4">
          <p class="uppercase font-playFair text-2xl xl:text-6xl font-bold py-4">How my sweet clients</p>
        </div>
        
        <div class="border-[1px] border-white p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto">
          <div class="uppercase font-playFair py-1 text-[15px] xl:text-[22px] flex justify-center w-1/2">
            LIEVE MEID
          </div>
          <div class="border-l-[1px] border-white py-1 uppercase font-playFair text-[15px] xl:text-[22px] flex justify-center w-1/2">
            PROFESSIONEEL
          </div>
        </div>
        <div class="border-[1px] -mt-[1px] border-white p-2 flex w-[300px] xl:w-[450px] xl:text-[22px] justify-center mx-auto uppercase font-playFair text-[15px]">
          GEEFT JE EEN VERTROUWD GEVOEL
        </div>
        <div class="border-[1px] -mt-[1px] border-white p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto">
          <div class="uppercase font-playFair py-1 text-[15px] flex justify-center w-1/2 xl:text-[22px]">
            SOCIAAL
          </div>
          <div class="border-l-[1px] border-white py-1 uppercase font-playFair text-[15px] xl:text-[22px] flex justify-center w-1/2">
            GEPASSIONEERD
          </div>
        </div>
        <div class="border-[1px] -mt-[1px] border-white p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto">
          <div class="uppercase font-playFair py-1 text-[15px] flex justify-center w-1/2 xl:text-[22px]">
            LET OP DETAILS
          </div>
          <div class="border-l-[1px] border-white py-1 uppercase font-playFair text-[15px] flex justify-center w-1/2 xl:text-[22px]">
            ENERGIEK
          </div>
        </div>
        <div class="border-[1px] -mt-[1px] border-white p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto uppercase font-playFair text-[15px] xl:text-[22px]">
          STELT JE OP JE GEMAK
        </div>
        <div class="border-[1px] -mt-[1px] border-white p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto">
          <div class="uppercase font-playFair py-1 text-[15px] flex justify-center w-1/2 xl:text-[22px]">
            ENTHOUSIAST
          </div>
          <div class="border-l-[1px] border-white py-1 uppercase font-playFair text-[15px] flex justify-center w-1/2 xl:text-[22px]">
            TOEGANKELIJK
          </div>
        </div>
        <div class="flex justify-center py-4">
          <p class="uppercase font-playFair text-2xl xl:text-6xl font-bold py-4">describe me</p>
        </div>
      </div>
      <!-- <div class="sm:w-[calc(50%)] flex flex-col items-center justify-center text-center px-4 text-white relative">
   
        <div class="flex justify-center py-4">
        <p class="uppercase font-playFair text-2xl xl:text-6xl font-bold">
            How my sweet clients
        </p>
    </div>

    <div class="absolute left-0 top-1/2 -translate-y-[30%] -translate-x-[-920px]">
        <p class="uppercase font-playFair text-xl xl:text-6xl font-bold rotate-270 [writing-mode:vertical-rl]">
            Describe me
        </p>
    </div>


     <div class="py-10">
      <div class="border border-white p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto">
        <div class="uppercase font-playFair py-1 text-[15px] xl:text-[22px] flex justify-center w-1/2">
            LIEVE MEID
        </div>
        <div class="border-l border-white py-1 uppercase font-playFair text-[15px] xl:text-[22px] flex justify-center w-1/2">
            PROFESSIONEEL
        </div>
        </div>
        <div class="border border-white -mt-px p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto uppercase font-playFair text-[15px] xl:text-[22px]">
            GEEFT JE EEN VERTROUWD GEVOEL
        </div>
        <div class="border border-white -mt-px p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto">
            <div class="uppercase font-playFair py-1 text-[15px] flex justify-center w-1/2 xl:text-[22px]">
                SOCIAAL
            </div>
            <div class="border-l border-white py-1 uppercase font-playFair text-[15px] xl:text-[22px] flex justify-center w-1/2">
                GEPASSIONEERD
            </div>
        </div>
        <div class="border border-white -mt-px p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto">
            <div class="uppercase font-playFair py-1 text-[15px] flex justify-center w-1/2 xl:text-[22px]">
                LET OP DETAILS
            </div>
            <div class="border-l border-white py-1 uppercase font-playFair text-[15px] flex justify-center w-1/2 xl:text-[22px]">
                ENERGIEK
            </div>
        </div>
        <div class="border border-white -mt-px p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto uppercase font-playFair text-[15px] xl:text-[22px]">
            STELT JE OP JE GEMAK
        </div>
        <div class="border border-white -mt-px p-2 flex w-[300px] xl:w-[450px] justify-center mx-auto">
            <div class="uppercase font-playFair py-1 text-[15px] flex justify-center w-1/2 xl:text-[22px]">
                ENTHOUSIAST
            </div>
            <div class="border-l border-white py-1 uppercase font-playFair text-[15px] flex justify-center w-1/2 xl:text-[22px]">
                TOEGANKELIJK
            </div>
        </div> -->
      <!-- </div> -->
    
<!-- </div> -->

    </div>
  </section>

  <footer-sf></footer-sf>
</template>
  
  
<script setup>
  // setup() {
</script>
<style scoped>
  .parallax-03 {
    /* The image used */
    background-image: url('/assets/pictures/about-page/me-banner.webp');

    min-height: 450px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @supports (-webkit-touch-callout: none) {
  .parallax-03 {
    background-attachment: scroll; /* Fallback voor iOS */
  }
}

.parallax-04 {
    /* The image used */
    background-image: url('/assets/pictures/about-page/banner-wake-me-up-02.webp');

    min-height: 450px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  @supports (-webkit-touch-callout: none) {
  .parallax-04 {
    background-attachment: scroll; /* Fallback voor iOS */
  }
}
</style>
  