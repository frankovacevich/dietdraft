<script setup lang="ts">
import QuantityBar from '../components/QuantityBar.vue';
</script>

<template>
    <div class="info-panel-container">
        <font-awesome-icon icon="fa-solid fa-chevron-left" />
        <div class="flex-fill"></div>
        <QuantityBar text="Protein" :value="120" unit="g" :setpoint="240" />
        <QuantityBar text="Fat" :value="120" unit="g" :setpoint="240" />
        <QuantityBar text="Carbs" :value="120" unit="g" :setpoint="240" />
        <QuantityBar text="Calories" :value="3250" unit="" :setpoint="4000" />
        <div class="flex-fill"></div>
        <font-awesome-icon icon="fa-solid fa-chevron-right" />

    </div>
</template>

<style>
    .info-panel-container{
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .flex-fill{
        flex: 1;
    }
</style>