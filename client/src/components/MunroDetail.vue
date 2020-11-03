<template>
    <section>
        <h1>{{ munro.name }}</h1>
        <button>Visited</button>
    </section>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
    name: "munro-detail",
    props: ['munro']

}
</script>

<style>

</style>