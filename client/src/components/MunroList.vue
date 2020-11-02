<template>
    <div>
        <h1>Munro List</h1>
        <select  name="munros" id="munros">
            <option value="">Select a Munro</option>
            <option value="">All Munros</option>
            <option v-for="(munro, index) in munros" :key="index" :value="selectedMunros">{{munro.name}}</option>
        </select>
        <MunroDetail v-if="selectedMunro" :munro="selectedMunro"/>
    </div>
</template>

<script>
import MunroDetail from "./MunroDetail"
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
    }
}
</script>

<style>

</style>