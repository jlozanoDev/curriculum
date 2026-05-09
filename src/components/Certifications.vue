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
    class="py-20 px-6 relative overflow-hidden"
    :class="isDark ? 'bg-[#16171d]' : 'bg-white'"
  >
    <div
      class="absolute inset-0 transition-transform duration-75"
      :style="{
        transform: `translateY(${scrollY * -0.05}px)`,
        background: isDark
          ? 'radial-gradient(ellipse at 50% 30%, rgba(192, 132, 252, 0.03) 0%, transparent 60%)'
          : 'radial-gradient(ellipse at 50% 30%, rgba(170, 59, 255, 0.02) 0%, transparent 60%)'
      }"
    ></div>

    <div class="max-w-2xl mx-auto relative z-10">
      <h2 class="text-3xl font-light mb-8 transition-colors duration-300 h-[1.4em]" :class="isDark ? 'text-gray-100' : 'text-gray-900'">
        $ <TypewriterText text="Certificaciones" :speed="30" tag="span" />
      </h2>

      <div class="grid gap-4">
        <div
          v-for="(cert, index) in $attrs.certifications || []"
          :key="index"
          class="p-4 rounded-lg border-2 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
          :class="isDark
            ? 'bg-gray-800 border-purple-900 hover:border-purple-500 hover:shadow-purple-900/20'
            : 'bg-white border-purple-100 hover:border-purple-300 hover:shadow-purple-300/20'"
          :style="{ transform: `translateY(${scrollY * 0.02 * (index % 3)}px)` }"
        >
          <p class="font-medium transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            ✓ {{ cert }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>