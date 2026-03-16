<template>
  <!-- About Section -->
  <section
    id="Nosotros"
    class="relative py-20 overflow-hidden bg-white sm:py-28"
  >
    <Separator />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-block">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-0.5 bg-azul-500"></div>
            <span
              class="text-sm font-bold tracking-widest uppercase text-azul-600"
              >Sobre nosotros</span
            >
            <div class="w-12 h-0.5 bg-azul-500"></div>
          </div>
          <h2
            class="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            Somos una empresa
            <span class="block text-azul-600">100% mexicana</span>
          </h2>
          <p class="max-w-2xl mx-auto mt-6 text-xl font-medium text-gray-600">
            Especializada en servicio de transporte turístico y ejecutivo con 28
            años de experiencia
          </p>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <!-- Left Column - Stats & Values -->
        <div class="space-y-10" data-aos="fade-right" data-aos-delay="200">
          <!-- Experience Badge -->
          <div
            class="inline-flex items-center gap-4 px-6 py-3 bg-azul-50 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-azul-100/70"
          >
            <span class="text-4xl font-black text-azul-600">28</span>
            <span class="text-lg font-semibold text-gray-700"
              >años de experiencia</span
            >
          </div>

          <!-- Values List -->
          <div class="space-y-8">
            <h3 class="text-2xl font-bold text-gray-900">Nuestros valores</h3>

            <div class="grid gap-6 sm:grid-cols-2">
              <div
                v-for="value in values"
                :key="value.title"
                class="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-azul-50 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center w-12 h-12 rounded-xl bg-azul-100 transition-all duration-300 group-hover:bg-azul-200 group-hover:scale-110"
                  >
                    <Icon :name="value.icon" class="w-6 h-6 text-azul-600" />
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-bold text-gray-900">
                    {{ value.title }}
                  </h4>
                  <p class="mt-1 text-sm text-gray-600">
                    {{ value.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Mission & Vision Cards -->
          <div class="grid gap-6 pt-6 sm:grid-cols-2">
            <div
              class="group p-6 bg-gradient-to-br from-azul-50 to-white rounded-2xl border border-azul-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div
                class="w-12 h-12 mb-4 rounded-xl bg-azul-600 flex items-center justify-center"
              >
                <Icon name="eye" class="w-6 h-6 text-white" />
              </div>
              <h4 class="mb-2 text-xl font-bold text-gray-900">
                Nuestra Visión
              </h4>
              <p class="text-gray-600 leading-relaxed">
                Consolidarnos como empresa líder en transportación integral con
                personal capacitado y unidades en óptimas condiciones.
              </p>
            </div>

            <div
              class="group p-6 bg-gradient-to-br from-azul-50 to-white rounded-2xl border border-azul-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div
                class="w-12 h-12 mb-4 rounded-xl bg-azul-600 flex items-center justify-center"
              >
                <Icon name="bookmark" class="w-6 h-6 text-white" />
              </div>
              <h4 class="mb-2 text-xl font-bold text-gray-900">
                Nuestra Misión
              </h4>
              <p class="text-gray-600 leading-relaxed">
                Ofrecer seguridad, comunicación, eficiencia, puntualidad y
                confort en cada traslado, generando relaciones comerciales
                duraderas.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column - Image & Fleet -->
        <div class="space-y-8" data-aos="fade-left" data-aos-delay="200">
          <!-- Main Image with decorative elements -->
          <div class="relative group">
            <div
              class="absolute -top-4 -left-4 w-24 h-24 bg-azul-200 rounded-2xl -z-10"
            ></div>
            <div
              class="absolute -bottom-4 -right-4 w-32 h-32 bg-azul-300 rounded-2xl -z-10"
            ></div>

            <div
              class="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gray-900/10"
            >
              <img
                class="w-full transition-transform duration-700 group-hover:scale-105"
                src="/src/assets/about.jpeg"
                alt="Equipo de SITT Ejecutivo"
              />
            </div>

            <!-- Floating Experience Card -->
            <div
              class="floating-card absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-[200px] border border-gray-100 transition-all duration-300 hover:shadow-2xl"
            >
              <div class="flex items-center gap-3">
                <div
                  class="w-10 h-10 rounded-lg bg-azul-100 flex items-center justify-center"
                >
                  <Icon name="check-circle" class="w-5 h-5 text-azul-600" />
                </div>
                <div>
                  <p class="text-xs text-gray-500">Más de</p>
                  <p class="text-xl font-black text-gray-900">10,000+</p>
                  <p class="text-xs text-gray-500">viajes realizados</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Fleet Features -->
          <div class="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Nuestra Flota</h3>

            <div class="grid gap-4">
              <div
                v-for="(vehicle, index) in fleet"
                :key="vehicle.name"
                class="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                :data-aos-delay="600 + index * 100"
              >
                <div
                  class="w-12 h-12 rounded-lg bg-azul-50 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-azul-100 group-hover:scale-105"
                >
                  <Icon
                    :name="vehicle.icon"
                    class="w-6 h-6 text-azul-600 transition-transform duration-300 group-hover:rotate-6"
                  />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">{{ vehicle.name }}</h4>
                  <p class="text-sm text-gray-600">{{ vehicle.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics Bar -->
      <div
        class="grid grid-cols-2 gap-4 mt-20 sm:grid-cols-4"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div
          v-for="stat in statistics"
          :key="stat.label"
          class="rounded-xl py-4 transition-all duration-300 hover:bg-azul-50 hover:-translate-y-1"
        >
          <div class="text-3xl font-black text-azul-600">{{ stat.value }}</div>
          <div class="mt-1 text-sm font-medium text-gray-600">
            {{ stat.label }}
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
  name: "AboutSection",
  components: {
    Icon,
    Separator,
  },
  data() {
    return {
      values: [
        {
          title: "Seguridad",
          description: "Compromiso total con tu bienestar en cada viaje",
          icon: "shield-icon",
        },
        {
          title: "Puntualidad",
          description: "Respetamos tu tiempo con llegadas precisas",
          icon: "clock-icon",
        },
        {
          title: "Confort",
          description: "Unidades de lujo para tu comodidad",
          icon: "car-icon",
        },
        {
          title: "Experiencia",
          description: "28 años de servicio de excelencia",
          icon: "star-icon",
        },
      ],
      fleet: [
        {
          name: "Autos Confortables",
          description: "Sedanes de lujo para viajes ejecutivos",
          icon: "car",
        },
        {
          name: "SUVs Versátiles",
          description: "Espacio y comodidad para grupos pequeños",
          icon: "users",
        },
        {
          name: "Vans Ejecutivas",
          description: "Mercedes-Benz para viajes grupales",
          icon: "check-circle",
        },
      ],
      statistics: [
        { value: "28+", label: "Años de experiencia" },
        { value: "10k+", label: "Viajes realizados" },
        { value: "100%", label: "Clientes satisfechos" },
        { value: "24/7", label: "Disponibilidad" },
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

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.floating-card {
  animation: float 3s ease-in-out infinite;
}
</style>
