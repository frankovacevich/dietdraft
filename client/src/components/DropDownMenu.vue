<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<template>
  <div class="title-bar-icon" @click="visible = !visible">
    <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
  </div>

  <div
    class="dropdown-overlay"
    :class="{ gone: !visible }"
    @click="visible = false"
  >
    <div class="dropdown-container" :class="{ gone: !visible }">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.dropdown-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}

.dropdown-overlay.gone {
  display: none;
}

.dropdown-container {
  position: absolute;
  top: 54px;
  right: 6px;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-0);
  border-radius: 7px;
  font-size: 1rem;
  font-weight: normal;
  opacity: 1;
  transition: opacity 5s ease-in-out;
  overflow: hidden;
}

.dropdown-container.gone {
  opacity: 0;
}

.dropdown-container a {
  padding: 15px;
  border-radius: 5px;
  color: inherit;
  text-decoration: none;
}

.dropdown-container a:active {
  background-color: var(--color-gray-1);
}
</style>
