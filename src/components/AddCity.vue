<template>
    <div>
        
        <div class="selects-container">
        <div class="select-item">
            <button @click="getCities()" class="dropbtn">Нажми для выбора города</button>
            <div id="myDropdown" class="dropdown-content">
                <a @click="showWeather('50.45', '30.52', 'Киев')">Киев</a>
                <a @click="showWeather('47.85', '35.12', 'Запорожье')">Запорожье</a>
                <a @click="showWeather('48.47', '35.04', 'Днепр')">Днепр</a>
                <a @click="showWeather('49.98', '36.25', 'Харьков')">Харьков</a>
                <a @click="showWeather('46.49', '30.74', 'Одесса')">Одесса</a>
            </div>
        </div>
        
    </div>
    
</div>
    
</template>


<script>

export default {
    props: ['cities'],

    data() {


        return {
            title: '',
            
            date: {

            },
            index: 0,
        }

    },
    
    methods: {
        getCities() {
            document.getElementById("myDropdown").classList.toggle("show");
        },
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
    }



}

</script>


