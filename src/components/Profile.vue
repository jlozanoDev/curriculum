<script setup>
import { useParallax } from '../composables/useParallax.js';
import TypewriterText from './TypewriterText.vue';
import CodeBackground from './CodeBackground.vue';

defineProps({
  isDark: Boolean
});

const { scrollY } = useParallax();

const codeSnippet = `$profile = [
    'name' => 'Jorge Lozano Fortes',
    'role' => 'Full_Stack_Developer',
    'exp' => '10+ years',
    'location' => 'M\u00e1laga, Spain'
];`
</script>

<template>
  <section
    class="py-20 px-6 relative overflow-hidden"
    :class="isDark ? 'bg-[#0a0a0a]' : 'bg-white'"
  >
    <CodeBackground v-if="isDark" :code="codeSnippet" delay="1000" />
    <div
      class="absolute inset-0 transition-transform duration-75"
      :style="{
        transform: `translateY(${scrollY * 0.08}px)`,
        background: isDark
          ? 'linear-gradient(180deg, transparent 0%, rgba(74, 222, 128, 0.02) 50%, transparent 100%)'
          : 'linear-gradient(180deg, transparent 0%, rgba(170, 59, 255, 0.02) 50%, transparent 100%)'
      }"
    ></div>

    <div class="max-w-2xl mx-auto relative z-10">
      <h2 class="text-3xl font-light mb-6 transition-colors duration-300 h-[1.4em] font-mono" :class="isDark ? 'text-gray-100' : 'text-gray-900'">
        $<TypewriterText text="Perfil" :speed="40" tag="span" />
      </h2>
      <p class="text-lg leading-relaxed transition-colors duration-300 min-h-[3em]" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
        <TypewriterText
          :text="$attrs.profile || 'Sin descripción'"
          :speed="15"
          :delay="600"
          mode="word"
          tag="span"
        />
      </p>
    </div>
  </section>
</template>