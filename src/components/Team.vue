<template>
  <section id="Equipo" class="relative py-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full" 
           :style="{ backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')' }"></div>
    </div>
    <div class="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-azul-500/10 blur-3xl"></div>
    <div class="pointer-events-none absolute -bottom-16 -left-20 h-72 w-72 rounded-full bg-azul-300/10 blur-3xl"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-block">
          <div class="flex items-center justify-center gap-4 mb-4">
            <div class="w-12 h-0.5 bg-azul-500"></div>
            <span class="text-sm font-bold tracking-widest uppercase text-azul-400">Nuestro equipo</span>
            <div class="w-12 h-0.5 bg-azul-500"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-white mb-4">
            Bienvenido a nuestro talentoso
            <span class="block text-azul-400">equipo de profesionales</span>
          </h2>
          <p class="max-w-2xl mx-auto text-lg text-gray-300">
            Personal comprometido con un servicio de transporte seguro, puntual y de alta calidad.
          </p>
        </div>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(member, index) in teamMembers" :key="member.name"
             class="group relative" data-aos="fade-up" :data-aos-delay="200 + (index * 100)">
          <div class="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Info Overlay -->
            <div class="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div class="text-center">
                <h3 class="text-xl font-bold text-white mb-1">{{ member.name }}</h3>
                <p class="text-sm text-azul-400 mb-3">{{ member.position }}</p>
                <p class="text-sm text-gray-300 mb-4">{{ member.description }}</p>
                <div class="flex items-center justify-center space-x-3">
                  <a v-for="social in member.social" :key="social.name"
                     :href="social.href"
                     class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-azul-600 transition-colors duration-300"
                     :aria-label="social.name">
                    <Icon :name="social.icon" class="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Mini Info (visible always) -->
            <div class="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 group-hover:opacity-0 transition-opacity duration-300">
              <h3 class="text-lg font-bold text-white">{{ member.name }}</h3>
              <p class="text-sm text-azul-400">{{ member.position }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Join Us CTA -->
      <div class="text-center mt-16" data-aos="fade-up" data-aos-delay="600">
        <p class="text-gray-300 mb-4">¿Te gustaría formar parte de nuestro equipo?</p>
        <a href="#" class="group inline-flex items-center px-8 py-3 bg-azul-600 text-white font-semibold rounded-lg hover:bg-azul-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          Ver oportunidades
          <Icon name="arrow-right" class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Icon from "./Icon.vue";

export default {
  name: "TeamSection",
  components: {
    Icon,
  },
  data() {
    return {
      teamMembers: [
        {
          name: "Oliver Aguilera",
          position: "Gerente de Operaciones",
          description: "Coordina rutas y logística para asegurar experiencias de viaje confiables.",
          image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260",
          social: [
            { name: "Twitter", href: "#", icon: "twitter" },
            { name: "Facebook", href: "#", icon: "facebook" }
          ]
        },
        {
          name: "Marta Clermont",
          position: "Líder de Atención al Cliente",
          description: "Supervisa la calidad de servicio y la atención personalizada en cada traslado.",
          image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
          social: [
            { name: "Twitter", href: "#", icon: "twitter" },
            { name: "Facebook", href: "#", icon: "facebook" }
          ]
        },
        {
          name: "Anthony Geek",
          position: "Coordinador Tecnológico",
          description: "Optimiza procesos de operación y comunicación para un servicio más eficiente.",
          image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
          social: [
            { name: "Twitter", href: "#", icon: "twitter" },
            { name: "Facebook", href: "#", icon: "facebook" }
          ]
        },
        {
          name: "Alice Melbourne",
          position: "Relaciones Humanas",
          description: "Fortalece la atención interna y la cultura de servicio orientada al cliente.",
          image: "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
          social: [
            { name: "Twitter", href: "#", icon: "twitter" },
            { name: "Facebook", href: "#", icon: "facebook" }
          ]
        }
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
