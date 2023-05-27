document.addEventListener("DOMContentLoaded", function() {
//Accessing Location

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

  const apiKey = 'a105c052ade302bcdf880bc1f58d5ede';
  const url = `http://api.positionstack.com/v1/reverse?access_key=${apiKey}&query=${lat},${long}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.data.length > 0) {
        let name = data.data[0].name;
        let county = data.data[0].county;
        let region = data.data[0].region;
        let country = data.data[0].country;
        const locationButton = document.getElementById("getlocationbutton");
        locationButton.innerText = `${name}, ${county}, ${region}, ${country}`;

      
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

const getLocationButton = document.getElementById("getlocationbutton");
if (getLocationButton) {
  getLocationButton.addEventListener("click", getLocation);
}

});








//Sliding Map
function moveToCenter1() {
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "30%";
  var popup = document.getElementById("cropinfo");
  popup.classList.add("show");
}
function moveToCenter2() {
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "30%";
  var popup = document.getElementById("cultivationinfo");
  popup.classList.add("show");
}
function moveToCenter3() {
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "30%";
  var popup = document.getElementById("warningsinfo");
  popup.classList.add("show");
}
function moveToCenter4() {
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "30%";
  var popup = document.getElementById("locationcontainer");
  popup.classList.add("show");
}

function hidePopup4() {
  var popup = document.getElementById("cropinfo");
  popup.classList.remove("show");
  var popup1 = document.getElementById("cultivationinfo");
  popup1.classList.remove("show");
  var popup2 = document.getElementById("warningsinfo");
  popup2.classList.remove("show");
  var popup2 = document.getElementById("locationcontainer");
  popup2.classList.remove("show");
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "55%";
}
function hidePopup1() {
  var popup1 = document.getElementById("cultivationinfo");
  popup1.classList.remove("show");
  var popup2 = document.getElementById("warningsinfo");
  popup2.classList.remove("show");
}
function hidePopup2() {
  var popup = document.getElementById("cropinfo");
  popup.classList.remove("show");
  var popup2 = document.getElementById("warningsinfo");
  popup2.classList.remove("show");
}
function hidePopup3() {
  var popup = document.getElementById("cropinfo");
  popup.classList.remove("show");
  var popup1 = document.getElementById("cultivationinfo");
  popup1.classList.remove("show");
}


var links = document.querySelectorAll('.link');

    function toggleLink(event, linkNumber) {
      event.preventDefault();

      links.forEach(function(link) {
        link.classList.remove('active');
      });

      var clickedLink = document.getElementById('link' + linkNumber);
      clickedLink.classList.add('active');
    }