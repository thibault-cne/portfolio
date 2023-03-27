<template>
  <section
    class="max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10 w-full"
    :class="[h ? 'min-h-screen' : '']"
  >
    <span :id="id">&nbsp;</span>
    <component :is="component"></component>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Techs, Projects, About, Contact } from ".";

export default defineComponent({
  name: "SectionWrapper",
  components: {
    Techs,
    Projects,
    About,
    Contact,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    component: {
      type: String,
      required: true,
    },
    h: {
      type: Boolean,
      required: false,
    },
  },
});
</script>
