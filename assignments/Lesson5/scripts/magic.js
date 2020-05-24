//Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.dropdown');

hambutton.addEventListener('click', 
() => {mainnav.classList.toggle('responsive')}, false);

//======================================================================================================//
var currentDate = new Date();
var currentDateString;
// get day of week
var weekDayNumber = currentDate.getDay();
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
var weekDay = daysOfWeek[weekDayNumber];
currentDateString = weekDay + ', ';
currentDateString += currentDate.getDate();
var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthNumber = currentDate.getMonth();

var month = months[monthNumber];

currentDateString += ' ' + month;
currentDateString += ' ' + currentDate.getFullYear();

document.getElementById('currentDate').innerHTML = currentDateString;
