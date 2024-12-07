<template>
  <!--flotilla-->

  <section class="bg-gray-900 font-sans" id="Trasporte">
    <div class="container max-w-xl p-6 py-12  space-y-24 lg:px-0 lg:max-w-full">
      <div data-aos="zoom-in-up">
        <h2 class="text-5xl font-extrabold leading-none tracking-tight text-center text-gray-200">
          TRANSPORTE
        </h2>
        <p class="max-w-3xl mx-auto mt-4 text-center text-lg font-medium tracking-wider leading-relaxed text-gray-200">
          Para brindar el mejor servicio contamos con vehículos de lujo que
          permiten hacer de su viaje una experiencia inolvidable.
        </p>
      </div>

      <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center p-28 ">
        <div data-aos="fade-right">
          <h3 class="text-4xl font-extrabold leading-none tracking-tight text-gray-200">
            Transporte
            <span class="font-bold text-azul-400"> Empresarial</span>
          </h3>
          <p class="mt-3 text-lg font-medium tracking-wider leading-relaxed text-gray-200 p-20">
            Ideales para un traslado confortable de tu llegada al aeropuerto a
            cualquier destino. Con capacidad hasta para 4 pasajeros. Todas
            nuestras unidades ofrecen un gran espacio, comodidad y seguridad.
          </p>
        </div>
        <div aria-hidden="true" class="mt-10 lg:mt-0" data-aos="fade-left">
          <img src="/src/assets/flotilla/EJECUTIVAS4.jfif" alt="" class="mx-auto rounded-lg shadow-lg bg-azul-500" />
        </div>
      </div>

      <div class="p-28 bg-gray-50 w-full">
        <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div class="lg:col-start-2" data-aos="fade-right">
            <h3 class="text-4xl font-extrabold leading-none tracking-tight text-gray-900">
              Suv's <span class="font-bold text-azul-400"> Ejecutivas</span>
            </h3>
            <p class="mt-3 text-lg font-medium tracking-wider leading-relaxed text-gray-900 p-20">
              Gracias a sus características de diseño, estas SUV´s ofrecen una
              capacidad de 6-7 pasajeros. Viaja con estilo y máxima seguridad.
              Sus interiores de lujo y equipo multimedia permite un ambiente de
              relajación que hacen de tus trayectos algo único.
            </p>
          </div>
          <div class="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-aos="fade-left">
            <img src="/src/assets/flotilla/EMPRESARIAL2.jfif" alt="" class="mx-auto rounded-lg shadow-lg bg-azul-500" />
          </div>
        </div>
      </div>

      <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center p-28">
        <div data-aos="fade-right">
          <h3 class="text-4xl font-extrabold leading-none tracking-tight text-gray-200">
            Mercedes-Benz<span class="font-bold text-azul-400"> Sprinter </span>
          </h3>
          <p class="mt-3 text-lg font-medium tracking-wider leading-relaxed text-gray-200 p-20">
            Ideal para el transporte de turismo o grupal, con capacidad a partir
            de 17 a 20 pasajeros. Cuentan con cómodos asientos ajustables y
            cinturones independientes, sistemas inteligentes de manejo, sistemas
            de asistencia de conducción, luces de niebla, escalón eléctrico y
            sistema de presión de monitoreo de neumáticos.
          </p>
        </div>
        <div aria-hidden="true" class="mt-10 lg:mt-0" data-aos="fade-left">
          <img src="/src/assets/flotilla/SPRINTER3.jfif" alt="" class="mx-auto rounded-lg shadow-lg bg-azul-500" />
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
