<template>
  <span
    v-motion
    :initial="{
      opacity: 0,
      x: 50,
      y: 50,
    }"
    :visibleOnce="{
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay:
          delay === undefined ? 200 + index * 100 : 200 + index * 100 + delay,
      },
    }"
    v-for="(l, index) in word"
    class="inline-block hover:animate-bounce-3d"
    >{{ l === " " ? "&nbsp;" : l }}</span
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BounceAnimated",
  props: {
    word: { required: true, type: String },
    delay: { required: false, type: Number },
  },
});
</script>
<style lang=""></style>
