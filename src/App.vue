<script setup>
import { profileData } from './data.js'
import { useTheme } from './composables/useTheme.js'
import Header from './components/Header.vue'
import Profile from './components/Profile.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import TechStack from './components/TechStack.vue'
import Certifications from './components/Certifications.vue'
import Contact from './components/Contact.vue'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
    <div class="min-h-screen transition-colors duration-300" :class="isDark ? 'bg-[#0a0a0a] text-green-400' : 'bg-white text-gray-600'">
    <Header :isDark="isDark" @toggle-theme="toggleTheme" />

    <Transition name="fade">
      <Profile :profile="profileData.profile" :isDark="isDark" />
    </Transition>

    <Transition name="fade">
      <Experience :experience="profileData.experience" :isDark="isDark" />
    </Transition>

    <Transition name="fade">
      <Education :education="profileData.education" :isDark="isDark" />
    </Transition>

    <Transition name="fade">
      <TechStack :techStack="profileData.techStack" :languages="profileData.languages" :isDark="isDark" />
    </Transition>

    <Transition name="fade">
      <Certifications :certifications="profileData.certifications" :isDark="isDark" />
    </Transition>

    <Transition name="fade">
      <Contact :contact="profileData.contact" :isDark="isDark" />
    </Transition>

    <footer class="py-8 text-center text-sm transition-colors duration-300" :class="isDark ? 'text-gray-600' : 'text-gray-400'">
      <p>Diseñado y desarrollado con ❤️</p>
    </footer>
  </div>
</template>

<style>
.fade-enter-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>