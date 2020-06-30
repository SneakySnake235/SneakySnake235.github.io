//5 Day Forecast looping days
let abbrw_names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur'];
let dayone = abbrw_names[d.getDay()+1];
let daytwo = abbrw_names[d.getDay()+2];
let daythree = abbrw_names[d.getDay()+3];
let dayfour = abbrw_names[d.getDay()+4];
let dayfive = abbrw_names[d.getDay()+5];
console.log(dayfive);

document.getElementById("day1").innerHTML = dayone;
document.getElementById("day2").innerHTML = daytwo;
document.getElementById("day3").innerHTML = daythree;
document.getElementById("day4").innerHTML = dayfour;
document.getElementById("day5").innerHTML = dayfive;


//Weather Summary content
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=cd6c7d18e3744a1287ea7e3790d92b43" ;

fetch(apiURL)
.then(
    (Response) => Response.json()
)
.then(
    (currentWeather) => {
       console.log(currentWeather);

let description = currentWeather.weather.description;
let currentTemp = currentWeather.main.temp;
let windSpeed = currentWeather.wind.speed;
let humidity = currentWeather.main.humidity;
let windChill;

if (currentTemp < 50 && windSpeed > 3) {
    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed,0.16)
                 + 0.427 * currentTemp * Math.pow(windSpeed);
}

document.getElementById("currentTemp").innerHTML = currentTemp + '&deg';
document.getElementById("description").innerHTML = description;
document.getElementById("humidity").innerHTML = humidity + '%';
document.getElementById("windSpeed").innerHTML = windSpeed + 'mph';
document.getElementById("windChill").innerHTML = windChill + '&deg';
if (windChill === 0) {
    document.getElementById("windChill").innerHTML = 'N/A';
}
else {
    document.getElementById("windChill").innerHTML = Math.round(windChill);
}

}
);