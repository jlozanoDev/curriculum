<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue'

const props = defineProps({
  text: { type: String, default: '' },
  speed: { type: Number, default: 50 },
  tag: { type: String, default: 'p' },
  cursor: { type: Boolean, default: true },
  delay: { type: Number, default: 0 },
  mode: { type: String, default: 'char' }
})

const displayed = ref('')
const typing = ref(false)

let timer = null
const chars = ref([])
const words = ref([])

const startTyping = () => {
  typing.value = true
  displayed.value = ''
  let i = 0

  if (props.mode === 'word') {
    words.value = props.text.split(/(\s+)/)
    timer = setInterval(() => {
      if (i < words.value.length) {
        displayed.value += words.value[i]
        i++
      } else {
        clearInterval(timer)
        typing.value = false
      }
    }, props.speed)
  } else {
    chars.value = props.text.split('')
    timer = setInterval(() => {
      if (i < chars.value.length) {
        displayed.value += chars.value[i]
        i++
      } else {
        clearInterval(timer)
        typing.value = false
      }
    }, props.speed)
  }
}

onMounted(() => {
  setTimeout(startTyping, props.delay)
})

watch(() => props.text, () => {
  clearInterval(timer)
  displayed.value = ''
  setTimeout(startTyping, props.delay)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <component :is="tag" class="typewriter-wrapper">
    <span class="typewriter-text">{{ displayed }}</span>
    <span v-if="cursor && (typing || displayed.length < text.length)" class="typewriter-cursor">|</span>
  </component>
</template>

<style scoped>
.typewriter-wrapper {
  display: inline;
}

.typewriter-cursor {
  animation: blink 0.8s step-end infinite;
  font-weight: 100;
  margin-left: 1px;
  opacity: 1;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>