let strDate = prompt('Введите дату в формате DD MM YYYY:');
let [day, month, year] = strDate.split(' ');
let dateInput = new Date(`${year}-${month}-${day}`);
let weekDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
console.log(weekDays[dateInput.getDay()]);

let currentDate = new Date();
let [hours, minutes] = [currentDate.getHours(), currentDate.getMinutes()];
console.log("Минут прошло с начала суток: " + (hours * 60 + minutes));

let date1 = new Date('2000-02-21');
let date2 = new Date('1993-03-15');
date1 > date2 ? console.log(date1) : console.log(date2);