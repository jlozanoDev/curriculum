import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)

export function useParallax() {
  const handleScroll = () => {
    scrollY.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const parallaxStyle = (speed = 0.2, offset = 0) => ({
    transform: `translateY(${(scrollY.value - offset) * speed}px)`,
  })

  const parallazBg = (speed = 0.1, offset = 0) => ({
    backgroundPositionY: `${(scrollY.value - offset) * speed}px`,
  })

  return { scrollY, parallaxStyle, parallazBg }
}