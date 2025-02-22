 
<template>
  <section  class="flex flex-col sm:flex-row bg-[#f7f0ec] sm:bg-[#fffcf7] h-full pt-12 pb-[150px]">

    <!-- Linker kolom -->
    <div id="contact-form" class="sm:w-1/2 flex flex-col items-center py-6">
      <p class="font-playFair text-[28px] font-bold sm:hidden">
        CONTACT
      </p>
      <p class="sm:text-[15px] text-[14.5px] font-standard text-center px-4 sm:px-[80px] font-light mb-6">
        Wat leuk dat je geïnteresseerd bent in een shoot bij mij!<br><br>
        Of het nu een bruiloft, lifestyle of brandingshoot is, je bent aan het juiste adres. 
        Super leuk dat je/jullie misschien voor mijn lens wil(len) staan.<br><br> 
        Ik wil je vragen om het contactformulier zo volledig mogelijk in te vullen, zodat ik 
        een zo compleet mogelijk beeld heb van je aanvraag.<br>
        Alvast super bedankt! 
      </p>
      
      <div class="flex relative">
        <nuxt-img
          src="/assets/pictures/contact-page/contact-back.webp"
          alt="Sanneloes Fotografie Logo"
          class="object-cover w-[400px] sm:w-[400px] rounded-xl"
        />
        <nuxt-img
          src="/assets/pictures/contact-page/contact-01.webp"
          alt="Sanneloes Fotografie Logo"
          class="object-cover w-[350px] border-[3px] border-white sm:w-[325px] rounded-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <p class="font-standard font-light text-[15px] mt-4 text-center">
        Andere vragen? Mail gerust naar <a href="mailto:info@sanneloesfotografie.nl" class="hover:underline font-bold">info@sanneloesfotografie.nl</a>
      </p>
    </div>

    <!-- Rechter kolom -->
    <div class="sm:w-1/2 flex flex-col items-center">
      <p class="text-[30px] mt-8 sm:mt-0 sm:text-[50px] font-playFair">
        CONTACT FORMULIER
      </p>

      <p class="font-standard font-light text-[16px] mt-4 text-center">
        Voor veelgestelde vragen kun je naar deze pagina gaan
        <a href="/FAQS" rel="noopener noreferrer" class="underline">FAQS</a>.
      </p>

      <p class="font-standard font-light text-[16px] mt-4 text-center">
        Ga je trouwen en wil je de brochure ontvangen? Vul hier dan het 
        <a href="/contact-wedding" rel="noopener noreferrer" class="underline font-bold">
          ‘contactformulier bruiloft’
        </a> in.
      </p>

      <!-- Contact formulier -->
      <iframe
        class="w-[calc(100%-25px)] sm:w-[600px] border-[4px] border-[#b6a89f] rounded-2xl mx-auto mt-4"
        id="sn-form-lnjgg"
        src="https://app.studioninja.co/contactform/parser/0a800fc9-93e4-1c01-8194-3c2e8aff7820/0a800fc9-93e4-1c01-8194-3c50f32e02a8"
        allowfullscreen
      ></iframe>
    </div>
</section>



  

  <!-- <section class="flex items-center justify-center px-6 pb-20">
    <div class="relative grid grid-cols-1 sm:grid-cols-5 gap-24 px-24 sm:px-0 w-[85%] max-w-[1300px]">
   
      <div class="relative group">
        <img
          src="/assets/pictures/contact-page/icon_1.webp"
          alt="Tile Image 1"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">WARMTH</h2>
        </div>
      </div>

   
      <div class="relative group">
        <img
          src="/assets/pictures/contact-page/icon_2.webp"
          alt="Tile Image 1"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">TOUCH</h2>
        </div>
      </div>


      <div class="relative group">
        <img
          src="/assets/pictures/contact-page/icon_3.webp"
          alt="Tile Image 1"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">JOY</h2>
        </div>
      </div>
      
      <div class="relative group">
        <img
          src="/assets/pictures/contact-page/icon_4.webp"
          alt="Tile Image 1"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">EMOTION</h2>
        </div>
      </div>


      <div class="relative group">
        <img
          src="/assets/pictures/contact-page/icon_5.webp"
          alt="Tile Image 1"
          class="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white py-8">
          <h2 class="text-2xl font-playFair mb-2">LOOKS</h2>
        </div>
      </div>

    </div>

  </section> -->

  <footer-sf></footer-sf>
</template>


<script>
export default {
  mounted() {
    // Voeg het script dynamisch toe voor beide formulieren
    const script1 = document.createElement("script");
    script1.src =
      "https://app.studioninja.co/client-assets/form-render/assets/scripts/iframeResizer.js";
    script1.type = "text/javascript";
    script1.dataset.iframeId = "sn-form-01ysk";
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =     
      "https://app.studioninja.co/client-assets/form-render/assets/scripts/iframeResizer.js";
    script2.type = "text/javascript";
    script2.dataset.iframeId = "sn-form-lnjgg";
    document.body.appendChild(script2);
  },
  
};

</script>

<style scoped>
  @media (max-width: 640px) { /* Alleen op schermen kleiner dan 640px */
    #contact-form {
      background: linear-gradient(to bottom, #d3c9bf 60%, #f7f0ec 40%);
    }
  }
  
</style>