<script>
import ScrollReveal from "scrollreveal";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
export default {
  mounted() {
    ScrollReveal().reveal(".team", { delay: 500 });
    AOS.init();
  },
};
</script>

<template>
  <!--team-->
  <div id="Equipo" class="bg-gradient-to-b from-gray-900 to-gray-800">
    <div
      class="team mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20"
    >
      <div class="mb-10 max-w-xl md:mx-auto md:mb-12 sm:text-center lg:max-w-2xl">
        <h2
          data-aos="zoom-out-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="font-sans text-3xl font-extrabold leading-tight tracking-tight text-gray-50 sm:text-4xl md:mx-auto md:max-w-xl"
        >
          <span class="relative inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-10 -ml-12 text-gray-100 lg:w-32 lg:-ml-20 lg:-mt-12 sm:block"
            >
              <path
                fill="#1E88E5"
                d="M269.49 113.03c-17.8 0-27.2-8.65-34.06-14.96-5.68-5.23-7.94-7.04-13.74-7.04s-8.06 1.81-13.74 7.04c-6.86 6.31-16.26 14.96-34.06 14.96s-27.2-8.65-34.06-14.96c-5.68-5.23-7.94-7.04-13.74-7.04s-8.06 1.81-13.74 7.04c-6.86 6.32-16.25 14.96-34.06 14.96s-27.2-8.65-34.06-14.96c-5.68-5.23-7.94-7.04-13.74-7.04v-30c17.8 0 27.2 8.65 34.06 14.96 5.68 5.23 7.94 7.04 13.74 7.04s8.06-1.81 13.74-7.04c6.86-6.32 16.25-14.96 34.06-14.96s27.2 8.65 34.06 14.96c5.68 5.23 7.94 7.04 13.74 7.04s8.06-1.81 13.74-7.04c6.86-6.32 16.26-14.96 34.06-14.96s27.2 8.65 34.06 14.96c5.68 5.23 7.94 7.04 13.74 7.04v30z"
              ></path>
              <path
                fill="#1E88E5"
                d="M269.49 176c-17.8 0-27.2-8.65-34.06-14.96-5.68-5.23-7.94-7.04-13.74-7.04s-8.06 1.81-13.74 7.04c-6.86 6.31-16.26 14.96-34.06 14.96s-27.2-8.65-34.06-14.96c-5.68-5.23-7.94-7.04-13.74-7.04s-8.06 1.81-13.74 7.04C105.49 167.36 96.1 176 78.29 176s-27.2-8.65-34.06-14.96c-5.68-5.23-7.94-7.04-13.74-7.04v-30c17.8 0 27.2 8.65 34.06 14.96 5.68 5.23 7.94 7.04 13.74 7.04s8.06-1.81 13.74-7.04c6.86-6.32 16.25-14.96 34.06-14.96s27.2 8.65 34.06 14.96c5.68 5.23 7.94 7.04 13.74 7.04s8.06-1.81 13.74-7.04c6.86-6.32 16.26-14.96 34.06-14.96s27.2 8.65 34.06 14.96c5.68 5.23 7.94 7.04 13.74 7.04v30z"
              ></path>
              <path
                fill="#1E88E5"
                d="M269.49 238.97c-17.8 0-27.2-8.65-34.06-14.96-5.68-5.23-7.94-7.04-13.74-7.04s-8.06 1.81-13.74 7.04c-6.86 6.31-16.26 14.96-34.06 14.96s-27.2-8.65-34.06-14.96c-5.68-5.23-7.94-7.04-13.74-7.04s-8.06 1.81-13.74 7.04c-6.86 6.32-16.25 14.96-34.06 14.96s-27.2-8.65-34.06-14.96c-5.68-5.23-7.94-7.04-13.74-7.04v-30c17.8 0 27.2 8.65 34.06 14.96 5.68 5.23 7.94 7.04 13.74 7.04s8.06-1.81 13.74-7.04c6.86-6.32 16.25-14.96 34.06-14.96s27.2 8.65 34.06 14.96c5.68 5.23 7.94 7.04 13.74 7.04s8.06-1.81 13.74-7.04c6.86-6.32 16.26-14.96 34.06-14.96s27.2 8.65 34.06 14.96c5.68 5.23 7.94 7.04 13.74 7.04v30z"
              ></path>
            </svg>

            <span class="relative">Bienvenido</span>
          </span>
          a nuestro talentoso equipo de profesionales.
        </h2>
        <p class="text-base text-gray-300 md:text-lg">
          Personal comprometido con un servicio de transporte seguro, puntual y de alta calidad.
        </p>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div
            class="group relative overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 transition duration-300 transform lg:hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              class="h-56 w-full object-cover md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Oliver Aguilera"
            />
            <div
              class="absolute inset-0 flex flex-col justify-center bg-gray-950/80 px-5 py-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <p class="mb-1 text-lg font-bold text-gray-100">Oliver Aguilera</p>
              <p class="mb-4 text-xs text-gray-100">Gerente de Operaciones</p>
              <p class="mb-4 text-xs tracking-wide text-gray-300">
                Coordina rutas y logística para asegurar experiencias de viaje confiables.
              </p>
              <div class="flex items-center justify-center space-x-3">
                <a
                  href="/"
                  aria-label="Twitter Oliver Aguilera"
                  class="text-white transition-colors duration-300 hover:text-azul-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="Facebook Oliver Aguilera"
                  class="text-white transition-colors duration-300 hover:text-azul-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="group relative overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 transition duration-300 transform lg:hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              class="h-56 w-full object-cover md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Marta Clermont"
            />
            <div
              class="absolute inset-0 flex flex-col justify-center bg-gray-950/80 px-5 py-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <p class="mb-1 text-lg font-bold text-gray-100">Marta Clermont</p>
              <p class="mb-4 text-xs text-gray-100">Líder de Atención al Cliente</p>
              <p class="mb-4 text-xs tracking-wide text-gray-300">
                Supervisa la calidad de servicio y la atención personalizada en cada traslado.
              </p>
              <div class="flex items-center justify-center space-x-3">
                <a
                  href="/"
                  aria-label="Twitter Marta Clermont"
                  class="text-white transition-colors duration-300 hover:text-azul-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="Facebook Marta Clermont"
                  class="text-white transition-colors duration-300 hover:text-azul-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="group relative overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 transition duration-300 transform lg:hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              class="h-56 w-full object-cover md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Anthony Geek"
            />
            <div
              class="absolute inset-0 flex flex-col justify-center bg-gray-950/80 px-5 py-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <p class="mb-1 text-lg font-bold text-gray-100">Anthony Geek</p>
              <p class="mb-4 text-xs text-gray-100">Coordinador Tecnológico</p>
              <p class="mb-4 text-xs tracking-wide text-gray-300">
                Optimiza procesos de operación y comunicación para un servicio más eficiente.
              </p>
              <div class="flex items-center justify-center space-x-3">
                <a
                  href="/"
                  aria-label="Twitter Anthony Geek"
                  class="text-white transition-colors duration-300 hover:text-azul-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="Facebook Anthony Geek"
                  class="text-white transition-colors duration-300 hover:text-azul-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="group relative overflow-hidden rounded-xl shadow-xl ring-1 ring-white/10 transition duration-300 transform lg:hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              class="h-56 w-full object-cover md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Alice Melbourne"
            />
            <div
              class="absolute inset-0 flex flex-col justify-center bg-gray-950/80 px-5 py-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <p class="mb-1 text-lg font-bold text-gray-100">Alice Melbourne</p>
              <p class="mb-4 text-xs text-gray-100">Relaciones Humanas</p>
              <p class="mb-4 text-xs tracking-wide text-gray-300">
                Fortalece la atención interna y la cultura de servicio orientada al cliente.
              </p>
              <div class="flex items-center justify-center space-x-3">
                <a
                  href="/"
                  aria-label="Twitter Alice Melbourne"
                  class="text-white transition-colors duration-300 hover:text-azul-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="/"
                  aria-label="Facebook Alice Melbourne"
                  class="text-white transition-colors duration-300 hover:text-azul-400"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                    <path
                      d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
