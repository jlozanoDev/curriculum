<script setup>
import { ref, onMounted } from 'vue';
import { useParallax } from '../composables/useParallax.js';
import TypewriterText from './TypewriterText.vue';

defineProps({
  isDark: Boolean
});

const visible = ref(false);

onMounted(() => {
  setTimeout(() => visible.value = true, 100);
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
        transform: `translateY(${scrollY * -0.06}px)`,
        background: isDark
          ? 'linear-gradient(180deg, rgba(192, 132, 252, 0.03) 0%, transparent 50%, rgba(192, 132, 252, 0.02) 100%)'
          : 'linear-gradient(180deg, rgba(170, 59, 255, 0.02) 0%, transparent 50%, rgba(170, 59, 255, 0.01) 100%)'
      }"
    ></div>

    <div class="max-w-2xl mx-auto relative z-10">
      <h2 class="text-3xl font-light mb-8 transition-colors duration-300 h-[1.4em]" :class="isDark ? 'text-gray-100' : 'text-gray-900'">
        $ <TypewriterText text="Experiencia Laboral" :speed="35" tag="span" />
      </h2>

      <div class="space-y-8">
        <div
          v-for="(exp, index) in $attrs.experience || []"
          :key="index"
          class="relative pl-8 border-l-2 transition-all duration-500"
          :class="[
            visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4',
            isDark ? 'border-purple-900' : 'border-purple-200'
          ]"
          :style="{ transitionDelay: `${index * 150}ms`, transform: `translateY(${scrollY * -0.01 * (index + 1)}px)` }"
        >
          <div class="absolute -left-2 top-0 w-4 h-4 rounded-full" :class="isDark ? 'bg-purple-600' : 'bg-purple-500'"></div>
          <h3 class="text-xl font-medium mb-1 transition-colors duration-300" :class="isDark ? 'text-gray-200' : 'text-gray-800'">
            {{ exp.position }}
          </h3>
          <p class="text-sm mb-2 transition-colors duration-300 font-mono" :class="isDark ? 'text-purple-400' : 'text-purple-600'">
            // {{ exp.company }} • {{ exp.period }}
          </p>
          <p class="leading-relaxed transition-colors duration-300" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            {{ exp.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>