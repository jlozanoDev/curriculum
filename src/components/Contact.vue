<script setup>
import { useParallax } from '../composables/useParallax.js';
import TypewriterText from './TypewriterText.vue';

defineProps({
  isDark: Boolean
});

const { scrollY } = useParallax();
</script>

<template>
  <section
    class="py-28 px-6 relative overflow-hidden"
    :class="isDark ? 'bg-gray-900/50' : 'bg-gray-50'"
  >
    <div
      class="absolute inset-0 transition-transform duration-75"
      :style="{
        transform: `translateY(${scrollY * 0.1}px)`,
        background: isDark
          ? 'radial-gradient(ellipse at 50% 50%, rgba(192, 132, 252, 0.06) 0%, transparent 50%)'
          : 'radial-gradient(ellipse at 50% 50%, rgba(170, 59, 255, 0.04) 0%, transparent 50%)'
      }"
    ></div>

    <div
      class="absolute inset-0 transition-transform duration-75 opacity-40"
      :style="{
        transform: `translateY(${scrollY * -0.05}px)`,
        background: isDark
          ? 'radial-gradient(ellipse at 30% 80%, rgba(192, 132, 252, 0.04) 0%, transparent 40%)'
          : 'radial-gradient(ellipse at 30% 80%, rgba(170, 59, 255, 0.03) 0%, transparent 40%)'
      }"
    ></div>

    <div
      class="absolute inset-0 transition-transform duration-75 opacity-30"
      :style="{
        transform: `translateY(${scrollY * -0.08}px)`,
        background: isDark
          ? 'radial-gradient(ellipse at 70% 20%, rgba(192, 132, 252, 0.03) 0%, transparent 40%)'
          : 'radial-gradient(ellipse at 70% 20%, rgba(170, 59, 255, 0.02) 0%, transparent 40%)'
      }"
    ></div>

    <div class="max-w-3xl mx-auto text-center relative z-10">
      <h2
        class="text-4xl font-light mb-12 transition-colors duration-300 h-[1.2em]"
        :class="isDark ? 'text-gray-100' : 'text-gray-900'"
        :style="{ transform: `translateY(${scrollY * 0.02}px)` }"
      >
        $ <TypewriterText text="Contacto" :speed="30" tag="span" />
      </h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10"
        :style="{ transform: `translateY(${scrollY * 0.03}px)` }"
      >
        <a
          :href="`mailto:${$attrs.contact?.email || ''}`"
          class="p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          :class="isDark
            ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:shadow-purple-900/30'
            : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-purple-300/30 shadow-sm'"
        >
          <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">📧</div>
          <div class="font-medium">{{ $attrs.contact?.email || 'email@ejemplo.com' }}</div>
        </a>

        <a
          :href="`tel:${$attrs.contact?.phone || ''}`"
          class="p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          :class="isDark
            ? 'bg-gray-800 text-gray-200 hover:bg-gray-700 hover:shadow-purple-900/30'
            : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-purple-300/30 shadow-sm'"
        >
          <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">📱</div>
          <div class="font-medium">{{ $attrs.contact?.phone || '+34 600 000 000' }}</div>
        </a>

        <a
          v-if="$attrs.contact?.linkedin"
          :href="$attrs.contact.linkedin"
          target="_blank"
          class="p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          :class="isDark
            ? 'bg-blue-900/40 text-blue-200 hover:bg-blue-800/50 hover:shadow-blue-900/40'
            : 'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-blue-300/40 shadow-sm'"
        >
          <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">💼</div>
          <div class="font-semibold">LinkedIn</div>
        </a>

        <a
          v-if="$attrs.contact?.website"
          :href="$attrs.contact.website"
          target="_blank"
          class="p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
          :class="isDark
            ? 'bg-purple-900/40 text-purple-200 hover:bg-purple-800/50 hover:shadow-purple-900/40'
            : 'bg-purple-50 text-purple-600 hover:bg-purple-100 hover:shadow-purple-300/40 shadow-sm'"
        >
          <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">🌐</div>
          <div class="font-semibold">jorgelozano.dev</div>
        </a>
      </div>

      <div
        class="inline-flex items-center gap-2 px-6 py-4 rounded-xl transition-all duration-300"
        :class="isDark
          ? 'bg-gray-800 text-gray-400'
          : 'bg-white text-gray-500 shadow-sm'"
        :style="{ transform: `translateY(${scrollY * 0.02}px)` }"
      >
        <span class="text-xl">📍</span>
        <span>{{ $attrs.contact?.location || 'Madrid, España' }}</span>
      </div>
    </div>
  </section>
</template>