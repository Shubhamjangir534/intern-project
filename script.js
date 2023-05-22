// //Accessing Location
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>

// function getCityName() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(getLocationDetails, showError);
//   } else {
//     alert("Geolocation is not supported by this browser.");
//   }
// }

// function getLocationDetails(position) {
//   var latitude = position.coords.latitude;
//   var longitude = position.coords.longitude;

//   var geocoder = new google.maps.Geocoder();
//   var latlng = new google.maps.LatLng(latitude, longitude);

//   geocoder.geocode({ 'latLng': latlng }, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       if (results[0]) {
//         var city = null;

//         // Loop through the address components
//         for (var i = 0; i < results[0].address_components.length; i++) {
//           var component = results[0].address_components[i];

//           // Check if the component type is 'locality' (city)
//           if (component.types.includes('locality')) {
//             city = component.long_name;
//             break;
//           }
//         }

//         if (city) {
//           // Display the city name on the webpage
//           document.getElementById('city').innerHTML = "City: " + city;
//         } else {
//           alert("City name not found.");
//         }
//       } else {
//         alert("No results found.");
//       }
//     } else {
//       alert("Geocoder failed due to: " + status);
//     }
//   });
// }

// function showError(error) {
//   switch(error.code) {
//     case error.PERMISSION_DENIED:
//       alert("User denied the request for Geolocation.");
//       break;
//     case error.POSITION_UNAVAILABLE:
//       alert("Location information is unavailable.");
//       break;
//     case error.TIMEOUT:
//       alert("The request to get user location timed out.");
//       break;
//     case error.UNKNOWN_ERROR:
//       alert("An unknown error occurred.");
//       break;
//   }
// }




//Sliding Map
function moveToCenter1() {
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "30%";
  var popup = document.getElementById("cropinfo");
  // popup.style.display = "block";
  popup.classList.add("show");
}
function moveToCenter2() {
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "30%";
  var popup = document.getElementById("cultivationinfo");
  // popup.style.display = "block";
  popup.classList.add("show");
}
function moveToCenter3() {
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "30%";
  var popup = document.getElementById("warningsinfo");
  // popup.style.display = "block";
  popup.classList.add("show");
}

function hidePopup1() {
  var popup = document.getElementById("cropinfo");
  // popup.style.display = "none";
  popup.classList.remove("show");
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "55%";
}
function hidePopup2() {
  var popup = document.getElementById("cultivationinfo");
  // popup.style.display = "none";
  popup.classList.remove("show");
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "55%";
}
function hidePopup3() {
  var popup = document.getElementById("warningsinfo");
  // popup.style.display = "none";
  popup.classList.remove("show");
  var map = document.getElementById("map");
  map.style.top = "55%";
  map.style.left = "55%";
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