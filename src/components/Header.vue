<template>
  <div
    :class="[
      scrollPosition > 500
        ? 'bg-white fixed drop-shadow-2xl text-azul-500 '
        : 'bg-transparent absolute text-gray-100',
    ]"
    class="' z-10 px-4 py-5 w-full nav1'"
  >
    <div class="relative flex items-center justify-between">
      <a
        @click="goToTop()"
        href="#"
        aria-label="Company"
        title="Company"
        class="inline-flex items-center"
      >
        <img src="/src/assets/logo.png" class="h-20 mr-3" />
        <!--Logo
        <span class="ml-2 text-xl font-bold tracking-wide uppercase">SITT</span>-->
      </a>
      <ul class="items-center hidden space-x-8 lg:flex">
        <li>
          <a
            href="#Trasporte"
            aria-label="Our product"
            title="Our product"
            class="hover:scale-300 hover:underline underline-offset-4 font-medium"
            >Trasporte</a
          >
        </li>
        <li>
          <a
            href="#Ejecutivo"
            aria-label="Our product"
            title="Our product"
            class="hover:scale-125 hover:underline underline-offset-4 font-medium"
            >Ejecutivo</a
          >
        </li>
        <li>
          <a
            href="#Tours"
            aria-label="Product pricing"
            title="Product pricing"
            class="hover:scale-125 hover:underline underline-offset-4 font-medium"
            >Tours</a
          >
        </li>
        <li>
          <a
            href="#Sistema"
            aria-label="About us"
            title="About us"
            class="hover:scale-125 hover:underline underline-offset-4 font-medium"
            >Sistema</a
          >
        </li>
        <li>
          <a
            href="#Nosotros"
            aria-label="About us"
            title="About us"
            class="hover:scale-125 hover:underline underline-offset-4 font-medium"
            >Nosotros</a
          >
        </li>
      </ul>
      <ul class="items-center hidden space-x-8 lg:flex">
        <li></li>
      </ul>

      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        class="space-x-8 lg:flex inline-flex items-center text-gray-200 justify-center h-12 px-6 font-medium tracking-wide transition rounded shadow-md bg-azul-500 focus:shadow-outline focus:outline-none ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-azul-700 duration-300"
        aria-label="Sign up"
        title="Sign up"
      >
        Contacto
      </button>

      <div class="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="hover:scale-125 p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
          @click="isMenuOpen = true"
        >
          <svg class="w-7" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
        <div
          v-if="isMenuOpen"
          class="absolute top-0 left-0 w-full text-gray-200 bg-gray-900"
        >
          <div class="p-5 border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a
                  href="/"
                  aria-label="Company"
                  title="Company"
                  class="hover:scale-125 inline-flex items-center"
                >
                  <img src="/src/assets/logo.png" class="h-20 mr-3" />
                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                  @click="isMenuOpen = false"
                >
                  <svg class="w-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li>
                  <a
                    href="#Trasporte"
                    aria-label="Our product"
                    class="hover:scale-125 hover:underline underline-offset-4 font-medium tracking-wide transition-colors duration-200 hover:text-azul-500"
                    >Trasporte
                  </a>
                </li>
                <li>
                  <a
                    href="#Ejecutivo"
                    aria-label="Our product"
                    class="hover:scale-125 hover:underline underline-offset-4 font-medium tracking-wide transition-colors duration-200 hover:text-azul-500"
                  >
                    Ejecutivo</a
                  >
                </li>
                <li>
                  <a
                    href="#Tours"
                    aria-label="Product pricing"
                    class="hover:scale-125 hover:underline underline-offset-4 font-medium tracking-wide transition-colors duration-200 hover:text-azul-500"
                    >Tours</a
                  >
                </li>
                <li>
                  <a
                    href="#Sistema"
                    aria-label="About us"
                    class="hover:scale-125 hover:underline underline-offset-4 font-medium tracking-wide transition-colors duration-200 hover:text-azul-500"
                    >Sistema</a
                  >
                </li>
                <li>
                  <a
                    href="#Nosotros"
                    aria-label="About us"
                    class="hover:scale-125 hover:underline underline-offset-4 font-medium tracking-wide transition-colors duration-200 hover:text-azul-500"
                    >Nosotros</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!---heroe-->
  <div class="relative heroe">
    <video
      src="/src/assets/video/video16.mp4"
      autoplay
      loop
      muted
      class="absolute inset-0 object-cover w-full h-full"
    ></video>
    <!--<img src="/src/assets/img.jpg" class="absolute inset-0 object-cover w-full h-full" alt="" />-->
    <div class="relative bg-gray-950 bg-opacity-60 flex items-center">
      <div class="my-20 mx-auto sm:max-w-xl md:max-w-full lg:py-20">
        <div
          class="w-full mb-12 xl:mb-0 flex flex-col justify-center items-center text-gray-100"
        >
          <hr class="w-full my-8 border-gray-200" />
          <h2
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            class="max-w-4xl mb-10 text-6xl text-center font-bold tracking-tight sm:text-7xl"
          >
            Servicios Integrales de
            <span class="text-teal-accent-400"
              >Transporte Ejecutivo y Turístico</span
            >
          </h2>
          <!--<div
            class="border-2 w-40 sm:w-30 text-center p-3 text-gray-100 hover:text-azul-500 ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300"
          >
            <a href="/" class="font-bold"> Leer más </a>
          </div>-->
        </div>
      </div>
    </div>
  </div>

  <!-- Main modal -->
  <div
    id="defaultModal"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-7xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600"
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white"></h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="defaultModal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="">
          <section class="bg-white">
            <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
              <section
                class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
              >
                <img
                  alt="Night"
                  src="/src/assets/tour21.jpg"
                  class="absolute inset-0 h-full w-full object-cover opacity-80"
                />

                <div class="hidden lg:relative lg:block lg:p-12">
                  <h2
                    class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
                  >
                    Bienvenidos a SITT 🚍
                  </h2>

                  <p class="mt-4 leading-relaxed text-white/90">
                    Contamos con un equipo multidisciplinario, capacitado y
                    certificado, que domina a la perfección cada área,
                    permitiendo ofrecer atención personalizada y de calidad a
                    nuestros clientes.
                  </p>
                </div>
              </section>

              <main
                class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
              >
                <div class="max-w-xl lg:max-w-3xl">
                  <div class="relative -mt-16 block lg:hidden">
                    <h1
                      class="mt-2 text-2xl font-bold text-azul-100 sm:text-3xl md:text-4xl"
                    >
                      Bienvenidos a SITT 🚍
                    </h1>

                    <p class="mt-4 leading-relaxed text-gray-500">
                      Contamos con un equipo multidisciplinario, capacitado y
                      certificado, que domina a la perfección cada área,
                      permitiendo ofrecer atención personalizada y de calidad a
                      nuestros clientes.
                    </p>
                  </div>

                  <div
                    role="alert"
                    :class="isSendEmail ? '' : 'hidden'"
                    class="rounded-xl border border-gray-100 bg-white p-4"
                  >
                    <div class="flex items-start gap-4">
                      <span :class="['text-green-600']">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          style="
                            fill: rgb(34, 218, 95);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path
                            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                          ></path>
                          <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                        </svg>
                      </span>

                      <div class="flex-1">
                        <strong class="block font-medium text-gray-900">
                          Correo electrónico enviado.
                        </strong>

                        <p class="mt-1 text-sm text-gray-700">
                          Gracias por comunicarte con nosotros,en breve nos
                          comunicaremos con usted. 👩‍💻📣
                        </p>
                      </div>

                      <button
                        @click="reset()"
                        class="text-gray-500 transition hover:text-gray-600"
                      >
                        <span class="sr-only">Dismiss popup</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div
                    role="alert"
                    :class="errorSend ? '' : 'hidden'"
                    class="rounded-xl border border-gray-100 bg-white p-4"
                  >
                    <div class="flex items-start gap-4">
                      <span :class="['text-red-600']">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          style="
                            fill: rgb(211, 26, 26);
                            transform: ;
                            msfilter: ;
                          "
                        >
                          <path d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
                          <path
                            d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19 12 5.137 19.344 19H4.661z"
                          ></path>
                        </svg>
                      </span>

                      <div class="flex-1">
                        <strong class="block font-medium text-gray-900">
                          Correo electrónico.
                        </strong>

                        <p class="mt-1 text-sm text-gray-700">
                          Se produjo un problema al enviar un correo a el
                          contacto SITT
                        </p>
                      </div>

                      <button
                        @click="reset()"
                        class="text-gray-500 transition hover:text-gray-600"
                      >
                        <span class="sr-only">Dismiss popup</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <form
                    ref="form"
                    action="#"
                    class="mt-8 grid grid-cols-12"
                    @submit.prevent="sendEmail()"
                  >
                    <div class="flex flex-row my-10">
                      <p class="flex items-center mr-2 sm:mr-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0,0,256,256"
                          class="w-10 h-10 mr-2 sm:mr-6"
                        >
                          <g
                            fill="#1e88e5"
                            fill-rule="nonzero"
                            stroke="none"
                            stroke-width="1"
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            stroke-miterlimit="10"
                            stroke-dasharray=""
                            stroke-dashoffset="0"
                            font-family="none"
                            font-weight="none"
                            font-size="none"
                            text-anchor="none"
                            style="mix-blend-mode: normal"
                          >
                            <g transform="scale(5.12,5.12)">
                              <path
                                d="M14,3.99023c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM18.00586,12.0332c0.628,0.027 1.20473,0.38083 1.55273,0.92383c0.396,0.618 1.01055,1.57712 1.81055,2.82813c0.73,1.141 0.78091,2.61469 0.12891,3.80469l-1.46484,2.08398c-0.396,0.564 -0.47498,1.28588 -0.20898,1.92188c0.414,0.99 1.21658,2.5115 2.64258,3.9375c1.426,1.426 2.9475,2.22858 3.9375,2.64258c0.636,0.266 1.35788,0.18702 1.92188,-0.20898l2.08398,-1.46484c1.19,-0.652 2.66369,-0.60009 3.80469,0.12891c1.251,0.8 2.21012,1.41455 2.82813,1.81055c0.543,0.348 0.89683,0.92473 0.92383,1.55273c0.154,3.564 -2.60716,5.00781 -3.41016,5.00781c-0.556,0 -7.2403,0.7597 -14.7793,-6.7793c-7.539,-7.539 -6.7793,-14.2233 -6.7793,-14.7793c0,-0.803 1.44381,-3.56416 5.00781,-3.41016z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span>5591528576</span>
                      </p>
                      <p class="flex items-center mr-2 sm:mr-6">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="100"
                          height="100"
                          viewBox="0,0,256,256"
                          class="w-10 h-10 mr-2 sm:mr-6"
                        >
                          <g
                            fill="#1e88e5"
                            fill-rule="nonzero"
                            stroke="none"
                            stroke-width="1"
                            stroke-linecap="butt"
                            stroke-linejoin="miter"
                            stroke-miterlimit="10"
                            stroke-dasharray=""
                            stroke-dashoffset="0"
                            font-family="none"
                            font-weight="none"
                            font-size="none"
                            text-anchor="none"
                            style="mix-blend-mode: normal"
                          >
                            <g transform="scale(5.12,5.12)">
                              <path
                                d="M14,4c-5.51133,0 -10,4.48867 -10,10v22c0,5.51133 4.48867,10 10,10h22c5.51133,0 10,-4.48867 10,-10v-22c0,-5.51133 -4.48867,-10 -10,-10zM13,16h24c0.18,0 0.34977,0.02031 0.50977,0.07031l-9.83008,9.82031c-1.48,1.48 -3.88914,1.48 -5.36914,0l-9.82031,-9.82031c0.16,-0.05 0.32977,-0.07031 0.50977,-0.07031zM11.07031,17.49023l7.51953,7.50977l-7.51953,7.50977c-0.05,-0.16 -0.07031,-0.32977 -0.07031,-0.50977v-14c0,-0.18 0.02031,-0.34977 0.07031,-0.50977zM38.92969,17.49023c0.05,0.16 0.07031,0.32977 0.07031,0.50977v14c0,0.18 -0.02031,0.34977 -0.07031,0.50977l-7.5293,-7.50977zM20,26.41016l0.89063,0.90039c1.13,1.13 2.61961,1.68945 4.09961,1.68945c1.49,0 2.96961,-0.55945 4.09961,-1.68945l0.90039,-0.90039l7.51953,7.51953c-0.16,0.05 -0.32977,0.07031 -0.50977,0.07031h-24c-0.18,0 -0.34977,-0.02031 -0.50977,-0.07031z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                        <span>contacto@sittejecutivo.com</span>
                      </p>
                    </div>

                    <div class="col-span-12 mt-2">
                      <label
                        for="name"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Nombre
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        v-model="name"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                    </div>

                    <div class="col-span-12 mt-2">
                      <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Correo electrónico
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        v-model="email"
                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                    </div>

                    <div class="col-span-12 mt-2">
                      <label
                        for="message"
                        class="block text-sm font-medium text-gray-700"
                      >
                        Mensaje
                      </label>

                      <textarea
                        id="message"
                        class="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
                        rows="4"
                        placeholder="Mensaje ..."
                        v-model="message"
                        name="message"
                      ></textarea>
                    </div>

                    <div
                      class="col-span-6 sm:flex sm:items-center sm:gap-4 mt-6"
                    >
                      <button
                        class="inline-block shrink-0 rounded-md border border-azul-600 bg-azul-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-azul-600 focus:outline-none focus:ring active:text-azul-500"
                      >
                        Enviar
                      </button>

                      <p
                        class="mt-4 text-sm text-gray-500 sm:mt-0"
                        data-modal-hide="defaultModal"
                      >
                        Cancelar
                      </p>
                    </div>
                  </form>
                </div>
              </main>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>

  <!---GO back to top
  <button
    id="to-top-button"
    on-click="goToTop"
    title="Go To Top"
    class="hidden fixed z-500 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-azul-500 text-gray-200 text-3xl font-bold"
  >
    &uarr;
  </button>-->
</template>

<script>
import { initFlowbite } from "flowbite";
import { initModals } from "flowbite";

import ScrollReveal from "scrollreveal";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import emailjs from "emailjs-com";

export default {
  data() {
    return {
      isMenuOpen: false,
      scrollPosition: null,
      name: "",
      email: "",
      message: "",
      isSendEmail: false,
      errorSend: false,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      //console.log(this.scrollPosition);
    },
    goToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    reset() {
      this.isSendEmail = false;
      this.errorSend = false;
    },
    sendEmail(e) {
      try {
        let isSend = emailjs.sendForm(
          "service_6orqgzg",
          "template_345ffk6",
          this.$refs.form,
          "NS_lrf5OzRwX5v4f-"
        );

        isSend
          .then((e) => {
            if (e.status) {
              this.isSendEmail = true;
            }
          })
          .catch((e) => {
            this.errorSend = true;
          });
      } catch (error) {
        //console.log({ error });
        this.errorSend = true;
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    initFlowbite();
    initModals();

    // var toTopButton = document.getElementById("to-top-button");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function () {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        //toTopButton.classList.remove("hidden");
      } else {
        //toTopButton.classList.add("hidden");
      }
    };

    ScrollReveal().reveal(".nav1", { delay: 600 });
    ScrollReveal().reveal(".heroe", { delay: 300 });
    AOS.init();
  },
};
</script>

<style scoped>
.typingEffect {
  width: 0;
  overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
  border-right: 2px solid white; /* The cursor*/
  font-size: 16px;
  white-space: nowrap; /* Keeps the text on a single line */
  animation: typing 2s steps(30) forwards;
}

/* The typing animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
