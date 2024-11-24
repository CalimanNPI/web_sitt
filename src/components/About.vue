<template>
  <!--about uss-->
  <div id="Nosotros"
    class="font-sans about container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-20 md:px-10 lg:px-20 xl:max-w-4xl">
    <div class="border-r-4 border-azul-500 w-50">
      <p data-aos="zoom-in-up"
        class="px-8 mt-8 mb-12 text-lg font-extrabold leading-none tracking-tight uppercase text-gray-700">
        Quienes somos
      </p>
    </div>
    <h1 data-aos="zoom-in-down" class="text-4xl font-extrabold leading-none tracking-tight sm:text-6xl text-gray-700">
      Somos una empresa 100% mexicana, especializada en
      <span class="text-azul-400">servicio de transporte ejecutivo y turístico.</span>
    </h1>
  </div>

  <hr class="w-full my-8 border-gray-900" />

  <div
    class="about mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 mb-6">
    <div
      class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div data-aos="zoom-in-down" class="lg:pr-4 pl-4">
        <div class="lg:max-w-lg">
          <h1 class="mt-2 text-4xl font-extrabold leading-none tracking-tight text-azul-500">
            Nosotros
          </h1>
          <p class="mt-6 text-lg font-medium tracking-wider leading-relaxed text-gray-700">
            Con 28 años de experiencia, en los que día a día nos comprometemos
            en ofrecer una gama completa de opciones para resolver los desafíos
            de seguridad, movilidad y puntualidad de nuestros clientes:
          </p>
        </div>
      </div>
    </div>
    <div data-aos="zoom-in-down"
      class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
      <img class="w-[20rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[20rem]"
        src="/src/assets/about.jpeg" alt="" />
    </div>

    <div
      class="pl-4 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="max-w-xl lg:max-w-lg">
          <ul role="list" class="mt-8 space-y-8 text-gray-600">
            <li class="flex items-center gap-x-3" data-aos="zoom-in-down">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"
                class="mt-1 h-14 w-14 flex-none text-azul-500">
                <path fill="#1E88E5"
                  d="M224.49 197.82c-25.8-11.64-51.65-23.18-77.4-34.92-13.9-6.34-32.02-15.07-39.07-29.66 4.38.79 8.82 1.3 13.26 1.55 12.26.69 25.01-2.38 29.18-15.31 3.41-10.56-.88-22.85-10.74-28.23-10.49-5.73-24.41-3.62-32.96 4.63-7 6.75-10.2 16.72-9.65 26.36-3.68-1.19-6.84-2.41-9.08-3.44-23.99-11.06-41.64-34.78-38.98-61.99.5-5.12-7.5-5.09-8 0-2.76 28.22 14.85 54.36 39.32 67.11 5.86 3.05 12.03 5.43 18.37 7.19 3.59 11.33 12.19 20.06 21.86 26.63 13.67 9.3 29.6 15.28 44.59 22.05l55.26 24.93c4.66 2.1 8.73-4.79 4.04-6.91zM105.06 121.5c-.46-10.87 5.27-22.11 16.42-24.86 9.83-2.43 20.82 2.51 22.04 13.32 2.24 19.81-20.27 18.48-38.15 14.61-.15-1-.26-2.02-.3-3.07z">
                </path>
                <path fill="#1E88E5"
                  d="M258.06 206.7a805.18 805.18 0 01-47.48-48.18c-3.47-3.82-9.11 1.85-5.66 5.66a806.35 806.35 0 0042.69 43.65c-21.36 7.36-41.45 17.93-59.56 31.5-4.07 3.05-.09 10 4.04 6.91 19.42-14.55 41.03-25.67 64.21-32.86 2.77-.86 4.04-4.56 1.77-6.69z">
                </path>
              </svg>

              <span><strong class="text-xl font-extrabold leading-none tracking-tight text-gray-900">Autos
                  confortables.</strong>
              </span>
            </li>
            <li class="flex items-center gap-x-3" data-aos="zoom-in-down">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" class=" h-14 w-14 flex-none text-azul-500">
                <path fill="#1E88E5"
                  d="M224.49 197.82c-25.8-11.64-51.65-23.18-77.4-34.92-13.9-6.34-32.02-15.07-39.07-29.66 4.38.79 8.82 1.3 13.26 1.55 12.26.69 25.01-2.38 29.18-15.31 3.41-10.56-.88-22.85-10.74-28.23-10.49-5.73-24.41-3.62-32.96 4.63-7 6.75-10.2 16.72-9.65 26.36-3.68-1.19-6.84-2.41-9.08-3.44-23.99-11.06-41.64-34.78-38.98-61.99.5-5.12-7.5-5.09-8 0-2.76 28.22 14.85 54.36 39.32 67.11 5.86 3.05 12.03 5.43 18.37 7.19 3.59 11.33 12.19 20.06 21.86 26.63 13.67 9.3 29.6 15.28 44.59 22.05l55.26 24.93c4.66 2.1 8.73-4.79 4.04-6.91zM105.06 121.5c-.46-10.87 5.27-22.11 16.42-24.86 9.83-2.43 20.82 2.51 22.04 13.32 2.24 19.81-20.27 18.48-38.15 14.61-.15-1-.26-2.02-.3-3.07z">
                </path>
                <path fill="#1E88E5"
                  d="M258.06 206.7a805.18 805.18 0 01-47.48-48.18c-3.47-3.82-9.11 1.85-5.66 5.66a806.35 806.35 0 0042.69 43.65c-21.36 7.36-41.45 17.93-59.56 31.5-4.07 3.05-.09 10 4.04 6.91 19.42-14.55 41.03-25.67 64.21-32.86 2.77-.86 4.04-4.56 1.77-6.69z">
                </path>
              </svg>

              <span><strong class="text-xl font-extrabold leading-none tracking-tight text-gray-900">SUV’S
                  versátiles.</strong>
              </span>
            </li>
            <li class="flex items-center gap-x-3" data-aos="zoom-in-down">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" class=" h-14 w-14 flex-none text-azul-500">
                <path fill="#1E88E5"
                  d="M224.49 197.82c-25.8-11.64-51.65-23.18-77.4-34.92-13.9-6.34-32.02-15.07-39.07-29.66 4.38.79 8.82 1.3 13.26 1.55 12.26.69 25.01-2.38 29.18-15.31 3.41-10.56-.88-22.85-10.74-28.23-10.49-5.73-24.41-3.62-32.96 4.63-7 6.75-10.2 16.72-9.65 26.36-3.68-1.19-6.84-2.41-9.08-3.44-23.99-11.06-41.64-34.78-38.98-61.99.5-5.12-7.5-5.09-8 0-2.76 28.22 14.85 54.36 39.32 67.11 5.86 3.05 12.03 5.43 18.37 7.19 3.59 11.33 12.19 20.06 21.86 26.63 13.67 9.3 29.6 15.28 44.59 22.05l55.26 24.93c4.66 2.1 8.73-4.79 4.04-6.91zM105.06 121.5c-.46-10.87 5.27-22.11 16.42-24.86 9.83-2.43 20.82 2.51 22.04 13.32 2.24 19.81-20.27 18.48-38.15 14.61-.15-1-.26-2.02-.3-3.07z">
                </path>
                <path fill="#1E88E5"
                  d="M258.06 206.7a805.18 805.18 0 01-47.48-48.18c-3.47-3.82-9.11 1.85-5.66 5.66a806.35 806.35 0 0042.69 43.65c-21.36 7.36-41.45 17.93-59.56 31.5-4.07 3.05-.09 10 4.04 6.91 19.42-14.55 41.03-25.67 64.21-32.86 2.77-.86 4.04-4.56 1.77-6.69z">
                </path>
              </svg>
              <span><strong class="text-xl font-extrabold leading-none tracking-tight text-gray-900">Vanes ejecutivas
                  Mercedes-Benz.</strong>
              </span>
            </li>
          </ul>
          <p class="mt-8"></p>
          <h2 class="mt-16 text-2xl font-extrabold leading-none tracking-tight text-gray-900">
            Nuestra <span class="text-azul-500">Visión</span>
          </h2>
          <p class="mt-6 text-lg font-medium tracking-wider leading-relaxed text-gray-700" data-aos="zoom-in-down">
            Consolidarnos como empresa líder en transportación integral con
            personal capacitado y unidades en óptimas condiciones, que nos
            permita ofrecer una experiencia única en cada trayecto.
          </p>
          <p class="mt-8"></p>
          <h2 class="mt-16 text-2xl font-extrabold leading-none tracking-tight text-gray-900">
            Nuestra <span class="text-azul-500">Misión</span>
          </h2>
          <p class="mt-6 text-lg font-medium tracking-wider leading-relaxed text-gray-700" data-aos="zoom-in-down">
            Nos esmeramos en ofrecer a nuestros clientes y usuarios seguridad,
            comunicación, eficiencia, puntualidad y confort en cada traslado. Al
            mismo tiempo, generar relaciones comerciales duraderas.
          </p>
        </div>
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
    ScrollReveal().reveal(".about", { delay: 500 });
    AOS.init();
  },
};
</script>
