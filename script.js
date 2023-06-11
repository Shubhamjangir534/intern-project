document.addEventListener("DOMContentLoaded", function() {
//Accessing Location
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
  const response1 = fetch(geoUrl)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        let city = data[0].name;
        if(response1.status==404){
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
        }
        else {
        checkweather(city);
        }
      } else {
        alert("Location not found.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
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
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status==404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else {
    
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  if(data.weather[0].main == "Clouds"){
    weathericon.src = "images/clouds.png"
  }
  else  if(data.weather[0].main == "Clear"){
    weathericon.src = "images/clear.png"
  }
  else  if(data.weather[0].main == "Rain"){
    weathericon.src = "images/rain.png"
  }
  else  if(data.weather[0].main == "Drizzle"){
    weathericon.src = "images/drizzle.png"
  }
  else  if(data.weather[0].main == "Mist"){
    weathericon.src = "images/mist.png"
  }

  document.querySelector(".weather").style.display="contents";
  }
  document.querySelector(".error").style.display = "none";

}

searchbtn.addEventListener("click", ()=>{
  checkweather(searchbox.value);
});
getlocationbutton.addEventListener("click", getLocation);

checkweather();

});


