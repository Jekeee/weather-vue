<template>
    <table class="table table-striped">
        <tr>
            <th>Удалить</th>
            <th>Страна</th>
            <th @click="sortMin()">Мин. темперптура</th>
            <th @click="sortMax()">Макс. темперптура</th>
        </tr>
        <WeatherItem v-for="city of cities" v-bind:city="city" v-on:remove-city="removeCity" />
    </table>
</template>

<script>
import WeatherItem from './WeatherItem.vue'

export default {
    
    props: ['cities'],

    
    components: {
        WeatherItem
    },
    methods: {
        removeCity(id) {
            this.$emit('remove-city', id)
        },
        sortMin() {
            
                const sortArr = this.cities.sort((a, b) => a.minT - b.minT);
                his.$emit('sort-city', sortArr)
            

            
           
        },
        sortMax(){
            const sortArr = this.cities.sort((a, b) => a.maxT - b.maxT);
                his.$emit('sort-city', sortArr)
        }
    }
}
</script>

<style>
    th{
        border: 1px solid #000;
        padding: 1rem;
        text-align: center;
    }
</style>


