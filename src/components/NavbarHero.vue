<template>
  <header
    :class="[
      scrollPosition > 50
        ? 'fixed top-0 left-0 bg-white/95 backdrop-blur-md shadow-lg'
        : 'absolute top-0 left-0 bg-gradient-to-b from-black/30 to-transparent',
    ]"
    class="z-50 w-full px-4 py-2 transition-all duration-300 sm:py-3"
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
          :src="logoSrc"
          alt="SITT Ejecutivo Logo"
          class="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
          :class="{ 'filter brightness-0 invert': scrollPosition <= 50 }"
        />
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:block">
        <ul class="flex items-center space-x-4 xl:space-x-6">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="relative text-sm font-medium tracking-wide transition-all duration-300 xl:text-base hover:text-azul-500 group whitespace-nowrap"
              :class="scrollPosition > 50 ? 'text-gray-700' : 'text-white'"
            >
              {{ item.label }}
              <span
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-azul-500 transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Desktop Contact Button -->
      <a
        href="#Contacto"
        class="hidden lg:inline-flex items-center justify-center h-9 px-5 text-sm font-semibold text-white transition-all duration-300 rounded-md shadow-md xl:h-10 xl:px-6 xl:text-base bg-azul-600 hover:bg-azul-700 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-azul-500 focus:ring-offset-2 whitespace-nowrap"
        aria-label="Ir a la sección de contacto"
      >
        Contacto
      </a>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden p-2 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-azul-500"
        :class="scrollPosition > 50 ? 'hover:bg-gray-100' : 'hover:bg-white/10'"
        @click="isMenuOpen = true"
        aria-label="Abrir menú"
        :aria-expanded="isMenuOpen.toString()"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          class="w-6 h-6 sm:w-7 sm:h-7"
          :class="scrollPosition > 50 ? 'text-gray-700' : 'text-white'"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isMenuOpen" class="fixed inset-0 z-[100] lg:hidden">
          <!-- Backdrop -->
          <div
            class="fixed inset-0 bg-black/60 backdrop-blur-sm"
            @click="closeMenu"
          ></div>

          <!-- Menu Panel -->
          <div
            class="fixed right-0 top-0 h-full w-64 sm:w-72 bg-white shadow-2xl transform transition-transform duration-300"
            :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
          >
            <div class="flex flex-col h-full">
              <!-- Header -->
              <div
                class="flex items-center justify-between p-4 border-b border-gray-200"
              >
                <span class="text-lg font-bold text-gray-800">Menú</span>
                <button
                  @click="closeMenu"
                  class="p-2 transition-colors rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-azul-500"
                  aria-label="Cerrar menú"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    class="w-5 h-5 text-gray-600"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Navigation Links -->
              <nav class="flex-1 p-4 overflow-y-auto">
                <ul class="space-y-1">
                  <li v-for="item in navItems" :key="item.href">
                    <a
                      :href="item.href"
                      class="block py-3 px-4 text-base font-medium text-gray-700 transition-all rounded-lg hover:bg-azul-50 hover:text-azul-600"
                      @click="closeMenu"
                    >
                      {{ item.label }}
                    </a>
                  </li>
                </ul>
              </nav>

              <!-- Footer with Contact Button -->
              <div class="p-4 border-t border-gray-200">
                <a
                  href="#Contacto"
                  class="flex items-center justify-center w-full py-3 text-base font-semibold text-white transition-all rounded-lg bg-azul-600 hover:bg-azul-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-azul-500 focus:ring-offset-2"
                  @click="closeMenu"
                >
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "NavbarHero",
  data() {
    return {
      isMenuOpen: false,
      scrollPosition: 0,
      navItems: [
        { label: "Transporte", href: "#Transporte" },
        { label: "Ejecutivo", href: "#Ejecutivo" },
        { label: "Tours", href: "#Tours" },
        { label: "Sistema", href: "#Sistema" },
        { label: "Nosotros", href: "#Nosotros" },
      ],
    };
  },
  computed: {
    logoSrc() {
      // Usar siempre el logo oscuro cuando hay scroll, claro cuando no
      return this.scrollPosition > 50 
        ? "/src/assets/logos/logo_na.png" 
        : "/src/assets/logos/logo_ba.png";
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    goToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    closeMenu() {
      this.isMenuOpen = false;
      // Restaurar scroll del body
      document.body.style.overflow = '';
      document.body.style.position = '';
    },
    openMenu() {
      this.isMenuOpen = true;
      // Prevenir scroll del body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    },
    handleResize() {
      if (window.innerWidth >= 1024 && this.isMenuOpen) {
        this.closeMenu();
      }
    },
    handleEscapeKey(e) {
      if (e.key === 'Escape' && this.isMenuOpen) {
        this.closeMenu();
      }
    }
  },
  watch: {
    isMenuOpen(newVal) {
      if (newVal) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("keydown", this.handleEscapeKey);
    this.updateScroll();
    AOS.init({
      duration: 800,
      once: true,
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.updateScroll);
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("keydown", this.handleEscapeKey);
    this.closeMenu(); // Asegurar que el scroll se restaure
  },
};
</script>

<style scoped>
/* Animaciones existentes */
@keyframes floatBadge {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}

.floating-badge {
  animation: floatBadge 3s ease-in-out infinite;
}

/* Mejoras de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .floating-badge,
  .transition-all,
  .transition-colors,
  .transition-transform {
    animation: none !important;
    transition: none !important;
  }
}

/* Filtro para logo claro */
.filter.brightness-0.invert {
  filter: brightness(0) invert(1);
}
</style>