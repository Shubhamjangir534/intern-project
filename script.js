document.addEventListener("DOMContentLoaded", function () {

  //menu icon toggle
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.Navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  }

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 80;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        })
      }
    });


    //Sticky Header
    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  }

  //Function to make appear Crops Section
  function scrollToSection() {
    const section = document.getElementById("crops");
    section.scrollIntoView({ behavior: 'smooth' });
  }
  
  function showcropsection() {
    const cropSection = document.getElementById("crops");
    cropSection.classList.add('active');
    showstatecrop();
  }

  function showstatecrop(){
    const statecrop = document
  }


  const cropclick = document.getElementById("map");
  cropclick.addEventListener("click", () => {
    showcropsection();
    scrollToSection();
  });








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




  // Function to get weather description for today and next four days
  async function getWeatherDescription(city) {
    const apiKey = "649ec0197bbede5ec5e68ec5a3e659a0";
    const apiUrl1 = "https://api.openweathermap.org/data/2.5/forecast";
    const url = `${apiUrl1}?q=${city},IN&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        if (data.cod === "404" || data.message === "city not found") {
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
          document.querySelector(".dailyforecast").style.display = "none";
          hideLoadingScreen();
        } else {
          for (let i = 0; i < 5; i++) {
            document.getElementById("description" + (i + 1)).innerHTML =
              "Description: " + data.list[i].weather[0].description + ".";
          }
        }
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Please enter any Indian City name.");
    }
  }


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
          getWeatherDescription();
          for (i = 0; i < 5; i++) {
            document.getElementById("day" + (i + 1) + "Min").innerHTML =
              "Min: " + Number(data.list[i].main.temp_min - 273.15).toFixed(1) + "°C";

            document.getElementById("day" + (i + 1) + "Max").innerHTML =
              "Max: " + Number(data.list[i].main.temp_max - 273.15).toFixed(2) + "°C";

            document.getElementById("wind" + (i + 1)).innerHTML =
              "Wind: " + data.list[i].wind.speed + " Km/h";
            document.getElementById("day" + (i + 1) + "humidity").innerHTML =
              "Humidity: " + data.list[i].main.humidity + "%";

            const weatherCondition = data.list[i].weather[0].main;
            const dayIcon = document.getElementById("dayicon" + (i + 1));

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
  searchbox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      checkweather(searchbox.value);
    }
  });
  getlocationbutton.addEventListener("click", getLocation);

  checkweather();

})
