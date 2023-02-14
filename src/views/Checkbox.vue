<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <Checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="love it!"
      v-model:checked="checkboxActive"
    />
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="ups. I'm disabled!"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"
    />
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <p>Selected Characters: {{ selectedCharacters }}</p>
    <checkbox-group
      v-model:value="selectedCharacters"
      name="characters"
      :options="listOfcharacters"
    />
  </div>
  <h2 class="heading-2">Switch</h2>
  <div class="line line_block">
    <p>Switch: {{ switchIceCream }}</p>
    <checkbox
      label="I love pistachio ice cream"
      id="switch"
      name="switch"
      value="I love pistachio ice cream"
      type="switch"
      v-model:checked="switchIceCream"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/components/Checkbox/CheckboxGroup.vue";

const checkboxActive = ref(true);
const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const listOfcharacters = ref([
  { name: "No-Face", id: "char1" },
  { name: "Catbus", id: "char2" },
  { name: "Kiki", id: "char3" },
  { name: "Totoro", id: "char4" },
  { name: "Chihiro", id: "char5" },
]);

const selectedCharacters = ref([]);
const switchIceCream = ref(false);
</script>
