<script setup>
  import { reactive } from "vue";

  import { ref } from 'vue';

  // Reactieve variabele om de status van de succesmelding te volgen
  const showSuccessMessage = ref(false);

  // FAQ Items
  const faqItems = [
    { question: 'Hoe lang duurt een fotoshoot?', answer: 'Een lifestylefotoshoot duurt 45-60 minuten. Een newbornshoot duurt 60-90 min. zodat we iets meer tijd en rust kunnen nemen voor de shoot en ons kunnen aanpassen op de baby.' },
    { question: 'Waar zal de fotoshoot plaatsvinden?', answer: 'De shootlocatie is geheel naar eigen keuze. Dit kan buiten in de natuur zijn, bij jullie thuis, in het stadscentrum, op de boerderij, in een af te huren locatie of fotostudio, in mijn studio: Daylight Studio La Luz. Waar jullie maar willen! Let wel op: de reiskosten zijn inbegrepen tot 10 km rondom Casteren. Voor het gebruikmaken van Daylight Studio La Luz wordt een kleine vergoeding gerekend. Reiskosten zijn daar al bij inbegrepen.' },
    { question: 'Hoe bereid ik me voor op de fotoshoot?', answer: 'Bepaal waar jullie de shoot willen doen. Kies een locatie wat bij jullie past en/of wat jullie mooi vinden. Jullie krijgen van mij een styling guide die jullie zal helpen bij het kiezen en afstemmen van de kleding. Als je gaat shooten met kinderen, adviseert Sanneloes Fotografie om niet te veel druk te leggen op de kinderen. Hoe minder ze bezig zijn met wat ze wel en niet mogen en moeten doen, hoe meer ze (waarschijnlijk) zichzelf zullen zijn en hoe fijner de shoot zal verlopen. Vertel bijvoorbeeld dat jullie ergens fijn samen gaan spelen en dat er ook iemand bij zal zijn die wat fotootjes zal maken.' },
    { question: "Kan ik ook foto's bijbestellen?", answer: "Natuurlijk kan dat. Bij het afleveren van de galerij, kunnen jullie je favorieten selecteren. In deze mail vind je ook informatie met voordeel pakketprijzen en prijzen voor enkele losse extra foto's. Daarnaast is er een mogelijkheid om wanddecoratie, fotoafdrukken of albums te bestellen." },
    { question: 'Hoe kan ik meer informatie krijgen voor bruiloften?', answer: 'Wat leuk dat jullie gaan trouwen! Je kan via de contactpagina het contactformulier voor bruiloften invullen. Probeer deze zo compleet mogelijk in te vullen. Sanneloes Fotografie zal dan z.s.m. contact met jullie opnemen.' },
    { question: "Hoe/wanneer kan ik de foto's van mijn shoot verwachten?", answer: "Na de shoot zal Sanneloes Fotografie een selectie maken van de gemaakte foto's. Deze foto's zal zij met liefde voor jullie bewerken. Deze ruime online galerij wordt met jullie gedeeld, zodat jullie je favorieten kunnen aangeven. Het levertermijn van reguliere fotoreportages is zo'n 3 weken. Na de selectie zullen jullie de foto's zonder watermerk, in hoge kwaliteit toegestuurd krijgen om te downloaden."},
    { question: "Wat als ik de foto's van mijn fotoshoot sneller nodig heb dan het levertermijn?", answer: "Je kan dan een spoedbestelling aanvragen. Dit kost eenmalig +€50 incl. BTW en dan zal je je foto's binnen een week ontvangen."},
    { question: "Hoe/wanneer kan ik de foto's van mijn bruiloft verwachten?", answer: "Na de bruiloft zal Sanneloes Fotografie de selectie maken van jullie trouwfoto's. Eerst zal gestart worden met de preview. Dit is een ruime galerij met de eerste beelden van jullie mooie dag. Deze bewerkte beelden worden via een online galerij binnen 5 werkdagen met jullie gedeeld. De rest van de foto's ontvang je binnen 10 weken op stick. Ook ontvang je een klein fine art albumpje met een aantal mooie foto's van jullie droomdag."},
    { question: 'Hoe werkt het met betalen?', answer: "Bij een reguliere shoot of een kleine brandingshoot wordt in één keer vóór de shootdag betaalt. Dit zal via een factuur gaan. Als je extra foto's wilt bijbestellen, ontvang ja ná de shoot nog een aanvullende factuur. Bij een bruiloft of grote bedrijfsreportage wordt in 2 (of 3) termijnen betaalt. De eerste betaling is een aanbetaling en de rest van het bedrag wordt vóór de fotografiedag betaald. Wordt er voor 3 termijnen (met uitzondering) gekozen, zal het derde moment na de fotografiedag zijn, maar vóór het leveren van de beelden"},
    { question: 'Wat is de levertijd van een fotoalbum?', answer: 'De levertijd van een fotoalbum is 6-8 weken na het bestellen van het album. Je ontvangt een mailtje/berichtje van Sanneloes Fotografie zodra de bestelling geplaatst is én zodra de bestelling klaar ligt.'},
    { question: 'Wat als het slecht weer is op het moment van onze fotoshoot?', answer: 'Helaas zal bij regen de fotoshoot op een buitenlocatie moeten worden verzet. Dit kan zijn dat we gaan schuiven met tijden en als dit niet mogelijk is, gaan we een andere datum plannen. Bij bewolking kan de fotoshoot gewoon doorgaan. Is er flinke kou voorspeld? Dan kan de shoot in principe gewoon doorgaan. Zorg dat je jezelf en eventueel de kinderen GOED aankleedt. Denk daarbij aan laagjes kleding, thermokleding of een fotogenieke jas/jack. Bij twijfel, stuur gerust even een appje voor advies. Je kan ook eventueel een leuk kleedje/dekentje meenemen om over jullie heen te doen en een leuke muts/sjaal.' },
    { question: 'Hoe kan ik de boeking voor mijn shoot annuleren?', answer: 'Stuur mij een mailtje als je de boeking wilt annuleren. Tot 30 dagen voor de shoot kan dit gratis. Hierna zal 50% van het te betalen bedrag gerekend worden, omdat de fotograaf ruimte heeft bewaard in haar agenda. Het verplaatsen van de shoot door onvoorziene omstandigheden kan gratis.' },
    { question: 'Kan ik bij jou ook een cadeaubon kopen?', answer: "Dat kan zeker. Je bestelt bij mij een TWV cadeaubon. Je bepaalt dus zelf het bedrag wat erop mag komen. Dat kan het volledige shootbedrag zijn, of een bedrag naar keuze. De bon is een jaar geldig. Ik pak het leuk voor je in en je kan de bon bij mij thuis op komen halen, zodat jij iemand hier blij mee kan verrassen! Het enige wat jij door hoeft te geven is ‘voor wie’, ‘van wie’ en het bedrag."},
  ];

  // State for tracking the active FAQ item
  const activeIndex = ref(null);

  // Function to toggle answer visibility
  const toggleAnswer = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
  };

  const mail = useMail();

  // Formulierdata
  const form = reactive({
    name: "",
    email: "",
    message: "",
    phone: "", // Voeg telefoon toe als je dat wilt gebruiken
  });

  // Validatiefouten
  const errors = reactive({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  // Validatie & Formulierverwerking
  const validateForm = () => {
    errors.name = form.name ? "" : "Naam is verplicht.";
    errors.email = form.email.includes("@") ? "" : "Geef een geldig e-mailadres op.";
    errors.message = form.message ? "" : "Bericht is verplicht.";

    // Validatie van telefoonnummer (optioneel)
    errors.phone = form.phone ? "" : "";

    // Controleer of er fouten zijn
    return !errors.name && !errors.email && !errors.message;
  };

  // Functie om e-mail te verzenden
  const sendEmail = async () => {
    try {
      const response = await mail.send({
        from: 'shop.nm.nickmichiels@gamil.com', // Gebruik een no-reply adres als afzender
        replyTo: form.email, // Het e-mailadres van de bezoeker
        subject: 'Contactformulier van je website',
        text: `
          Naam: ${form.name}
          E-mail: ${form.email}
          Telefoon: ${form.phone}
          Bericht: ${form.message}`,
      });
      console.log('E-mail succesvol verzonden:', response);
      // alert("Bericht succesvol verzonden!");
      // Hier kun je form resetten na succesvol verzenden
      form.name = "";
      form.email = "";
      form.message = "";
      form.phone = "";
    } catch (error) {
      console.error('Fout bij het verzenden van e-mail:', error);
      // alert("Er is een fout opgetreden, probeer het later opnieuw.");
    }
};

// Functie die wordt aangeroepen bij form submit
const onSubmit = () => {
  if (validateForm()) {
    console.log("Formulier succesvol verzonden:", form);
    sendEmail(); // Verzend de e-mail als de validatie is geslaagd
    // Stel showSuccessMessage in op true wanneer het formulier succesvol is verzonden
    showSuccessMessage.value = true;

    // Verberg de succesmelding na 5 seconden
    setTimeout(() => {
      showSuccessMessage.value = false;
    }, 5000);
  } else {
    console.log("Formulier bevat fouten.");
  }
};
</script>

<template>
  <section class="contact-form flex items-center justify-center bg-naturalBeige py-6">

    <!-- Tweede formulier -->
    <div class="contact-form w-full max-w-xl">
      <iframe
        class="w-full h-[1153px] border-0"
        id="sn-form-lnjgg"
        src="https://app.studioninja.co/contactform/parser/0a800fc9-93e4-1c01-8194-3c2e8aff7820/0a800fc9-93e4-1c01-8194-3c50f32e02a8"
        allowfullscreen
      ></iframe>
    </div>
  </section>
  <section class="py-16 bg-naturalBeige">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Image Section -->
        <div class="flex-1">
          <nuxt-img
            src="/assets/pictures/faqs.jpg"
            alt="First Image"
            class="w-full object-cover"
          />
        </div>

        <!-- Right FAQ Section -->
        <div class="space-y-0">
          <h2 class="flex itemns-center justify-center text-3xl font-playFair text-gray-800 mb-2">Frequently Asked Questions</h2>

          <div v-for="(item, index) in faqItems" :key="index">
            <div @click="toggleAnswer(index)" class="flex items-center justify-between cursor-pointer p-2 bg-transparant  border-b border-lightBeige hover:translate-y-[-2px]">
              <h3 class="text-sm font-standard font-medium text-gray-900">{{ item.question }}</h3>
              <span class="text-xl text-gray-600">{{ activeIndex === index ? '-' : '+' }}</span>
            </div>

            <p v-if="activeIndex === index" class="px-4 py-2 text-buttonColor font-standard text-sm bg-naturalBeige rounded-b-lg">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

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
  .instagram-icon i {
    background: linear-gradient(45deg, #F77737, #FDCB82, #9B59B6);
    background-clip: text;
    color: transparent;
}
</style>