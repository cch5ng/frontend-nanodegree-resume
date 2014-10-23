
//Note that the main job title comes from the work object
//TODO - need to fix contact footer; what should it do?

//bio.skills displays better when limited to 6 items
var bio = {
	"name" : "Carol Chung",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "323.325.1553",
		"email" : "cch5ng@gmail.com",
		"github" : "cch5ng",
		"twitter" : "@cch5ng",
		"location" : "Los Angeles, CA",
		"blog" : "carrottech",
		"blogUrl" : "http://carrottech.wordpress.com"
	},
	"picUrl" : "images/bear_temp.gif",
	"welcomeMsg" : "Namaste - Honor the spirit in you",
	"skills" : [" Python", " JavaScript", " HTML", " CSS", " Java", " Selenium"]
};

bio.displayBio = function() {
	var formattedName = HTMLheaderName.replace(["%data%"],bio.name);
	var formattedRole = HTMLheaderRole.replace(["%data%"],bio.role).replace(["%location%"],bio.contacts.location);
//	var formattedLocation = HTMLlocation.replace(["%data%"],bio.contacts.location);
	var formattedEmail = HTMLemail.replace(["%data%"], bio.contacts.email);
	var formattedMobile = HTMLmobile.replace(["%data%"], bio.contacts.mobile);
	var formattedGithub = HTMLgithub.replace(["%data%"], bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace(["%data%"], bio.contacts.twitter);
//	var formattedBlog = HTMLblog.replace(["%url%"], bio.contacts.blogUrl);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
//	$("#topContacts").append(formattedLocation);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
//	$("#topContacts").append(formattedBlog);
//	$("#footerContacts").append(formattedLocation);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
//	$("#footerContacts").append(formattedBlog);

}

bio.displaySkills = function() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills) {
			var formattedSkills = HTMLskills.replace(["%data%"], bio.skills[skill]);
			$("#skills").append(formattedSkills);			
		}
	}
}

bio.displayBio();
bio.displaySkills();

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
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace(["%data%"], work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace(["%data%"], work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace(["%data%"], work.jobs[job].dates)
		var formattedDescriptions = HTMLworkDescription.replace(["%data%"], work.jobs[job].description)

		$("#main").append(work["currentTitle"]); 
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescriptions);
	}
}

work.displayWork();

//TODO - add logic for displaying images but comment it out b/c it looks too cluttered
//			 preface image display with if condition for images exist; i.e. length > 0
var project = {
	"projects" : [
						{	"title" : "Team Lottery Application",
							"dates" : "Aug 2013 - Oct 2013",
							"description" : "Front-end JS application for creating random beach volleyball teams. Test plan, test cases, and Selenium scripts (WebDriver/Python).",
							"url" : "http://sqa8.wordpress.com/2014/02/24/volleyball-team-app-tests/"
						},
						{	"title" : "Google Keep Tests",
							"dates" : "April 2014 - May 2014",
							"description" : "Test plan, test cases, and Selenium scripts (WebDriver/Python).",
							"url" : "http://sqa8.wordpress.com/2014/04/18/google-keep-tests/"
						} 
	] 
};

project.displayProject = function() {
	for (proj in project.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace(["%data%"], project.projects[proj].title).replace(["%url%"], project.projects[proj].url);
		var formattedDates = HTMLprojectDates.replace(["%data%"], project.projects[proj].dates);
		var formattedDescription = HTMLprojectDescription.replace(["%data%"], project.projects[proj].description);
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
	}
}

project.displayProject();

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
	for (item in education.schools[0].degree) {
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace(["%data%"], education.schools[0].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace(["%data%"], education.schools[0].degree[item]);
		var formattedSchoolMajor  = HTMLschoolMajor.replace(["%data%"], education.schools[0].major[item]);
		var formattedSchoolDates = HTMLschoolDates.replace(["%data%"], education.schools[0].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace(["%data%"], education.schools[0].location);
		$('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
		$('.education-entry:last').append(formattedSchoolDates);
		$('.education-entry:last').append(formattedSchoolLocation);
		$('.education-entry:last').append(formattedSchoolMajor);
	}		
}

education.displayOnlineClasses = function() {
	$('#education').append(HTMLonlineClasses);
	for (course in education.onlineClasses) {
		$('#education').append(HTMLschoolStart);
		var formattedOnlineClassTitle = HTMLonlineTitle.replace(["%data%"], education.onlineClasses[course].title).replace(["%classUrl%"], education.onlineClasses[course].url);
		var formattedOnlineClassSchool = HTMLonlineSchool.replace(["%data%"], education.onlineClasses[course].school);
		var formattedOnlineClassDates = HTMLonlineDates.replace(["%data%"], education.onlineClasses[course].dates);
		$('.education-entry:last').append(formattedOnlineClassTitle + formattedOnlineClassSchool);
		$('.education-entry:last').append(formattedOnlineClassDates);
	}
}

education.displaySchool();
education.displayOnlineClasses();

var skillsChart = {
	skills: [
				{
					"name" : "Python",
					"level" : "Intermediate",
					"dates" : "2012 - present",
					"frequency": "Bi-weekly"
				},
				{
					"name" : "JavaScript",
					"level" : "Intermediate",
					"dates" : "2010 - present",
					"frequency": "Weekly" 
				},
				{
					"name" : "HTML",
					"level" : "Intermediate",
					"dates" : "1998 - present",
					"frequency": "Weekly" 
				},
				{
					"name" : "CSS",
					"level" : "Intermediate",
					"dates" : "2003 - present",
					"frequency": "Weekly"
				},
				{
					"name" : "Git",
					"level" : "Beginner",
					"dates" : "2013 - present",
					"frequency": "Monthly"
				},
				{
					"name" : "Selenium WebDriver",
					"level" : "Intermediate",
					"dates" : "2013 - present",
					"frequency": "Monthly"
				},
				{
					"name" : "Java",
					"level" : "Intermediate",
					"dates" : "2013 - present",
					"frequency": "Quarterly"
				},
				{
					"name" : "SQL",
					"level" : "Intermediate",
					"dates" : "2008 - present",
					"frequency": "Quarterly" 
				},
				{
					"name" : "Android",
					"level" : "Beginner",
					"dates" : "2014 - present",
					"frequency": "Bi-monthly"
				},
				{
					"name" : "Node.js",
					"level" : "Beginner",
					"dates" : "2013 - present",
					"frequency": "Bi-monthly"
				}
	]
};

skillsChart.displaySkills = function() {
	$("#skillsChart").append(HTMLskillChartTable);
	$(".skills-row").append(HTMLskillChartRow);
	$(".skills-entry:last").append(HTMLskillChartHeadings);
	for (skill in skillsChart.skills) {
		$(".skills-row").append(HTMLskillChartRow);
		var formattedSkillsName = HTMLskillChartName.replace(["%data%"], skillsChart.skills[skill].name);
		var formattedSkillsLevel = HTMLskillChartLevel.replace(["%data%"], skillsChart.skills[skill].level);
		var formattedSkillsDates = HTMLskillChartDates.replace(["%data%"], skillsChart.skills[skill].dates);
		var formattedSkillsFrequency = HTMLskillChartFrequency.replace(["%data%"], skillsChart.skills[skill].frequency);
		$(".skills-entry:last").append(formattedSkillsName);
		$(".skills-entry:last").append(formattedSkillsLevel);
		$(".skills-entry:last").append(formattedSkillsDates);
		$(".skills-entry:last").append(formattedSkillsFrequency);
	}
}

skillsChart.displaySkills();

$("#mapDiv").append(googleMap);