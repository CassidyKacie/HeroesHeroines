// Cassidy, Demi, Brian, Anthony

"use strict";

// function that creates dummy data for demonstration

  function createData() {
  var date = new Date();
  var data = {
    // December 25, 2017
    2023: {
        5: {
            6: [
                // Comic Book Day
                {
                    startTime: "All",
                    endTime: "Day",
                    text: "Free Comic Book Day"
                }
            ],
            21: [
                // Graduation
                {
                    startTime: "10:30",
                    endTime: "13:00",
                    text: "GWU Commencement",
                    link: "https://commencement.gwu.edu/"
                }
            ],
            19: [
                // Graduation GWSB
                {
                    startTime: "15:30",
                    endTime: "17:00",
                    text: "GWSB Master's and Doctoral Programs Celebration: Charles E. Smith Center",
                    link: "https://commencement.gwu.edu/"
                }
                
            ],
            3: [
                // Table Top Game Night
                {
                    startTime: "19:30",
                    endTime: "23:00",
                    text: "Table Top Game Night"
                }
                
            ],
            10: [
                // Table Top Game Night
                {
                    startTime: "11:30",
                    endTime: "13:00",
                    text: "Lunch Comic Swap"
                },
                
                // Table Top Game Night
                {
                    startTime: "19:30",
                    endTime: "23:00",
                    text: "Table Top Game Night"
                }
                
            ],
            17: [
                // Table Top Game Night
                {
                    startTime: "19:30",
                    endTime: "23:00",
                    text: "Table Top Game Night"
                }
                
            ],
            24: [
                // Table Top Game Night
                {
                    startTime: "19:30",
                    endTime: "23:00",
                    text: "Table Top Game Night"
                }
                
            ],
            31: [
                // Table Top Game Night
                {
                    startTime: "19:30",
                    endTime: "23:00",
                    text: "Table Top Game Night"
                }
                
            ],
            27: [
                // Table Top Game Night
                {
                    startTime: "17:30",
                    endTime: "19:00",
                    text: "Drinks and book signing with Stan Lee"
                }
                
            ],
      
        },
        10: {
            12: [
                // NYC Comic Con
                {
                    startTime: "8:00",
                    endTime: "18:00",
                    text: "NYC Comic Con",
                    link: "https://www.newyorkcomiccon.com/"
                }
            ],
            13: [
                // NYC Comic Con
                {
                    startTime: "8:00",
                    endTime: "18:00",
                    text: "NYC Comic Con",
                    link: "https://www.newyorkcomiccon.com/"
                }
            ],
            14: [
                // NYC Comic Con
                {
                    startTime: "8:00",
                    endTime: "18:00",
                    text: "NYC Comic Con",
                    link: "https://www.newyorkcomiccon.com/"
                }
            ],
            15: [
                // NYC Comic Con
                {
                    startTime: "8:00",
                    endTime: "18:00",
                    text: "NYC Comic Con",
                    link: "https://www.newyorkcomiccon.com/"
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
  "medium", // size of calendar, can be small | medium | large
  [
    "Sunday", // left most day of calendar labels
    3 // maximum length of the calendar labels
  ],
  [
    "rgb(227, 0, 34)", // primary color
    "#ecb100", // primary dark color
    "#E5E4E2", // text color
    "#5c5c5c" // text dark color
  ]
);

// initializing a new organizer object, that will use an html container to create itself
var organizer = new Organizer(
  "organizerContainer", // id of html container for calendar
  calendar, // defining the calendar that the organizer is related to
  data // giving the organizer the static data that should be displayed
);
/* some code used under open source license. Copyright (c) 2020 by Nizar (https://codepen.io/nizarmah/pen/LkjjWV) */