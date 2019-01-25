//Objects and properties
// Object
var vanessa = {
    firstName: 'Vanessa',
    lastName: 'Marcos',
    birthYear: 1993,
    family: ['Roger', 'Zaida', 'Leslie', 'Sammy'],
    job: 'engineer',
    isMarried: false
};

console.log(vanessa.firstName);
console.log(vanessa['lastName']);
var x = 'birthYear';
console.log(vanessa[x]);

// vanessa.job = 'designer';
// vanessa['isMarried'] = true;
// console.log(vanessa);

// new Object syntax
var leslie = new Object();
leslie.firstName = 'leslie';
leslie.birthYear = 1996;
leslie['lastName'] = 'Marcos';
console.log(leslie);

// Methods
var vanessa = {
    firstName: 'Vanessa',
    lastName: 'Marcos',
    birthYear: 1993,
    family: ['Roger', 'Zaida', 'Leslie', 'Sammy'],
    job: 'engineer',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

vanessa.calcAge();
console.log(vanessa);
