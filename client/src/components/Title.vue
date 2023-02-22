<template>
  <div class="title-container">
    <div class="title-icon">
      <slot name="left-icon"></slot>
    </div>

    <img src="@/assets/logo.svg" />

    <div class="title-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<style>
.title-container {
  display: flex;
  height: 54px;
  align-items: center;
  background: var(--color-primary);
  box-shadow: 0px 5px 5px var(--color-gray-0);
  z-index: 10;
}

.title-container img {
  height: 50px;
  flex: 1;
}

.title-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}
</style>
