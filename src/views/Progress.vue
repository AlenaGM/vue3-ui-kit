<template>
  <h1 class="heading-1">Progress</h1>
  <h2 class="heading-2">Progress Bar</h2>
  <div class="line line_block">
    <ProgressBar maxWidth="400px" :percentage="percentBar" color="danger" />
    <Button label="- 10%" @click="removePercentBar" />
    <Button label="+ 10%" @click="addPercentBar" />
  </div>
  <h2 class="heading-2">Progress Circle</h2>
  <div class="line line_block">
    <ProgressCircle :percentage="percentCircle" color="warning" />
    <Button label="- 10%" @click="removePercentCircle" />
    <Button label="+ 10%" @click="addPercentCircle" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProgressBar from "@/components/progress/ProgressBar.vue";
import ProgressCircle from "@/components/progress/ProgressCircle.vue";
import Button from "@/components/Button.vue";

const percentBar = ref(40);
const percentCircle = ref(60);

const addPercentBar = () => {
  percentBar.value += 10;
  if (percentBar.value > 100) {
    percentBar.value = 100;
  }
};

const removePercentBar = () => {
  percentBar.value -= 10;
  if (percentBar.value < 0) {
    percentBar.value = 0;
  }
};

const addPercentCircle = () => {
  percentCircle.value += 10;
  if (percentCircle.value > 100) {
    percentCircle.value = 100;
  }
};

const removePercentCircle = () => {
  percentCircle.value -= 10;
  if (percentCircle.value < 0) {
    percentCircle.value = 0;
  }
};
</script>

<style lang="scss" scoped>
.progress {
  height: 10px;
  border-radius: 4px;
  &-container {
    margin-bottom: 20px;
    overflow: hidden;
  }
  &-bar {
    background: #000;
    height: 100%;
    border-radius: 4px;
    transition: 0.5s;
  }
  &-percent {
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 10px;
  }
}
</style>
