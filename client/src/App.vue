<template>
  <div id="app">
    <h1>HELLO MUNROS</h1>
    <MunroList :munros="munros"/>
  </div>
</template>

<script>
import MunroList from "./components/MunroList"

export default {
  name: 'App',
  data() {
    return {
      munros: []
    }
  },
  mounted(){
    fetch('https://munroapi.herokuapp.com/munros')
    .then(res => res.json())
    .then(munros => this.munros = munros)
  },
  components: {
    MunroList
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
