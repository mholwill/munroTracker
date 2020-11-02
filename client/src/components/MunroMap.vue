<template>
    <div id="map">
        <div v-if="selectedMunro">
            <h1>{{ this.selectedMunro.name }}</h1>
        </div>
        <l-map style="height: 500px, width: 500px" 
            :zoom="zoom" 
            :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker v-for="(munro, index) in munros" :key="index" :lat-lng="[munro.latlng_lat, munro.latlng_lng]" @click="handleClick(munro)"></l-marker>
        </l-map>
    </div>
</template>

<script>
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
    props: ['munros'],
    data () {
        return {
            zoom:8,
            url:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            center: [56.788845, -4.3396],
            selectedMunro: null
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
    }
}
</script>

<style>
#map {
    height: 50vh;
    margin: 0;
}

</style>