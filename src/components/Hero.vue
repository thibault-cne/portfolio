<template>
  <section
    v-motion
    :initial="{
      opacity: 0,
      x: -100,
    }"
    :visibleOnce="{
      opacity: 1,
      x: 0,
      transition: {
        duration: 200,
      },
    }"
    class="relative w-full h-screen mx-auto"
    id="hero"
  >
    <div
      class="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 sm:px-16 px-6"
    >
      <div class="relative flex flex-col justify-center items-center mt-5">
        <div
          class="absolute -top-0.5 opacity-75 w-6 h-6 rounded-full bg-primary blur group-hover:animate-bounce-3d"
        ></div>
        <div
          className="w-5 h-5 rounded-full bg-primary  group-hover:animate-bounce-3d"
        ></div>
        <div
          class="absolute px-2 opacity-75 blur w-1 sm:h-80 h-40 bg-gradient-to-b from-primary to-base-100"
        ></div>
        <div
          className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary to-base-100"
        ></div>
      </div>

      <div>
        <h1
          class="lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 font-bold"
        >
          <Bounce word="Hi I'm" />
          <p class="text-primary">
            <Bounce word="Thibault Cheneviere" :delay="200" />
          </p>
        </h1>
        <p
          class="mt-2 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"
        >
          a computer science student currently at TELECOM Nancy studying
          Internet System and Security (ISS).
        </p>
      </div>
    </div>

    <div class="absolute bottom-10 w-full flex justify-center items-center">
      <a
        class="no-animation animate-bounce rounded-full w-14 h-14 bg-base-300 flex justify-center items-center"
        href="#about"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="rotate-90 fill-primary w-[50%] h-[50%]"
        >
          <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
        </svg>
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Bounce from "./Bounce.vue";

export default defineComponent({
  name: "Hero",
  components: { Bounce },
});
</script>

<style scoped lang="scss"></style>
