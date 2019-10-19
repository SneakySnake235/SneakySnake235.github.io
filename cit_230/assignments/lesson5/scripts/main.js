var currentDate = new Date();
var currentDateString;


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


let currentDay = weekDayNumber;

for (let i = 1; i < 6; i++) {
 
    currentDay++;

    
    if (currentDay > 6) {
        currentDay = 0;
    }

    
    const element = document.getElementById(`day${i}`);

    element.innerHTML = daysOfWeek[currentDay];
}