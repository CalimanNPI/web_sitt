<template>
  <section id="Sistema" class="relative py-24 overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
         :style="{ backgroundImage: `url('img/sistema-background.jpg')` }">
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-900/80"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-azul-300 backdrop-blur-sm">Solución integral</span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
          Sistema integral de
          <span class="block text-azul-400">Transporte</span>
        </h2>
        <p class="max-w-2xl mx-auto text-lg text-gray-300">
          Soluciones completas para todas tus necesidades de movilidad
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Column 1 -->
        <div class="space-y-6" data-aos="fade-right" data-aos-delay="200">
          <div v-for="(item, index) in column1" :key="index"
               class="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-lg bg-azul-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-azul-500">
                <Icon name="check-circle" class="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-6" />
              </div>
            </div>
            <p class="text-gray-200 font-medium">{{ item }}</p>
          </div>
        </div>

        <!-- Column 2 -->
        <div class="space-y-6" data-aos="fade-up" data-aos-delay="300">
          <div v-for="(item, index) in column2" :key="index"
               class="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-lg bg-azul-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-azul-500">
                <Icon name="check-circle" class="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-6" />
              </div>
            </div>
            <p class="text-gray-200 font-medium">{{ item }}</p>
          </div>
        </div>

        <!-- Column 3 -->
        <div class="space-y-6" data-aos="fade-left" data-aos-delay="400">
          <div v-for="(item, index) in column3" :key="index"
               class="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-lg bg-azul-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-azul-500">
                <Icon name="check-circle" class="w-6 h-6 text-white transition-transform duration-300 group-hover:rotate-6" />
              </div>
            </div>
            <p class="text-gray-200 font-medium">{{ item }}</p>
          </div>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
        <div v-for="(stat, index) in statistics" :key="index"
             class="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl"
             data-aos="zoom-in" :data-aos-delay="500 + (index * 100)">
          <div class="text-3xl font-black text-azul-400 mb-2">{{ stat.value }}</div>
          <div class="text-sm text-gray-300">{{ stat.label }}</div>
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
  name: "SistemSection",
  components: {
    Icon,
  },
  data() {
    return {
      column1: [
        "Asesoramiento en la planeación de agenda de viajes y de trabajo",
        "Organización en congresos y convenciones",
        "Las mejores opciones y alternativas de rutas según sus horarios de viaje"
      ],
      column2: [
        "Asistencia personalizada en aeropuerto, hotel, etc.",
        "Capacidad en grupos y convenciones",
        "Reservación y programación inmediata"
      ],
      column3: [
        "Monitoreo GPS en tiempo real",
        "Facturación electrónica",
        "Seguimiento 24/7 de tus viajes"
      ],
      statistics: [
        { value: "24/7", label: "Disponibilidad" },
        { value: "100%", label: "Seguimiento GPS" },
        { value: "15min", label: "Tiempo de respuesta" },
        { value: "10+", label: "Años de experiencia" }
      ]
    };
  },
  mounted() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }
};
</script>