<template>
  <!--flotilla-->
  <div class="py-6 sm:py-8 lg:py-12 flotilla" id="Trasporte">
    <div class="mx-auto max-w-screen-1xl px-4 md:px-8">
      <!-- text - start -->
      <div
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        class="mb-10 md:mb-16"
      >
        <h2
          class="mb-4 text-center text-2xl font-bold text-azul-500 md:mb-6 lg:text-3xl"
        >
          Flotilla
        </h2>

        <p class="mx-auto max-w-screen-md text-center text-gray-800 md:text-lg">
          Para brindar el mejor servicio contamos con vehículos de lujo que
          permiten hacer de su viaje una experiencia inolvidable.
        </p>
      </div>
      <!-- text - end -->

      <div
        class="grid gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8"
      >
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="group relative block bg-gray-900"
        >
          <img
            alt="Developer"
            src="/src/assets/empresarial.jpg"
            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div class="relative p-4 sm:p-6 lg:p-8">
            <p
              class="text-sm font-medium uppercase tracking-widest text-azul-500"
            >
              Transporte
            </p>

            <p class="text-xl font-bold text-gray-200 sm:text-2xl">
              Empresarial
            </p>

            <div class="mt-32 sm:mt-48 lg:mt-64">
              <div
                class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p class="text-sm text-gray-200">
                  Ideales para un traslado confortable de tu llegada al
                  aeropuerto a cualquier destino. Con capacidad hasta para 4
                  pasajeros. Todas nuestras unidades ofrecen un gran espacio,
                  comodidad y seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="group relative block bg-gray-900"
        >
          <img
            alt="Developer"
            src="/src/assets/ejecutivo.jpg"
            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div class="relative p-4 sm:p-6 lg:p-8">
            <p
              class="text-sm font-medium uppercase tracking-widest text-azul-500"
            >
              Transporte
            </p>

            <p class="text-xl font-bold text-gray-200 sm:text-2xl">
              Suv's Ejecutivas
            </p>

            <div class="mt-32 sm:mt-48 lg:mt-64">
              <div
                class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p class="text-sm text-gray-200">
                  Gracias a sus características de diseño, estas SUV´s ofrecen
                  una capacidad de 6-7 pasajeros. Viaja con estilo y máxima
                  seguridad. Sus interiores de lujo y equipo multimedia permite
                  un ambiente de relajación que hacen de tus trayectos algo
                  único.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="500"
          class="group relative block bg-gray-900"
        >
          <img
            alt="Developer"
            src="/src/assets/sprinter.jpg"
            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div class="relative p-4 sm:p-6 lg:p-8">
            <p
              class="text-sm font-medium uppercase tracking-widest text-azul-500"
            >
              Transporte
            </p>

            <p class="text-xl font-bold text-gray-200 sm:text-2xl">
              Mercedes-Benz Sprinter
            </p>

            <div class="mt-32 sm:mt-48 lg:mt-64">
              <div
                class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p class="text-sm text-gray-200">
                  Ideal para el transporte de turismo o grupal, con capacidad
                  hasta de 17 pasajeros. Cuentan con cómodos asientos ajustables
                  y cinturones independientes, sistemas inteligentes de manejo,
                  sistemas de asistencia de conducción, luces de niebla, escalón
                  eléctrico y sistema de presión de monitoreo de neumáticos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!--<div  class="group relative block bg-black">
          <img
            alt="Developer"
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div class="relative p-4 sm:p-6 lg:p-8">
            <p
              class="text-sm font-medium uppercase tracking-widest text-pink-500"
            >
              Transporte
            </p>

            <p class="text-xl font-bold text-white sm:text-2xl">
              Mercedes Benz Multego
            </p>

            <div class="mt-32 sm:mt-48 lg:mt-64">
              <div
                class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
              >
                <p class="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </div>-->
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
    ScrollReveal().reveal(".flotilla", { delay: 500 });
    AOS.init();
  },
};
</script>
