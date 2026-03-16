<template>
  <section id="Transporte" class="relative py-20 overflow-hidden bg-white">
    <!-- Decorative elements -->
    <Separator />


    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-block">
          <h2 class="text-5xl md:text-6xl font-black tracking-tight">
            <span class="relative inline-block">
              <span class="relative z-10 text-azul-600">TRANSPORTE</span>
              <div
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-azul-200 rounded-full blur-2xl opacity-50"
              ></div>
            </span>
          </h2>
          <p class="max-w-2xl mx-auto mt-6 text-xl text-gray-600 font-medium">
            Para brindar el mejor servicio contamos con vehículos de lujo que
            permiten hacer de su viaje una experiencia inolvidable.
          </p>
        </div>
      </div>

      <!-- Fleet Sections -->
      <div class="space-y-20">
        <!-- Transporte Empresarial -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          data-aos="fade-right"
        >
          <div class="order-2 lg:order-1">
            <div class="relative group">
              <div
                class="absolute -top-4 -left-4 w-24 h-24 bg-azul-100 rounded-2xl -z-10"
              ></div>
              <div
                class="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
              >
                <img
                  src="/src/assets/flotilla/autos.jpeg"
                  alt="Transporte empresarial"
                  class="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div
                class="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-lg bg-azul-100 flex items-center justify-center"
                  >
                    <Icon name="car" class="w-5 h-5 text-azul-600" />
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Capacidad</p>
                    <p class="text-lg font-bold text-gray-900">4 pasajeros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <div class="relative">
              <div
                class="absolute -top-10 -left-10 text-8xl font-black text-azul-100/30 -z-10"
              >
                01
              </div>
              <span
                class="inline-flex rounded-full bg-azul-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-azul-600"
                >Ejecutivo</span
              >
              <h3 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Transporte
                <span class="block text-azul-600">Empresarial</span>
              </h3>
              <p class="text-lg text-gray-600 leading-relaxed">
                Ideales para un traslado confortable de tu llegada al aeropuerto
                a cualquier destino. Con capacidad hasta para 4 pasajeros. Todas
                nuestras unidades ofrecen un gran espacio, comodidad y
                seguridad.
              </p>
              <div class="mt-8 flex items-center gap-4">
                <div
                  class="flex items-center gap-2 rounded-lg bg-azul-50 px-3 py-2 transition-all duration-300 hover:bg-azul-100"
                >
                  <Icon name="check-circle" class="w-5 h-5 text-azul-600" />
                  <span class="text-sm font-medium text-gray-700">WiFi</span>
                </div>
                <div
                  class="flex items-center gap-2 rounded-lg bg-azul-50 px-3 py-2 transition-all duration-300 hover:bg-azul-100"
                >
                  <Icon name="check-circle" class="w-5 h-5 text-azul-600" />
                  <span class="text-sm font-medium text-gray-700"
                    >Aire acondicionado</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SUV's Ejecutivas -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          data-aos="fade-left"
        >
          <div>
            <div class="relative">
              <div
                class="absolute -top-10 -left-10 text-8xl font-black text-azul-100/30 -z-10"
              >
                02
              </div>
              <span
                class="inline-flex rounded-full bg-azul-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-azul-600"
                >Confort</span
              >
              <h3 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                SUV's
                <span class="block text-azul-600">Ejecutivas</span>
              </h3>
              <p class="text-lg text-gray-600 leading-relaxed">
                Gracias a sus características de diseño, estas SUV's ofrecen una
                capacidad de 6-7 pasajeros. Viaja con estilo y máxima seguridad.
                Sus interiores de lujo y equipo multimedia permiten un ambiente
                de relajación que hacen de tus trayectos algo único.
              </p>
              <div class="mt-8 flex items-center gap-4">
                <div
                  class="flex items-center gap-2 rounded-lg bg-azul-50 px-3 py-2 transition-all duration-300 hover:bg-azul-100"
                >
                  <Icon name="check-circle" class="w-5 h-5 text-azul-600" />
                  <span class="text-sm font-medium text-gray-700">WiFi</span>
                </div>
                <div
                  class="flex items-center gap-2 rounded-lg bg-azul-50 px-3 py-2 transition-all duration-300 hover:bg-azul-100"
                >
                  <Icon name="check-circle" class="w-5 h-5 text-azul-600" />
                  <span class="text-sm font-medium text-gray-700"
                    >Aire acondicionado</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="relative group">
              <div
                class="absolute -top-4 -right-4 w-24 h-24 bg-azul-100 rounded-2xl -z-10"
              ></div>
              <div
                class="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
              >
                <img
                  src="/src/assets/flotilla/autos3.jpeg"
                  alt="SUV ejecutivas"
                  class="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div
                class="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-lg bg-azul-100 flex items-center justify-center"
                  >
                    <Icon name="car" class="w-5 h-5 text-azul-600" />
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Capacidad</p>
                    <p class="text-lg font-bold text-gray-900">6 - 7 pasajeros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mercedes-Benz Sprinter -->
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          data-aos="fade-right"
        >
          <div class="order-2 lg:order-1">
            <div class="relative group">
              <div
                class="absolute -top-4 -left-4 w-24 h-24 bg-azul-100 rounded-2xl -z-10"
              ></div>
              <div
                class="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
              >
                <img
                  src="/src/assets/flotilla/autos2.jpeg"
                  alt="Mercedes-Benz Sprinter"
                  class="w-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div
                class="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
              >
                <div class="flex items-center gap-3">
                  <div
                    class="w-10 h-10 rounded-lg bg-azul-100 flex items-center justify-center"
                  >
                    <Icon name="car" class="w-5 h-5 text-azul-600" />
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Capacidad</p>
                    <p class="text-lg font-bold text-gray-900">17 - 20 pasajeros</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="order-1 lg:order-2">
            <div class="relative">
              <div
                class="absolute -top-10 -left-10 text-8xl font-black text-azul-100/30 -z-10"
              >
                03
              </div>
              <span
                class="inline-flex rounded-full bg-azul-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-azul-600"
                >Grupal</span
              >
              <h3 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Mercedes-Benz
                <span class="block text-azul-600">Sprinter</span>
              </h3>
              <p class="text-lg text-gray-600 leading-relaxed">
                Ideal para el transporte de turismo o grupal, con capacidad a
                partir de 17 a 20 pasajeros. Cuentan con cómodos asientos
                ajustables y cinturones independientes, sistemas inteligentes de
                manejo, asistencia de conducción, luces de niebla, escalón
                eléctrico y monitoreo de neumáticos.
              </p>
              <div class="mt-8 flex items-center gap-4">
                <div
                  class="flex items-center gap-2 rounded-lg bg-azul-50 px-3 py-2 transition-all duration-300 hover:bg-azul-100"
                >
                  <Icon name="check-circle" class="w-5 h-5 text-azul-600" />
                  <span class="text-sm font-medium text-gray-700">WiFi</span>
                </div>
                <div
                  class="flex items-center gap-2 rounded-lg bg-azul-50 px-3 py-2 transition-all duration-300 hover:bg-azul-100"
                >
                  <Icon name="check-circle" class="w-5 h-5 text-azul-600" />
                  <span class="text-sm font-medium text-gray-700"
                    >Aire acondicionado</span
                  >
                </div>
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
  name: "FlotillaSection",
  components: {
    Icon,
    Separator,
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
