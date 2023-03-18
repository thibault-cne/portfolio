<template>
  <div class="relative w-72 sm:w-96 group mt-10 sm:mt-0">
    <div
      class="w-full h-full absolute bg-gradient-to-r from-secondary to-primary blur opacity-75 rounded-2xl group-hover:opacity-100 transition duration-1000 group-hover:duration-200 group-hover:scale-110"
    ></div>
    <div
      class="w-full card bg-base-100 transition-transform duration-1000 group-hover:duration-200 group-hover:scale-105"
    >
      <figure class="relative">
        <a :href="project.github.link" class="absolute top-0 right-0 z-20 p-4">
          <img
            :src="github"
            alt="github"
            class="w-[36px] h-[36px]"
            :class="project.github.invert ? 'invert' : 'invert-0'"
          />
        </a>
        <img :src="project.image" :alt="project.name" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-primary font-bold text-2xl">
          {{ project.name }}
          <!-- <div class="badge badge-secondary">NEW</div> -->
        </h2>
        <p class="text-base-content">{{ project.description }}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          <p
            v-for="tag in project.tags"
            class="text-[14px] border rounded-full p-1 px-2 text-center grow-0"
            :class="tag.color"
          >
            #{{ tag.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Project } from "../constants";
import { github } from "../assets";

export default defineComponent({
  name: "Project",
  props: {
    project: { required: true, type: Object as PropType<Project> },
  },
  data() {
    return {
      github: github,
    };
  },
});
</script>

<style scoped lang="scss"></style>
