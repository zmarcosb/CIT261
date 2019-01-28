/******************************
* Variables and data types
*/
/*
var firstName = 'Juan';
console.log(firstName);

var lastName = 'Lopez';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var RoseMary = 'Juan and Mary';
var if = 23;
*/


/***********************
* Variable mutation and type coercion
*/
/*
var firstName = 'Juan';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/




/**********************
* Basic operators
*/
/*
var year, yearRose, yearMary;
now = 2018;
ageRose = 28;
ageMary = 33;

// Math operators
yearRose = now - 28;
yearMary = now - 33;

console.log(yearRose);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators

var RoseOlder = ageRose < ageMary;
console.log(RoseOlder);

// typeof operator
console.log(typeof RoseOlder);
console.log(typeof ageRose);
console.log(typeof 'Mary is older than Rose');
var x;
console.log(typeof x);
*/




/**********************
* Basic operators
*/

/*
var now = 2018;
var yearRose = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearRose >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageRose = now - yearRose;
var ageMary = 35;
var average = (ageRose + ageMary) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/


/*************************
* If / else statement
*/

var firstName  = 'Rose';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}



var massMary = 78;
var heightMary = 1.69;

var massRose = 92;
var heightRose = 1.95;

var BMIMary = massMary / (heightMary * heightMary);
var BMIRose = massRose / (heightRose * heightRose);

if(BMIMary > BMIRose){
    console.log('Mary\'s BMI is higher than Rose\'s. ');
}else{
    console.log('Rose\'s BMI is higher than Mary\'s. ');
}


   
  
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   





