<script>

import WeatherList from './components/WeatherList.vue'
import AddCity from './components/AddCity.vue'




export default {


  data() {

    return {
      cities: [],
      date: '',
      selectDate: '',
      minSortIndex: 0
    }


  },
  components: {
    WeatherList,
    AddCity
  },


  mounted() {
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=50.45&longitude=30.52&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.date = data.daily.time
                this.selectDate = data.daily.time[0]
  
            })
    },
  methods: {
    removeCity(id) {
      this.cities = this.cities.filter(c => c.id !== id)
    },
    addCity(city) {
      const el = (element) => {
        return element.title == city.title
      }
      if (this.cities.find(el) == undefined) {
        this.cities.push(city);
      }
    },
    sortArr(sortArr){

        this.cities = sortArr;

    
      
    }



  }


}



</script>

<template>
  <div id="app">
    <h1>Погода на: {{ selectDate }}</h1>
    <AddCity v-bind:cities="cities" @add-city="addCity" />
    <WeatherList v-bind:cities="cities" @remove-city="removeCity" />

  </div>
</template>

<style>

</style>
