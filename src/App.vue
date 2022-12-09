<script>
import WeatherList from './components/WeatherList.vue'
import AddCity from './components/AddCity.vue'
import { fetchWeather } from './api/fetchApi'

export default {
  data() {
    return {
      cities: [{ id: '50.437530.5', title: 'Киев', minT: -1.2, maxT: -0.2, latitude: '50.45', longitude: '30.52' }],
      date: '',
      minSortIndex: 0,
      maxSortIndex: 0
    }
  },
  components: {
    WeatherList,
    AddCity,
  },
  mounted() {
    fetchWeather('Киев', 50.45, 30.52)
      .then((data) => {
        this.date = data.daily.time
      })
  },
  methods: {
    removeCity(id) {
      this.cities = this.cities.filter(c => c.id !== id)
      console.log(this.cities);
    },
    addCity(city) {
      if (!this.cities.find(element => element.title === city.title)) {
        this.cities.push(city);
      }
    },
    newCities(data) {
      this.cities = data.newCities

    },
    sortArr(sortArr) {
      this.cities = sortArr;
    }
  }
}
</script>

<template>
  <div id="app">

    <AddCity v-bind:date="date" v-bind:cities="cities" @add-city="addCity" @newCities="newCities" />
    <WeatherList v-bind:cities="cities" @remove-city="removeCity" />

  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;

}

h1 {
  text-align: center;
}
</style>
