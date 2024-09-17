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
  <div class="bg-gray-900">
    <div
    class="team px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 "
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div></div>
      <h2
        data-aos="zoom-out-down"
        data-aos-easing="linear"
        data-aos-duration="500"
        class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-50 sm:text-4xl md:mx-auto"
      >
        <span class="relative inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 300"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-10 -ml-12 text-blue-gray-100 lg:w-32 lg:-ml-20 lg:-mt-12 sm:block"
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
      <p class="text-base text-gray-700 md:text-lg"></p>
    </div>
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div
          class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
          >
            <p class="mb-1 text-lg font-bold text-gray-100">Oliver Aguilerra</p>
            <p class="mb-4 text-xs text-gray-100">Product Manager</p>
            <p class="mb-4 text-xs tracking-wide text-gray-400">
              Vincent Van Gogh’s most popular painting, The Starry Night.
            </p>
            <div class="flex items-center justify-center space-x-3">
              <a
                href="/"
                class="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                  ></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-white transition-colors duration-300 hover:text-teal-accent-400"
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
          class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
          >
            <p class="mb-1 text-lg font-bold text-gray-100">Marta Clermont</p>
            <p class="mb-4 text-xs text-gray-100">Design Team Lead</p>
            <p class="mb-4 text-xs tracking-wide text-gray-400">
              Amet I love liquorice jujubes pudding croissant I love pudding.
            </p>
            <div class="flex items-center justify-center space-x-3">
              <a
                href="/"
                class="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                  ></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-white transition-colors duration-300 hover:text-teal-accent-400"
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
          class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
          >
            <p class="mb-1 text-lg font-bold text-gray-100">Anthony Geek</p>
            <p class="mb-4 text-xs text-gray-100">CTO, Lorem Inc.</p>
            <p class="mb-4 text-xs tracking-wide text-gray-400">
              Apple pie macaroon toffee jujubes pie tart cookie caramels.
            </p>
            <div class="flex items-center justify-center space-x-3">
              <a
                href="/"
                class="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                  ></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-white transition-colors duration-300 hover:text-teal-accent-400"
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
          class="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100"
          >
            <p class="mb-1 text-lg font-bold text-gray-100">Alice Melbourne</p>
            <p class="mb-4 text-xs text-gray-100">Human Resources</p>
            <p class="mb-4 text-xs tracking-wide text-gray-400">
              Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing
              elit.
            </p>
            <div class="flex items-center justify-center space-x-3">
              <a
                href="/"
                class="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                  ></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-white transition-colors duration-300 hover:text-teal-accent-400"
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
