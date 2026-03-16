<template>
  <section
    id="Contacto"
    class="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
  >
    <Separator />
    <!-- Elementos decorativos animados -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Círculos animados -->
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-azul-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
      ></div>
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-azul-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
      ></div>
      <div
        class="absolute bottom-0 left-1/2 w-96 h-96 bg-azul-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
      ></div>

      <!-- Líneas de patrón -->

    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado de sección -->
      <div class="text-center mb-12" data-aos="fade-down">
        <span
          class="inline-block px-4 py-2 text-sm font-semibold text-azul-600 bg-azul-50 rounded-full mb-4"
        >
          Contáctanos
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          ¿Listo para <span class="text-azul-600">viajar</span>?
        </h2>
        <p class="max-w-2xl mx-auto text-lg text-gray-600">
          Estamos aquí para ayudarte a planificar tu próximo viaje. Respondemos
          en menos de 24 horas.
        </p>
      </div>

      <!-- Tarjeta de contacto principal -->
      <div
        class="grid lg:grid-cols-5 overflow-hidden bg-white rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <!-- Lado izquierdo con imagen -->
        <div
          class="relative hidden lg:block lg:col-span-2 overflow-hidden group"
        >
          <img
            src="img/contact.jpg"
            alt="Contacto SITT Ejecutivo"
            class="absolute inset-0 object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-azul-900/90 via-azul-900/50 to-transparent"
          ></div>

          <!-- Contenido superpuesto animado -->
          <div
            class="absolute inset-0 flex flex-col justify-end p-8 text-white transform transition-transform duration-700 group-hover:translate-y-0"
          >
            <div
              class="transform transition-all duration-700 group-hover:translate-y-0"
            >
              <div class="flex items-center gap-2 mb-4">
                <div
                  class="w-12 h-1 bg-azul-400 rounded-full animate-pulse"
                ></div>
                <span
                  class="text-sm font-semibold uppercase tracking-wider text-azul-200"
                  >28 años de experiencia</span
                >
              </div>

              <h3
                class="text-3xl font-bold mb-4 transform transition-all duration-700 group-hover:translate-x-2"
              >
                Bienvenidos a SITT Ejecutivo
              </h3>

              <p
                class="text-white/90 leading-relaxed transform transition-all duration-700 group-hover:translate-x-2 delay-100"
              >
                Contamos con un equipo multidisciplinario, capacitado y
                certificado, que domina a la perfección cada área, permitiendo
                ofrecer atención personalizada y de calidad a nuestros clientes.
              </p>

              <!-- Estadísticas flotantes -->
              <div class="grid grid-cols-3 gap-4 mt-8">
                <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="text-center transform transition-all duration-700 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                  :style="{ transitionDelay: `${stat.delay}ms` }"
                >
                  <div class="text-2xl font-bold text-white">
                    {{ stat.value }}
                  </div>
                  <div class="text-xs text-azul-200">{{ stat.label }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Badge flotante -->
          <div
            class="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 animate-float"
          >
            <span class="text-sm font-medium text-white">✨ Servicio 24/7</span>
          </div>
        </div>

        <!-- Lado derecho con formulario -->
        <div class="p-8 lg:p-10 lg:col-span-3 bg-white">
          <!-- Versión móvil del header -->
          <div class="mb-8 lg:hidden" data-aos="fade-up">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Bienvenidos a SITT Ejecutivo
            </h3>
            <p class="text-gray-600">
              Contamos con un equipo multidisciplinario, capacitado y
              certificado.
            </p>
          </div>

          <!-- Alerta de mensaje enviado -->
          <Transition
            enter-active-class="transition-all duration-500 ease-out"
            enter-from-class="opacity-0 -translate-y-4 scale-95"
            enter-to-class="opacity-100 translate-y-0 scale-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="opacity-100 translate-y-0 scale-100"
            leave-to-class="opacity-0 -translate-y-4 scale-95"
          >
            <div
              v-if="isSendEmail"
              class="mb-6"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <div
                :class="[
                  errorSend
                    ? 'bg-red-50 border-red-200'
                    : 'bg-green-50 border-green-200',
                  'relative overflow-hidden rounded-xl border p-4',
                ]"
              >
                <!-- Barra de progreso animada -->
                <div
                  class="absolute bottom-0 left-0 h-1 bg-current animate-progress"
                  :class="errorSend ? 'text-red-500' : 'text-green-500'"
                  :style="{
                    width: '100%',
                    animation: 'shrink 5s linear forwards',
                  }"
                ></div>

                <div class="flex items-start">
                  <div class="flex-shrink-0">
                    <div
                      class="w-10 h-10 rounded-full flex items-center justify-center"
                      :class="errorSend ? 'bg-red-100' : 'bg-green-100'"
                    >
                      <svg
                        class="w-6 h-6"
                        :class="errorSend ? 'text-red-600' : 'text-green-600'"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          v-if="!errorSend"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                        <path
                          v-else
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-3 flex-1">
                    <p
                      class="text-sm font-medium"
                      :class="errorSend ? 'text-red-800' : 'text-green-800'"
                    >
                      <span v-if="!errorSend">¡Mensaje enviado con éxito!</span>
                      <span v-else>Error al enviar el mensaje</span>
                    </p>
                    <p
                      class="mt-1 text-sm"
                      :class="errorSend ? 'text-red-600' : 'text-green-600'"
                    >
                      <span v-if="!errorSend"
                        >Gracias por contactarnos. Te responderemos a la
                        brevedad.</span
                      >
                      <span v-else
                        >Hubo un problema al enviar tu mensaje. Por favor
                        intenta nuevamente.</span
                      >
                    </p>
                  </div>
                  <button
                    @click="reset"
                    class="ml-4 flex-shrink-0"
                    aria-label="Cerrar alerta"
                  >
                    <svg
                      class="w-5 h-5"
                      :class="errorSend ? 'text-red-500' : 'text-green-500'"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </Transition>

          <!-- Información de contacto con animaciones -->
          <div class="flex flex-col gap-4 mb-8 sm:flex-row sm:gap-6">
            <div
              v-for="(contact, index) in contactInfo"
              :key="contact.label"
              class="group flex items-center p-3 rounded-xl hover:bg-azul-50 transition-all duration-300 cursor-pointer"
              :data-aos="index === 0 ? 'fade-right' : 'fade-left'"
              :data-aos-delay="200 + index * 100"
            >
              <div
                class="p-3 rounded-lg bg-azul-50 group-hover:bg-azul-100 transition-all duration-300 group-hover:scale-110"
              >
                <Icon
                  :name="contact.icon"
                  class="w-5 h-5 text-azul-600 transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
              <span
                class="ml-3 font-semibold text-gray-700 group-hover:text-azul-600 transition-colors duration-300"
              >
                {{ contact.value }}
              </span>
            </div>
          </div>

          <!-- Formulario con animaciones en campos -->
          <form ref="form" @submit.prevent="sendEmail" class="space-y-6">
            <div
              v-for="(field, index) in formFields"
              :key="field.name"
              class="group"
              :data-aos="index === 0 ? 'fade-up' : 'fade-up'"
              :data-aos-delay="300 + index * 100"
            >
              <label
                :for="field.name"
                class="block mb-2 text-sm font-semibold text-gray-700 group-hover:text-azul-600 transition-colors duration-300"
              >
                {{ field.label }}
              </label>

              <div class="relative">
                <!-- Icono del campo -->
                <div
                  class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-azul-500 transition-colors duration-300"
                >
                  <Icon :name="field.icon" class="w-5 h-5" />
                </div>

                <!-- Input/Textarea -->
                <component
                  :is="field.type === 'textarea' ? 'textarea' : 'input'"
                  :type="field.type"
                  :id="field.name"
                  :name="field.name"
                  v-model="formData[field.name]"
                  :required="field.required"
                  :rows="field.rows"
                  :placeholder="field.placeholder"
                  class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl transition-all duration-300 focus:border-azul-500 focus:ring-2 focus:ring-azul-200 focus:outline-none hover:border-azul-300 group-hover:shadow-lg"
                  @focus="handleFieldFocus(field.name)"
                  @blur="handleFieldBlur(field.name)"
                />

                <!-- Efecto de enfoque animado -->
                <div
                  class="absolute inset-0 border-2 border-azul-500 rounded-xl pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
            </div>

            <!-- Botón de envío con animaciones -->
            <div class="pt-4" data-aos="fade-up" data-aos-delay="600">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="group relative w-full overflow-hidden px-8 py-4 font-semibold text-white rounded-xl bg-gradient-to-r from-azul-600 to-azul-700 hover:from-azul-700 hover:to-azul-800 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-azul-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <!-- Efecto de onda en hover -->
                <span
                  class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                ></span>

                <!-- Contenido del botón -->
                <span class="relative flex items-center justify-center gap-2">
                  <Icon
                    v-if="!isSubmitting"
                    name="send"
                    class="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                  />
                  <svg
                    v-else
                    class="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  {{ isSubmitting ? "Enviando..." : "Enviar mensaje" }}
                </span>
              </button>

              <!-- Texto de confianza -->
              <p class="mt-4 text-xs text-center text-gray-500">
                🔒 Tus datos están seguros. No compartimos tu información.
              </p>
            </div>
          </form>
        </div>
      </div>

      <!-- Badges de confianza -->
      <div
        class="flex flex-wrap justify-center gap-6 mt-12"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div
          v-for="badge in trustBadges"
          :key="badge.text"
          class="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <Icon :name="badge.icon" class="w-5 h-5 text-azul-500" />
          <span class="text-sm font-medium text-gray-700">{{
            badge.text
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import Icon from "./Icon.vue";
import Separator from "./Separator.vue";
export default {
  name: "ContactSection",
  components: {
    Icon,
    Separator,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      isSendEmail: false,
      errorSend: false,
      isSubmitting: false,
      focusedField: null,

      // Estadísticas para el lado izquierdo
      stats: [
        { value: "28+", label: "Años", delay: 200 },
        { value: "10k+", label: "Viajes", delay: 300 },
        { value: "100%", label: "Satisfacción", delay: 400 },
      ],

      // Información de contacto
      contactInfo: [
        { icon: "phone", value: "55 9152 8674", label: "Teléfono" },
        { icon: "mail", value: "contacto@sittejecutivo.com", label: "Email" },
      ],

      // Campos del formulario
      formFields: [
        {
          name: "name",
          label: "Nombre completo",
          type: "text",
          icon: "user",
          placeholder: "Tu nombre",
          required: true,
        },
        {
          name: "email",
          label: "Correo electrónico",
          type: "email",
          icon: "mail",
          placeholder: "tu@email.com",
          required: true,
        },
        {
          name: "message",
          label: "Mensaje",
          type: "textarea",
          icon: "message",
          placeholder: "¿En qué podemos ayudarte?",
          rows: 4,
          required: true,
        },
      ],

      // Badges de confianza
      trustBadges: [
        { icon: "shield", text: "Datos seguros" },
        { icon: "clock", text: "Respuesta rápida" },
        { icon: "whatsapp", text: "WhatsApp disponible" },
        { icon: "headset", text: "Soporte 24/7" },
      ],
    };
  },
  methods: {
    reset() {
      this.isSendEmail = false;
      this.errorSend = false;
    },

    handleFieldFocus(fieldName) {
      this.focusedField = fieldName;
    },

    handleFieldBlur(fieldName) {
      this.focusedField = null;
    },

    async sendEmail() {
      this.errorSend = false;
      this.isSendEmail = false;
      this.isSubmitting = true;

      try {
        const response = await emailjs.sendForm(
          "service_6orqgzg",
          "template_345ffk6",
          this.$refs.form,
          "NS_lrf5OzRwX5v4f-",
        );

        this.isSendEmail = true;
        this.errorSend = response.status !== 200;

        if (!this.errorSend) {
          // Reset form
          this.formData = {
            name: "",
            email: "",
            message: "",
          };

          // Auto-hide success message
          setTimeout(() => {
            this.isSendEmail = false;
          }, 5000);
        }
      } catch (error) {
        this.isSendEmail = true;
        this.errorSend = true;

        setTimeout(() => {
          this.isSendEmail = false;
        }, 5000);
      } finally {
        this.isSubmitting = false;
      }
    },
  },
  mounted() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
    });
  },
};
</script>

<style scoped>
@keyframes blob {
  0%,
  100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes shrink {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-progress {
  animation: shrink 5s linear forwards;
}

/* Efecto de glass morphism para el badge */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Transiciones suaves para todos los elementos */
* {
  transition-property:
    background-color, border-color, color, fill, stroke, opacity, box-shadow,
    transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

@media (max-width: 767px) {
  .animate-blob,
  .animate-float,
  .animate-progress {
    animation: none !important;
  }

  .mix-blend-multiply,
  .filter {
    opacity: 0.08 !important;
  }

  * {
    transition-duration: 160ms;
  }
}
</style>
