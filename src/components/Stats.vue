<template>
  <div class="about py-15 sm:py-20 stats">
    <div class="mx-auto container px-1 lg:px-2">
      <div class="font-sans mb-8 text-center text-4xl font-extrabold leading-none tracking-tight md:pl-2">Con la confianza de más de
        <span class="text-azul-500 font-bold">2000</span> clientes
      </div>
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img data-aos="flip-left" class="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          src="/src/assets/icons/J_J.png" />
        <img data-aos="flip-left" class="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          src="/src/assets/icons/JANSSEN.png" />
        <img data-aos="flip-left" class="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          src="/src/assets/icons/LILLY.png" />
        <img data-aos="flip-left" class="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          src="/src/assets/icons/PAREXEL.png" />
        <img data-aos="flip-left" class="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
          src="/src/assets/icons/PEPSI.png" />
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
