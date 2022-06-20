// console.log("this works");

let currentDate = $('#currentDay');
let dayOfmonth = moment().format("MMM, Do, YYYY");
let currentTime = $('#currentTime');
let timeOfday = moment().format("h:mm:ss a");
//console.log(dayOfmonth);
currentDate.text(dayOfmonth);
currentTime.text(timeOfday);

const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));