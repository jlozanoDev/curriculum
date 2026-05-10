<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  code: { type: String, default: '' },
  speed: { type: Number, default: 25 },
  pauseAfter: { type: Number, default: 4000 },
  delay: { type: Number, default: 500 },
  opacity: { type: String, default: '30' },
})

const text = ref('')
let i = 0
let timer = null

function type() {
  if (i < props.code.length) {
    text.value += props.code[i]
    i++
    timer = setTimeout(type, props.speed)
  } else {
    timer = setTimeout(reset, props.pauseAfter)
  }
}

function reset() {
  text.value = ''
  i = 0
  timer = setTimeout(type, props.speed)
}

onMounted(() => {
  timer = setTimeout(type, props.delay)
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-start justify-end p-8">
    <pre
      class="font-mono text-sm leading-relaxed"
      :style="{ color: `rgba(74, 222, 128, ${parseInt(opacity) / 100})` }"
    ><code>{{ text }}<span class="animate-pulse">▊</span></code></pre>
  </div>
</template>
