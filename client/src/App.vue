<template>
  <div id="app">
    <h1>MUNRO TRACKER</h1>
    <MunroList :munros="munros"></MunroList>
    <MunroDetail v-if="selectedMunro" :munro="selectedMunro"></MunroDetail>
  
    <MunroMap v-if="!selectedMunro" :munros="munros"/>
    <VisitedMunros :visitedMunros="visitedMunros"/>
    
  </div>
</template>

<script>
import { eventBus } from '@/main';
import VueGallery from 'vue-gallery'
import MunroDetail from './components/MunroDetail';
import MunroService from '@/services/MunroService';
import MunroList from './components/MunroList';
import MunroMap from './components/MunroMap';
import VisitedMunros from './components/VisitedMunros';

export default {
  name: 'App',
  data() {
    return {
      munros: [],
      visitedMunros: [],
      selectedMunro: null
    }
  },
  mounted(){
    fetch('https://munroapi.herokuapp.com/munros')
    .then(res => res.json())
    .then(munros => this.munros = munros)

    MunroService.getMunrosVisits()
    .then(data => this.visitedMunros = data)

    eventBus.$on('drop-down-munro', (payload) => {
      this.selectedMunro = payload
      this.index = true
    })

    eventBus.$on('clicked-munro', payload => (this.selectedMunro = payload))

    eventBus.$on('munro-submit', payload => MunroService.addMunroVisit(payload))


    
  },
  components: {
    MunroList,
    MunroMap,
    MunroDetail,
    VisitedMunros,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
