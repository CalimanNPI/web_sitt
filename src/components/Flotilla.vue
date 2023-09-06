<template>
  <!--flotilla-->

  <section class="bg-gray-900" id="Trasporte">
    <div
      class="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl"
    >
      <div>
        <h2
          class="text-3xl font-bold tracki text-center sm:text-5xl text-gray-200"
        >
          Trasporte
        </h2>
        <p class="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-400">
          Para brindar el mejor servicio contamos con vehículos de lujo que
          permiten hacer de su viaje una experiencia inolvidable.
        </p>
      </div>

      <div
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        class="grid lg:gap-8 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <h3 class="text-2xl font-normal tracki sm:text-3xl text-gray-200">
            Transporte
            <span class="font-bold text-azul-400"> Empresarial</span>
          </h3>
          <p class="mt-3 text-lg text-gray-400">
            Ideales para un traslado confortable de tu llegada al aeropuerto a
            cualquier destino. Con capacidad hasta para 4 pasajeros. Todas
            nuestras unidades ofrecen un gran espacio, comodidad y seguridad.
          </p>
        </div>
        <div aria-hidden="true" class="mt-10 lg:mt-0">
          <img
            src="/src/assets/autos.jpeg"
            alt=""
            class="mx-auto rounded-lg shadow-lg bg-azul-500"
          />
        </div>
      </div>

      <div
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div class="lg:col-start-2">
            <h3 class="text-2xl font-normal tracki sm:text-3xl text-gray-200">
              Transporte
              <span class="font-bold text-azul-400"> Suv's Ejecutivas</span>
            </h3>
            <p class="mt-3 text-lg text-gray-400">
              Gracias a sus características de diseño, estas SUV´s ofrecen una
              capacidad de 6-7 pasajeros. Viaja con estilo y máxima seguridad.
              Sus interiores de lujo y equipo multimedia permite un ambiente de
              relajación que hacen de tus trayectos algo único.
            </p>
          </div>
          <div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
            <img
              src="/src/assets/suburban.jpg"
              alt=""
              class="mx-auto rounded-lg shadow-lg bg-azul-500"
            />
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        class="grid lg:gap-8 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <h3 class="text-2xl font-normal tracki sm:text-3xl text-gray-200">
            Transporte

            <span class="font-bold text-azul-400">
              Mercedes-Benz Sprinter
            </span>
          </h3>
          <p class="mt-3 text-lg text-gray-400">
            Ideal para el transporte de turismo o grupal, con capacidad hasta de
            17 pasajeros. Cuentan con cómodos asientos ajustables y cinturones
            independientes, sistemas inteligentes de manejo, sistemas de
            asistencia de conducción, luces de niebla, escalón eléctrico y
            sistema de presión de monitoreo de neumáticos.
          </p>
        </div>
        <div aria-hidden="true" class="mt-10 lg:mt-0">
          <img
            src="/src/assets/sprinter3.jpg"
            alt=""
            class="mx-auto rounded-lg shadow-lg bg-azul-500"
          />
        </div>
      </div>
    </div>
  </section>
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
