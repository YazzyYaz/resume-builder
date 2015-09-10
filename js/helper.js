/*
  This code has been extensively edited to adjust to the new HTML code and work with Foundation 5.
  Original repo for this code with original code is: www.github.com/udacity/frontend-nanodegree-resume
*/

//
//	HTML Code Snippets
//

// Header
var HTMLheaderLogo = '<span class="blue" id="initial">%data%</span>';
var HTMLheaderName = '<h2 id="header-name">%data%</h2>';
var HTMLheaderRole = '<h2>%data%</h2>';
var HTMLsubRole = '<h3>%data%</h3>';

// Contact
var HTMLmobile = '<span class="fa fa-mobile fa-2x"></span><p>%data%</p>';
var HTMLemail = '<span class="fa fa-envelope fa-2x"></span><p>%data%</p>';
var HTMLtwitter = '<span class="fa fa-twitter fa-2x"></span><p>%data%</p>';
var HTMLgithub = '<span class="fa fa-github fa-2x"></span><p>%data%</p>';
var HTMLlocation = '<span class="fa fa-map-marker fa-2x"></span><p>%data%</p>';

// Media and Bio
var HTMLbioPic = '<img src="%data%" class="responsive-img" id="avatar-pic">';
var HTMLbio = "<p>%data%</p>"

// Work Info
var HTMLworkEmployer = '<h4><i>%data% ';
var HTMLworkTitle = ' - %data%</i></h4>';
var HTMLworkDates = '<h4 class="work-date">%data% - ';
var HTMLworkLocation = '%data%</h4><br>';
var HTMLworkDescription = '<p class="work-description">%data%</p>';

// Project Info
var HTMLprojectTitle = '<h4><i>%data% - ';
var HTMLprojectDates = ' %data%</i></h4>';
var HTMLprojectDescription = '<p class="work-description">%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

// School Info
var HTMLschoolName = '<h4><i>%data% ';
var HTMLschoolDegree = ' - %data%</i></h4>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<p class="work-description">%data% - ';
var HTMLschoolMajor = '</p>';

// Online Courses Info
var HTMLonlineTitle = '<h4><i>%data%';
var HTMLonlineSchool = ' - %data%</i></h4>';
var HTMLonlineDates = '<p class="work-description">%data%</p>';
var HTMLonlineURL = '<p class="work-description">%data%</p>';

// Internationalize Btn and Google Map. NOTE: Internationalize not added to site.
var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


//
// Internationalize Name Button
//

$(document).ready(function() {
	$('button').click(function() {
		var iName = inName() || function(){};
			$('#name').html(iName);
  });
});

function inName(oldName) {
	var finalName = oldName;
	// Split finalName into two arrays, removing the space between them, under the variable name_array
	var name_array = finalName.split(" ");
	// Manipulate first name to have first index as UpperCase and remainder as LowerCase
	name_array[0] = name_array[0].charAt(0).toUpperCase() + name_array[0].slice(1).toLowerCase();
	// Manipulate last name to have all letters as UpperCase
	name_array[1] = name_array[1].toUpperCase();
	// Join name_array with space to have a string with first name and last name
	finalName = name_array.join(" ");
	return finalName;
}

//
// Collecting Click Locations
//

clickLocations = [];

function logClicks(x,y) {
	clickLocations.push(
		{
			x: x,
			y: y
		}
	);
	console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});



//
// Google Maps
//
var map;    // declares a global map variable


function initializeMap() {

	var locations;

	var mapOptions = {
		disableDefaultUI: true
	};

	/*
	For the map to be displayed, the googleMap var must be
	appended to #mapDiv in resumeBuilder.js.
	*/
	map = new google.maps.Map(document.querySelector('#map'), mapOptions);

	/*
	locationFinder() returns an array of every location string from the JSONs
	written for bio, education, and work.
	*/
	function locationFinder() {

		// initializes an empty array
		var locations = [];

		// adds the single location property from bio to the locations array
		locations.push(bio.contact.location);

		// iterates through school locations and appends each location to
		// the locations array
		for (var school in education.schools) {
			locations.push(education.schools[school].city);
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
	var lat = placeData.geometry.location.lat(); // latitude from the place service
	var lon = placeData.geometry.location.lng(); // longitude from the place service
	var name = placeData.formatted_address; // name of the place from the place service
	var bounds = window.mapBounds; // current boundaries of the map window

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


	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
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

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
	//Make sure the map bounds get updated on page resize
	map.fitBounds(mapBounds);
});
