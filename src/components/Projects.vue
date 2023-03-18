<template>
  <div class="w-full mt-[100px]">
    <div
      v-motion
      :enter="{
        y: -50,
        opacity: 0,
      }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
          delay: 100,
        },
      }"
      class="w-full self-start"
    >
      <SectionHeader title="Projects." subtitle="My work" />
    </div>
    <div
      class="mt-10 flex flex-col sm:flex-row sm:justify-evenly items-center sm:items-start"
    >
      <Project
        v-motion
        :enter="{
          opacity: 0,
          x: -100,
        }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          transition: {
            delay: 200 + index * 100,
          },
        }"
        v-for="(project, index) in projects"
        :project="project"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Project from "./Project.vue";
import { projects } from "../constants";
import SectionHeader from "./SectionHeader.vue";

export default defineComponent({
  name: "Projects",
  components: { Project, SectionHeader },
  data() {
    return {
      projects: projects,
    };
  },
});
</script>

<style scoped lang="ts"></style>
