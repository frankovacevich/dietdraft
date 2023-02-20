<script lang="ts">
    export default {
        props: {
            value: {type: Number, default: 0},
            setpoint: {type: Number, default: 1},
            unit: {type: String, default: ''},
            text: {type: String, default: ''},
        },

        computed: {
            barWidth(){
                return 100 * this.value / this.setpoint;
            },

            barColor(){
                return this.barWidth < 80 ? 'blue' : 'red';
            }
        }
    }

   


</script>

<template>
    <div class="quantity-bar-container">
        <span>{{ text }}</span>
        <div class="quantity-bar-outer">
            <div class="quantity-bar-inner" :style="{ width: barWidth + '%', backgroundColor: barColor }"></div>
        </div>
        <span>{{ value }}{{unit}} </span>
    </div>
</template>

<style>
    .quantity-bar-container{
        display: flex;
        height: 50px;
        flex-direction: column;
        width: 40px;
        font-size: 13px;
        text-align: center;
    }
    
    .quantity-bar-outer{
        background-color: gray;
        border-radius: 6px;
        width: 100%;
        height: 6px;
    }

    .quantity-bar-inner{
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        height: 6px;
    }


</style>