<template>
    <section>
        <h1>{{munro.name}}</h1>
        <form v-on:submit.prevent="handleSubmit">
            <label for="date"></label>
            <input type="date" name="date" id="date" v-model="date">
            <label for="uploadPhoto"></label>
            <a class="btn" @click="toggleShow">Upload Image</a>
            <my-upload field="img"
                @crop-success="cropSuccess"
                @crop-upload-success="cropUploadSuccess"
                @crop-upload-fail="cropUploadFail"
                langType="en"
                v-model="show"
                :width="300"
                :height="300"
                url="http://localhost:3000/api/munros/uploads "
                :params="params"
                :headers="headers"
                img-format="png">
            </my-upload>
            <img :src="imgDataUrl">
            
            <input type="submit" name="submit" value="Save Visit">
        </form>
    </section>
</template>

<script>
import {eventBus} from '@/main.js'
import myUpload from 'vue-image-crop-upload';

export default {
    name: "munro-detail",
    props: ['munro'],
    data() {
        return {
            munroName: '',
            date: '',
            show: false,
            params: {
                token: '123456798',
                name: 'avatar'
            },
            headers: {
                smail: '*_~'
            },
            imgDataUrl: ''
        }
    },
    methods: {
        toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field){
            console.log('-------- crop success --------');
            this.imgDataUrl = imgDataUrl;
            this.show = false;
        },
        cropUploadSuccess(jsonData, field){
            console.log('-------- upload success --------');
            console.log(jsonData);
            console.log('field: ' + field);
        },
        cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log(status);
            console.log('field: ' + field);
        },

        handleSubmit: () =>{
            payload = {
                munroName: this.munro.name,
                dateVisited: this.date,
                image: this.imgDataUrl
            }
            eventBus.$emit('munro-submit', payload)
        }



    },
    components: {
        'my-upload': myUpload
    }
}
</script>

<style>

</style>