<template>
  <div class="flex flex-col items-center justify-start px-6 py-4">
    <!-- Titel -->
    <h2 class="text-2xl font-playFair font-light tracking-wide text-center text-gray-500 mt-12">
      "REVIEWS"
    </h2>
    <div class="flex items-center justify-center bg-white py-12 gap-12 grid grid-cols-1 sm:grid-cols-5">
      <!-- Container voor afbeelding en tekst -->
      <div class="group w-[225px] h-[365px] flex flex-col bg-white items-center border border-1 border-black rounded-lg">
        
        <!-- Afbeelding (wordt verborgen bij hover) -->
        <div class="group-hover:hidden pl-4 pr-4 pt-4">
          <nuxt-img
            placeholder
            src="/assets/pictures/sam&inge.jpg"
            alt="Sanneloes"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Naam (wordt verborgen bij hover) -->
        <p class="group-hover:hidden font-playFair font-light tracking-widest text-sm py-1">Sam en Inge</p>
        
        <!-- Scheidingslijn (wordt verborgen bij hover) -->
        <div class="group-hover:hidden border-1 border-b border-black w-[60%]"></div>
        
        <!-- Datum (wordt verborgen bij hover) -->
        <p class="group-hover:hidden font-light text-xs py-1">13/Jul/24</p>
        
        <!-- Review tekst (wordt zichtbaar bij hover) -->
        <div class="group-hover:flex hidden text-left px-2 py-1 text-xs">
          <p>
            &quot;Hoe zoek je nou dé juiste fotograaf voor je bruiloft? Nou: boek Sanneloes! Zij is diegene die je er bij wilt hebben op je dag: vrolijk, 
            energiek, enthousiast en gepassioneerd. Een daggast met een camera in haar handen! De foto’s overtroffen al onze verwachtingen! Na een 
            paar dagen al de méga preview en wat later alle foto’s. Ze zijn prachtig en hebben alles zo vastgelegd dat we de dag telkens opnieuw 
            kunnen beleven én momenten konden beleven waar we zelf niet bij waren geweest. Het contact met Sanneloes is heel goed, ze reageert snel 
            en is mega betrokken. Sanneloes, je bent echt een topper!&quot;
          </p>
        </div>
      </div>

      <!-- Container voor afbeelding en tekst -->
      <div class="group w-[225px] h-[365px] flex flex-col bg-white items-center border border-1 border-black rounded-lg">
        
        <!-- Afbeelding (wordt verborgen bij hover) -->
        <div class="group-hover:hidden pl-4 pr-4 pt-4">
          <nuxt-img
            placeholder
            src="/assets/pictures/nicky&ward.jpg"
            alt="Sanneloes"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Naam (wordt verborgen bij hover) -->
        <p class="group-hover:hidden font-playFair font-light tracking-widest text-sm py-1">Nicky en Ward</p>
        
        <!-- Scheidingslijn (wordt verborgen bij hover) -->
        <div class="group-hover:hidden border-1 border-b border-black w-[60%]"></div>
        
        <!-- Datum (wordt verborgen bij hover) -->
        <p class="group-hover:hidden font-light text-xs py-1">24/Aug/24</p>
        
        <!-- Review tekst (wordt zichtbaar bij hover) -->
        <div class="group-hover:flex hidden text-left px-2 py-1 text-xs">
          <p>
            &quot;Wij zijn ontzettend blij met de prachtige foto's die Sanneloes voor ons heeft gemaakt tijdens onze bruiloft. 
            Een herinnering voor het leven. Zo'n lieve meid, die vanaf moment één ons een vertrouwd gevoel gaf en ons liet shinen.
            Met oog voor detail, enthousiasme en passie voor haar vak is zij de beste fotograaf die wij kennen.<br><br> 
            Wij zijn Sanneloes dankbaar voor deze onvergetelijke herinnering aan onze dag.<br><br> Liefs Ward & Nicky&quot;
          </p>
        </div>
      </div>

      <!-- Container voor afbeelding en tekst -->
      <div class="group w-[225px] h-[365px] flex flex-col bg-white items-center border border-1 border-black rounded-lg">
        
        <!-- Afbeelding (wordt verborgen bij hover) -->
        <div class="group-hover:hidden pl-4 pr-4 pt-4">
          <nuxt-img
            placeholder
            src="/assets/pictures/brit&lotte.jpg"
            alt="Sanneloes"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Naam (wordt verborgen bij hover) -->
        <p class="group-hover:hidden font-playFair font-light tracking-widest text-sm py-1">Brit en Lotte</p>
        
        <!-- Scheidingslijn (wordt verborgen bij hover) -->
        <div class="group-hover:hidden border-1 border-b border-black w-[60%]"></div>
        
        <!-- Datum (wordt verborgen bij hover) -->
        <p class="group-hover:hidden font-light text-xs py-1">12/Okt/24</p>
        
        <!-- Review tekst (wordt zichtbaar bij hover) -->
        <div class="group-hover:flex hidden text-left px-2 py-1 text-xs">
          <p>
            &quot;We zijn zó blij met het resultaat! Vanaf het eerste contact voelde het alsof ze precies begreep wat we wilden. 
            Op de dag zelf mengde ze zich perfect tussen de gasten; het voelde alsof ze er gewoon bij hoorde. 
            Hierdoor heeft ze de meest spontane en pure momenten vastgelegd. Haar oog voor detail, creativiteit en
            professionaliteit zijn echt uitzonderlijk. De foto's brengen ons direct terug naar die bijzondere dag, 
            met al de emoties en liefde die we voelden. We kunnen Sanneloes niet genoeg bedanken en raden haar van harte aan aan iedereen die op zoek is naar 
            een fotograaf met passie en talent.<br><br> Veel liefs, B&L&quot;
          </p>
        </div>
      </div>

      <!-- Container voor afbeelding en tekst -->
      <div class="group w-[225px] h-[365px] flex flex-col bg-white items-center border border-1 border-black rounded-lg">
        
        <!-- Afbeelding (wordt verborgen bij hover) -->
        <div class="group-hover:hidden pl-4 pr-4 pt-4">
          <nuxt-img
            placeholder
            src="/assets/pictures/luuk&mandy.jpg"
            alt="Sanneloes"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Naam (wordt verborgen bij hover) -->
        <p class="group-hover:hidden font-playFair font-light tracking-widest text-sm py-1">Luuk en Mandy</p>
        
        <!-- Scheidingslijn (wordt verborgen bij hover) -->
        <div class="group-hover:hidden border-1 border-b border-black w-[60%]"></div>
        
        <!-- Datum (wordt verborgen bij hover) -->
        <p class="group-hover:hidden font-light text-xs py-1">5/Okt/24</p>
        
        <!-- Review tekst (wordt zichtbaar bij hover) -->
        <div class="group-hover:flex hidden text-left px-2 py-1 text-xs">
          <p>
            &quot;Mijn man en ik hebben Sanneloes als fotograaf gekozen voor onze bruiloft op 5 oktober 2024. 
            Wat heeft ze het geweldig gedaan! Sanneloes is heel sociaal en toegankelijk, waardoor er totaal geen ongemakkelijke momenten waren. 
            Ze heeft echt geweldig mooie foto’s gemaakt. De previewfoto’s waren al prachtig en het krijgen van alle foto’s was ook heel mooi. 
            De kracht van Sanneloes is volgens ons het maken van spontane foto’s. 
            Dus geen ongemakkelijke en statische foto’s. Sanneloes, nogmaals heel erg bedankt!&quot;
          </p>
        </div>
      </div>

      <!-- Container voor afbeelding en tekst -->
      <div class="group w-[225px] h-[365px] flex flex-col bg-white items-center border border-1 border-black rounded-lg">
        
        <!-- Afbeelding (wordt verborgen bij hover) -->
        <div class="group-hover:hidden pl-4 pr-4 pt-4">
          <nuxt-img
            placeholder
            src="/assets/pictures/rick&marlou.jpg"
            alt="Sanneloes"
            class="w-full h-full object-cover"
          />
        </div>
        
        <!-- Naam (wordt verborgen bij hover) -->
        <p class="group-hover:hidden font-playFair font-light tracking-widest text-sm py-1">Rick en Marlou</p>
        
        <!-- Scheidingslijn (wordt verborgen bij hover) -->
        <div class="group-hover:hidden border-1 border-b border-black w-[60%]"></div>
        
        <!-- Datum (wordt verborgen bij hover) -->
        <p class="group-hover:hidden font-light text-xs py-1">24/Mei/24</p>
        
        <!-- Review tekst (wordt zichtbaar bij hover) -->
        <div class="group-hover:flex hidden text-left px-2 py-1 text-xs">
          <p>
            &quot;Wat een fijne meid om erbij te hebben, door haar gezelligheid en de rust die ze uitstraalt ;). De foto’s die we hebben ontvangen zijn PRACHTIG!!
              Ookal hadden wij een regenachtige dag, onze dag was perfect! En hier had Sanneloes een groot aandeel in.. 
              Ze was heel creatief met de regen en daardoor zijn de foto’s super mooi en origineel geworden! Sterker nog, 
              de foto’s met paraplu zijn zelfs onze favoriet 😍. Het was dan ook echt een feestje om de ‘ruime’ preview 
              te ontvangen tijdens onze honeymoon. En de rest van de foto’s waren ook snel binnen :) Inmiddels is onze bruiloft alweer 2,5 maand geleden 
              maar dankzij de foto’s blijven we mega nagenieten! Wij raden iedereen een ‘Sanneloes’ aan op de mooiste dag van je leven!!&quot;
          </p>
        </div>
      </div>
    </div>
  </div>
    

    
  
</template>
