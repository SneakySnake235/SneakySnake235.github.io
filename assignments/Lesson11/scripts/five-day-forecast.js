const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=cd6c7d18e3744a1287ea7e3790d92b43" ;
// Weather Summary content
fetch(apiURL)
.then(
    (Response) => Response.json()
)
.then(
    (currentWeather) => {
       console.log(currentWeather);

// let description = currentWeather.weather.description;

let currentTemp = currentWeather.main.temp;
let windSpeed = currentWeather.wind.speed;
let humidity = currentWeather.main.humidity;
let windChill;

if (currentTemp < 50 && windSpeed > 3) {
    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed,0.16)
                 + 0.427 * currentTemp * Math.pow(windSpeed);
}
// document.getElementById("description").innerHTML = description;


document.getElementById("currentTemp").innerHTML = FinalTemp + "&deg;";
        document.getElementById("tempHigh").innerHTML = FinalDeg + "&deg;";
        document.getElementById("windSpeed").innerHTML = windSpeed + " mph";
        document.getElementById("windChill").innerHTML = windChill;
if (windChill === 0) {
    document.getElementById("windChill").innerHTML = 'N/A';
}
else {
    document.getElementById("windChill").innerHTML = Math.round(windChill);
}

}





);