let age = prompt('Сколько вам лет?');
let year;
let lastnumber = age.charAt(age.length - 1);
if (lastnumber === 1 ) {
   year = ('год');
}
if (1 < lastnumber < 5){
   year = ('года');
}
if (4 < lastnumber <= 9 || 9 < age < 21 && 109 < age < 121) {
   year=('лет');
}
alert(`Вам ${age} ${year}`);