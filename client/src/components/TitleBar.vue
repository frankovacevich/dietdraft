<script setup></script>

<template>
  <div class="title-bar">
    <slot></slot>
  </div>
</template>

<style>
.title-bar {
  width: 100%;
  height: 52px;
  background-color: var(--color-primary);
  color: var(--color-text);
  font-size: 14pt;
  font-weight: 600;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
}

.title-bar-icon {
  width: 40px;
  height: 40px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.title-bar-icon-hidden {
  width: 40px;
  height: 40px;
}

.title-bar-icon:active {
  background-color: var(--color-primary-active);
}
</style>
