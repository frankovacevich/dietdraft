<script setup lang="ts">
import Title from "../components/Title.vue";
import InfoPanel from "../components/InfoPanel.vue";
import Day from "../components/Day.vue";
</script>

<template>
  <Title />
  <div class="main-container">
    <div class="main-info-panel-container">
      <InfoPanel
        :protein="100"
        :fat="100"
        :carbs="100"
        :protein-setpoint="150"
        :fat-setpoint="200"
        :carbs-setpoint="150"
      />
    </div>
    <div class="main-day-container">
      <Day />
    </div>
  </div>
</template>

<style>
.main-container {
  left: 0;
  bottom: 0;
  top: 54px;
  right: 0;
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  background-color: var(--color-background);
}

.main-info-panel-container {
  position: sticky;
  top: 0px;
  padding: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: var(--color-background);
  box-shadow: 0px 5px 5px var(--color-gray-0);
  z-index: 10;
}

.main-day-container {
  padding: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  z-index: 5;
}
</style>
