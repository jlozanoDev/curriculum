<script setup>
import { computed } from 'vue';
import { useParallax } from '../composables/useParallax.js';
import TypewriterText from './TypewriterText.vue';

const techColors = {
  vue: '#42b883',
  javascript: '#f7df1e',
  typescript: '#3178c6',
  tailwind: '#38bdf8',
  html5: '#e34f26',
  css3: '#264de4',
  laravel: '#ff2d20',
  php: '#777bb4',
  mysql: '#4479a1',
  git: '#f05032',
  figma: '#f24e1e',
  vite: '#646cff',
  nodejs: '#339933',
  react: '#61dafb',
  jquery: '#0769ad',
  bootstrap: '#7952b3',
  docker: '#2496ed',
  graphql: '#e535ab',
  github_actions: '#2088ff',
  ai: '#ffb86b',
};

const levelMap = {
  'Nativo': 100,
  'Professional Working': 80,
  'Conversational': 60,
  'Basic': 30,
};

const categoryOrder = ['Frontend', 'Backend', 'Herramientas'];

const props = defineProps({
  isDark: Boolean,
  techStack: { type: Array, default: () => [] },
  languages: { type: Array, default: () => [] },
});

const { scrollY } = useParallax();

const groupedTech = computed(() => {
  const groups = {};
  props.techStack.forEach(tech => {
    const cat = tech.category || 'Otros';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(tech);
  });
  return [...categoryOrder, ...Object.keys(groups).filter(k => !categoryOrder.includes(k))]
    .filter(cat => groups[cat])
    .map(cat => ({ label: cat, items: groups[cat] }));
});
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
      <h2
        class="text-3xl font-light mb-10 transition-colors duration-300 h-[1.4em]"
        :class="isDark ? 'text-gray-100' : 'text-gray-900'"
      >
        $ <TypewriterText text="Stack Tecnológico" :speed="30" tag="span" />
      </h2>

      <!-- Tecnologías agrupadas por categoría -->
      <div class="space-y-7 mb-12">
        <div v-for="group in groupedTech" :key="group.label">
          <h3
            class="text-xs font-semibold uppercase tracking-widest mb-3 transition-colors duration-300"
            :class="isDark ? 'text-purple-400' : 'text-purple-500'"
          >
            {{ group.label }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <div
              v-for="tech in group.items"
              :key="tech.name"
              class="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 hover:scale-105 cursor-default"
              :class="isDark
                ? 'bg-gray-800/80 border-gray-700 hover:border-purple-500/60'
                : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-sm'"
            >
              <span
                class="w-2.5 h-2.5 rounded-full shrink-0"
                :style="{ background: techColors[tech.icon] || '#a78bfa' }"
              ></span>
              <span
                class="text-sm font-medium transition-colors duration-300"
                :class="isDark ? 'text-gray-300' : 'text-gray-700'"
              >
                {{ tech.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Idiomas -->
      <div>
        <h3
          class="text-xs font-semibold uppercase tracking-widest mb-4 transition-colors duration-300"
          :class="isDark ? 'text-purple-400' : 'text-purple-500'"
        >
          Idiomas
        </h3>
        <div class="space-y-3">
          <div
            v-for="lang in languages"
            :key="lang.name"
            class="p-4 rounded-xl border transition-colors duration-300"
            :class="isDark ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-200'"
          >
            <div class="flex justify-between items-center mb-2.5">
              <span
                class="text-sm font-medium transition-colors duration-300"
                :class="isDark ? 'text-gray-200' : 'text-gray-800'"
              >
                {{ lang.name }}
              </span>
              <span
                class="text-xs font-medium px-2 py-0.5 rounded-full transition-colors duration-300"
                :class="isDark ? 'bg-purple-900/50 text-purple-300' : 'bg-purple-50 text-purple-600'"
              >
                {{ lang.level }}
              </span>
            </div>
            <div
              class="h-1 rounded-full overflow-hidden"
              :class="isDark ? 'bg-gray-700' : 'bg-gray-100'"
            >
              <div
                class="h-full rounded-full transition-all duration-700"
                :class="isDark ? 'bg-purple-500' : 'bg-purple-400'"
                :style="{ width: (levelMap[lang.level] ?? 50) + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>