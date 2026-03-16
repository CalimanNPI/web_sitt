<template>
  <section class="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
    <Separator />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Con la confianza de más de
          <span class="text-azul-600">2000 clientes</span>
        </h2>
        <p class="max-w-2xl mx-auto text-gray-600">
          Empresas líderes que confían en nosotros para su transporte ejecutivo y turístico
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
        <div v-for="(client, index) in safeClients" :key="client.name"
             class="group relative" data-aos="flip-left" :data-aos-delay="index * 100">
          <div class="absolute inset-0 rounded-2xl bg-azul-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"></div>
          <div class="p-6 rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <img
              :src="client.logo"
              :alt="client.name"
              class="mx-auto max-h-16 w-auto object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
            />
            <p class="text-xs text-center text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {{ client.name }}
            </p>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <div v-for="(indicator, index) in trustIndicators" :key="index"
             class="group text-center rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" data-aos="fade-up" :data-aos-delay="500 + (index * 100)">
          <div class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-azul-50 transition-all duration-300 group-hover:bg-azul-100 group-hover:scale-110">
            <Icon :name="indicator.icon" class="h-5 w-5 text-azul-600 transition-transform duration-300 group-hover:rotate-6" />
          </div>
          <div class="text-2xl font-bold text-azul-600">{{ indicator.value }}</div>
          <div class="text-sm text-gray-500">{{ indicator.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import { sanitizeAssetUrl } from "@/utils/security";
import Icon from "./Icon.vue";
import Separator from "./Separator.vue";
export default {
  name: "StatsSection",
  components: {
    Icon,
    Separator,
  },
  data() {
    return {
      clients: [
        { name: "J&J", logo: "/icons/J_J.png" },
        { name: "Janssen", logo: "/icons/JANSSEN.png" },
        { name: "Lilly", logo: "/icons/LILLY.png" },
        { name: "Parexel", logo: "/icons/PAREXEL.png" },
        { name: "Pepsi", logo: "/icons/PEPSI.png" }
      ],
      trustIndicators: [
        { value: "2000+", label: "Clientes satisfechos", icon: "users" },
        { value: "28+", label: "Años de experiencia", icon: "clock" },
        { value: "100+", label: "Unidades en flota", icon: "car" },
        { value: "15", label: "Ciudades atendidas", icon: "map-pin" }
      ]
    };
  },
  computed: {
    safeClients() {
      return this.clients.map((client) => ({
        ...client,
        logo: sanitizeAssetUrl(client.logo, "/logo/logo_ba.png"),
      }));
    },
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