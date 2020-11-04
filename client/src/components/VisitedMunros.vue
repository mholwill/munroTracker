<template>
    <section>
        <h1>Visited Munros</h1>
        <ul>
            <li v-for="(munro, index) in visitedMunros" :key="index">{{munro.munroName}} on {{munro.dateVisited}}</li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'visited-munros',
    props: ['visitedMunros']

}
</script>

<style>

</style>