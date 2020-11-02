<template>
  <div id="app">
    <h1>HELLO MUNROS</h1>
    <MunroList :munros="munros"/>
    <MunroMap :munros="munros" :dropDownSelect="selectedMunroDropDown"/>
  </div>
</template>

<script>
import { eventBus } from '@/main';
import MunroList from "./components/MunroList"
import MunroMap from "./components/MunroMap"

export default {
  name: 'App',
  data() {
    return {
      munros: [],
      selectedMunroDropDown: null
    }
  },
  mounted(){
    fetch('https://munroapi.herokuapp.com/munros')
    .then(res => res.json())
    .then(munros => this.munros = munros)

    eventBus.$on('drop-down-munro', payload => (this.selectedMunroDropDown = payload))
  },
  components: {
    MunroList,
    MunroMap
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
