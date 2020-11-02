<template>
    <div id="map">
        <h1>MAP</h1>
        <l-map style="height: 500px, width: 500px" 
            :zoom="zoom" 
            :center="center">
            <l-tile-layer :url="url"></l-tile-layer>
            <l-marker v-for="(munro, index) in munros" :key="index" :lat-lng="[munro.latlng_lat, munro.latlng_lng]"></l-marker>
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
            center: [56.788845, -4.3396]
        }
    },
    components: {
        LMap, 
        LTileLayer, 
        LMarker
    }

}
</script>

<style>
#map {
    height: 50vh;
    margin: 0;
}

</style>