<template>
  <div class="about stats mb-20 bg-gray-50/50 py-16">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="font-sans mb-8 text-center text-3xl font-extrabold leading-tight tracking-tight text-gray-800 sm:text-4xl">
        Con la confianza de más de
        <span class="font-bold text-azul-500">2000</span> clientes
      </div>
      <div
        class="mx-auto mt-10 grid max-w-5xl grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5"
      >
        <img
          data-aos="flip-left"
          class="mx-auto max-h-24 w-full object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          src="/src/assets/icons/J_J.png"
          alt="Cliente J&J"
        />
        <img
          data-aos="flip-left"
          class="mx-auto max-h-24 w-full object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          src="/src/assets/icons/JANSSEN.png"
          alt="Cliente Janssen"
        />
        <img
          data-aos="flip-left"
          class="mx-auto max-h-24 w-full object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          src="/src/assets/icons/LILLY.png"
          alt="Cliente Lilly"
        />
        <img
          data-aos="flip-left"
          class="mx-auto max-h-24 w-full object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          src="/src/assets/icons/PAREXEL.png"
          alt="Cliente Parexel"
        />
        <img
          data-aos="flip-left"
          class="mx-auto max-h-24 w-full object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          src="/src/assets/icons/PEPSI.png"
          alt="Cliente Pepsi"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
export default {
  mounted() {
    ScrollReveal().reveal(".stats", { delay: 500 });
    AOS.init();
  },
};
</script>
