<template>
  <!-- Navbar -->
  <header
    :class="[
      scrollPosition > 500
        ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-lg text-azul-500'
        : 'absolute top-0 left-0 bg-gradient-to-b from-black/30 to-transparent text-white',
    ]"
    class="z-50 w-full px-4 py-4 transition-all duration-300"
  >
    <div class="relative flex items-center justify-between max-w-7xl mx-auto">
      <!-- Logo -->
      <a
        @click="goToTop"
        href="#"
        aria-label="SITT Ejecutivo - Ir al inicio"
        class="inline-flex items-center transition-transform hover:scale-105"
      >
        <img
          v-if="scrollPosition < 500"
          src="/src/assets/logos/logo_ba.png"
          alt="SITT Ejecutivo Logo"
          class="h-16 md:h-20 w-auto"
        />
        <img
          v-else
          src="/src/assets/logos/logo_na.png"
          alt="SITT Ejecutivo Logo"
          class="h-16 md:h-20 w-auto"
        />
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:block">
        <ul class="flex items-center space-x-8">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="relative text-base font-bold tracking-wide transition-all duration-300 hover:scale-110 hover:text-azul-500 group"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-azul-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Contact Button -->
      <button
        data-modal-target="defaultModal"
        data-modal-toggle="defaultModal"
        class="hidden lg:inline-flex items-center justify-center h-12 px-8 font-semibold text-white transition-all duration-300 rounded-md shadow-md bg-azul-600 hover:bg-azul-700 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-azul-500 focus:ring-offset-2"
        aria-label="Abrir formulario de contacto"
      >
        Contacto
      </button>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden p-2 transition-colors rounded-lg hover:bg-white/10"
        @click="isMenuOpen = true"
        aria-label="Abrir menú"
        aria-expanded="isMenuOpen"
      >
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 -translate-x-full"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 lg:hidden">
        <!-- Overlay -->
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm" @click="isMenuOpen = false"></div>
        
        <!-- Drawer -->
        <div class="fixed inset-y-0 left-0 w-full max-w-sm bg-gray-900 shadow-2xl">
          <div class="flex flex-col h-full">
            <!-- Drawer Header -->
            <div class="flex items-center justify-between p-6 border-b border-gray-800">
              <img src="/src/assets/logos/logo_ba.png" alt="SITT Ejecutivo" class="h-12 w-auto" />
              <button
                @click="isMenuOpen = false"
                class="p-2 transition-colors rounded-lg hover:bg-gray-800"
                aria-label="Cerrar menú"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Drawer Navigation -->
            <nav class="flex-1 p-6 overflow-y-auto">
              <ul class="space-y-4">
                <li v-for="item in navItems" :key="item.href">
                  <a
                    :href="item.href"
                    class="block py-3 text-lg font-medium text-white transition-colors border-b border-gray-800 hover:text-azul-500 hover:border-azul-500"
                    @click="isMenuOpen = false"
                  >
                    {{ item.label }}
                  </a>
                </li>
                <li class="pt-4">
                  <button
                    data-modal-target="defaultModal"
                    data-modal-toggle="defaultModal"
                    class="w-full py-3 font-semibold text-white transition-colors rounded-md bg-azul-600 hover:bg-azul-700"
                    @click="isMenuOpen = false"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Transition>
  </header>

  <!-- Hero Section -->
  <section class="relative h-screen overflow-hidden">
    <!-- Video Background -->
    <video
      src="/src/assets/video16.mp4"
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 object-cover w-full h-full"
    ></video>
    
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-950/80 to-gray-950/40"></div>
    
    <!-- Hero Content -->
    <div class="relative flex items-center justify-center h-full px-4">
      <div class="max-w-5xl mx-auto text-center">
        <hr class="w-24 h-1 mx-auto mb-8 bg-azul-500" />
        <h1 class="text-4xl font-bold text-white md:text-6xl lg:text-7xl" data-aos="fade-up">
          Servicios Integrales en
          <span class="block mt-2 text-azul-500">
            Transporte Turístico y Ejecutivo
          </span>
        </h1>
      </div>
    </div>
  </section>

  <!-- Contact Modal -->
  <Teleport to="body">
    <div
      id="defaultModal"
      tabindex="-1"
      class="fixed inset-0 z-[100] hidden overflow-y-auto"
      aria-modal="true"
      role="dialog"
    >
      <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <!-- Modal Overlay -->
        <div class="fixed inset-0 transition-opacity bg-gray-900/75 backdrop-blur-sm" data-modal-hide="defaultModal"></div>

        <!-- Modal Panel -->
        <div class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div class="grid lg:grid-cols-5">
            <!-- Modal Image Side -->
            <div class="relative hidden lg:block lg:col-span-2">
              <img
                src="/src/assets/contact.jpg"
                alt="Contacto SITT Ejecutivo"
                class="absolute inset-0 object-cover w-full h-full"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-azul-900/90 to-transparent"></div>
              <div class="absolute bottom-0 p-8 text-white">
                <h2 class="mb-4 text-2xl font-bold">Bienvenidos a SITT Ejecutivo</h2>
                <p class="text-sm leading-relaxed text-white/90">
                  Contamos con un equipo multidisciplinario, capacitado y certificado, que domina a la perfección cada área, permitiendo ofrecer atención personalizada y de calidad a nuestros clientes.
                </p>
              </div>
            </div>

            <!-- Modal Form Side -->
            <div class="p-8 lg:col-span-3">
              <!-- Mobile Header -->
              <div class="mb-8 lg:hidden">
                <h2 class="text-2xl font-bold text-gray-900">Bienvenidos a SITT Ejecutivo</h2>
                <p class="mt-2 text-sm text-gray-600">
                  Contamos con un equipo multidisciplinario, capacitado y certificado.
                </p>
              </div>

              <!-- Alert Messages -->
              <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
              >
                <div v-if="isSendEmail" class="mb-6">
                  <div :class="errorSend ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'" class="p-4 border rounded-lg">
                    <div class="flex">
                      <div class="flex-1">
                        <p class="text-sm font-medium" :class="errorSend ? 'text-red-800' : 'text-green-800'">
                          <span v-if="!errorSend">✓ ¡Mensaje enviado con éxito!</span>
                          <span v-else>✗ Error al enviar el mensaje</span>
                        </p>
                        <p class="mt-1 text-sm" :class="errorSend ? 'text-red-600' : 'text-green-600'">
                          <span v-if="!errorSend">Gracias por contactarnos. Te responderemos a la brevedad.</span>
                          <span v-else>Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.</span>
                        </p>
                      </div>
                      <button @click="reset" class="ml-4">
                        <span class="sr-only">Cerrar</span>
                        <svg class="w-5 h-5" :class="errorSend ? 'text-red-500' : 'text-green-500'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Transition>

              <!-- Contact Info -->
              <div class="flex flex-col gap-4 mb-8 sm:flex-row sm:gap-6">
                <div class="flex items-center">
                  <div class="p-2 rounded-full bg-azul-100">
                    <svg class="w-5 h-5 text-azul-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"/>
                      <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2z"/>
                      <path d="M16.422 13.443c-.253-.152-.586-.152-.938.152l-2.531 2.027c-1.012-.405-2.226-1.113-3.139-2.027-.913-.913-1.621-2.126-2.027-3.139l2.027-2.531c.304-.352.304-.685.152-.938-.456-.709-1.165-2.228-1.773-2.937-.203-.253-.481-.405-.785-.405H5.204c-.38 0-.685.304-.735.684C4.317 7.439 6.071 11.5 9.28 14.708c3.208 3.208 7.268 4.963 11.442 4.811.38-.05.684-.355.684-.735V16.67c0-.304-.152-.582-.405-.785-.709-.608-2.228-1.317-2.937-1.773z"/>
                    </svg>
                  </div>
                  <span class="ml-3 font-semibold text-gray-700">55 9152 8674</span>
                </div>
                <div class="flex items-center">
                  <div class="p-2 rounded-full bg-azul-100">
                    <svg class="w-5 h-5 text-azul-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <span class="ml-3 font-semibold text-gray-700">contacto@sittejecutivo.com</span>
                </div>
              </div>

              <!-- Form -->
              <form ref="form" @submit.prevent="sendEmail" class="space-y-6">
                <div>
                  <label for="name" class="block mb-2 text-sm font-semibold text-gray-700">Nombre completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    v-model="name"
                    required
                    class="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg focus:border-azul-500 focus:ring-1 focus:ring-azul-500"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label for="email" class="block mb-2 text-sm font-semibold text-gray-700">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    v-model="email"
                    required
                    class="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg focus:border-azul-500 focus:ring-1 focus:ring-azul-500"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label for="message" class="block mb-2 text-sm font-semibold text-gray-700">Mensaje</label>
                  <textarea
                    id="message"
                    name="message"
                    v-model="message"
                    required
                    rows="4"
                    class="w-full px-4 py-3 transition-colors border border-gray-300 rounded-lg resize-none focus:border-azul-500 focus:ring-1 focus:ring-azul-500"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>

                <div class="flex items-center gap-4">
                  <button
                    type="submit"
                    class="px-8 py-3 font-semibold text-white transition-all duration-300 rounded-lg bg-azul-600 hover:bg-azul-700 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-azul-500 focus:ring-offset-2"
                  >
                    Enviar mensaje
                  </button>
                  <button
                    type="button"
                    class="px-6 py-3 font-semibold text-gray-600 transition-colors hover:text-gray-900"
                    data-modal-hide="defaultModal"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { initFlowbite } from "flowbite";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

export default {
  name: "NavbarHero",
  data() {
    return {
      isMenuOpen: false,
      scrollPosition: 0,
      name: "",
      email: "",
      message: "",
      isSendEmail: false,
      errorSend: false,
      navItems: [
        { label: "Transporte", href: "#Transporte" },
        { label: "Ejecutivo", href: "#Ejecutivo" },
        { label: "Tours", href: "#Tours" },
        { label: "Sistema", href: "#Sistema" },
        { label: "Nosotros", href: "#Nosotros" },
      ],
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    goToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    reset() {
      this.isSendEmail = false;
      this.errorSend = false;
    },
    async sendEmail() {
      this.errorSend = false;
      this.isSendEmail = false;

      try {
        const response = await emailjs.sendForm(
          "service_6orqgzg",
          "template_345ffk6",
          this.$refs.form,
          "NS_lrf5OzRwX5v4f-"
        );

        this.isSendEmail = true;
        this.errorSend = response.status !== 200;

        if (!this.errorSend) {
          this.name = "";
          this.email = "";
          this.message = "";
          
          // Auto-hide success message after 5 seconds
          setTimeout(() => {
            this.isSendEmail = false;
          }, 5000);
        }
      } catch (error) {
        this.isSendEmail = true;
        this.errorSend = true;
        
        // Auto-hide error message after 5 seconds
        setTimeout(() => {
          this.isSendEmail = false;
        }, 5000);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.updateScroll();
    initFlowbite();
    AOS.init({
      duration: 800,
      once: true,
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.updateScroll);
  },
};
</script>

<style scoped>
/* Smooth transitions for mobile menu */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Custom scrollbar for modals */
#defaultModal {
  scrollbar-width: thin;
  scrollbar-color: #3b82f6 #e5e7eb;
}

#defaultModal::-webkit-scrollbar {
  width: 6px;
}

#defaultModal::-webkit-scrollbar-track {
  background: #e5e7eb;
}

#defaultModal::-webkit-scrollbar-thumb {
  background-color: #3b82f6;
  border-radius: 3px;
}
</style>