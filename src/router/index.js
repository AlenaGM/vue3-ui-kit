import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/Index.vue";
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/Checkbox.vue";
import Radiobutton from "@/views/Radiobutton.vue";
import Progress from "@/views/Progress.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/vue3-ui-kit",
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
    {
      path: "/vue3-ui-kit/radiobutton",
      name: "Radiobutton",
      component: Radiobutton,
    },
    {
      path: "/vue3-ui-kit/progress",
      name: "Progress",
      component: Progress,
    },
  ],
});

export default router;
