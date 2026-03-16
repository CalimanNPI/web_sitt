<template>
  <section id="Ejecutivo" class="relative py-20 overflow-hidden bg-white">
    <!-- Background Pattern -->
    <Separator />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Servicio Ejecutivo -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
        <div data-aos="fade-right">
          <div class="relative">
            <div
              class="absolute -top-10 -left-10 text-8xl font-black text-azul-100/30 -z-10"
            >
              01
            </div>
            <span
              class="inline-flex items-center px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full text-azul-600 bg-azul-50"
              >Servicio premium</span
            >
            <h2 class="text-5xl md:text-6xl font-black mb-6">
              <span class="text-gray-900">Servicio</span>
              <span class="block text-azul-600">Ejecutivo</span>
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-8">
              Comprometidos en ofrecer una gama completa de opciones para
              resolver los desafíos de seguridad, movilidad y puntualidad de
              nuestros clientes.
            </p>

            <div class="mb-6">
              <h3
                class="text-sm font-bold uppercase tracking-wider text-azul-600 mb-4"
              >
                Características
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="(feature, index) in executiveFeatures"
                  :key="index"
                  class="group flex items-center gap-3 p-3 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-azul-50 hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    class="w-10 h-10 rounded-lg bg-azul-100 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-azul-200 group-hover:scale-105"
                  >
                    <Icon
                      :name="feature.icon"
                      class="w-6 h-6 text-azul-600 transition-transform duration-300 group-hover:rotate-6"
                    />
                  </div>
                  <span class="text-sm font-medium text-gray-700">{{
                    feature.text
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative group" data-aos="fade-left">
          <div
            class="absolute -top-4 -right-4 w-32 h-32 bg-azul-200 rounded-2xl -z-10"
          ></div>
          <div
            class="absolute -bottom-4 -left-4 w-32 h-32 bg-azul-300 rounded-2xl -z-10"
          ></div>

          <div
            class="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
          >
            <img
              src="img/img_service.jpeg"
              alt="Servicio ejecutivo"
              class="w-full transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div
            class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-12 h-12 rounded-lg bg-azul-100 flex items-center justify-center"
              >
                <Icon name="check-circle" class="w-6 h-6 text-azul-600" />
              </div>
              <div>
                <p class="text-xs text-gray-500">Disponibilidad</p>
                <p class="text-sm font-bold text-gray-900">24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Servicio Turístico -->
      <div
        id="Tours"
        class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div class="order-2 lg:order-1" data-aos="fade-right">
          <div class="grid grid-cols-2 gap-4">
            <div class="col-span-2 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="img/tour1.jpeg"
                alt="Tour 1"
                class="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div class="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="img/tour2.jpg"
                alt="Tour 2"
                class="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div class="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="img/tour3.jpg"
                alt="Tour 3"
                class="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2" data-aos="fade-left">
          <div class="relative">
            <div
              class="absolute -top-10 -left-10 text-8xl font-black text-azul-100/30 -z-10"
            >
              02
            </div>
            <h2 class="text-5xl md:text-6xl font-black mb-6">
              <span class="text-gray-900">Servicio</span>
              <span class="block text-azul-600">Turístico</span>
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed mb-8">
              Descubre mundos nuevos y crea recuerdos inolvidables en cada
              viaje. Con nosotros, tu próxima aventura está a un clic de
              distancia.
            </p>

            <div class="space-y-6">
              <div
                v-for="(service, index) in tourServices"
                :key="index"
                class="p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-azul-50 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 class="font-bold text-gray-900 mb-2">
                  {{ service.title }}
                </h3>
                <p class="text-sm text-gray-600">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import Icon from "./Icon.vue";
import Separator from "./Separator.vue";

export default {
  name: "ServiceSection",
  components: {
    Icon,
    Separator,
  },
  data() {
    return {
      executiveFeatures: [
        { text: "Meet & greet Transfer", icon: "users" },
        { text: "Drop off", icon: "arrow-down" },
        { text: "Door to door", icon: "home" },
        { text: "Traslados foráneos", icon: "route" },
        { text: "Servicio por horas", icon: "clock" },
        { text: "Servicio a disposición", icon: "briefcase" },
      ],
      tourServices: [
        {
          title: "Tours guiados",
          description:
            "Explora bellos museos, zonas arqueológicas, calles, colonias y sus maravillosas ciudades con grandes historias por descubrir.",
        },
        {
          title: "Turismo (cultural, ecológico, religioso, extremo y aventura)",
          description:
            "Atrévete a conocer sus costumbres ancestrales, historia, su exquisita gastronomía.",
        },
        {
          title: "Guías turísticos (inglés, francés, italiano, alemán)",
          description:
            "Todos nuestros Guías de Turistas están acreditados por la Secretaría de Turismo de México.",
        },
      ],
    };
  },
  mounted() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  },
};
</script>
