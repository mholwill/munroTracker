<template>
<div class="form-container">
  <form v-on:submit.prevent="handleSubmit">
        <h1>{{munro.name}}</h1>

        <label for="date"></label>
        <input type="date" name="date" id="date" v-model="date">        
        <input type="submit" name="submit" value="Save Visit">
    </form>
    <button @click="handleClick">Cancel</button>
</div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
    name: 'visited-form',
    props: ['munro'],
    data() {
        return {
            date: '',
            show: false
        }
    },
    methods: {
        handleSubmit() {
            const payload = {
                munroName: this.munro.name,
                dateVisited: this.date,
                image: this.imgDataUrl
            }
            eventBus.$emit('munro-submit', payload)
            this.date = '',
            this.imgDataUrl = ''
        },
        handleClick() {
            eventBus.$emit('cancel-form', this.show)
        }
    }

}
</script>

<style>

.form-container {
    background-color: aliceblue;
    height: 30%;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 5px 10px #888888
}


</style>