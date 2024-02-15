<script>
export default {
  props: {
    padding: { type: String, default: "10px" },
  },
};
</script>

<template>
  <div class="main-container" :style="{ padding: padding }">
    <slot></slot>
  </div>
</template>

<style scoped>
.main-container {
  background-color: var(--color-background);
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  overflow-x: hidden;
  overflow-y: scroll;
  bottom: 0;
  top: 52px;
  left: 0;
  right: 0;
}
</style>
