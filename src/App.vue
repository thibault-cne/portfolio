<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import Contact from "./components/Contact.vue";
import Projects from "./components/Projects.vue";
import SectionWrapper from "./components/SectionWrapper.vue";

export default defineComponent({
  name: "App",
  components: { Navbar, Hero, SectionWrapper, Projects, Contact },
});
</script>

<template>
  <div class="flex flex-col">
    <div>
      <Navbar />
      <Hero />
    </div>
    <SectionWrapper component="About" id="about" h />
    <SectionWrapper component="Techs" id="techs" h />
    <SectionWrapper component="Projects" id="projects" h />
    <div class="w-full min-h-screen relative">
      <SectionWrapper component="Contact" id="contact" />
      <footer
        class="absolute bottom-0 footer footer-center p-4 bg-slate-700 text-base-content"
      >
        <div><p>Fait avec ♥ par Thibault.</p></div>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
