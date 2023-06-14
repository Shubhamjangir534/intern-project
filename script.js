document.addEventListener("DOMContentLoaded", function () {
  //Accessing Location
  const loadingScreen = document.querySelector(".loading");

  function showLoadingScreen() {
    loadingScreen.classList.add("active");
  }

  function hideLoadingScreen() {
    loadingScreen.classList.remove("active");
  }

  const apiKey = "649ec0197bbede5ec5e68ec5a3e659a0";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchbox = document.querySelector(".search input");
  const searchbtn = document.querySelector(".search button");
  const weathericon = document.querySelector(".weather-icon");
  const getlocationbutton = document.getElementById("getlocationbutton");


  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };


  const showPosition = (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    const geoUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=1&appid=${apiKey}`;


    fetch(geoUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error fetching geolocation data");
        }
        return response.json();
      })
      .then(data => {
        if (data.length > 0 && data[0].name) { // Check if city name exists
          let city = data[0].name;
          checkweather(city);
        } else {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
          document.querySelector(".dailyforecast").style.display = "none";
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Error fetching geolocation data. Please try again later.");
      });
  };



  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;

      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;

      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;

      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;

      default:
        alert("An unknown error occurred.");
    }
  };

  async function checkweather(city) {
    showLoadingScreen();
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (response.ok) {
      if (data.cod === "404" || data.message === "city not found") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".dailyforecast").style.display = "none";
        hideLoadingScreen();
      } else {
        GetInfo(city);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        if (data.weather[0].main === "Clouds") {
          weathericon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
          weathericon.src = "images/clear.png";
        } else if (data.weather[0].main === "Rain") {
          weathericon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
          weathericon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
          weathericon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "contents";
        document.querySelector(".dailyforecast").style.display = "contents";
        document.querySelector(".error").style.display = "none";
        hideLoadingScreen();
      }
    } else {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
      document.querySelector(".dailyforecast").style.display = "none";
      hideLoadingScreen();
    }
  }
  /*async function geocode(city) {
    const apiKey = "649ec0197bbede5ec5e68ec5a3e659a0";
    const apiUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.length > 0) {
        const { lat, lon } = data[0];
        dailyforecast(lat, lon);
      } else {
        console.log(`City not found: ${city}`);
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  }
  
  async function dailyforecast(latitude, longitude) {
    const apiUrl = `http://api.weatherunlocked.com/api/forecast/${latitude},${longitude}?app_id=dc105edf&app_key=9c8170ae2eea4e90dde9b56a75c78263`;
  
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      if (data.cod === "404" || data.message === "city not found") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".dailyforecast").style.display = "none";
        hideLoadingScreen();
      } else {
        for (let i = 0; i < data.Days.length; i++) {
          
        document.querySelector(".date").innerHTML = data.Days[i];
        document.querySelector(".temperature").innerHTML = Math.round(day.Timeframes[0].temp_c) + "°C";
        geocode();
        if (data.weather[0].main === "Clouds") {
          weathericon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
          weathericon.src = "images/clear.png";
        } else if (data.weather[0].main === "Rain") {
          weathericon.src = "images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
          weathericon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
          weathericon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "contents";
        document.querySelector(".dailyforecast").style.display = "contents";
        document.querySelector(".error").style.display = "none";
        hideLoadingScreen();
        }
      }
    }
    else {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
      document.querySelector(".dailyforecast").style.display = "none";
      hideLoadingScreen();
    }
  }*/
  async function GetInfo(city) {
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=";
    const apikey = "649ec0197bbede5ec5e68ec5a3e659a0";
  
    try {
      const response = await fetch(apiUrl + city + `&appid=${apikey}`);
      const data = await response.json();
  
      if (response.ok) {
        if (data.cod === "404" || data.message === "city not found") {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
          document.querySelector(".dailyforecast").style.display = "none";
          hideLoadingScreen();
        } else {
          for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Min").innerHTML =
              "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°C";
          }
  
          for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Max").innerHTML =
              "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°C";
          }
          for (let i = 0; i < 5; i++) {
            const weatherCondition = data.list[i].weather[0].main;
            const dayIcon = document.getElementById("dayicon" + (i+1));
          
            if (weatherCondition === "Clouds") {
              dayIcon.src = "images/clouds.png";
            } else if (weatherCondition === "Clear") {
              dayIcon.src = "images/clear.png";
            } else if (weatherCondition === "Rain") {
              dayIcon.src = "images/rain.png";
            } else if (weatherCondition === "Drizzle") {
              dayIcon.src = "images/drizzle.png";
            } else if (weatherCondition === "Mist") {
              dayIcon.src = "images/mist.png";
            } 
          }
          updateDayChange();
          document.querySelector(".weather").style.display = "contents";
          document.querySelector(".dailyforecast").style.display = "contents";
          document.querySelector(".error").style.display = "none";
          hideLoadingScreen();
        }
      } else {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".dailyforecast").style.display = "none";
        hideLoadingScreen();
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something Went Wrong: Try Checking Your Internet Connection");
    }
  }
  
//Getting and displaying the text for the upcoming five days of the week
function updateDayChange() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var today = new Date().getDay(); // Get the current day of the week (0-6)

  // Update the daychange class innerText for each day
  for (var i = 1; i <= 5; i++) {
    var dayElement = document.querySelector('#day' + i + ' .daychange');
    var dayIndex = (today + i) % 7; // Calculate the index of the next day

    dayElement.innerText = days[dayIndex];
  }
}

  

  searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
  });
  getlocationbutton.addEventListener("click", getLocation);

  checkweather();

})
