<script setup></script>

<template>
  <div class="main-container">
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
  top: 54px;
  left: 0;
  right: 0;
  padding: 10px;
}
</style>
