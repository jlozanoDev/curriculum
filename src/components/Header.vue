<script setup>
import { profileData } from '../data.js';
import { useParallax } from '../composables/useParallax.js';
import TypewriterText from './TypewriterText.vue';

defineProps({
  isDark: Boolean
});

const emit = defineEmits(['toggle-theme']);

const { scrollY } = useParallax();
</script>

<template>
  <header class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" :class="isDark ? 'bg-[#16171d]' : 'bg-white'">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 transition-transform duration-75" :style="{ transform: `translateY(${scrollY * 0.5}px)` }"></div>
      <div
        class="absolute -inset-40 transition-transform duration-75"
        :style="{
          transform: `translateY(${scrollY * 0.15}px)`,
          background: isDark
            ? 'radial-gradient(ellipse at 50% 30%, rgba(192, 132, 252, 0.12) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 50% 30%, rgba(170, 59, 255, 0.08) 0%, transparent 50%)'
        }"
      ></div>
      <div
        class="absolute -inset-40 transition-transform duration-75"
        :style="{
          transform: `translateY(${scrollY * 0.25}px)`,
          background: isDark
            ? 'radial-gradient(ellipse at 80% 80%, rgba(192, 132, 252, 0.08) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 80% 80%, rgba(170, 59, 255, 0.06) 0%, transparent 50%)'
        }"
      ></div>
      <div
        class="absolute w-96 h-96 rounded-full transition-transform duration-75"
        :style="{
          transform: `translateY(${scrollY * 0.08}px) translateX(${scrollY * 0.05}px)`,
          top: '10%', left: '5%',
          background: isDark
            ? 'radial-gradient(circle, rgba(192, 132, 252, 0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(170, 59, 255, 0.03) 0%, transparent 70%)'
        }"
      ></div>
      <div
        class="absolute w-80 h-80 rounded-full transition-transform duration-75"
        :style="{
          transform: `translateY(${scrollY * -0.06}px) translateX(${scrollY * -0.03}px)`,
          bottom: '15%', right: '5%',
          background: isDark
            ? 'radial-gradient(circle, rgba(192, 132, 252, 0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(170, 59, 255, 0.03) 0%, transparent 70%)'
        }"
      ></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-3xl">
      <div class="mb-8">
        <div
          class="relative mx-auto"
          :style="{
            width: '192px', height: '192px',
            transform: `translateY(${scrollY * 0.08}px)`
          }"
        >
          <div
            class="absolute -inset-4 rounded-full blur-2xl transition-opacity duration-300"
            :class="isDark ? 'bg-purple-900/40' : 'bg-purple-300/40'"
            :style="{ transform: `translateY(${scrollY * -0.05}px)` }"
          ></div>
          <div
            class="absolute -inset-1 rounded-full blur-xl transition-opacity duration-300"
            :class="isDark ? 'bg-purple-700/30' : 'bg-purple-400/30'"
            :style="{ transform: `translateY(${scrollY * -0.03}px)` }"
          ></div>
          <div
            class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 relative z-10"
            :class="isDark ? 'border-purple-700' : 'border-purple-300'"
          >
            <img src="/image.png" alt="Profile" class="w-full h-full object-cover scale-110" />
          </div>
        </div>
      </div>

      <h1
        class="text-4xl md:text-6xl font-light mb-3 transition-colors duration-300 h-[1.2em]"
        :class="isDark ? 'text-gray-100' : 'text-gray-900'"
        :style="{ transform: `translateY(${scrollY * 0.04}px)` }"
      >
        <TypewriterText :text="profileData.name" :speed="60" tag="span" />
      </h1>

      <p
        class="text-xl md:text-2xl mb-8 transition-colors duration-300 h-[1.4em]"
        :class="isDark ? 'text-purple-400' : 'text-purple-600'"
        :style="{ transform: `translateY(${scrollY * 0.03}px)` }"
      >
        <TypewriterText :text="profileData.role" :speed="50" :delay="900" tag="span" />
      </p>

      <div
        class="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-8"
        :style="{ transform: `translateY(${scrollY * 0.02}px)` }"
      >
        <a
          :href="`mailto:${profileData.contact.email}`"
          class="px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg"
          :class="isDark
            ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:shadow-purple-900/30'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-purple-300/30'"
        >
          📧 {{ profileData.contact.email }}
        </a>
        <a
          :href="`tel:${profileData.contact.phone}`"
          class="px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg"
          :class="isDark
            ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:shadow-purple-900/30'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-purple-300/30'"
        >
          📱 {{ profileData.contact.phone }}
        </a>
        <span
          class="px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300"
          :class="isDark
            ? 'bg-gray-800 text-gray-300'
            : 'bg-gray-100 text-gray-700'"
        >
          📍 {{ profileData.contact.location }}
        </span>
      </div>

      <div
        class="flex flex-wrap justify-center gap-3 mb-10"
        :style="{ transform: `translateY(${scrollY * 0.01}px)` }"
      >
        <a
          :href="profileData.contact.linkedin"
          target="_blank"
          class="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg"
          :class="isDark
            ? 'bg-blue-900/50 text-blue-300 hover:bg-blue-800/60 hover:shadow-blue-900/40'
            : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-blue-300/40'"
        >LinkedIn</a>
        <a
          v-if="profileData.contact.website"
          :href="profileData.contact.website"
          target="_blank"
          class="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg"
          :class="isDark
            ? 'bg-purple-900/50 text-purple-300 hover:bg-purple-800/60 hover:shadow-purple-900/40'
            : 'bg-purple-50 text-purple-600 hover:bg-purple-100 hover:shadow-purple-300/40'"
        >🌐 Website</a>
      </div>

      <button
        @click="emit('toggle-theme')"
        class="px-6 py-3 rounded-full border-2 transition-all duration-300 hover:scale-110"
        :class="isDark
          ? 'bg-gray-800 border-purple-500 text-purple-400 hover:bg-gray-700'
          : 'bg-gray-100 border-purple-300 text-purple-600 hover:bg-gray-200'"
      >
        {{ isDark ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙' }}
      </button>
    </div>

    <div class="absolute bottom-10 animate-bounce">
      <svg class="w-6 h-6" :class="isDark ? 'text-purple-400' : 'text-purple-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </header>
</template>