<script setup>
import { useParallax } from '../composables/useParallax.js';
import TypewriterText from './TypewriterText.vue';
import CodeBackground from './CodeBackground.vue';

defineProps({
  isDark: Boolean
});

const { scrollY } = useParallax();

const codeSnippet = `$contact = [
    'email' => 'j-lozano@hotmail.es',
    'phone' => '666969888',
    'location' => 'M\u00e1laga, Espa\u00f1a',
    'linkedin' => '/in/jlozanofortes',
];`
</script>

<template>
  <section
    class="py-24 px-6 relative overflow-hidden"
    :class="isDark ? 'bg-[#111111]' : 'bg-gray-50'"
  >
    <CodeBackground v-if="isDark" :code="codeSnippet" delay="3500" />
    <div class="max-w-2xl mx-auto relative z-10">

      <h2
        class="text-3xl font-light mb-10 transition-colors duration-300 h-[1.4em] font-mono"
        :class="isDark ? 'text-gray-100' : 'text-gray-900'"
      >
        $<TypewriterText text="Contacto" :speed="30" tag="span" />
      </h2>

      <!-- Grid de contacto -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">

        <!-- Email -->
        <a
          :href="`mailto:${$attrs.contact?.email || ''}`"
          class="group flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
          :class="isDark
            ? 'bg-[#1a1a1a] border-gray-700 hover:border-green-500/60 hover:shadow-green-900/20'
            : 'bg-white border-gray-100 hover:border-purple-200 hover:shadow-purple-100/60'"
        >
          <div class="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300" :class="isDark ? 'bg-green-900/50 text-green-300' : 'bg-purple-50 text-purple-500'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div class="min-w-0">
            <div class="text-xs font-semibold uppercase tracking-wider mb-0.5 transition-colors duration-300" :class="isDark ? 'text-green-400' : 'text-purple-500'">Correo</div>
            <div class="text-sm truncate transition-colors duration-300" :class="isDark ? 'text-gray-200 group-hover:text-green-300' : 'text-gray-700 group-hover:text-purple-600'">{{ $attrs.contact?.email || 'correo@ejemplo.com' }}</div>
          </div>
        </a>

        <!-- Teléfono -->
        <a
          :href="`tel:${$attrs.contact?.phone || ''}`"
          class="group flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
          :class="isDark
            ? 'bg-[#1a1a1a] border-gray-700 hover:border-green-500/60 hover:shadow-green-900/20'
            : 'bg-white border-gray-100 hover:border-purple-200 hover:shadow-purple-100/60'"
        >
          <div class="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300" :class="isDark ? 'bg-green-900/50 text-green-300' : 'bg-purple-50 text-purple-500'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div class="min-w-0">
            <div class="text-xs font-semibold uppercase tracking-wider mb-0.5 transition-colors duration-300" :class="isDark ? 'text-green-400' : 'text-purple-500'">Teléfono</div>
            <div class="text-sm truncate transition-colors duration-300" :class="isDark ? 'text-gray-200 group-hover:text-green-300' : 'text-gray-700 group-hover:text-purple-600'">{{ $attrs.contact?.phone || '+34 600 000 000' }}</div>
          </div>
        </a>

        <!-- Ubicación -->
        <div
          class="flex items-center gap-3 p-4 rounded-xl border transition-colors duration-300"
          :class="isDark ? 'bg-[#1a1a1a] border-gray-700' : 'bg-white border-gray-100'"
        >
          <div class="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300" :class="isDark ? 'bg-green-900/50 text-green-300' : 'bg-purple-50 text-purple-500'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div class="min-w-0">
            <div class="text-xs font-semibold uppercase tracking-wider mb-0.5 transition-colors duration-300" :class="isDark ? 'text-green-400' : 'text-purple-500'">Ubicación</div>
            <div class="text-sm truncate transition-colors duration-300" :class="isDark ? 'text-gray-300' : 'text-gray-600'">{{ $attrs.contact?.location || 'Ciudad, País' }}</div>
          </div>
        </div>

        <!-- LinkedIn -->
        <a
          v-if="$attrs.contact?.linkedin"
          :href="$attrs.contact.linkedin"
          target="_blank"
          class="group flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
          :class="isDark
            ? 'bg-[#1a1a1a] border-gray-700 hover:border-green-500/60 hover:shadow-green-900/20'
            : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-blue-100/60'"
        >
          <div class="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300" :class="isDark ? 'bg-green-900/40 text-green-300' : 'bg-blue-50 text-blue-500'">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </div>
          <div class="min-w-0">
            <div class="text-xs font-semibold uppercase tracking-wider mb-0.5 transition-colors duration-300" :class="isDark ? 'text-green-400' : 'text-blue-500'">LinkedIn</div>
            <div class="text-sm truncate transition-colors duration-300" :class="isDark ? 'text-gray-200 group-hover:text-green-300' : 'text-gray-700 group-hover:text-blue-600'">linkedin.com/in/jlozanofortes</div>
          </div>
        </a>

        <!-- Website -->
        <a
          v-if="$attrs.contact?.website"
          :href="$attrs.contact.website"
          target="_blank"
          class="group flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-md sm:col-span-2"
          :class="isDark
            ? 'bg-[#1a1a1a] border-gray-700 hover:border-green-500/60 hover:shadow-green-900/20'
            : 'bg-white border-gray-100 hover:border-purple-200 hover:shadow-purple-100/60'"
        >
          <div class="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300" :class="isDark ? 'bg-green-900/50 text-green-300' : 'bg-purple-50 text-purple-500'">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <div class="min-w-0">
            <div class="text-xs font-semibold uppercase tracking-wider mb-0.5 transition-colors duration-300" :class="isDark ? 'text-green-400' : 'text-purple-500'">Web</div>
            <div class="text-sm truncate transition-colors duration-300" :class="isDark ? 'text-gray-200 group-hover:text-green-300' : 'text-gray-700 group-hover:text-purple-600'">{{ $attrs.contact.website }}</div>
          </div>
        </a>

      </div>
    </div>
  </section>
</template>