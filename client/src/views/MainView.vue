<script setup lang="ts">
import Title from '../components/Title.vue';
import InfoPanel from '../components/InfoPanel.vue';
import Day from '../components/Day.vue';
</script>

<template>
    <Title />
    <div class="main-container">
        <InfoPanel />
        <div class="vertical-separation"></div>
        <Day />
    </div>
</template>

<style>
    .main-container{
        padding: 20px;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
        position: relative;
        overflow-x: hidden;
        overflow-y: scroll;
        box-sizing: border-box;
    }

    .vertical-separation{
        margin: 20px 0;
    }
</style>