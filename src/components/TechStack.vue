<script setup>
import { useParallax } from '../composables/useParallax.js';
import TypewriterText from './TypewriterText.vue';

const techIcons = {
  vue: '🔷', javascript: '🟨', typescript: '🔷',
  tailwind: '🔵', html5: '🟠', css3: '🔵',
  git: '📦', nodejs: '🟢', laravel: '🔶',
  php: '🐘', mysql: '🐬', figma: '🎨', vite: '⚡'
};

defineProps({
  isDark: Boolean
});

const { scrollY } = useParallax();
</script>

<template>
  <section
    class="py-20 px-6 relative overflow-hidden"
    :class="isDark ? 'bg-gray-900/50' : 'bg-gray-50'"
  >
    <div
      class="absolute inset-0 transition-transform duration-75"
      :style="{
        transform: `translateY(${scrollY * -0.04}px)`,
        background: isDark
          ? 'radial-gradient(ellipse at 70% 50%, rgba(192, 132, 252, 0.03) 0%, transparent 60%)'
          : 'radial-gradient(ellipse at 70% 50%, rgba(170, 59, 255, 0.02) 0%, transparent 60%)'
      }"
    ></div>

    <div class="max-w-2xl mx-auto relative z-10">
      <h2 class="text-3xl font-light mb-8 transition-colors duration-300 h-[1.4em]" :class="isDark ? 'text-gray-100' : 'text-gray-900'">
        $ <TypewriterText text="Stack Tecnológico" :speed="30" tag="span" />
      </h2>

      <div class="flex flex-wrap gap-3">
        <div
          v-for="(tech, index) in $attrs.techStack || []"
          :key="tech.name"
          class="px-5 py-3 rounded-full border-2 transition-all duration-300 hover:scale-110 cursor-default"
          :class="isDark
            ? 'bg-gray-800 border-purple-900 hover:border-purple-500'
            : 'bg-white border-purple-200 hover:border-purple-400'"
          :style="{ transform: `translateY(${scrollY * 0.015 * (index % 4)}px)` }"
        >
          <span class="mr-2">{{ techIcons[tech.icon] || '📄' }}</span>
          <span class="font-medium transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            {{ tech.name }}
          </span>
        </div>
      </div>

      <h3 class="text-2xl font-light mt-12 mb-6 transition-colors duration-300" :class="isDark ? 'text-gray-100' : 'text-gray-900'">
        Idiomas
      </h3>
      <div class="flex flex-wrap gap-3">
        <div
          v-for="lang in $attrs.languages || []"
          :key="lang.name"
          class="px-5 py-3 rounded-full border-2 transition-all duration-300"
          :class="isDark
            ? 'bg-gray-800 border-purple-900'
            : 'bg-white border-purple-200'"
        >
          <span class="font-medium transition-colors duration-300 font-mono" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            {{ lang.name }}
          </span>
          <span class="ml-2 text-sm transition-colors duration-300" :class="isDark ? 'text-purple-400' : 'text-purple-600'">
            // {{ lang.level }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>