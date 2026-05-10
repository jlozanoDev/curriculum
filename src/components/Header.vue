<script setup>
import { profileData } from '../data.js';
import { useParallax } from '../composables/useParallax.js';
import TypewriterText from './TypewriterText.vue';
import CodeBackground from './CodeBackground.vue';

defineProps({
  isDark: Boolean
});

const emit = defineEmits(['toggle-theme']);

const { scrollY } = useParallax();

const headerCode = `$user = User::find(1);
echo $user->name;
// Jorge Lozano Fortes

$role = 'Full Stack Developer';
echo $role;

$location = 'M\u00e1laga, Espa\u00f1a';`
</script>

<template>
  <header class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" :class="isDark ? 'bg-[#0a0a0a]' : 'bg-white'">
    <CodeBackground v-if="isDark" :code="headerCode" delay="500" speed="35" />
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 transition-transform duration-75" :style="{ transform: `translateY(${scrollY * 0.5}px)` }"></div>
      <div
        class="absolute -inset-40 transition-transform duration-75"
        :style="{
          transform: `translateY(${scrollY * 0.15}px)`,
          background: isDark
            ? 'radial-gradient(ellipse at 50% 30%, rgba(74, 222, 128, 0.05) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 50% 30%, rgba(170, 59, 255, 0.08) 0%, transparent 50%)'
        }"
      ></div>
      <div
        class="absolute -inset-40 transition-transform duration-75"
        :style="{
          transform: `translateY(${scrollY * 0.25}px)`,
          background: isDark
            ? 'radial-gradient(ellipse at 80% 80%, rgba(74, 222, 128, 0.03) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 80% 80%, rgba(170, 59, 255, 0.06) 0%, transparent 50%)'
        }"
      ></div>
      <div
        class="absolute w-96 h-96 rounded-full transition-transform duration-75"
        :style="{
          transform: `translateY(${scrollY * 0.08}px) translateX(${scrollY * 0.05}px)`,
          top: '10%', left: '5%',
          background: isDark
            ? 'radial-gradient(circle, rgba(74, 222, 128, 0.03) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(170, 59, 255, 0.03) 0%, transparent 70%)'
        }"
      ></div>
      <div
        class="absolute w-80 h-80 rounded-full transition-transform duration-75"
        :style="{
          transform: `translateY(${scrollY * -0.06}px) translateX(${scrollY * -0.03}px)`,
          bottom: '15%', right: '5%',
          background: isDark
            ? 'radial-gradient(circle, rgba(74, 222, 128, 0.03) 0%, transparent 70%)'
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
            :class="isDark ? 'bg-green-900/30' : 'bg-purple-300/40'"
            :style="{ transform: `translateY(${scrollY * -0.05}px)` }"
          ></div>
          <div
            class="absolute -inset-1 rounded-full blur-xl transition-opacity duration-300"
            :class="isDark ? 'bg-green-700/20' : 'bg-purple-400/30'"
            :style="{ transform: `translateY(${scrollY * -0.03}px)` }"
          ></div>
          <div
            class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 relative z-10"
            :class="isDark ? 'border-green-700' : 'border-purple-300'"
          >
            <img src="/image.png" alt="Profile" class="w-full h-full object-cover scale-110" />
          </div>
        </div>
      </div>
   
      <h1
        class="text-4xl md:text-6xl font-light mb-3 transition-colors duration-300 h-[1.2em] font-mono"
        :class="isDark ? 'text-gray-100' : 'text-gray-900'"
        :style="{ transform: `translateY(${scrollY * 0.04}px)` }"
      >
      <TypewriterText :text="profileData.name" :speed="60" tag="span" />
      </h1>
      <p
        class="text-xl md:text-2xl mb-8 transition-colors duration-300 h-[1.4em] font-mono"
        :class="isDark ? 'text-green-500' : 'text-purple-600'"
        :style="{ transform: `translateY(${scrollY * 0.03}px)` }"
      >
       &lt;h2&gt;$<TypewriterText :text="profileData.role" :speed="100" :delay="2000" tag="span" />&lt;/h2&gt;
      </p>

      <!-- Contacto info -->
      <div
        class="flex flex-wrap justify-center gap-x-1 gap-y-3 mb-8 text-sm"
        :style="{ transform: `translateY(${scrollY * 0.02}px)` }"
      >
        <!-- Email -->
        <a
          :href="`mailto:${profileData.contact.email}`"
          class="group flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 hover:scale-105"
          :class="isDark
            ? 'border-gray-700 bg-gray-900/60 hover:border-green-500/70 hover:bg-gray-800'
            : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-sm hover:shadow-purple-100'"
        >
          <span class="flex items-center justify-center w-5 h-5 rounded-full" :class="isDark ? 'text-green-400' : 'text-purple-500'">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </span>
          <span class="transition-colors duration-300" :class="isDark ? 'text-gray-300 group-hover:text-green-300' : 'text-gray-600 group-hover:text-purple-600'">{{ profileData.contact.email }}</span>
        </a>

        <!-- Separador -->
        <span class="hidden sm:flex items-center mx-1 transition-colors" :class="isDark ? 'text-gray-700' : 'text-gray-300'">·</span>

        <!-- Teléfono -->
        <a
          :href="`tel:${profileData.contact.phone}`"
          class="group flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 hover:scale-105"
          :class="isDark
            ? 'border-gray-700 bg-gray-900/60 hover:border-green-500/70 hover:bg-gray-800'
            : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-sm hover:shadow-purple-100'"
        >
          <span class="flex items-center justify-center w-5 h-5" :class="isDark ? 'text-green-400' : 'text-purple-500'">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <span class="transition-colors duration-300" :class="isDark ? 'text-gray-300 group-hover:text-green-300' : 'text-gray-600 group-hover:text-purple-600'">{{ profileData.contact.phone }}</span>
        </a>

        <!-- Separador -->
       
      </div>

      <!-- Links sociales -->
      <div
        class="flex flex-wrap justify-center gap-3 mb-10"
        :style="{ transform: `translateY(${scrollY * 0.01}px)` }"
      >
        <a
          :href="profileData.contact.linkedin"
          target="_blank"
          class="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          :class="isDark
            ? 'bg-gray-900/60 text-green-300 border border-green-800 hover:bg-gray-800 hover:border-green-600 hover:shadow-green-900/30'
            : 'bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 hover:border-blue-300 hover:shadow-blue-200/60'"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          LinkedIn
        </a>
        <a
          v-if="profileData.contact.website"
          :href="profileData.contact.website"
          target="_blank"
          class="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          :class="isDark
            ? 'bg-gray-900/60 text-green-300 border border-green-800 hover:bg-gray-800 hover:border-green-600 hover:shadow-green-900/30'
            : 'bg-purple-50 text-purple-600 border border-purple-100 hover:bg-purple-100 hover:border-purple-300 hover:shadow-purple-200/60'"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          Website
        </a>
      </div>

      <div class="mb-6 text-center">
        <span class="inline-flex items-center gap-1.5 text-xs transition-colors duration-300" :class="isDark ? 'text-gray-600' : 'text-gray-400'">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {{ profileData.contact.location }}
        </span>
      </div>

      <button
        @click="emit('toggle-theme')"
        class="px-6 py-3 rounded-full border-2 transition-all duration-300 hover:scale-110 cursor-pointer"
        :class="isDark
          ? 'bg-gray-900 border-green-500 text-green-400 hover:bg-gray-800'
          : 'bg-gray-100 border-purple-300 text-purple-600 hover:bg-gray-200'"
      >
        {{ isDark ? 'Modo Claro ☀️' : 'Modo Oscuro 🌙' }}
      </button>
    </div>

    <div class="absolute bottom-10 animate-bounce">
      <svg class="w-6 h-6" :class="isDark ? 'text-green-400' : 'text-purple-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </header>
</template>