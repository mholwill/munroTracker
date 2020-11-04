<template>
    <section>
        <h1>{{munro.name}}</h1>
        <h3>Region: {{ munro.region}}</h3>
        <button @click="handleClick">Save Visted</button>
        <IndividualMunroMap class="map" :munro="munro"/>
    </section>
</template>

<script>
import {eventBus} from '@/main.js'
import IndividualMunroMap from './IndividualMunroMap'
import myUpload from 'vue-image-crop-upload';

export default {
    name: "munro-detail",
    props: ['munro'],
    data() {
        return {
            imgDataUrl: ''
        }
    },
    components: {
        IndividualMunroMap
    },
    methods: {
        handleClick() {
            eventBus.$emit('show-form', true)
        }
        
    }
}
</script>

<style>

.map {
    position: relative;
    z-index: -1;
}

</style>