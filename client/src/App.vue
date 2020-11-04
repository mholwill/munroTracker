<template>
  <div id="app">
    <h1>MUNRO TRACKER</h1>
    <MunroList :munros="munros"/>
    
    <MunroDetail v-if="selectedMunro" :munro="selectedMunro"></MunroDetail>

    
    <MunroMap v-if="!selectedMunro" :munros="munros"/>
  </div>
</template>

<script>
import { eventBus } from '@/main';
import MunroDetail from './components/MunroDetail'
import MunroService from "@/services/MunroService";
import MunroList from "./components/MunroList"
import MunroMap from "./components/MunroMap"

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

    eventBus.$on('drop-down-munro', payload => (this.selectedMunro = payload))

    eventBus.$on('clicked-munro', payload => (this.selectedMunro = payload))

    eventBus.$on('munro-submit', payload => MunroService.addMunroVisit(payload))


    
  },
  components: {
    MunroList,
    MunroMap,
    MunroDetail
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
