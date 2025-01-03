<script setup>
  import { reactive } from "vue";

  import { ref } from 'vue';

  // Reactieve variabele om de status van de succesmelding te volgen
  const showSuccessMessage = ref(false);

  // FAQ Items
  const faqItems = [
    { question: 'Hoe kan ik contact opnemen?', answer: 'Je kunt ons bereiken via het contactformulier op de website of via e-mail.' },
    { question: 'Hoe kan ik mezelf voorbereiden op een shoot?', answer: 'We bieden een 30-dagen retourbeleid voor de meeste producten.' },
    { question: 'Hoe zit het met de privacy verklaring?', answer: 'We bieden een 30-dagen retourbeleid voor de meeste producten.' },
    { question: 'Kan extra info krijgen voor bruiloften?', answer: 'We bieden een 30-dagen retourbeleid voor de meeste producten.' },
    { question: 'Wat voor meer vragen?', answer: 'Ja, we bieden regelmatig kortingen aan, volg ons op social media voor de laatste aanbiedingen.' },
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
  <div class="bg-[url('/assets/pictures/liggend_back-02.jpg')] bg-cover bg-center pt-[100px] px-8">
    <!-- items-center justify-center -->
    <div class="max-w-[500px] mx-auto bg-white p-10 pb-2 border-0 r">
      <!-- Header: CONTACT tekst -->
      <div class="text-center relative">
        <h1 
          class="text-3xl sm:text-[60px] md:text-5xl lg:text-[60px] font-textNav text-black absolute top-0 sm:-top-6 lg:top-0 left-0 right-0 mx-auto transform translate-y-[-165%] lg:translate-y-[-120%]">
          CONTACT
        </h1>
      </div>

      <!-- Vraagtekst bovenaan -->
      <div class="text-center mb-4">
        <p class="text-xl font-textNav text-gray-800">Enjoy your special day and I’ll make sure every beautiful moment is captured</p>
      </div>

      <!-- Formulier -->
      <form @submit.prevent="onSubmit" class="space-y-4">
        <!-- Naam -->
        <div>
          <!-- <label for="name" class="block text-sm font-medium text-gray-700">Naam + Achternaam *</label> -->
          <input
            id="name"
            name="name"
            type="text"
            v-model="form.name"
            class="w-full mt-[2px] p-2 border-2 rounded-md bg-white focus:orange-2 focus:ring-orange-500"
            placeholder="Voornaam + Achternaam *"
            required
          />
          <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
        </div>

        <!-- E-mailadres -->
        <div>
          <!-- <label for="email" class="block text-sm font-medium text-gray-700">E-mailadres *</label> -->
          <input
            id="email"
            name="email"
            type="email"
            v-model="form.email"
            placeholder="E-mailadres *"
            class="w-full mt-[2px] p-2 border-2 rounded-md bg-white focus:orange-2 focus:ring-orange-500"
            required
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <!-- Telefoon -->
        <div>
          <!-- <label for="phone" class="block text-sm font-medium text-gray-700">Telefoon</label> -->
          <input
            id="phone"
            name="phone"
            type="phone"
            v-model="form.phone"
            placeholder="Telefoonnummer"
            class="w-full mt-[2px] p-2 border-2 rounded-md bg-white focus:orange-2 focus:ring-orange-500"
          />
        </div>

        <!-- Bericht -->
        <div>
          <!-- <label for="message" class="block text-sm font-medium text-gray-700">Bericht *</label> -->
          <textarea
            id="message"
            name="message"
            rows="6"
            v-model="form.message"
            placeholder="Vertel me over je fotoshoot, bruiloft of andere wensen!"
            class="w-full mt-[2px] p-2 border-2 rounded-md bg-white focus:orange-2 focus:ring-orange-500"
            required
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        </div>

        <!-- Submit -->
        <div class="text-center">
          <button
            type="submit"
            class="bg-orange-200 text-black border-4 border-orange-200 py-3 px-6 rounded-lg w-full hover:bg-orange-400 hover:text-white hover:border-orange-400 hover:font-bold hover:translate-y-[-2px] transition-all duration-300">
            Verstuur Bericht
          </button>
        </div>
      </form>

      <div class="text-center mt-4">
        <!-- Succesbericht, wordt alleen getoond als showSuccessMessage waar is -->
        <p v-if="showSuccessMessage" class="text-gray-700 transition-opacity duration-500 opacity-100">
          Bedankt voor de inzending!<br>Ik probeer je vraag zo snel mogelijk te beantwoorden!
        </p>
      </div>
      <!-- Social Media Links -->
      <div class="flex space-x-6 itmes-center justify-center mt-4">
        <a href="https://www.instagram.com/sanneloesfotografie/" target="_blank" class="text-6xl instagram-icon">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>

  <section class="py-16 bg-naturalBeige">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Image Section -->
        <div class="flex-1">
          <nuxt-img
            src="/assets/pictures/faqs.jpg"
            alt="First Image"
            class="w-full h-[600px] object-cover"
          />
        </div>

        <!-- Right FAQ Section -->
        <div class="space-y-6">
          <h2 class="text-3xl font-textNav text-gray-800">Frequently Asked Questions</h2>

          <div v-for="(item, index) in faqItems" :key="index">
            <div @click="toggleAnswer(index)" class="flex items-center justify-between cursor-pointer p-4 bg-transparant  border-b-2 border-gray-400 hover:translate-y-[-2px]">
              <h3 class="text-lg font-medium text-gray-900">{{ item.question }}</h3>
              <span class="text-xl text-gray-600">{{ activeIndex === index ? '-' : '+' }}</span>
            </div>

            <p v-if="activeIndex === index" class="px-4 py-2 text-gray-700 bg-naturalBeige rounded-b-lg">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer-sf></footer-sf>
</template>

<style scoped>
  .instagram-icon i {
    background: linear-gradient(45deg, #F77737, #FDCB82, #9B59B6);
    background-clip: text;
    color: transparent;
}
</style>