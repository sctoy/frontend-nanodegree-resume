

var bio = {
  "name" : "Steven Toy",
  "role" : "CEO",
  "contact" : {
    "mobile" : "918-486-9269",
    "email" : "steve@stevenctoy.com",
    "twitter" : "@sctoy",
    "github" : "https://github.com/sctoy",
    "web" : "http://stevenctoy.com",
    "location" : "New York, NY"
  },
  "welcome" : "Seasoned executive with 25+ years of experience, \
    building start-ups—early, mid and late stage as well as internal \
    ventures—leading revenue up to $100M across verticals. Experience \
    across Finance, Operations, HR, Sales and Marketing. Milestones: \
    Led TaxChat to acquisition in 8 months. Secured $30M+ funding across \
    companies and rounds.",
  "skills" : ["P&L", "Start-Ups", "Fundraising", "Financial Analysis",
  "Board & Governance", "Product Development", "Business Development",
  "Metrics-Driven Insight", "Strategic Partnerships", "Cross-Border Teams",
  "Public Speaking", "Negotiations"],
  "bioPic" : "images/SCT_Headshot_200x250.jpg"
};

var education = {
  "schools" : [
    {
      "college" : "Swarthmore",
      "city" : "Swarthmore, PA",
      "degree" : "Bachelor of Arts",
      "majors" : ["Economics"],
      "dates" : "1985-1989",
      "url" : "http://www.swarthmore.edu/"
    }
  ],
  "onineCourses" : [
    {
      "title" : "JavaScript Crash Course",
      "school" : "Udacity",
      "dates" : "2016",
      "url" : "http://www.udacity.com/course/ud804"
    }
  ]
}

var work = {
  "jobs" : [
    {
      "employer" : "Ernst & Young",
      "title" : "Senior Manager",
      "dates" : "November 2016 - Present",
      "location" : "New York, NY",
      "description" : "This is the description for EY. I don't have a lot \
        to say at this time. I need to figure out how to deal with the \
        carriage return in Atom."
    },
    {
      "employer" : "TaxChat {Acquired by EY}",
      "title" : "CEO",
      "dates" : "January 2016 - November 2016",
      "location" : "Boston, MA",
      "description" : "This is just greeked text for the moment as I don't\
        have a ton to say and my actual resume uses bullets more than just \
        text so I will need to figure out that formatting eventually."
    },
    {
      "employer" : "Fareportal Inc.",
      "title" : "SVP - Hotels, Cars, Ancillary",
      "dates" : "April 2013 - December 2015",
      "location" : "San Francisco, CA",
      "description" : "This is just greeked text for the moment as I don't\
        have a ton to say and my actual resume uses bullets more than just \
        text so I will need to figure out that formatting eventually."
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "Sample Project 1",
      "dates" : "2016",
      "description" : "This is the description for Proj1. I don't have a lot \
        to say at this time. I need to figure out how to deal with the \
        carriage return in Atom.",
      "images" : [
        "images/197x148.gif",
        "images/fry.jpg"
      ]
    },
    {
      "title" : "Sample Project 2",
      "dates" : "2017",
      "description" : "This is the description for Project 2. I don't have \
        much to put here so I will just use this.",
      "images" : [
        "images/197x148.gif",
        "images/fry.jpg"
      ]
    }
  ]
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contact[0] &
    "%data%", bio.contact[1] );
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
//$("#header").append(formattedContact);

// Check for list of skills and show first four. Fix to show all.
if(bio.skills.length > 0) {
  numSkills = 0;
  $("#header").append(HTMLskillsStart);

  while(numSkills < bio.skills.length) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[numSkills]);
    $("#skills").append(formattedSkill);
    numSkills = numSkills + 1;
  }
}

// Function to display all of the work information
function displayWork() {
    for (job in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%",
        work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%",
        work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates = HTMLworkDates.replace("%data%",
        work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      var formattedDescription = HTMLworkDescription.replace("%data%",
        work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

//Function to display project information. Different approach than work
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",
            projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",
            projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",
            projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%",
                    projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

// Code to log click locations
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x,y);
});

// Code to list all job locations
function locationizer(work_obj) {
    var locationArray = [];

    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }

    return locationArray;
}

console.log(locationizer(work));


// Code to internationalize name
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

// Add a map
$("#mapDiv").append(googleMap);

// Code to prevent malicious html from being added
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

console.log(charEscape(html));
