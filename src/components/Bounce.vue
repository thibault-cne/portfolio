<template>
  <span v-for="l in word" class="inline-block hover:animate-bounce-3d">{{
    l === " " ? "&nbsp;" : l
  }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Bounce",
  props: {
    word: { required: true, type: String },
  },
});
</script>
<style lang=""></style>
