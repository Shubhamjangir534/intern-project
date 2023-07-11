document.addEventListener("DOMContentLoaded", function() {
  var section = document.querySelector(".home");
  var sectionTop = section.offsetTop;
  var triggerPoint = window.innerHeight * 0.8;

  var animationTimeout;

  document.addEventListener("scroll", function() {
      if (window.pageYOffset > sectionTop - triggerPoint) {
          if (!animationTimeout) {
              animationTimeout = setTimeout(function() {
                  section.classList.add("animate");
                  clearTimeout(animationTimeout);
              }, 500); // 1 second delay
          }
      } else {
          clearTimeout(animationTimeout);
          animationTimeout = null;
      }
  });
});



const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0;
let yValue = 0;

window.addEventListener("DOMContentLoaded", () => {
  parallax_el.forEach((el) => {
    el.style.transform = "translateX(-50%) translateY(-50%)";
  });
});

window.addEventListener("mousemove", (e) => {
  xValue = e.clientX - window.innerWidth / 2;
  yValue = e.clientY - window.innerHeight / 2;

  parallax_el.forEach((el) => {
    let speedx = el.dataset.speedx;
    let speedy = el.dataset.speedy;
    el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
  });
});




    const mainElement = document.querySelector("main");
    mainElement.classList.add("zoom-effect");



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

  //Function to scroll to crop section
  const stateElements = document.querySelectorAll('#map path');

  stateElements.forEach((stateElement) => {
    stateElement.addEventListener('click', (event) => {
      event.preventDefault();
  
      const stateId = stateElement.parentNode.getAttribute('id');
      setTimeout(() => {
        const cropsSection = document.getElementById('crops');
        cropsSection.scrollIntoView({ behavior: 'smooth' });
      }, 500);
      if (stateId === 'IN-AP') {
        const assamCard = document.getElementById('AndhraPradesh');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = assamCard.offsetLeft;
      } else if (stateId === 'IN-AR') {
        const biharCard = document.getElementById('ArunachalPradesh');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = biharCard.offsetLeft;
      } else if (stateId === 'IN-RJ') {
        const rajasthanCard = document.getElementById('Rajasthan');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      } else if (stateId === 'IN-PB') {
        const rajasthanCard = document.getElementById('Punjab');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      } else if (stateId === 'IN-OR') {
        const rajasthanCard = document.getElementById('Odisha');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-NL') {
        const rajasthanCard = document.getElementById('Nagaland');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-MZ') {
        const rajasthanCard = document.getElementById('Mizoram');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-MP') {
        const rajasthanCard = document.getElementById('MadhyaPradesh');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-MN') {
        const rajasthanCard = document.getElementById('Manipur');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-ML') {
        const rajasthanCard = document.getElementById('Meghalaya');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-MH') {
        const rajasthanCard = document.getElementById('Maharashtra');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-SK') {
        const rajasthanCard = document.getElementById('Sikkim');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-TG') {
        const rajasthanCard = document.getElementById('Telangana');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-TN') {
        const rajasthanCard = document.getElementById('TamilNadu');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-TR') {
        const rajasthanCard = document.getElementById('Tripura');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-KL') {
        const rajasthanCard = document.getElementById('Kerala');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-KA') {
        const rajasthanCard = document.getElementById('Karnataka');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-JK') {
        const rajasthanCard = document.getElementById('JammuAndKashmir');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-JH') {
        const rajasthanCard = document.getElementById('Jharkhand');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-UP') {
        const rajasthanCard = document.getElementById('UttarPradesh');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-UT') {
        const rajasthanCard = document.getElementById('Uttarakhand');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-WB') {
        const rajasthanCard = document.getElementById('WestBengal');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-HR') {
        const rajasthanCard = document.getElementById('Haryana');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-HP') {
        const rajasthanCard = document.getElementById('HimachalPradesh');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-GJ') {
        const rajasthanCard = document.getElementById('Gujarat');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-GA') {
        const rajasthanCard = document.getElementById('Goa');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-DL') {
        const rajasthanCard = document.getElementById('Delhi');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-CT') {
        const rajasthanCard = document.getElementById('Chhattisgarh');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-BR') {
        const rajasthanCard = document.getElementById('Bihar');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
       else if (stateId === 'IN-AS') {
        const rajasthanCard = document.getElementById('Assam');
        const cardContainer = document.getElementById('crops');
        cardContainer.scrollLeft = rajasthanCard.offsetLeft;
      }
    });
  });
  
  
  
  
  



  const cropclick = document.getElementById("map");
  cropclick.addEventListener("click", () => {
    showcropsection();
    scrollToSection();
  });

  function showinfo(event) {
    const button = event.currentTarget;
    const crop = button.closest(".cropname");
    const info = crop.querySelector(".infocrop");
    const buttonIcon = button.querySelector("i");
  
    if (info.style.display === "none") {
      info.style.display = "block";
      buttonIcon.classList.remove("bxs-down-arrow");
      buttonIcon.classList.add("bxs-up-arrow");
    } else {
      info.style.display = "none";
      buttonIcon.classList.remove("bxs-up-arrow");
      buttonIcon.classList.add("bxs-down-arrow");
    }
  }
  
  const buttons = document.querySelectorAll(".cropname .dropdownbutton");
  buttons.forEach((button) => {
    button.addEventListener("click", showinfo);
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

