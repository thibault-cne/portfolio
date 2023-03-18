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
    <SectionWrapper component="About" id="about" />
    <SectionWrapper component="Techs" id="techs" />
    <SectionWrapper component="Projects" id="projects" />
    <SectionWrapper component="Contact" id="contact" />
  </div>
</template>

<style scoped lang="scss"></style>
