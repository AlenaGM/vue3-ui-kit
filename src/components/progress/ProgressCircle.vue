<template>
  <div class="progress-circle">
    <span
      class="progress-circle-percent"
      :style="[{ color: `var(--${color})` }]"
      >{{ percentage }}%</span
    >
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      class="progress-circle-svg"
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`var(--${color}-hover)`"
        stroke-width="12"
      />
      <circle
        class="progress-circle-line"
        :style="[{ 'stroke-dashoffset': `calc(100 - ${percentage})` }]"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        :stroke="`var(--${color})`"
        stroke-width="12"
        pathLength="100"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  percentage: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "primary",
  },
});
</script>

<style lang="scss" scoped>
.progress {
  &-circle {
    position: relative;
    margin-bottom: 20px;
    width: 120px;
    height: 120px;
    position: relative;
    z-index: -1;
    &-svg {
      transform: rotate(-90deg);
    }
    &-percent {
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 18px;
    }
    &-line {
      stroke-dasharray: 100;
      transition: 0.5s;
    }
  }
}
</style>
