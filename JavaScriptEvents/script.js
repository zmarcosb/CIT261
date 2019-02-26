var numOne = document.getElementById("n1");
var numTwo = document.getElementById("n2");
var addSum = document.getElementById("sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    var result = one + two;
    addSum.innerHTML = "Result: " + result;
}

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}
