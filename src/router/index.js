import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/Checkbox.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/vue3-ui-kit/",
      name: "Index",
      component: Index,
    },
    {
      path: "/vue3-ui-kit/button",
      name: "Button",
      component: Button,
    },
    {
      path: "/vue3-ui-kit/typography",
      name: "Typography",
      component: Typography,
    },
    {
      path: "/vue3-ui-kit/checkbox",
      name: "Checkbox",
      component: Checkbox,
    },
  ],
});

export default router;
