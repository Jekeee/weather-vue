<template>
    <table class="table table-striped">
        <tr>
            
            <th>Страна</th>
            <th @click="sortMin()">Мин. темперптура<img class="sort-logo" src="../img/sort.png" alt="sort-logo" /></th>
            <th @click="sortMax()">Макс. темперптура<img class="sort-logo" src="../img/sort.png" alt="sort-logo" /></th>
            <th>Удалить</th>
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
            if (this.minSortIndex == 0) {
                const sortMinArr = this.cities.sort((a, b) => a.minT - b.minT)
                this.$emit('sort-min-t', sortMinArr)
                this.minSortIndex = 1
            } else {
                const sortMinArr = this.cities.sort((a, b) => b.minT - a.minT);
                this.minSortIndex = 0
                this.$emit('sort-min-t', sortMinArr)
            }
        },

        sortMax() {
            if (this.minSortIndex == 0) {
                const sortMaxArr = this.cities.sort((a, b) => a.maxT - b.maxT)
                this.$emit('sort-max-t', sortMaxArr)
                this.minSortIndex = 1
            } else {
                const sortMinArr = this.cities.sort((a, b) => b.minT - a.maxT)
                this.minSortIndex = 0
                this.$emit('sort-max-t', sortMinArr)
            }
        }
    }
}
</script>

<style>
.sort-logo {
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    text-align: center;
    cursor: pointer;
}

table {
    text-align: center;
}

th {
    border: 1px solid #000;
    padding: 1rem;
    text-align: center;
    cursor: pointer;
}
</style>


