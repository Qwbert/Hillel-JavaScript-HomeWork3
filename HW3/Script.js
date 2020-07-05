var number =+ prompt('Сколько вам лет ?');
var string;
if(number % 10 == 1 && number % 100 != 11){
string = 'год';
} else if(
    number >= 2 && 
    number <= 4 && 
    (number % 100 < 10 || number % 100 > 20)){
    string = 'года';
}else {
    string = 'лет';
}  
console.log(number +' ' + string);
