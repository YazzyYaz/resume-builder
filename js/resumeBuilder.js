'use strict';

// Work JSON Data
var work = {
	'jobs': [
		{
			'employer': 'Asmbld',
			'title': 'Electrical Enginner',
			'location': 'Brooklyn, New York, USA',
			'dates': 'June 2015 to Present',
			'description': 'Asmbld is an architectural robotics startup company that is building reconfigurable spaces for real estate. It also is developing a Martian robot that builds a habitat made out of ice.'
		},
		{
			'employer': 'Feel Three',
			'title': 'Electrical Enginner',
			'location': 'Montreal, QC, Canada',
			'dates': 'March 2015 to May 2015',
			'description': 'Feel Three is developing a virtual reality motion simulator for Oculus Rift and Gear VR headsets that is affordable to the consumer.'
		},
		{
			'employer': 'Terasofya',
			'title': 'Cofounder and Project Lead',
			'location': 'Montreal, QC, Canada',
			'dates': 'August 2014 to February 2015',
			'description': 'Terasofya is a Natural Language Processing startup that has developed an Artificial Intelligence engine that analyzes news reports for summarization and sentimental analysis.'
		},
		{
			'employer': 'La MARQ 515',
			'title': 'Leasing Agent',
			'location': 'Montreal, QC, Canada',
			'dates': 'April 2014 to February 2015',
			'description': 'La MARQ 515 is a private student residential housing catering to the international community in Montreal from all four major universities in the area, offering luxurious fully furnished apartments and top class amenities.'
		}
	],
	display: function(){
		for (var job in work.jobs) {
			var workEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
			var workTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
			var workEmployerTitle = workEmployer + workTitle;
			$('#work-panel:last').append(workEmployerTitle);
			var workDate = HTMLworkDates.replace('%data%', work.jobs[job].dates);
			var workLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
			var workDateLocation = workDate + workLocation;
			$('#work-panel:last').append(workDateLocation);
			var workDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
			$('#work-panel:last').append(workDescription);
		}
	}
}
work.display();

// Projects JSON Data
var projects = {
	'projects': [
		{
			'title': 'Portfolio Website',
			'dates': 'September 2015',
			'description': 'A website designed with a portfolio of projects and an about me page.',
			'images': 'img/portfol.jpg'
		},
		{
			'title': 'Ice House - NASAs 3-D Printed Habitat Challenge',
			'dates': 'August 2015 - September 2015',
			'description': 'A Martian robot that can 3-D Print a habitat made out of Ice',
			'images': 'img/nasa3d.jpg'
		},
		{
			'title': 'DOM Reconfigurable Space Robot',
			'dates': 'June 2015 - August 2015',
			'description': 'A real-estate robot that can reconfigure an empty space by assembling furnitures and wall underground and lifting it up as the user specifies.',
			'images': 'img/dombot.jpg'
		},
		{
			'title': 'Summarit',
			'dates': 'August 2014 - February 2015',
			'description': 'A website where the user can sign up for the summarized news content that includes sentimental analysis about the news report he is receiving.',
			'images': 'img/summ.jpg'
		},
		{
			'title': 'Gump - A Voice Activated Bipedal Robot',
			'dates': 'August 2013 - April 2014',
			'description': 'An award-winning two-legged robot that walks in any direction according to the voice command given by the user.',
			'images': 'img/gump.jpg'
		},
		{
			'title': 'SIMurai - A SumoRobot',
			'dates': 'January 2013 - April 2013',
			'description': 'A SumoRobot designed for the SumoRobot competition whose main objective is to kick out his opponent from the ring while remaining inside.',
			'images': 'img/simurai.jpg'
		}
	],
	display: function() {
		for (var project = 0; project < projects.projects.length; project++) {
			var projectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
			$('#project-panel:last').append(projectTitle);
			var projectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
			$('#project-panel:last').append(projectDates);
			var projectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
			$('#project-panel:last').append(projectDescription);
			var projectImage = HTMLprojectImage.replace('%data%', projects.projects[project].images);
			$('#project-panel:last').append(projectImage);
		}
	}
}
projects.display();

// Biography JSON Data
var bio = {
	'logo': 'Y',
	'name': 'Yaz Khoury',
	'role': 'Web Developer',
	'subrole': 'Front-End Ninja',
	'description': 'I am a Robotic Engineer that is transitioning to a career in Front-End Development. I really love the web and design.',
	'contact': {
		'mobile': '123-456-7890',
		'email': 'yaz.khoury@gmail.com',
		'github': 'YazzyYaz',
		'twitter': '@Yazanator',
		'location': 'Brooklyn'
	},
	'picture': 'img/yaz_avatar.jpg',
	display: function() {
		var myLogo = HTMLheaderLogo.replace('%data%', bio.logo);
		$('#yoogle-header').prepend(myLogo);
		var myName = HTMLheaderName.replace('%data%', bio.name);
		$('#name-display').append(myName);
		var mySubRole = HTMLsubRole.replace('%data%', bio.subrole);
		$('#main-tagline').prepend(mySubRole);
		var myRole = HTMLheaderRole.replace('%data%', bio.role);
		$('#main-tagline').prepend(myRole);
		var myPic = HTMLbioPic.replace('%data%', bio.picture);
		$('#my-picture').append(myPic);
		var myMobile = HTMLmobile.replace('%data%', bio.contact.mobile);
		$('#contact-icons').append(myMobile);
		$('#phone').append(myMobile);
		var myEmail = HTMLemail.replace('%data%', bio.contact.email);
		$('#contact-icons').append(myEmail);
		$('#email').append(myEmail);
		var myTwitter = HTMLtwitter.replace('%data%', bio.contact.twitter);
		$('#contact-icons').append(myTwitter);
		$('#twitter').append(myTwitter);
		var myGithub = HTMLgithub.replace('%data%', bio.contact.github);
		$('#contact-icons').append(myGithub);
		$('#github').append(myGithub);
		var myLocation = HTMLlocation.replace('%data%', bio.contact.location);
		$('#contact-icons').append(myLocation);
		$('#location').append(myLocation);
		var myBio = HTMLbio.replace('%data%', bio.description);
		$('#bio-panel').append(myBio);
	}
}
bio.display();

// Education JSON Data
var education = {
	'schools': [
		{
			'name': 'Concordia University',
			'city': 'Montreal, QC, Canada',
			'degree': 'Bachelor of Engineering',
			'major': 'Electrical Engineering',
			'gradYear': '2014',
			'url': 'www.concordia.ca'
		},
		{
			'name': 'ISG-Dammam',
			'city': 'Dammam, Saudi Arabia',
			'degree': 'American High School Diploma',
			'major': null,
			'gradYear': '2008',
			'url': 'http://dammam.isg.edu.sa/'
		}
	],
	'onlineCourses': [
		{
			'title': 'Javascript Basics',
			'school': 'Udacity',
			'dates': 'September 2015',
			'url': 'https://www.udacity.com/course/javascript-basics--ud804'
		},
		{
			'title': 'Intro to HTML And CSS',
			'school': 'Udacity',
			'dates': 'August 2015',
			'url': 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
		},
		{
			'title': 'How to Use Git and GitHub',
			'school': 'Udacity',
			'dates': 'August 2015',
			'url': 'https://www.udacity.com/course/how-to-use-git-and-github--ud775'
		},
		{
			'title': 'Responsive Web Design Fundamentals',
			'school': 'Udacity',
			'dates': 'August 2015',
			'url': 'https://www.udacity.com/course/responsive-web-design-fundamentals--ud893'
		},
		{
			'title': 'Responsive Images',
			'school': 'Udacity',
			'dates': 'August 2015',
			'url': 'https://www.udacity.com/course/responsive-images--ud882'
		}
	],
	display: function() {
		for (var study in education.schools) {
			var schoolName = HTMLschoolName.replace('%data%', education.schools[study].name);
			var schoolDegree = HTMLschoolDegree.replace('%data%', education.schools[study].degree);
			var schoolNameDegree = schoolName + schoolDegree;
			$('#study-panel:last').append(schoolNameDegree);
			var schoolDates = HTMLschoolDates.replace('%data%', education.schools[study].gradYear);
			var schoolLocation = HTMLschoolLocation.replace('%data%', education.schools[study].city);
			var schoolDatesLocation = schoolDates + schoolLocation;
			$('#study-panel:last').append(schoolDatesLocation);
			var schoolMajor = HTMLschoolMajor.replace('%data%', education.schools[study].major);
			$('#study-panel:last').append(schoolMajor);
		}
		for (var study in education.onlineCourses) {
			var onlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[study].title);
			var onlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[study].school);
			var onlineTitleSchool = onlineTitle + onlineSchool;
			$('#online-study-panel:last').append(onlineTitleSchool);
			var onlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[study].dates);
			$('#online-study-panel:last').append(onlineDates);
			var onlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[study].url)
			$('#online-study-panel:last').append(onlineURL);
		}
	}
}
education.display();


$('#mapDiv').append(googleMap);