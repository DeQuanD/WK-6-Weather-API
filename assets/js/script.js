const apiKey = '0831a42d48d2ee1ba71303e69ff51f50'
var searchEl = document.querySelector('#Search')
var btnSearchEl = document.querySelector('#Search-btn')

const getWeatherData =(city) =>{
    let apiQuery = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(apiQuery)
    .then((response) => {
        return response.json
    })

}

btnSearchEl.addEventListener("click", getWeatherData())