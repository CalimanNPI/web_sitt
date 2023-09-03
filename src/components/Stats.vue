<template>
  <div class="about  py-15 sm:py-20 stats">
    <div class="mx-auto container px-1 lg:px-2">
      <h2
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        class="text-center text-lg font-semibold leading-8 text-gray-900"
      >
        Con la confianza de los equipos más confortables del mundo
      </h2>
      <div
        class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
      >
        <img
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="col-span-2 max-h-15 w-full object-contain lg:col-span-1"
          src="/src/assets/icons/J_J.png"
          alt="Transistor"
          width="48"
          height="48"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="col-span-2 max-h-15 w-full object-contain lg:col-span-1"
          src="/src/assets/icons/JANSSEN.png"
          alt="Reform"
          width="48"
          height="48"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="col-span-2 max-h-15 w-full object-contain lg:col-span-1"
          src="/src/assets/icons/LILLY.png"
          alt="Tuple"
          width="48"
          height="48"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="col-span-2 max-h-15 w-full object-contain sm:col-start-2 lg:col-span-1"
          src="/src/assets/icons/PAREXEL.png"
          alt="SavvyCal"
          width="48"
          height="48"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="col-span-2 col-start-2 max-h-15 w-full object-contain sm:col-start-auto lg:col-span-1"
          src="/src/assets/icons/PEPSI.png"
          alt="Statamic"
          width="48"
          height="48"
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
