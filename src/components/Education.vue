<script setup>
import { useParallax } from '../composables/useParallax.js';
import TypewriterText from './TypewriterText.vue';
import CodeBackground from './CodeBackground.vue';

defineProps({
  isDark: Boolean
});

const { scrollY } = useParallax();

const codeSnippet = `$education = [
    [
        'degree' => 'T\u00e9cnico Superior en ASI',
        'institution' => 'IES Juan de la Cierva',
        'period' => '2001 - 2003'
    ],
    [
        'degree' => 'T\u00e9cnico en Inform\u00e1tica',
        'institution' => 'IES Juan de la Cierva',
        'period' => '1997 - 2000'
    ],
];`
</script>

<template>
  <section
    class="py-20 px-6 relative overflow-hidden"
    :class="isDark ? 'bg-[#0a0a0a]' : 'bg-white'"
  >
    <div
      class="absolute inset-0 transition-transform duration-75"
      :style="{
        transform: `translateY(${scrollY * 0.05}px)`,
        background: isDark
          ? 'radial-gradient(ellipse at 30% 50%, rgba(74, 222, 128, 0.02) 0%, transparent 60%)'
          : 'radial-gradient(ellipse at 30% 50%, rgba(170, 59, 255, 0.02) 0%, transparent 60%)'
      }"
    ></div>

    <CodeBackground v-if="isDark" :code="codeSnippet" delay="2000" />
    <div class="max-w-2xl mx-auto relative z-10">
      <h2 class="text-3xl font-light mb-8 transition-colors duration-300 h-[1.4em] font-mono" :class="isDark ? 'text-gray-100' : 'text-gray-900'">
        $<TypewriterText text="Educación" :speed="35" tag="span" />
      </h2>

      <div class="space-y-6">
    <div
          v-for="(edu, index) in $attrs.education || []"
          :key="index"
          class="p-6 pb-2 rounded-xl transition-all duration-300 hover:scale-[1.02]"
          :class="isDark ? 'bg-[#111111]' : 'bg-white shadow-sm'"
          :style="{ transform: `translateY(${scrollY * 0.01 * (index + 1)}px)` }"
        >
          <h3 class="text-xl font-medium mb-2 transition-colors duration-300" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
            {{ edu.degree }}
          </h3>
          <p class="transition-colors duration-300 font-mono text-sm" :class="isDark ? 'text-green-400' : 'text-purple-600'">
            // {{ edu.institution }}
          </p>
          <p class="text-sm mt-1 transition-colors duration-300" :class="isDark ? 'text-gray-500' : 'text-gray-500'">
            {{ edu.period }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>