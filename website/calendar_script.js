// Cassidy, Demi, Brian, Anthony

"use strict";

// function that creates dummy data for demonstration

  function createData() {
  var date = new Date();
  var data = {
    // December 25, 2017
    2023: {
        5: {
            21: [
                // Graduation
                {
                    startTime: "00:00",
                    endTime: "24:00",
                    text: "Graduation"
                }
            ],
      4: [
                // Graduation Party
                {
                    startTime: "00:00",
                    endTime: "24:00",
                    text: "Graduation Soiree"
                }
                
            ]
      
        }
    }

  }
  return data;
}

  
// creating the dummy static data
 var data = createData();

// initializing a new calendar object, that will use an html container to create itself
var calendar = new Calendar(
  "calendarContainer", // id of html container for calendar
  "small", // size of calendar, can be small | medium | large
  [
    "Sunday", // left most day of calendar labels
    3 // maximum length of the calendar labels
  ],
  [
    "#E91E63", // primary color
    "#C2185B", // primary dark color
    "#FFFFFF", // text color
    "#F8BBD0" // text dark color
  ]
);

// initializing a new organizer object, that will use an html container to create itself
var organizer = new Organizer(
  "organizerContainer", // id of html container for calendar
  calendar, // defining the calendar that the organizer is related to
  data // giving the organizer the static data that should be displayed
);