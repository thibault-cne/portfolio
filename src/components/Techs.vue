<template>
  <div class="w-full h-screen mt-[100px]">
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
      <p
        class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
      >
        Technologies I use
      </p>
      <h2
        class="text-primary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
      >
        Techs.
      </h2>
    </div>
    <div class="flex flex-col gap-4 justify-center items-center mt-[100px]">
      <div
        v-for="(row, index) in splitTechs(4)"
        v-motion
        :enter="{
          opacity: 0,
        }"
        :visibleOnce="{
          opacity: 1,
          transition: {
            delay: 200 + index * 100,
          },
        }"
        class="flex gap-6"
      >
        <img
          v-for="tech in row"
          :src="tech.icon"
          :alt="tech.name"
          class="w-[60px] h-[60px] transition-transform sm:hover:scale-150"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { techs } from "../constants";
import { textVariant, slideIn } from "../utils/motion";

export default defineComponent({
  name: "Techs",
  mounted() {
    setTimeout(() => {
      this.display = true;
    }, 1000);
  },
  data() {
    return {
      techs: techs,
      display: false,
    };
  },
  methods: {
    textVariant(delay: number) {
      return textVariant(delay);
    },
    slideIn() {
      return slideIn();
    },
    splitTechs(numRows: number) {
      let rows = [];

      let arrayIndex = 0;
      const arraySize = techs.length;

      while (arrayIndex < arraySize) {
        rows.push(techs.slice(arrayIndex, (arrayIndex += numRows)));
      }

      return rows;
    },
  },
});
</script>

<style scoped lang="scss"></style>
