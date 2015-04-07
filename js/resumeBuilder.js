//bio.skills displays better when limited to 6 items
var bio = {
	"name" : "Carol Chung",
	"role" : "Front End Web Developer",
	"contacts" : {
		"mobile" : "323.325.1553",
		"email" : "cch5ng@gmail.com",
		"github" : "cch5ng",
		"twitter" : "@cch5ng",
		"location" : "Los Angeles, CA",
		"blog" : "Carrotech",
		"blogUrl" : "http://carrotech.wordpress.com"
	},
	"picUrl" : "images/bear_temp.gif",
	"welcomeMsg" : "Namaste - Honor the spirit in you",
	"skills" : [" JavaScript", " HTML", " CSS", " MVC Pattern", " Python", " Testing"]
}; // " Java", " Selenium" " Object Oriented Programming", 

bio.displayBio = function() {
	var formattedName = HTMLheaderName.replace(["%data%"],bio.name);
	var formattedRole = HTMLheaderRole.replace(["%data%"],bio.role).replace(["%location%"],bio.contacts.location);
	var formattedEmail = HTMLemail.replace(["%data%"], bio.contacts.email);
	var formattedMobile = HTMLmobile.replace(["%data%"], bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace(["%data%"], bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace(["%data%"], bio.contacts.twitter);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
};

bio.displaySkills = function() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (var skill in bio.skills) {
			var formattedSkills = HTMLskills.replace(["%data%"], bio.skills[skill]);
			$("#skills").append(formattedSkills);			
		}
	}
};

bio.displayBio();
bio.displaySkills();

var project = {
	"projects" : [
						{	"title" : "Random Interview Questions",
							"dates" : "March 2015",
							"description" : "Web application for Front End Developer Interviews. Skills used: Angular.js and Responsive Design",
							"url" : "http://cch5ng.github.io/angular_front_end_interview",
							"source" : "https://github.com/cch5ng/angular_front_end_interview/tree/gh-pages"
						},
						{	"title" : "Westwood Faves",
							"dates" : "Jan 2015",
							"description" : "Map web application showing favorite spots around Westwood and allowing search. Skills used: Responsive Design, Javascript DOM Manipulation, JSON.",
							"url" : "http://cch5ng.github.io/udacity_p5-minicourse-ajax-project/",
							"source" : "https://github.com/cch5ng/frontend-nanodegree-resume/tree/gh-pages"
						},
						{	"title" : "Arcade Game",
							"dates" : "Nov 2014 - Nov 2014",
							"description" : "Web application recreating classic bug dodging arcade game. Skills used: Javascript, Object Oriented Programming",
							"url" : "http://cch5ng.github.io/frontend-nanodegree-arcade-game/",
							"source" : ""
						},
						{	"title" : "Portfolio",
							"dates" : "Oct 2014 - Nov 2014",
							"description" : "Responsive portfolio site. Skills used: HTML, CSS, Bootstrap, Responsive Design.",
							"url" : "http://cch5ng.github.io/web_dev1_udacity/project1/bootstrap/portfolio.html",
							"source" : ""
						},
						{	"title" : "Endangered",
							"dates" : "July 2014",
							"description" : "Web drawing with intention to bring attention to endangered African Elephants. Exploration of subtractive drawing. Skills used: Processing, Photoshop.",
							"url" : "http://www.openprocessing.org/sketch/154115",
							"source" : ""
						},
						{	"title" : "Spryo-Hanky",
							"dates" : "June 2014",
							"description" : "Web drawing like the spyrograph toy. Skills used: Processing.",
							"url" : "http://www.openprocessing.org/sketch/165458",
							"source" : ""
						} //,
						// {	"title" : "Therapeutic (Anger Management)",
						// 	"dates" : "March 2014",
						// 	"description" : "Web animation exploring translation of human emotion onto physical surfaces. Exploration of how animation and color can be used to communicate and to modulate emotion. Skills used: Processing, Photoshop.",
						// 	"url" : "http://www.openprocessing.org/sketch/165457"
						// }
	]
};

project.displayProject = function() {
	for (var proj in project.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace(["%data%"], project.projects[proj].title).replace(["%url%"], project.projects[proj].url);
		var formattedDates = HTMLprojectDates.replace(["%data%"], project.projects[proj].dates);
		var formattedDescription = HTMLprojectDescription.replace(["%data%"], project.projects[proj].description);
		//var formattedSource = HTMLprojectSource.replace(["%data%"], project.projects[proj].source);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		//$(".project-entry:last").append(formattedSource);
	}
};

project.displayProject();

var work = {
	"jobs" : [
				{	"title" : "Student",
					"employer" : "Self",
					"dates" : "Nov. 2010 - present",
					"description" : "Online courses in software programming, creativity, and entrepreneurship. Self-study in software QA.",
					"location" : "Los Angeles, CA"
				},
				{	"title" : "Technical Writer/Trainer",
					"employer" : "Mitratech Holdings LLC", 
					"dates" : "Oct. 2006 - Oct. 2010",
					"description" : "Edited software administration online help and PDF guides. Produced API documentation. Created training materials (Powerpoint and PDF). Tested enterprise web application (black-box, exploratory) against requirements. Upgraded department application test server for new releases.",
					"location" : "Los Angeles, CA"
				},
				{	"title" : "Technical Writer",
					"employer" : "Avega Health Systems (acquired by MedAssets)", 
					"dates" : "Jan. 2006 - Jul. 2006",
					"description" : "Evaluated and tested new help authoring tool (MadCap Flare). Converted existing help project using MadCap Flare.",
					"location" : "El Segundo, CA"
				},
				{ "title" : "Technical Writer",
					"employer" : "Consultant", 
					"dates" : "Oct. 2003 - Dec. 2005",
					"description" : "Produced and edited online help and PDF guides for iNuntius and USC Web Services. Tested web applications (black-box, exploratory).",
					"location" : "Los Angeles, CA"
				},
				{	"title" : "Technical Writer",
					"employer" : "iNuntius, Inc.", 
					"dates" : "Apr. 2001 - May 2003",
					"description" : "Edited system installation and administration guides (PDF). Produced developer guides (VXML).",
					"location" : "Compton, CA"
				}
	]
};

work.displayWork = function() {
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace(["%data%"], work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace(["%data%"], work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace(["%data%"], work.jobs[job].dates);
		var formattedDescriptions = HTMLworkDescription.replace(["%data%"], work.jobs[job].description);

		$("#main").append(work["currentTitle"]); 
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescriptions);
	}
};

work.displayWork();


//note - schools is an array with one element; education.schools.degree and education.schools.major are both arrays with 2 elements
var education = {
	"schools": [
						{ "name": "UCLA",
							"degree" : ["B.S.", "B.A."],
							"major" : ["Psychobiology", "English Literature"],
							"dates" : "1988 - 1993",
							"location" : "Los Angeles, CA"
						}
	],
	"onlineClasses": [ 
						{	"title" : "Shaping up with Angular.js",
							"school" : "Code School",
							"dates" : "Jan. 2015 - Feb. 2015",
							"url" : "https://www.codeschool.com/courses/shaping-up-with-angular-js"
						},
						{	"title" : "Intro to HTML and CSS (Front-end Web Dev Nanodegree series)",
							"school" : "Udacity",
							"dates" : "10/2014 - present",
							"url" : "https://www.udacity.com/course/ud304"
						},
						{ "title" : "JavaScript Basics (Front-end Web Dev Nanodegree series)",
							"school" : "Udacity",
							"dates" : "10/2014 - present",
							"url" : "https://www.udacity.com/course/ud804"
						},
						{	"title" : "Principles of Computing",
							"school" : "Coursera",
							"dates" : "Apr. 2014 - Jun. 2014",
							"url" : "https://www.coursera.org/records/ap8pSPLPFHQH9gcb"
						},
						{ "title" : "Programming Mobile Applications for Mobile Handheld Systems",
							"school" : "Coursera",
							"dates" : "Jan. 2014 - Mar. 2014",
							"url" : "https://www.coursera.org/records/PDSHW6YAaxrYBhS2"
						},
						{ "title" : "Intro to Interactive Programming in Python",
							"school" : "Coursera",
							"dates" : "Jan. 2014 - Mar. 2014",
							"url" : "https://www.coursera.org/records/urZFFrp2PPuz4XpE"
						},
						{	"title" : "Startup Engineering",
							"school" : "Coursera",
							"dates" : "Jun. 2013 - Sept. 2013",
							"url" : "https://www.coursera.org/course/startup"
						},
						{ "title" : "Creative Programming for Digital Media and Mobile Apps",
							"school" : "Coursera",
							"dates" : "Jun. 2013 - Aug. 2013",
							"url" : "https://www.coursera.org/course/digitalmedia"
						},
						{ "title" : "Intro to Databases",
							"school" : "class2go.stanford.com (former online platform)",
							"dates" : "Jan. 2013 - Mar. 2013",
							"url" : "https://class.stanford.edu/courses/Engineering/db/2014_1/about"
						},
						{ "title" : "Programming Methodology (Java client) - CS 106A",
							"school" : "Stanford Engineering Everywhere",
							"dates" : "Sept. 2012 - Dec. 2012",
							"url" : "http://see.stanford.edu/see/courseinfo.aspx?coll=824a47e1-135f-4508-a5aa-866adcae1111"
						},						
						{	"title" : "JavaScript and DOM Scripting",
							"school" : "UCLA Extension",
							"dates" : "Jan. 2011 - Mar. 2011",
							"url" : "https://www.uclaextension.edu/pages/Course.aspx?cn=X+418.88B&dc=MGMNT"
						}
	]	
};

//note - hardcoded schools[0] even though there is only one array item; otherwise google maps display would break
education.displaySchool = function() {
	for (var item in education.schools[0].degree) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace(["%data%"], education.schools[0].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace(["%data%"], education.schools[0].degree[item]);
		var formattedSchoolMajor  = HTMLschoolMajor.replace(["%data%"], education.schools[0].major[item]);
		var formattedSchoolDates = HTMLschoolDates.replace(["%data%"], education.schools[0].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace(["%data%"], education.schools[0].location);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);
	}		
};

education.displayOnlineClasses = function() {
	$("#education").append(HTMLonlineClasses);
	for (var course in education.onlineClasses) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineClassTitle = HTMLonlineTitle.replace(["%data%"], education.onlineClasses[course].title).replace(["%classUrl%"], education.onlineClasses[course].url);
		var formattedOnlineClassSchool = HTMLonlineSchool.replace(["%data%"], education.onlineClasses[course].school);
		var formattedOnlineClassDates = HTMLonlineDates.replace(["%data%"], education.onlineClasses[course].dates);
		$(".education-entry:last").append(formattedOnlineClassTitle + formattedOnlineClassSchool);
		$(".education-entry:last").append(formattedOnlineClassDates);
	}
};

education.displaySchool();
education.displayOnlineClasses();

var skillsChart = {
	skills: [
				{
					"col1" : "JavaScript >",
					"col2" : "native + jQuery",
					"col3" : "Angular.js" 
				},
				{
					"col1" : "CSS3 >",
					"col2" : "Bootstrap",
					"col3" : "SASS" 
				},
				{
					"col1" : "HTML5",
					"col2" : "Python",
					"col3" : "SQL" 
				},
				{
					"col1" : "Testing >",
					"col2" : "Jasmine",
					"col3" : "Selenium WebDriver" 
				},
				{
					"col1" : "Git",
					"col2" : "Grunt",
					"col3" : " "
				},
				{
					"col1" : "Wireframing >",
					"col2" : "OmniGraffle",
					"col3" : "Balsamiq"
				},
				{
					"col1" : "Photoshop",
					"col2" : "Processing",
					"col3" : "Technical Writing"
				}
	]
};

skillsChart.displaySkills = function() {
	$("#skillsChart").append(HTMLskillChartTable);
	$(".skills-row").append(HTMLskillChartRow);

	for (var skill in skillsChart.skills) {
		$(".skills-row").append(HTMLskillChartRow);
		var formattedSkillsCol1 = HTMLskillCol1.replace(["%data%"], skillsChart.skills[skill].col1);
		var formattedSkillsCol2 = HTMLskillCol2.replace(["%data%"], skillsChart.skills[skill].col2);
		var formattedSkillsCol3 = HTMLskillCol3.replace(["%data%"], skillsChart.skills[skill].col3);


		$(".skills-entry:last").append(formattedSkillsCol1);
		$(".skills-entry:last").append(formattedSkillsCol2);
		$(".skills-entry:last").append(formattedSkillsCol3);
	}
};

skillsChart.displaySkills();

$("#mapDiv").append(googleMap);