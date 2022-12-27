<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p>Selected Color: {{ selectedColor }}</p>
    <div v-for="color in colors" :key="color.id">
      <radiobutton
        :value="color.name"
        :label="color.name"
        :id="color.id"
        name="color"
        v-model:checkedValue="selectedColor"
      />
    </div>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <radiobutton
      value="Radiobutton disabled"
      label="Radiobutton disabled"
      id="RadiobuttonDisabled"
      name="Radiobutton disabled"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Radiobutton from "@/components/Radiobutton.vue";

const colors = ref([
  {
    name: "red",
    id: "f1",
  },
  {
    name: "blue",
    id: "f2",
  },
  {
    name: "yellow",
    id: "f3",
  },
  {
    name: "green",
    id: "f4",
  },
  {
    name: "black",
    id: "f5",
  },
]);

const selectedColor = ref("");

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>
