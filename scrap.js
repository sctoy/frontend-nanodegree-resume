/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Steven C. Toy");

//var firstName = "Steven";

//var age = 49;

//console.log(firstName);

//var awesomeThoughts = "I am Steve and I am Awesome!";

//console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("Awesome", "Fun");

//$("#main").append(funThoughts);
//console.log(awesomeThoughts);
//console.log(funThoughts);

//var name = "Steven C. Toy";
//var role = "CEO";

//$("#main").append(bio.firstName);


//console.log(formattedName);
//console.log(formattedRole);

//var name = "AlbERt EINstEiN";

//function nameChanger(oldName) {
    //var finalName = oldName;
    // Your code goes here!
    //var names = oldName.split(" ");
    //names[1] = names[1].toUpperCase();
    //names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    //finalName = names.join(" ");

    // Don't delete this line!
    //return finalName;
//};

// Did your code work? The line below will tell you!
//console.log(nameChanger(name));

// Practice using dot notation
var workEY = {}
workEY.company = "EY";
workEY.city = "New York, NY";
workEY.start = "November 2016";
workEY.end = "Present";
workEY.title = "Senior Manager";

// Formatting header objects
var formattedName = HTMLheaderName.replace("%data%", bio.fullName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contact[0] &
    "%data%", bio.contact[1] ); // This doesn't work
var formattedPic = HTMLbioPic.replace("%data%", bio.headshot);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

// Formatting contact info
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.twitter);
var formattedGitHub = HTMLgithub.replace("%data%", bio.github);
var formattedWeb = HTMLblog.replace("%data%", bio.web);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);

// Formatting first job
var formattedWorkComp = HTMLworkEmployer.replace("%data%", workEY.company);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", workEY.title);
var formattedWorkDate = HTMLworkDates.replace("%data%", workEY.start + " - "
+ workEY.end);

var formattedSchool = HTMLschoolName.replace("%data%", eduSwat.college);

$("#header").prepend(formattedWelcome);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedMobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWorkTitle);
$("#header").append(formattedSchool);
//$("#header").append(formattedEmail);
//$("#header").append(formattedPic);
//$("#header").append(formattedWelcome);

$("#workExperience").prepend(formattedWorkComp);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkDate);

console.log(formattedWorkComp);

//$("#lets-connect").append(formattedTwitter);
//$("#lets-connect").append(formattedGitHub);
//$("#lets-connect").append(formattedWeb);

// Sloppy way to list skills as it requires repeated code.
if(bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}

