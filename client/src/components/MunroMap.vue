<template>
    <div id="map">
        <div v-if="selectedMunro">
            <h1>{{ this.selectedMunro.name }}</h1>
            <button>Visited</button>
        </div>
        <l-map style="height: 500px, width: 500px" 
            :zoom="zoom" 
            :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker v-for="(munro, index) in munros" :key="index" :lat-lng="[munro.latlng_lat, munro.latlng_lng]" :icon="myIcon" @click="handleClick(munro)"></l-marker>
        </l-map>
    </div>
</template>

<script>
import { eventBus } from '@/main';
import L from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


export default {
    name: "munro-map",
    props: ['munros', 'dropDownSelect'],
    data () {
        return {
            zoom:7.5,
            url:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            center: [56.788845, -4.3396],
            myIcon: L.icon({
                iconUrl: 'my-icon.png',
                iconSize: [38, 95],
                iconAnchor: [22, 94],
                popupAnchor: [-3, -76],
                classname: ''
            }),
            selectedMunro: null,
            selectedMunroDropDown: null
        }
    },
    components: {
        LMap, 
        LTileLayer, 
        LMarker
    },
    methods: {
        handleClick: function(munro){
            this.selectedMunro = munro
        }
    },
    mounted() {
        eventBus.$on('drop-down-munro', payload => (this.selectedMunro = payload))
    }
}
</script>

<style>
#map {
    height: 70vh;
    width: 80%;
    margin: auto;
}

</style>