<template>
    <div id="map-container">
        
        <l-map style="height: 500px, width: 500px" 
            :zoom="zoom" 
            :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker :lat-lng="[munro.latlng_lat, munro.latlng_lng]"></l-marker>
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
    props: ['munro'],
    data () {
        return {
            zoom:7.5,
            url:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            center: [56.788845, -4.3396],
            // myIcon: L.icon({
            //     iconUrl: '../assets/images/blue_pin.png',
            //     iconSize: [30, 40],
            //     iconAnchor: [22, 94],
            //     popupAnchor: [-3, -76],
            //     classname: 'blue_pin'
            // }),
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
            eventBus.$emit('clicked-munro', this.selectedMunro)
        }
    }
}
</script>

<style>
#map-container {
    height: 70vh;
    width: 80%;
    margin: auto;
}




</style>