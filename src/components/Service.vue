<script>
import ScrollReveal from "scrollreveal";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
export default {
  mounted() {
    ScrollReveal().reveal(".services", { delay: 500 });
    AOS.init();
  },
};
</script>

<template>
  <div id="Ejecutivo"
    class="relative font-sans px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
      <svg viewBox="0 0 88 88" class="w-full max-w-screen-xl text-gray-200">
        <circle fill="currentColor" cx="44" cy="44" r="15.5"></circle>
        <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="44"></circle>
        <circle fill-opacity="0.2" fill="currentColor" cx="44" cy="44" r="37.5"></circle>
        <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="29.5"></circle>
        <circle fill-opacity="0.3" fill="currentColor" cx="44" cy="44" r="22.5"></circle>
      </svg>
    </div>
    <div class="relative grid gap-5 row-gap-10 lg:grid-cols-2">
      <div data-aos="zoom-in-down" class="flex flex-col justify-center">
        <div class="max-w-xl mb-6">
          <h2 class="max-w-lg mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 ">
            Servicio
            <span class="relative px-1">
              <div class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-azul-400"></div>
              <span class="relative inline-block">Ejecutivo</span>
            </span>
          </h2>
          <p class="text-lg font-medium tracking-wider leading-relaxed text-gray-700">
            Comprometidos en ofrecer una gama completa de opciones para resolver
            los desafíos de seguridad, movilidad y puntualidad de nuestros
            clientes. <br><br> Contando con los siguientes servicios:
          </p>
        </div>
        <p class="mb-4 text-lg font-extrabold tracking-wider leading-relaxed text-gray-700 uppercase">
          Características
        </p>
        <div class="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 text-base font-extrabold tracking-wider leading-relaxed text-gray-700 uppercase">
          <ul class="space-y-3 ">
            <li class="flex items-center ">
              <span class="mr-1">
                <img class="w-10 h-10" src="https://img.icons8.com/?size=100&id=rGzjKLN0kn3O&format=png&color=1e88e5"
                  alt="wallmount-camera" />
              </span>
              Meet & greet Transfer.
            </li>
            <li class="flex items-center">
              <span class="mr-1">
                <img class="w-10 h-10" src="https://img.icons8.com/?size=100&id=ZX1aN99PDj4E&format=png&color=1e88e5"
                  alt="wallmount-camera" />
              </span>
              Drop off.
            </li>
            <li class="flex items-center">
              <span class="mr-1">
                <img class="w-10 h-10" src="https://img.icons8.com/?size=100&id=ampvNvsTTwqT&format=png&color=1e88e5"
                  alt="wallmount-camera" />
              </span>
              Door to door.
            </li>
          </ul>
          <ul class="space-y-3">
            <li class="flex items-center">
              <span class="mr-1">
                <img class="w-10 h-10" src="https://img.icons8.com/?size=100&id=8_YULh6oHPbc&format=png&color=1e88e5"
                  alt="wallmount-camera" />
              </span>
              Traslados foráneos.
            </li>
            <li class="flex items-center">
              <span class="mr-1">
                <img class="w-10 h-10" src="https://img.icons8.com/?size=100&id=fZkUxrxLApKy&format=png&color=1e88e5"
                  alt="wallmount-camera" />
              </span>
              Servicio por horas.
            </li>
            <li class="flex items-center">
              <span class="mr-1">
                <img class="w-10 h-10" src="https://img.icons8.com/?size=100&id=67447&format=png&color=1e88e5"
                  alt="wallmount-camera" />
              </span>
              Servicio a disposición.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img data-aos="zoom-in-down" class="object-contain w-full rounded cursor-pointer"
          src="/src/assets/flotilla/2.jfif" alt="" />
      </div>
    </div>
  </div>

  <!--tour -->
  <div id="Tours"
    class="services font-sans px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div data-aos="zoom-in-down" class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

      <h2 class="max-w-lg mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"
            class="absolute top-2 left-0 z-0 hidden w-32 -mt-20 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-20 sm:block">
            <path fill="#111827" d="M19.38 16.87H179.17V176.66H19.38z"></path>
            <path fill="#1E88E5" d="M114.44 115.5H233.79V234.85H114.44z"></path>
            <path fill="#a5cff5" d="M187.8 184.18H279.79V276.17H187.8z"></path>
          </svg>
          <span class="relative"> Servicio </span> </span>Turístico.
      </h2>
      <p class="text-lg font-medium tracking-wider leading-relaxed text-gray-700 z-20">
        Descubre mundos nuevos y crea recuerdos inolvidables en cada viaje. Con nosotros, tu próxima aventura está a un
        clic de distancia.
      </p>
    </div>
    <div class="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
      <div class="grid grid-cols-2 gap-5">
        <img data-aos="zoom-in-down"
          class="object-cover w-full h-56 col-span-2 rounded shadow-lg transition duration-200 group-hover:scale-110"
          src="/src/assets/tour1.jpeg" alt="" />
        <img data-aos="zoom-out-right"
          class="object-cover w-full h-48 rounded shadow-lg transition duration-200 group-hover:scale-110"
          src="/src/assets/tour2.jpg" alt="" />
        <img data-aos="zoom-out-left"
          class="object-cover w-full h-48 rounded shadow-lg transition duration-200 group-hover:scale-110"
          src="/src/assets/tour3.jpg" alt="" />
      </div>
      <div class="flex flex-col justify-center">
        <div data-aos="zoom-in-down" class="pb-4 mb-4 border-b">
          <h6 class="mb-2 text-lg font-extrabold tracking-wider leading-relaxed text-gray-700 uppercase">
            Tours guiados
          </h6>
          <p class="text-lg font-medium tracking-wider leading-relaxed text-gray-700">
            Explora bellos museos, zonas arqueológicas, calles, colonias y sus
            maravillosas ciudades con grandes historias por descubrir.
          </p>
        </div>
        <div data-aos="zoom-in-down" class="pb-4 mb-4 border-b">
          <h6 class="mb-2 text-lg font-extrabold tracking-wider leading-relaxed text-gray-700 uppercase">
            Turismo (cultural, ecológico, religioso, extremo y aventura)
          </h6>
          <p class="text-lg font-medium tracking-wider leading-relaxed text-gray-700">
            Atrévete a conocer sus costumbres ancestrales, historia, su
            exquisita gastronomía.
          </p>
        </div>
        <div data-aos="zoom-in-down">
          <h6 class="mb-2 text-lg font-extrabold tracking-wider leading-relaxed text-gray-700 uppercase">
            Guías turísticos (inglés, francés, italiano, alemán)
          </h6>
          <p class="tetext-lg font-medium tracking-wider leading-relaxed text-gray-700">
            Todos nuestros Guías de Turistas están acreditados por la Secretaría
            de Turismo de México.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
