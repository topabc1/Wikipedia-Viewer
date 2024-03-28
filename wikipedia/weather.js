document.addEventListener("DOMContentLoaded", () => {
    let res;
      
      
      
      
      
      function getWeather(position) {
          let xmlHttp = new XMLHttpRequest();
  
          xmlHttp.open(
              "GET",
              `https://weather-proxy.freecodecamp.rocks/api/current?lat=${Number(position.coords.latitude.toString().split('.')[0])}&lon=${Number(position.coords.longitude.toString().split('.')[0])}`,
              false
          );
          xmlHttp.send(null);
          
          res = JSON.parse(xmlHttp.responseText);
  
          document.querySelector("#icon").innerHTML = `<img src=${res.weather[0].icon} />`;
          document.querySelector("#main").innerHTML = res.weather[0].main;
          document.querySelector("#description").innerHTML = res.weather[0].description;
          document.querySelector("#temp").innerHTML = `Temperature: ${res.main.temp}`;
          document.querySelector("#feels_like").innerHTML = `Feels like: ${res.main.feels_like}`;
          document.querySelector("#temp_min").innerHTML = `Minimum Temperature: ${res.main.temp_min}`;
          document.querySelector("#temp_max").innerHTML = `Maximum Temperature: ${res.main.temp_max}`;
          document.querySelector("#humidity").innerHTML = `Humidity: ${res.main.humidity}`;
          document.querySelector("#sea_level").innerHTML = `Sea Level: ${res.main.sea_level}`;
          document.querySelector("#wind-speed").innerHTML = `Wind Speed: ${res.wind.speed}`;
      }
      
      
      
      
      
       navigator.geolocation.getCurrentPosition(getWeather);
      document.querySelector("#toggle").innerHTML = "Celsius";
      
      document.querySelector("#toggle").addEventListener("click", () => {
          if(document.querySelector("#toggle").innerHTML.toLowerCase() === "celsius") {
              document.querySelector("#toggle").innerHTML = "Fahrenheit";
              document.querySelector("#temp").innerHTML = `Temperature: ${res.main.temp * 9 / 5 + 32}`;
          document.querySelector("#feels_like").innerHTML = `Feels like: ${res.main.feels_like * 9 / 5 + 32}`;
          document.querySelector("#temp_min").innerHTML = `Minimum Temperature: ${res.main.temp_min * 9 / 5 + 32}`;
          document.querySelector("#temp_max").innerHTML = `Maximum Temperature: ${res.main.temp_max * 9 / 5 + 32}`;
          } else {
              document.querySelector("#toggle").innerHTML = "Celsius";
              document.querySelector("#temp").innerHTML = `Temperature: ${res.main.temp}`;
              document.querySelector("#feels_like").innerHTML = `Feels like: ${res.main.feels_like}`;
              document.querySelector("#temp_min").innerHTML = `Minimum Temperature: ${res.main.temp_min}`;
              document.querySelector("#temp_max").innerHTML = `Maximum Temperature: ${res.main.temp_max}`;
          }
      });
    
  });