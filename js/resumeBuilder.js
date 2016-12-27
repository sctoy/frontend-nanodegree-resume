

var bio = {
  "name" : "Steven C. Toy",
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
      "description" : "This is the description for EY. I don't have a lot \
        to say at this time. I need to figure out how to deal with the \
        carriage return in Atom."
    },
    {
      "employer" : "TaxChat {Acquired by EY}",
      "title" : "CEO",
      "dates" : "January 2016 - November 2016",
      "description" : "This is just greeked text for the moment as I don't\
        have a ton to say and my actual resume uses bullets more than just \
        text so I will need to figure out that formatting eventually."
    },
    {
      "employer" : "Fareportal Inc.",
      "title" : "SVP - Hotels, Cars, Ancillary",
      "dates" : "April 2013 - December 2015",
      "description" : "This is just greeked text for the moment as I don't\
        have a ton to say and my actual resume uses bullets more than just \
        text so I will need to figure out that formatting eventually."
    }
  ]
}

var projects = {
  "jobs" : [
    {
      "title" : "Sample Project 1",
      "dates" : "2016",
      "description" : "This is the description for EY. I don't have a lot \
        to say at this time. I need to figure out how to deal with the \
        carriage return in Atom.",
      "images" : [
        "images/TaxChat1.png",
        "images/TaxChat2.png"
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




// Code to prevent malicious html from being added
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

console.log(charEscape(html));
