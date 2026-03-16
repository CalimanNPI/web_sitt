<template>
  <footer class="relative bg-gradient-to-b from-gray-900 to-gray-950 text-white overflow-hidden">
    <Separator tone="dark" />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Brand Column -->
        <div class="lg:col-span-4">
          <img 
            src="logo/logo_ba.png" 
            alt="SITT Ejecutivo" 
            class="h-16 mb-6"
          />
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Especialistas en transporte turístico y ejecutivo con más de 28 años de experiencia, ofreciendo seguridad, puntualidad y confort en cada viaje.
          </p>
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.href" 
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-azul-600 hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              :aria-label="social.name"
            >
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>

          <a href="#Contacto" class="mt-8 inline-flex items-center rounded-lg bg-azul-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-azul-700 hover:shadow-xl">
            Solicitar cotización
            <Icon name="arrow-right" class="ml-2 h-4 w-4" />
          </a>
        </div>

        <!-- Quick Links -->
        <div class="lg:col-span-2">
          <h3 class="text-lg font-bold mb-4">Enlaces rápidos</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.text">
              <a 
                :href="link.href" 
                class="inline-flex items-center text-gray-400 hover:text-azul-400 transition-all duration-300 text-sm hover:translate-x-1"
              >
                <Icon name="arrow-right" class="mr-2 h-3.5 w-3.5 opacity-70" />
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="lg:col-span-3">
          <h3 class="text-lg font-bold mb-4">Nuestros servicios</h3>
          <ul class="space-y-3">
            <li v-for="service in services" :key="service" class="text-gray-400 text-sm transition-colors duration-300 hover:text-gray-200">
              {{ service }}
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="lg:col-span-3">
          <h3 class="text-lg font-bold mb-4">Contacto</h3>
          <ul class="space-y-4">
            <li class="group flex items-start gap-3 text-gray-400 text-sm transition-colors duration-300 hover:text-gray-200">
              <Icon name="map-pin" class="w-5 h-5 text-azul-500 flex-shrink-0 mt-0.5" />
              <span>Av. Principal 123, Ciudad de México</span>
            </li>
            <li class="group flex items-center gap-3 text-gray-400 text-sm transition-colors duration-300 hover:text-gray-200">
              <Icon name="phone" class="w-5 h-5 text-azul-500" />
              <span>55 9152 8674</span>
            </li>
            <li class="group flex items-center gap-3 text-gray-400 text-sm transition-colors duration-300 hover:text-gray-200">
              <Icon name="mail" class="w-5 h-5 text-azul-500" />
              <span>contacto@sittejecutivo.com</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-sm text-gray-500">
            &copy; {{ new Date().getFullYear() }} SITT Ejecutivo. Todos los derechos reservados.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-sm text-gray-500 hover:text-azul-400 transition-colors">
              Términos y condiciones
            </a>
            <a href="#" class="text-sm text-gray-500 hover:text-azul-400 transition-colors">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Icon from "./Icon.vue";
import Separator from "./Separator.vue";

export default {
  name: "FooterSection",
  components: {
    Icon,
    Separator,
  },
  data() {
    return {
      socialLinks: [
        { 
          name: "Facebook", 
          href: "#", 
          icon: "facebook" 
        },
        { 
          name: "Instagram", 
          href: "#", 
          icon: "instagram" 
        },
        { 
          name: "Twitter", 
          href: "#", 
          icon: "twitter" 
        },
        { 
          name: "LinkedIn", 
          href: "#", 
          icon: "linkedin" 
        }
      ],
      quickLinks: [
        { text: "Inicio", href: "#" },
        { text: "Transporte", href: "#Transporte" },
        { text: "Ejecutivo", href: "#Ejecutivo" },
        { text: "Tours", href: "#Tours" },
        { text: "Nosotros", href: "#Nosotros" },
        { text: "Equipo", href: "#Equipo" }
      ],
      services: [
        "Transporte ejecutivo",
        "Traslados aeropuerto",
        "Tours guiados",
        "Servicio por horas",
        "Eventos y convenciones",
        "Rentas ejecutivas"
      ]
    };
  }
};
</script>
