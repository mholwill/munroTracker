<template>
  <div :class="show ? 'overlay' : 'app'">
    <h1>MUNRO TRACKER</h1>
    <MunroList :munros="munros"></MunroList>
    <div class="form-component-container" >
        <VisitedForm class="form" v-if="show" :munro="selectedMunro"/>
    </div>
    <MunroDetail class="detail-component" v-if="selectedMunro" :munro="selectedMunro"></MunroDetail>
    <MunroMap  v-if="!selectedMunro" :munros="munros"/>
    <VisitedMunros :visitedMunros="visitedMunros"/>
    
  </div>
</template>

<script>
import { eventBus } from '@/main';
import VisitedForm from './components/VisitedForm'
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
      selectedMunro: null,
      show: false
    }
  },
  mounted(){
    fetch('https://munroapi.herokuapp.com/munros')
    .then(res => res.json())
    .then(munros => this.munros = munros);

    MunroService.getMunrosVisits()
    .then(data => this.visitedMunros = data);

    eventBus.$on('drop-down-munro', (payload) => {
      this.selectedMunro = payload
      this.show = false
    });

    eventBus.$on('clicked-munro', (payload) => {
      this.selectedMunro = payload
      this.show = false
      });

    eventBus.$on('munro-submit', payload => MunroService.addMunroVisit(payload));

    eventBus.$on('show-form', payload => (this.show = payload))
    eventBus.$on("cancel-form", payload => (this.show = payload));

  },
  components: {
    MunroList,
    MunroMap,
    MunroDetail,
    VisitedMunros,
    VisitedForm
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.overlay {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.form-component-container {
    display: flex;
    height: 30%;
    justify-content: center;
}

.form {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
}

.detail-component {
    position: relative;
}
</style>
