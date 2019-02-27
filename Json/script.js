var Jair = new Object();
Jair.height = 1.70;
Jair.age = 26;
Jair.eyesColor = "green";
function displayString() {
document.getElementById('showString').innerHTML = "The characteristics of Jair are: " + JSON.stringify(Jair);
}

var info = '{"name": "Rose","lastName": "Smith","age": 25,"hobbie": "sing"}';
    
var parseInfo = JSON.parse(info);

function displayParse() {
document.getElementById('txt').innerHTML = "Name:      " + parseInfo.name + "<br>" + "Last Name: " + parseInfo.lastName + "<br>" + "Age: " + parseInfo.age + "<br>" + "Hobbie: " + parseInfo.hobbie;
}
