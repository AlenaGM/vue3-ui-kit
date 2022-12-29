<template>
  <div :class="['sidebar', { sidebar_isopen: openSidebar }]">
    <router-link
      class="sidebar__link"
      v-for="link in links"
      :key="link.name"
      :to="link.href"
      >{{ link.name }}</router-link
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  openSidebar: {
    type: Boolean,
    required: true,
  },
});
const links = ref([
  { name: "Typography", href: "/vue3-ui-kit/typography" },
  { name: "Button", href: "/vue3-ui-kit/button" },
  { name: "Checkbox", href: "/vue3-ui-kit/checkbox" },
  { name: "Radiobutton", href: "/vue3-ui-kit/radiobutton" },
  { name: "Progress", href: "/vue3-ui-kit/progress" },
  { name: "Input", href: "/vue3-ui-kit/input" },
  { name: "Tabs", href: "/vue3-ui-kit/tabs" },
  { name: "Table", href: "/vue3-ui-kit/table" },
]);
</script>

<style lang="scss" scoped>
.sidebar {
  left: 0;
  top: 62px;
  height: 100%;
  background: #fff;
  position: fixed;
  width: 250px;
  padding: 20px;
  transition: 0.2s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  transform: translateX(-250px);
  &_isopen {
    transform: translateX(0px);
  }
  &__link {
    display: block;
    border-radius: 12px;
    border: 2px solid #fff;
    transition: 0.2s;
    font-weight: bold;
    margin-bottom: 10px;
    &:hover {
      color: var(--primary);
    }
  }
}
</style>
