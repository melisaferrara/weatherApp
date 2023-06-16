const card =  document.querySelector(".card")
const search = document.querySelector("form")


 search.addEventListener("submit", (event) =>{
    event.preventDefault()
     
    const cityName = event.target.city.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3e549d524244af2210638c7f5a683044 `

    data(url) 
})  

const data = async(url) =>{
    
    const response = await fetch(url)
    const weatherInfo = await response.json()
   
     
    card.innerHTML = `<div class="weatherCard">
                      <div class="name">
                      <h3>${weatherInfo.name}</h3>
                      <p>${Math.floor(weatherInfo.main.temp - 273.15)}º</p></div>
                      <p>${weatherInfo.weather[0].description}</p>
                      <img src="https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png">
                      <div class="weather">
                      <p>Humidity ${weatherInfo.main.humidity}%</p>
                      <p>Wind speed ${Math.floor(weatherInfo.wind.speed * 3.6)} Km/h</p></div></div>`


}

