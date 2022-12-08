<template>
    <div class="add-city">
        <div class="selects-container">
            <div class="select-item">
                <button @click="openCloseDrop()" class="dropbtn">Нажми для выбора города</button>
                <div id="myDropdown" class="dropdown-content">
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

export default {
    props: ['cities', 'date'],
    data() {
        return {
            title: '',
            index: 0,
            newCities: [],
        }
    },

    methods: {
        //Метод открыть - закрыть дроп
        openCloseDrop() {
            document.getElementById("myDropdown").classList.toggle("show");
        },
        // При нажатии на элемент дропа закрыть и выдать ликвид данные по запросу -> отправить родителю
        showWeather(latitude, longitude, title) {
            document.getElementById("myDropdown").classList.toggle("show");

            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const addCity = {
                        id: `${data.latitude}` + `${data.longitude}`,
                        title: title,
                        minT: data.daily.temperature_2m_min[this.index],
                        maxT: data.daily.temperature_2m_max[this.index],
                        date: data.daily.time[this.index]
                    }
                    this.$emit('add-city', addCity)

                })
        },
       // Проверка содержимого для обновления данных о погоде \|/
        getNewWeather(i) {
            for (const element of this.cities) {
                this.newCities = []

                if (element.title == 'Киев') {
                    const title = 'Киев';
                    const latitude = '50.45';
                    const longitude = '30.52';
                    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {

                            this.selectDate = data.daily.time[i];
                            const addCity = {
                                id: `${data.latitude}` + `${data.longitude}`,
                                title: title,
                                minT: data.daily.temperature_2m_min[i],
                                maxT: data.daily.temperature_2m_max[i],
                                date: data.daily.time[i]
                            }
                            this.newCities.push(addCity)
                        })
                } else if (element.title == 'Запорожье') {
                    const title = 'Запорожье';
                    const latitude = '47.85';
                    const longitude = '35.12';
                    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {

                            this.selectDate = data.daily.time[i];
                            const addCity = {
                                id: `${data.latitude}` + `${data.longitude}`,
                                title: title,
                                minT: data.daily.temperature_2m_min[i],
                                maxT: data.daily.temperature_2m_max[i],
                                date: data.daily.time[i]
                            }
                            this.newCities.push(addCity)
                        })
                } else if (element.title == 'Днепр') {
                    const title = 'Днепр';
                    const latitude = '48.47';
                    const longitude = '35.04';
                    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {

                            this.selectDate = data.daily.time[i];
                            const addCity = {
                                id: `${data.latitude}` + `${data.longitude}`,
                                title: title,
                                minT: data.daily.temperature_2m_min[i],
                                maxT: data.daily.temperature_2m_max[i],
                                date: data.daily.time[i]
                            }
                            this.newCities.push(addCity)
                        })
                } else if (element.title == 'Харьков') {
                    const title = 'Харьков';
                    const latitude = '49.98';
                    const longitude = '36.25';
                    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {

                            this.selectDate = data.daily.time[i];
                            const addCity = {
                                id: `${data.latitude}` + `${data.longitude}`,
                                title: title,
                                minT: data.daily.temperature_2m_min[i],
                                maxT: data.daily.temperature_2m_max[i],
                                date: data.daily.time[i]
                            }
                            this.newCities.push(addCity)
                        })
                } else if (element.title == 'Одесса') {
                    const title = 'Одесса';
                    const latitude = '46.49';
                    const longitude = '30.74';
                    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=GMT`)
                        .then((response) => {
                            return response.json();
                        })
                        .then((data) => {

                            this.selectDate = data.daily.time[i];
                            const addCity = {
                                id: `${data.latitude}` + `${data.longitude}`,
                                title: title,
                                minT: data.daily.temperature_2m_min[i],
                                maxT: data.daily.temperature_2m_max[i],
                                date: data.daily.time[i]
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
