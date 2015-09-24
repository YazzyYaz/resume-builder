'use strict';

// Work JSON Data
// 
var model = {
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
	'bio': {
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
	},
	'education': {
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
		]
	}
};


var octopus = {

	init: function() {
		view.init();
	},

	getJob: function() {
		return model.jobs;
	},

	getBio: function() {
		return model.bio;
	},

	getEdu: function() {
		return model.education;
	},

	getProj: function() {
		return model.projects;
	}

};

var view = {
	init: function() {
		this.job = octopus.getJob();
		this.bio = octopus.getBio();
		this.edu = octopus.getEdu();
		this.proj = octopus.getProj();
		this.school = this.edu.school;
		this.online = this.edu.onlineCourses;

		this.render();
	},

	render: function() {

		for (var project = 0; project < this.proj.length; project++) {
			var projectTitle = HTMLprojectTitle.replace('%data%', this.proj[project].title);
			$('#project-panel:last').append(projectTitle);
			var projectDates = HTMLprojectDates.replace('%data%', this.proj[project].dates);
			$('#project-panel:last').append(projectDates);
			var projectDescription = HTMLprojectDescription.replace('%data%', this.proj[project].description);
			$('#project-panel:last').append(projectDescription);
			var projectImage = HTMLprojectImage.replace('%data%', this.proj[project].images);
			$('#project-panel:last').append(projectImage);
		}

		for (var job in this.job) {
			var workEmployer = HTMLworkEmployer.replace('%data%', this.job[job].employer);
			var workTitle = HTMLworkTitle.replace('%data%', this.job[job].title);
			var workEmployerTitle = workEmployer + workTitle;
			$('#work-panel:last').append(workEmployerTitle);
			var workDate = HTMLworkDates.replace('%data%', this.job[job].dates);
			var workLocation = HTMLworkLocation.replace('%data%', this.job[job].location);
			var workDateLocation = workDate + workLocation;
			$('#work-panel:last').append(workDateLocation);
			var workDescription = HTMLworkDescription.replace('%data%', this.job[job].description);
			$('#work-panel:last').append(workDescription);
		}

		var myLogo = HTMLheaderLogo.replace('%data%', this.bio.logo);
		$('#yoogle-header').prepend(myLogo);
		var myName = HTMLheaderName.replace('%data%', this.bio.name);
		$('#name-display').append(myName);
		var mySubRole = HTMLsubRole.replace('%data%', this.bio.subrole);
		$('#main-tagline').prepend(mySubRole);
		var myRole = HTMLheaderRole.replace('%data%', this.bio.role);
		$('#main-tagline').prepend(myRole);
		var myPic = HTMLbioPic.replace('%data%', this.bio.picture);
		$('#my-picture').append(myPic);
		var myMobile = HTMLmobile.replace('%data%', this.bio.contact.mobile);
		$('#contact-icons').append(myMobile);
		$('#phone').append(myMobile);
		var myEmail = HTMLemail.replace('%data%', this.bio.contact.email);
		$('#contact-icons').append(myEmail);
		$('#email').append(myEmail);
		var myTwitter = HTMLtwitter.replace('%data%', this.bio.contact.twitter);
		$('#contact-icons').append(myTwitter);
		$('#twitter').append(myTwitter);
		var myGithub = HTMLgithub.replace('%data%', this.bio.contact.github);
		$('#contact-icons').append(myGithub);
		$('#github').append(myGithub);
		var myLocation = HTMLlocation.replace('%data%', this.bio.contact.location);
		$('#contact-icons').append(myLocation);
		$('#location').append(myLocation);
		var myBio = HTMLbio.replace('%data%', this.bio.description);
		$('#bio-panel').append(myBio);



		for (var study in this.school) {
			var schoolName = HTMLschoolName.replace('%data%', this.school[study].name);
			var schoolDegree = HTMLschoolDegree.replace('%data%', this.school[study].degree);
			var schoolNameDegree = schoolName + schoolDegree;
			$('#study-panel:last').append(schoolNameDegree);
			var schoolDates = HTMLschoolDates.replace('%data%', this.school[study].gradYear);
			var schoolLocation = HTMLschoolLocation.replace('%data%', this.school[study].city);
			var schoolDatesLocation = schoolDates + schoolLocation;
			$('#study-panel:last').append(schoolDatesLocation);
			var schoolMajor = HTMLschoolMajor.replace('%data%', this.school[study].major);
			$('#study-panel:last').append(schoolMajor);
		}
		for (var study in this.online) {
			var onlineTitle = HTMLonlineTitle.replace('%data%', this.online[study].title);
			var onlineSchool = HTMLonlineSchool.replace('%data%', this.online[study].school);
			var onlineTitleSchool = onlineTitle + onlineSchool;
			$('#online-study-panel:last').append(onlineTitleSchool);
			var onlineDates = HTMLonlineDates.replace('%data%', this.online[study].dates);
			$('#online-study-panel:last').append(onlineDates);
			var onlineURL = HTMLonlineURL.replace('%data%', this.online[study].url)
			$('#online-study-panel:last').append(onlineURL);
		}

	}
}


octopus.init();

$('#mapDiv').append(googleMap);