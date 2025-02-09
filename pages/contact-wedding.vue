<template>

    <section class="bg-[#fffcf7] py-6">
        <iframe
        
        
         class="w-[600px] border-[4px] border-[#b6a89f] rounded-2xl mx-auto "
          id="sn-form-01ysk"
          src="https://app.studioninja.co/contactform/parser/0a800fc9-93e4-1c01-8194-3c2e8aff7820/0a800fc9-93e4-1c01-8194-3c2e8b237822"
          allowfullscreen
        ></iframe>
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