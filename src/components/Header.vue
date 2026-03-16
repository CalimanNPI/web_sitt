<template>

  <section class="relative h-screen overflow-hidden">
    <video
      src="video/video.mp4"
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 object-cover w-full h-full"
    ></video>

    <div class="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/60 to-gray-950/40"></div>
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-16 left-10 h-56 w-56 rounded-full bg-azul-500/20 blur-3xl"></div>
      <div class="absolute bottom-12 right-10 h-64 w-64 rounded-full bg-azul-300/20 blur-3xl"></div>
    </div>

    <div class="relative flex items-center justify-center h-full px-4">
      <div class="max-w-5xl mx-auto text-center">
        <!--<div class="hidden md:flex justify-center mb-6 gap-3">
          <span class="floating-badge inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">Atención 24/7</span>
          <span class="floating-badge inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm" style="animation-delay: 1s">Cobertura nacional</span>
        </div>-->
        <hr class="w-24 h-1 mx-auto mb-8 bg-azul-500" />
        <h1 class="text-4xl font-bold text-white md:text-6xl lg:text-7xl" data-aos="fade-up">
          Servicios Integrales en
          <span class="block mt-2 text-azul-500">
            Transporte Turístico y Ejecutivo
          </span>
        </h1>
        <p class="mx-auto mt-6 max-w-3xl text-base font-medium text-gray-200 md:text-lg" data-aos="fade-up" data-aos-delay="150">
          Traslados seguros, puntuales y confortables para empresas, turismo y eventos especiales.
        </p>

        <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" data-aos="fade-up" data-aos-delay="250">
          <a href="#Transporte" class="inline-flex items-center justify-center rounded-lg bg-azul-600 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-azul-700 hover:shadow-xl">
            Ver flotilla
          </a>
          <a href="#Contacto" class="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20">
            Contáctanos
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Icon from "./Icon.vue";

export default {
  name: "Header",
  mounted() {
    AOS.init({
      duration: 800,
      once: true,
    });
  },
};
</script>
