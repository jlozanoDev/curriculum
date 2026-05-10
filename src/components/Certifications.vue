<script setup>
import { computed } from 'vue';
import { useParallax } from '../composables/useParallax.js';
import TypewriterText from './TypewriterText.vue';
import CodeBackground from './CodeBackground.vue';

const props = defineProps({
  isDark: Boolean,
  certifications: { type: Array, default: () => [] },
});

const { scrollY } = useParallax();

const codeSnippet = `const certifications = [
  'Curso de React.js',
  'Curso de ECMAScript',
  'Curso de NPM',
  'Gesti\u00f3n de Equipos \u00c1giles',
];`

const parsedCerts = computed(() =>
  props.certifications.map(cert => {
    const match = cert.match(/^(Curso de |Certificación en |Certificado de )(.*)/i);
    return match
      ? { type: match[1].trim(), name: match[2] }
      : { type: 'Certificación', name: cert };
  })
);
</script>

<template>
  <section
    class="py-20 px-6 relative overflow-hidden"
    :class="isDark ? 'bg-[#0a0a0a]' : 'bg-white'"
  >
    <CodeBackground v-if="isDark" :code="codeSnippet" delay="3000" />
    <div
      class="absolute inset-0 transition-transform duration-75"
      :style="{
        transform: `translateY(${scrollY * -0.05}px)`,
        background: isDark
          ? 'radial-gradient(ellipse at 50% 30%, rgba(74, 222, 128, 0.02) 0%, transparent 60%)'
          : 'radial-gradient(ellipse at 50% 30%, rgba(170, 59, 255, 0.02) 0%, transparent 60%)'
      }"
    ></div>

    <div class="max-w-2xl mx-auto relative z-10">
      <h2
        class="text-3xl font-light mb-10 transition-colors duration-300 h-[1.4em] font-mono"
        :class="isDark ? 'text-gray-100' : 'text-gray-900'"
      >
        $<TypewriterText text="Certificaciones $Cursos" :speed="30" tag="span" />
      </h2>

      <div class="grid gap-3">
        <div
          v-for="(cert, index) in parsedCerts"
          :key="cert.name || index"
          class="flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.015] hover:shadow-md"
          :class="isDark
            ? 'bg-[#111111] border-gray-700 hover:border-green-500/50 hover:shadow-green-900/20'
            : 'bg-gray-50 border-gray-100 hover:border-purple-200 hover:shadow-purple-100/60 hover:bg-white'"
        >
          <!-- Ícono de certificado -->
          <div
            class="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300"
            :class="isDark ? 'bg-green-900/50 text-green-300' : 'bg-purple-50 text-purple-500'"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>

          <!-- Contenido -->
          <div class="flex-1 min-w-0">
            <p
              class="text-xs font-semibold uppercase tracking-wider mb-0.5 transition-colors duration-300"
              :class="isDark ? 'text-green-400' : 'text-purple-500'"
            >
              {{ cert.type }}
            </p>
            <p
              class="text-sm font-medium leading-snug transition-colors duration-300"
              :class="isDark ? 'text-gray-200' : 'text-gray-800'"
            >
              {{ cert.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>