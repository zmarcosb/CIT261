var Jair = new Object();
Jair.height = 1.70;
Jair.age = 26;
Jair.eyesColor = "green";

document.write ("The characteristics of Jair are: " + JSON.stringify(Jair));


function jsonParse(){ //Creating a function called when the page loads
    var inString = prompt("Type a JSON object");
    var output = "";
    myObject = JSON.parse(inString);
    for(i in myObject){
        output += "Characteristic: " + i + " = " + myObject[i] + '\n';
    }
    alert(output);
}