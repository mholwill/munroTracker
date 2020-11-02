<template>
    <div>
        <h1>Munro List</h1>
        <select name="munros" id="munros" v-model="selectedMunro" v-on:change="handleSelect">
            <option value="">Select a Munro</option>
            <option value="">All Munros</option>
            <option v-for="(munro, index) in munros" :key="index" :value="munro">{{munro.name}}</option>
        </select>
        <!-- <MunroDetail v-if="selectedMunro" :munro="selectedMunro"/> -->
        
    </div>
</template>

<script>
import MunroDetail from "./MunroDetail"
import { eventBus } from '@/main';


export default {
    name: "munro_list",
    props: ['munros'],
    data(){
        return {
            selectedMunro: null
        }
    },
    components: {
        MunroDetail
    },
    methods: {
        handleSelect: function() {
            eventBus.$emit('drop-down-munro', this.selectedMunro)
        }
    }
}
</script>

<style>

</style>