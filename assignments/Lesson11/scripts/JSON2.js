// 2
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=cd6c7d18e3744a1287ea7e3790d92b43" ;

fetch(apiURL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentWeather) => {
            //debugging console.log
            

            let currentTemp = currentWeather.main.temp;
            let tempHigh = currentWeather.main.temp_max;
            let windSpeed = currentWeather.wind.speed;
    
            let FinalTemp = Math.round( ((9/5) * currentTemp) - 459.67 ); 
            let FinalDeg = Math.round ( ((9/5) * tempHigh) - 459.67 ) ;
    
            let windChill = Math.round(35.74 + 0.6215 * FinalTemp - 35.75 * Math.pow(windSpeed, 0.16) + .4275 * FinalTemp * Math.pow(windSpeed, .16));
    
        document.getElementById("currentTemp").innerHTML = FinalTemp + "&deg;";
        document.getElementById("tempHigh").innerHTML = FinalDeg + "&deg;";
        document.getElementById("windSpeed").innerHTML = windSpeed + " mph";
        document.getElementById("windChill").innerHTML = windChill;
        }
    )


            if (windChill === 0) {
                document.getElementById("windChill").innerHTML = "N/A";
            } else {
                document.getElementById("windChill").innerHTML = Math.round(windChill) + "&deg;";
            }

// ================================================================================================================// 

// 5 Day Forecast


let weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur'];
let d = new Date() ;       

let day = weekNames[d.getDay()];

console.log(day);

for ( let i = 0; i < 5; i++ ) {
        document.getElementById("day" +i ).textContent = weekNames[d.getDay()+i];
} 

// ================================================================================================================// 

// input 5 Day Forecast
const URL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=cd6c7d18e3744a1287ea7e3790d92b43" ;

fetch(URL)
    .then(
        (response) => response.json()
    )
    .then(
        (currentForecast) => {
            //debugging console.log

for(let i= 1; i<6; i++) {


            let ForecastTemp = currentForecast.list[i].main.temp;
            let icon = 'https://openweathermap.org/img/w/'+currentForecast.list[i].weather[0].icon+'.png'
            
            let Temp = Math.round( ((9/5) * ForecastTemp) - 459.67 );
           
        console.log(Temp);
    
        document.getElementById('temp' +i).textContent = Temp;
        document.getElementById('img' +i).setAttribute('src', icon);
        
    }   
    
        })
        ;
    
        