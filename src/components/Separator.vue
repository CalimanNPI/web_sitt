<template>
  <div class="pointer-events-none absolute inset-x-0 top-0 z-[1] overflow-hidden" aria-hidden="true">
    <div class="relative h-10">
      <div :class="lineClass" class="absolute inset-x-0 top-0 h-px"></div>
      <div :class="glowClass" class="separator-glow absolute left-1/4 right-1/4 top-0 h-[2px]"></div>

      <span :class="dotOneClass" class="separator-dot absolute top-0 left-[18%] h-2 w-2 -translate-y-1/2 rounded-full"></span>
      <span :class="dotTwoClass" class="separator-dot delay-1 absolute top-0 right-[22%] h-2 w-2 -translate-y-1/2 rounded-full"></span>
      <span :class="dotThreeClass" class="separator-dot delay-2 absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"></span>
    </div>

    <div :class="orbOneClass" class="separator-orb absolute -top-20 -right-16 h-64 w-64 rounded-full blur-3xl"></div>
    <div :class="orbTwoClass" class="separator-orb delay-2 absolute -top-24 -left-20 h-56 w-56 rounded-full blur-3xl"></div>
  </div>
</template>

<script>
export default {
  name: "SeparatorDecor",
  props: {
    tone: {
      type: String,
      default: "light",
      validator: (value) => ["light", "dark"].includes(value),
    },
  },
  computed: {
    isDarkTone() {
      return this.tone === "dark";
    },
    lineClass() {
      return this.isDarkTone
        ? "bg-gradient-to-r from-white/0 via-white/40 to-white/0"
        : "bg-gradient-to-r from-azul-400/0 via-azul-500/70 to-azul-400/0";
    },
    glowClass() {
      return this.isDarkTone
        ? "bg-gradient-to-r from-transparent via-white/60 to-transparent"
        : "bg-gradient-to-r from-transparent via-azul-400 to-transparent";
    },
    dotOneClass() {
      return this.isDarkTone ? "bg-white/60" : "bg-azul-300";
    },
    dotTwoClass() {
      return this.isDarkTone ? "bg-white/70" : "bg-azul-400";
    },
    dotThreeClass() {
      return this.isDarkTone ? "bg-white/80" : "bg-azul-500";
    },
    orbOneClass() {
      return this.isDarkTone ? "bg-white/10" : "bg-azul-500/10";
    },
    orbTwoClass() {
      return this.isDarkTone ? "bg-white/10" : "bg-azul-300/10";
    },
  },
};
</script>

<style scoped>
@keyframes separatorPulse {
  0%,
  100% {
    opacity: 0.45;
    transform: scaleX(0.9);
  }
  50% {
    opacity: 0.9;
    transform: scaleX(1);
  }
}

@keyframes separatorFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes separatorBlink {
  0%,
  100% {
    opacity: 0.45;
  }
  50% {
    opacity: 1;
  }
}

.separator-glow {
  animation: separatorPulse 4s ease-in-out infinite;
}

.separator-orb {
  animation: separatorFloat 6s ease-in-out infinite;
}

.separator-dot {
  animation: separatorBlink 2.6s ease-in-out infinite;
}

.delay-1 {
  animation-delay: 0.7s;
}

.delay-2 {
  animation-delay: 1.4s;
}

@media (max-width: 767px) {
  .separator-glow,
  .separator-orb,
  .separator-dot {
    animation: none;
  }
}
</style>
