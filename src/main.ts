import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import "./index.css";
import App from "./App.vue";

createApp(App).use(MotionPlugin).mount("#app");

document.querySelector("html")?.setAttribute("data-theme", "dark");
