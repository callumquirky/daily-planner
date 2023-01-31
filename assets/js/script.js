let currentDate = $('#currentDay');
let todayDate = moment().format("dddd, MMMM Do YYYY");
currentDate.text(todayDate);
console.log(moment().format("dddd, MMMM Do YYYY"))
console.log(currentDate.text)
