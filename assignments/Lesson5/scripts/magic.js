//Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.dropdown');

hambutton.addEventListener('click', 
() => {mainnav.classList.toggle('responsive')}, false);

//======================================================================================================//
// get current date for footer
var currentDate = new Date();
var currentDateString;

// get day of week
var weekDayNumber = currentDate.getDay();

var daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

var weekDay = daysOfWeek[weekDayNumber];

currentDateString = weekDay + ', ';

currentDateString += currentDate.getDate();

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

var monthNumber = currentDate.getMonth();

var month = months[monthNumber];

currentDateString += ' ' + month;
currentDateString += ' ' + currentDate.getFullYear();

document.getElementById('currentDate').innerHTML = currentDateString;


// create the five-day forecast
let currentDay = weekDayNumber;

for (let i = 1; i < 6; i++) {
    // add one day to current day
    currentDay++;

    // if current day is greater than 6 (Saturday), reset it to 0 (Sunday)
    if (currentDay > 6) {
        currentDay = 0;
    }

    // assign value to placeholder in HTML
    const element = document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay];
}

// show/hide pancake
if (weekDayNumber === 5 ) {
    document.getElementById("pancake")
        .removeAttribute("class", "hidden");
}


