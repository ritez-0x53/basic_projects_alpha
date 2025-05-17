
const apiKey = "fd908321685c2fc7a37120fe67417bb2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

async function checkWeather(city) {
    const res = await fetch(apiUrl + `&q=${city}&appid=${apiKey}`)
    let data = await res.json();

    console.log(data);
    let mainImg = document.querySelector("#main_img")
    
    if(data.weather[0].main == "Clear") {
        mainImg.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Clouds") {
        mainImg.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Drizzle") {
        mainImg.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist") {
        mainImg.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain") {
        mainImg.src = "images/rain.png"
    }
    else {
        mainImg.src = "images/snow.png"
    }


    
    document.querySelector("#temp").textContent = data.main.temp +" deg C"
    document.querySelector("#city").textContent = data.name
    document.querySelector("#wind_speed").textContent = data.wind.speed + " Km/h "
    document.querySelector("#humidity").textContent = data.main.humidity +"%"
    
    document.querySelector(".weather").style.display = "flex"


}




const cityInput = document.querySelector("#city_input")
const searchButton = document.querySelector("#search_button")
// events ....

searchButton.addEventListener("click" , ()=> {
    checkWeather(cityInput.value);
    
})

window.addEventListener("keypress" , (e)=> {

    if(e.key === "Enter") {
    checkWeather(cityInput.value);
    }
})