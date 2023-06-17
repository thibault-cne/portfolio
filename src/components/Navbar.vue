<template>
  <nav class="sm:px-16 px-6 w-screen flex items-center fixed top-0 z-20 py-4">
    <div class="w-full flex flex-col mb-4">
      <div class="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href="#hero" class="flex items-center gap-2" @click="setActive('')">
          <img
            :src="logo"
            alt="logo"
            class="mask mask-circle w-[52px] h-[52px]"
          />
          <div class="text-primary text-[36px] font-bold cursor-pointer">
            <span class="text-secondary hover:animate-bounce-3d inline-block"
              >#</span
            >
            <Bounce :word="'Thibault'" />
          </div>
        </a>

        <ul class="list-none hidden sm:flex flex-row gap-10">
          <li
            v-for="link in navLinks"
            class="hover:text-primary text-[18px] font-medium cursor-pointer"
            :class="[
              active === link.name ? 'text-secondary' : 'text-base-content',
            ]"
            @click="setActive(link.name)"
          >
            <a :href="'#' + link.id">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Bounce from "./Bounce.vue";

export default defineComponent({
  name: "Navbar",
  components: { Bounce },
  data() {
    return {
      active: "",
      logo: logo,
      navLinks: navLinks,
      toggle: false,
      menu: menu,
      close: close,
    };
  },
  methods: {
    setActive(active: string) {
      this.active = active;
    },
    toggleMenu() {
      this.toggle = !this.toggle;
    },
  },
});
</script>

<style scoped lang="scss"></style>
