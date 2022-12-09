<template>
    <div class="add-city">
        <div class="selects-container">
            <div class="select-item">
                <button @click="openCloseDrop()" class="dropbtn">Нажми для выбора города</button>
                <div id="myDropdown" class='dropdown-content' :class="{ show: showDrop }">
                    <a @click="showWeather('50.45', '30.52', 'Киев')">Киев</a>
                    <a @click="showWeather('47.85', '35.12', 'Запорожье')">Запорожье</a>
                    <a @click="showWeather('48.47', '35.04', 'Днепр')">Днепр</a>
                    <a @click="showWeather('49.98', '36.25', 'Харьков')">Харьков</a>
                    <a @click="showWeather('46.49', '30.74', 'Одесса')">Одесса</a>
                </div>
            </div>
            <select class="form-select" aria-label="Default select example"
                @change="getNewWeather($event.target.value)">
                <option value="0">{{ date[0] }}</option>
                <option value="1">{{ date[1] }}</option>
                <option value="2">{{ date[2] }}</option>
                <option value="3">{{ date[3] }}</option>
                <option value="4">{{ date[4] }}</option>
                <option value="5">{{ date[5] }}</option>
                <option value="6">{{ date[6] }}</option>
            </select>
        </div>
    </div>
</template>

<script>
import { fetchWeather } from '../api/fetchApi'
export default {
    props: ['cities', 'date'],
    data() {
        return {
            title: '',
            index: 0,
            newCities: [],
            showDrop: false,
        }
    },

    methods: {
        openCloseDrop() {
            this.showDrop = !this.showDrop;
        },
        showWeather(latitude, longitude, title) {
            this.showDrop = !this.showDrop;
            fetchWeather(title, latitude, longitude)
                .then((data) => {
                    const addCity = {
                        id: `${data.latitude}` + `${data.longitude}`,
                        title: title,
                        minT: data.daily.temperature_2m_min[this.index],
                        maxT: data.daily.temperature_2m_max[this.index],
                        latitude: latitude,
                        longitude: longitude
                    }
                    this.$emit('add-city', addCity)

                })
        },
        getNewWeather(i) {
            for (const city of this.cities) {
                this.newCities = []
                const title = city.title;
                const latitude = city.latitude;
                const longitude = city.longitude;
                if (city.title === title) {
                    fetchWeather(title, latitude, longitude)
                        .then((data) => {
                            this.selectDate = data.daily.time[i];
                            const addCity = {
                                id: `${data.latitude}` + `${data.longitude}`,
                                title: title,
                                minT: data.daily.temperature_2m_min[i],
                                maxT: data.daily.temperature_2m_max[i],
                                latitude: latitude,
                                longitude: longitude
                            }
                            this.newCities.push(addCity)
                        })
                }
            }
            this.$emit('newCities', {
                newCities: this.newCities
            })
        }
    }
}

</script>

<style>
.add-city {
    margin-top: 1rem;
}

.select-item {
    text-align: center;
}
</style>
