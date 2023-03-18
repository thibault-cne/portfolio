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
      <SectionHeader title="About." subtitle="Me myself and I" />
    </div>
    <div
      v-motion
      :enter="{
        opacity: 0,
        x: -50,
      }"
      :visibleOnce="{
        opacity: 1,
        x: 0,
        transition: {
          delay: 200,
        },
      }"
      class="leading-relaxed w-full sm:w-1/2 whitespace-normal font-semibold text-base-content"
    >
      <p class="mt-2">
        I am always eager to learn about new technologies and stay current with
        the latest advancements in the industry. Whether it's exploring the
        latest machine learning algorithms or experimenting with blockchain
        technology, I am always up for a challenge and love to dive deep into
        new topics.
      </p>
      <p class="mt-2">
        On my portfolio website, you will find examples of my work, including
        projects that demonstrate my technical skills and showcase my ability to
        learn quickly and adapt to new technologies.
      </p>
      <p class="mt-2">
        If you have any questions or would like to discuss a potential project
        or collaboration, please
        <a href="#contact" class="text-primary">feel free to reach out to me</a
        >. I am always looking for new opportunities to learn and grow as a web
        and software engineer. Thank you for visiting my portfolio website !
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionHeader from "./SectionHeader.vue";

export default defineComponent({
  name: "About",
  components: { SectionHeader },
});
</script>
<style lang=""></style>
