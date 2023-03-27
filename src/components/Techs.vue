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
      <SectionHeader title="Tech." subtitle="Technologies I use" />
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
          class="w-[60px] h-[60px] transition-transform sm:hover:scale-150 cursor-pointer"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { techs } from "../constants";
import SectionHeader from "./SectionHeader.vue";

export default defineComponent({
  name: "Techs",
  components: { SectionHeader },
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
