<script>
import WeatherList from './components/WeatherList.vue'
import AddCity from './components/AddCity.vue'

export default {
  data() {
    return {
      cities: [],
      date: '',
      minSortIndex: 0,
      maxSortIndex: 0
    }
  },
  components: {
    WeatherList,
    AddCity,
  },
// При первом рендере запрос для получения дат
  mounted() {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.date = data.daily.time


      })
  },
  methods: {
    removeCity(id) {
      this.cities = this.cities.filter(c => c.id !== id)
    },

    //Проверка если есть город в списке погоды - не добавлять повторно
    addCity(city) {
      const el = (element) => {
        return element.title == city.title
      }
      if (this.cities.find(el) == undefined) {
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

}

h1 {
  text-align: center;
}
</style>
