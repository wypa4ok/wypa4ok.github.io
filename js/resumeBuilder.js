var bio = { "name": "Pavlo Petrushko",
			"role": "Java Developer",
			"contacts": { 
				"email" : "pavlo.petrushko@gmail.com", 
				"phone" : "(647)532 9319",
				"location" : "Kitchener, ON " 
			},
			"welcomeMessage" : "Creative and well-skilled professional who loves finding simple solutions to complex problems.",
			"skills": [ "Programming: Java/J2EE (Servlets/JSP, Spring Framework, Hibernate), C#, VB.NET", "Web: JavaScript, jQuery, AJAX, PHP", "Databases: Experience with Oracle (Exadata), SQL Server and MySQL RDBMS", "Knowledge of algorithms and data structures", "Team player"],
			"imageUrl": "images/photo.jpg"
		};

bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.phone);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedPicture = HTMLbioPic.replace("%data%", bio.imageUrl);
	$("#header").append(formattedPicture);

	var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
	$("#header").append(formattedMessage);

	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(i in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}	

}



var work = { "jobs" : [{
			 	"position" : "Customer Relationship Management Specialist",
			 	"employer" : "BlackBerry",
			 	"dates" : "May 2015 - Dec 2015",
			 	"city" : "Waterloo, ON ",
			 	"description" : "- Performed database programming according to business requirements<br /> - Ensured data quality and integrity in database, performed maintenance and troubleshooting activities<br /> - Automated marketing campaigns using CRM software (ExactTarget)<br /> - Designed and developed complex QlikView dashboards and reports<br /> - Created and tested QlikView scripts to import data from source systems and flat files"
			}, {
				"position" : "Public Pool Lifeguard",
			 	"employer" : "Kalahari Resort",
			 	"dates" : "2013",
			 	"city" : "Wisconsin Dells, WI, USA",
			 	"description" : ""
			}, {
				"position" : "Waiter",
			 	"employer" : "UNO Pizzeria & Grill ",
			 	"dates" : "2013",
			 	"city" : "Wisconsin Dells, WI, USA",
			 	"description" : ""
			}]
			}; 

work.display = function(){
	$("#workExperience").append(HTMLworkStart);
	
	for(job in work.jobs){
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedWorkDates);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
}

var education = { "schools" : [ { 			 
								 "name" : "Conestoga College",
				  				  "dates" : "2015 - 2016",
				  				  "city" : "Kirchener, ON",
				  				  "degree" : "Graduate Certificate",
				  				  "major" : "Computer Science"
				  				}, { 
								    "name" : "Seneca College",
				  				  "dates" : "2014 - 2015",
				  				  "city" : "Toronto, ON",
				  				  "degree" : "Graduate Certificate",
				  				  "major" : "Information technology"
				  				}, { 
				  				  "name" : "Taras Shevchenko National University of Kyiv",
				  				  "dates" : "2010 - 2014",
				  				  "city" : "Kyiv, Ukraine",
				  				  "degree" : "Bachelor's Degree",
				  				  "major" : "Computer Science"
				  				} ] 
				};

education.display = function(){
	$("#education").append(HTMLschoolStart);
	for(school in education.schools){

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		//$(".education-entry").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;

		$(".education-entry").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
		$(".education-entry").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry").append(formattedMajor);
	}
}

var project = { "projects" : [ {
								"title" : "Lawyer Search Website",
								"dates" : "2015",
								"description" : "- Used Spring Framework to build a web service where customers can search for lawyers based on the region of the city and price range<br /> - Implemented functionality that allows lawyers to register on the website and become searchable for customers<br /> - Created a clear and attractive user interface using JSP, HTLM/CSS and jQuery technologies ",
								"images" : ""
								}, {
								"title" : "Online Delivery Tracking System",
								"dates" : "2015",
								"description" : "- Developed online tracking system that allows customers to check the status and location of their shipments at any point in time<br /> - Designed and implemented graphical representation of tracking information using Google Maps API that can be easily implemented by any online service ",
								"images" : ""
								}, {
								"title" : "Intelligent System for the Purpose of Text Attribution",
								"dates" : "2014",
								"description" : " - Developed an intelligent system for the purpose of text attribution using Support Vector Machine and Error-Correcting Output Codes to achieve higher precision<br /> - Used collected and normalized data from the texts of more than 15 writers as basis for machine learning<br /> - Achieved 85% attribute accuracy, earning the highest mark for the project ",
								"images" : ""
								} ]
				};
				
project.display = function(){
					for(p in project.projects){
						$("#projects").append(HTMLprojectStart);

						var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[p].title);
						$(".project-entry:last").append(formattedTitle);

						var formattedDates = HTMLprojectDates.replace("%data%", project.projects[p].dates);
						$(".project-entry:last").append(formattedDates);

						var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[p].description);
						$(".project-entry:last").append(formattedDescription);

					}
				} 


bio.display();
education.display();
work.display();
project.display();









