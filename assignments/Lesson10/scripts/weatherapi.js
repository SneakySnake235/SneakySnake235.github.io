

const apiURL = "api.openweathermap.org/data/2.5/weather?id=5605242&appid=cd6c7d18e3744a1287ea7e3790d92b43";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });