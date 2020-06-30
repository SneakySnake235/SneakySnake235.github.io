function getFiveDayForecast(cityId) {
    var weekDay = daysOfWeek[weekDayDate];
    
    todayString = weekDay + ", ";
    
    //  function getWeather()
    const apiForecastURL = "api.openweathermap.org/data/2.5/weather?id=5605242&appid=cd6c7d18e3744a1287ea7e3790d92b43" ;
    
    fetch(apiForecastURL)
        .then(
            (response) => response.json()
        )
        .then(
            (forecasts) => {
    
                let hourString = "18:00:00";
                let counter = 1;
    
                //loop through results
                forecasts.list.forEach(
                    (forecast) => {
    
                        if (forecast.dt_txt.includes(hourString)) {
    
                                // add temp
                                const element = document.getElementById(`temp${counter}`);
                                element.innerHTML = forecast.main.temp + '&deg';
                               
                                // add day of week
                                let tomorrowDate = new Date(forecast.dt_txt);
    
                                const dayElement = document.getElementById(`day${counter}`);
                                dayElement.innerHTML = daysOfWeek[tomorrowDate.getDay()];
    
                                // add image
                                const imageElement = document.getElementById(`img${counter}`);
                                imageElement.setAttribute('src', 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + ".png");
                                imageElement.setAttribute('alt', forecast.weather[0].main);
                               
                                //increment variables 
                                counter += 1;
                            }
                        }
                    )
    
                });
            }