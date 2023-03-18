<template>
  <p class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
    <BounceAnimated :word="subtitle" />
  </p>
  <h2
    class="text-primary font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
  >
    <BounceAnimated :word="title" :delay="200" />
  </h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BounceAnimated from "./BounceAnimatedVisible.vue";

export default defineComponent({
  name: "SectionHeader",
  components: { BounceAnimated },
  props: {
    title: { required: true, type: String },
    subtitle: { required: true, type: String },
  },
});
</script>
<style lang=""></style>
