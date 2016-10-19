var bio = {
    "name": "Hari Madhav Jha",
    "role": "Web Devloper",
    "contacts": {
        "mobile": "7204741124",
        "email": "madhav1993hari@gmail.com",
        "github": "madhav1993",
        "twitter": "Madhav7Jha",
        "location": "Bangaluru"
    },
    "welcomeMessage": "Hello !,I'm madhav.I have a passion for web devlopment and love to create for web and mobile devices.",
    "skills": ["HTML5, CSS3", "Javascript, jQuery", "Git", "Gulp, Grunt", "core-java", "photoshop"],
    "bioPic": "images/ff2.jpg"
}

var education = {
    "schools": [{
        "name": "Jaypee University of Engineering & Technology",
        "location": "Guna, Madhya Pradesh,India",
        "degree": "B.Tech",
        "majors": ["Electronics and communication Engineering"],
        "date": "May:2012-June:2016",
        "url": "http://www.juet.ac.in/"

    }, {
        "name": "St. josephs public school",
        "location": "Dalsinghsarai, Samastipur, Bihar",
        "degree": "senior secondry",
        "majors": ["mathematics", "phy", "chemistry"],
        "date": "May:2009-May:2011",
        "url": "http://www.stjosephspublicschool.org/"
    }, {
        "name": "Progressive Central High School",
        "location": "Patsa, Samastipur, Bihar",
        "degree": "secondry",
        "majors": ["mathematics", "phy", "chemistry", "bio"],
        "date": "May:2008-June:2009",
        "url": "http://www.pchighschool.co.in/"
    }],
    "onlineCourses": [{
        "name": "Front-End Nanodegree Program",
        "school": "Udacity",
        "year": "Aug:2016",
        "url": "https://classroom.udacity.com/nanodegrees/nd001/"
    }, {
        "name": "Git, sql, java, Javascript, jQuery, HTML&CSS, PHP",
        "school": "Codecademy",
        "year": "June:2015-Jan:2016",
        "url": "https://www.codecademy.com/madhav1993"

    }, {
        "name": "HTML5, Java, Matlab",
        "school": "Udemy",
        "year": "Jan:2015-Jan:2016",
        "url": "https://www.udemy.com/home/my-courses/learning/"

    }, {
        "name": "python",
        "school": "udacity",
        "year": "Aug:2016",
        "url": "https://www.udacity.com/course/programming-foundations-with-python--ud036"

    },{
        "name": "Angular.js, Discover DevTools",
        "school": "codeschool",
        "year": "Oct:2016",
        "url": "https://www.codeschool.com"

    }]
}

var work = {
    "jobs": [{
        "employer": "Forever",
        "title": "Distributor",
        "location": "Renukoot,Utar pradesh ,India",
        "date": "May:2015-June:2015",
        "description": "Forever Living Products International, Inc. (FLPI) is a multi-level marketing (MLM) company based in Scottsdale, Arizona, which manufactures and sells aloe vera-based drinks and bee-derived cosmetics, nutritional supplements, and personal care products.It was part time work just for fun."
    }]
}

var projects = {
    "projects": [{
        "title": "filter Bank",
        "date": "June:2015-june:2016",
        "description": "A filter bank is an array of band-pass filters that separates the input signal into multiple components, each one carrying a single frequency sub-band of the original signal. One application of a filter bank is a graphic equalizer, which can attenuate the components differently and recombine them into a modified version of the original signal..",
        "images": "./images/filter_Bank.png",
        "url": "https://github.com/madhav1993/filter_bank"
    }, {
        "title": "To Do List",
        "date": "Jan:2015",
        "description": "A list of tasks that need to be completed, typically organized in order of priority.This project is based on jQuery .One of the most important reasons for keeping a to-do list is the organization. Organizing your tasks with a list can make everything much more manageable and make you feel grounded. Seeing a clear outline of your completed and uncompleted tasks will help you feel organized and stay mentally focused.",
        "images": "./images/toDOlist.png",
        "url": "https://github.com/madhav1993/ToDoList"
    }, {
        "title": "Tip Calculator",
        "date": "Jan:2015",
        "description": "A Javasccript program that calculates tips. The amount of mony is entered by the user and the program displays the tip amounts for each individual.",
        "images": "./images/tipCalculator.png",
        "url": "https://github.com/madhav1993/TipCalculator"
    }]
}

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);


    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $('#topContacts:last').append(formattedMobile);
    $('#footerContacts').append(formattedMobile)

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $('#topContacts:last').append(formattedEmail);
    $('#footerContacts').append(formattedEmail)

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $('#topContacts:last').append(formattedTwitter);
    $('#footerContacts').append(formattedTwitter)

    var formattedgit = HTMLgithub.replace("%data%", bio.contacts.github);
    $('#topContacts:last').append(formattedgit);
    $('#footerContacts').append(formattedgit)

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $('#topContacts:last').append(formattedLocation);
    $('#footerContacts').append(formattedLocation)

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    $('#header').append(formattedBiopic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $('#header').append(formattedMessage);


    $('#header').append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $('#skills').append(formattedSkills);
    }
}();


work.display = function() {
    $('#workExperience').append(HTMLworkStart);
    for (var job = 0; job < work.jobs.length; job++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
        $(".work-entry:last").append(formattedDate);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }

    $("#work-attr").attr('href', 'https://foreverliving.com/');
}();

projects.display = function() {
    for (project in projects.projects) {
        $('#projects').append(HTMLprojectStart);

        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        formattedProjectTitle = formattedProjectTitle.replace("#", projects.projects[project].url);
        $('.project-entry:last').append(formattedProjectTitle);

        var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
        $('.project-entry:last').append(formattedProjectDate);

        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $('.project-entry:last').append(formattedProjectDescription);

        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $('.project-entry:last').append(formattedImage);
    }
}();

education.display = function() {
    for (school in education.schools) {
        $('#education').append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedSchoolNameDegree = formattedSchoolName + " " + formattedSchoolDegree;
        formattedSchoolNameDegree = formattedSchoolNameDegree.replace("#", education.schools[school].url);
        $('.education-entry:last').append(formattedSchoolNameDegree);

        var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[school].date);
        $('.education-entry:last').append(formattedSchoolDate);

        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $('.education-entry:last').append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $('.education-entry:last').append(formattedSchoolMajor);
    }
    $('.education-entry:last').append(HTMLonlineClasses);
    for (onlineCourses in education.onlineCourses) {

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourses].name);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourses].school);
        var formattedSchoolTitle = formattedOnlineTitle + " " + formattedOnlineSchool;
        formattedSchoolTitle = formattedSchoolTitle.replace("#", education.onlineCourses[onlineCourses].url);
        $('.education-entry:last').append(formattedSchoolTitle);

        var formattedOnlineSchoolDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourses].year);
        $('.education-entry:last').append(formattedOnlineSchoolDate);

        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourses].url);
        formattedUrl = formattedUrl.replace("%#%", education.onlineCourses[onlineCourses].url);
        $('.education-entry:last').append(formattedUrl)

    }
}();

$("#mapDiv").append(googleMap);
