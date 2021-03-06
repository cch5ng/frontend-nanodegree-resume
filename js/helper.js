var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<span class='role'>%data% - %location%</span><hr/>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='blue-violet-text'>%contact%</span><span class=''>%data%</span></li>";
var HTMLmobile = "<li class='contact col-xs-12 col-sm-4 col-md-3 push-left'><span class='blue-violet-text'>mobile</span><span class=''>%data%</span></li>";
var HTMLemail = "<li class='contact col-xs-12 col-sm-4 col-md-3 push-left'><span class='blue-violet-text'>email</span><span class=''>%data%</span></li>";
var HTMLtwitter = "<li class='contact col-xs-12 col-sm-4 col-md-3 push-left'><span class='blue-violet-text'>twitter</span><span class=''>%data%</span></li>";
var HTMLgithub = "<li class='contact col-xs-12 col-sm-4 col-md-3 push-left'><span class='blue-violet-text'>github</span><span class=''>%data%</span></li>";
var HTMLlocation = "<li class='contact col-xs-12 col-sm-4 col-md-3 push-left'><span class='blue-violet-text'>location</span><span class=''>%data%</span></li>";

var HTMLskillsStart = "<h2 id='skillsH3' class='skillsH3 green-text'>Skills at a Glance</h2><ul id='skills' class='skills'></ul>";
var HTMLskills = "<li class='col-xs-4 col-sm-3 col-md-2 push-left'><span class='skill blue-violet-text'>%data%</span></li>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<h4>%data%";
var HTMLworkTitle = " - %data%</h4>";
var HTMLworkDates = "<div class='date-text sm-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text sm-text'>%data%</div>";
var HTMLworkDescription = "<p class='sm-text'><br>%data%</p>";

var HTMLprojectStart = "<div class='project-entry'></div>";
var HTMLprojectTitle = "<a href='%url%' class='important_link blue-green-text' target='_blank'>%data%</a>";
var HTMLprojectDates = "<div class='date-text sm-text'>%data%</div>";
var HTMLprojectDescription = "<p class='sm-text'><br>%data%</p>";
var HTMLprojectImage = "<img src='%data%'>";
var HTMLprojectSource = "<a href=%data%>Source</a>"

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<h4>%data%";
var HTMLschoolDegree = " -- %data%</h4>";
var HTMLschoolDates = "<div class='date-text sm-text'>%data%</div>";
var HTMLschoolMajor = "<em><br>Major: %data%</em>";
var HTMLschoolLocation = "<div class='location-text sm-text'>%data%</div>";

var HTMLonlineClasses = "<h2 id='onlineClasses' class='blue-violet-text'>Online Classes</h2>";
var HTMLonlineTitle = "<a href='%classUrl%' class='important_link blue-green-text' target='_blank'>%data%";
var HTMLonlineSchool = " - %data%</a>";
var HTMLonlineDates = "<div class='date-text sm-text'>%data%</div><br/>";
var HTMLonlineURL = "<a href='#' class='online-class'>%data%</a>";

var HTMLskillChartTable = "<div><table class='skills-row table table-condensed table-responsive'></table></div>";
var HTMLskillChartRow = "<tr class='skills-entry'></tr>";
var HTMLskillCol1 = "<td class='light-row skill-col'>%data%</td>";
var HTMLskillCol2 = "<td class='light-row skill-col'>%data%</td>";
var HTMLskillCol3 = "<td class='light-row skill-col'>%data%</td>";

var internationalizeButton = "<button>Internationalize</button>";
var googleMap = "<div id='map' class='map'></div>";

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
map.fitBounds(mapBounds);
});
