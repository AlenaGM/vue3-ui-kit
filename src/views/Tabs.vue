<template>
  <h1 class="heading-1">Tabs</h1>
  <Tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">First piece of information</div>
    <div v-if="selectedTab === 'Vue'">Second piece of information</div>
    <div v-if="selectedTab === 'React'">Third piece of information</div>
  </Tabs>
</template>

<script setup>
import { ref } from "vue";
import Tabs from "@/components/Tabs.vue";

const tabs = [
  { name: "About", label: "Our Project" },
  { name: "Vue", label: "About Vue" },
  { name: "React", label: "About React" },
];

const selectedTab = ref("Vue");
const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>
