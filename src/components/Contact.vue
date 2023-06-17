<template>
  <div class="w-full relative">
    <div
      class="absolute p-10 transition-transform duration-150 ease-in-out right-0 z-10"
      :class="[
        alert.display ? 'block translate-x-0' : 'hidden translate-x-[150%]',
      ]"
    >
      <Alert :msg="alert.msg" :type="alert.type" />
    </div>
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
      <SectionHeader title="Contact." subtitle="Contact me" />
    </div>
    <div class="mt-10 mb-10">
      <div class="form-control max-w-xs">
        <label
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
          class="label"
        >
          <span class="label-text">What is your name?</span>
        </label>
        <input
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
          type="text"
          placeholder="Type here"
          class="input focus:outline-0 focus:border-primary input-bordered w-full max-w-xs"
          v-model="name"
        />
        <label
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
          class="label"
        >
          <span class="label-text">What is your email?</span>
        </label>
        <input
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
          type="email"
          placeholder="Type here"
          class="input focus:outline-0 focus:border-primary input-bordered w-full max-w-xs"
          v-model="mail"
        />
        <label
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
          class="label"
        >
          <span class="label-text">Your message</span>
        </label>
        <textarea
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
          class="textarea focus:outline-0 focus:border-primary text-base textarea-bordered h-24 w-full max-w-xs"
          placeholder="Message"
          v-model="message"
        ></textarea>
        <div class="w-full flex justify-center mt-4">
          <button
            v-motion
            :enter="{
              y: -50,
              opacity: 0,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                delay: 200,
              },
            }"
            class="btn btn-wide btn-primary"
            :class="[sending ? 'disabled' : '']"
            :disabled="sending"
            @click="send"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Alert from "./Alert.vue";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader.vue";

export default defineComponent({
  name: "Contact",
  components: { SectionHeader, Alert },
  data() {
    return {
      name: "",
      mail: "",
      message: "",
      sending: false,
      alert: {
        display: false,
        msg: "",
        type: "",
      },
    };
  },
  methods: {
    send() {
      if (!this.check) {
        return;
      }

      this.sending = true;

      const publicKey = `${import.meta.env.VITE_PUBLIC_KEY}`;
      const templateID = `${import.meta.env.VITE_TEMPLATE_ID}`;
      const serviceID = `${import.meta.env.VITE_SERVICE_ID}`;

      const data = {
        user_name: this.name,
        user_email: this.mail,
        message: this.message,
      };

      emailjs
        .send(serviceID, templateID, data, publicKey)
        .then((r) => {
          if (r.status === 200) {
            this.alert.msg = "Mail successfully sent.";
            this.alert.type = "success";
          } else {
            this.alert.msg = "Something went wrong please retry.";
            this.alert.type = "error";
          }

          this.alert.display = true;
          this.sending = false;
          setTimeout(() => {
            this.alert.display = false;
          }, 5000);
        })
        .catch(() => {
          this.alert.msg = "Something went wrong please retry.";
          this.alert.type = "error";
          this.alert.display = true;
          this.sending = false;
          setTimeout(() => {
            this.alert.display = false;
          }, 5000);
        });
    },
    check(): boolean {
      if (this.name === "" || this.mail === "" || this.message === "") {
        return false;
      }

      return true;
    },
  },
});
</script>

<style scoped lang="scss"></style>
