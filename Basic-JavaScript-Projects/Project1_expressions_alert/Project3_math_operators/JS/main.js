function addition() {
    let addition = 5 + 3;  // Example addition
    document.getElementById("addition").innerHTML = "5 + 3 = " + addition;
}

function subtraction() {
    var Subtraction = 5 - 2;
    document.getElementById ("subtraction") . innerHTML = "5 - 2 = " + Subtraction;

}

function multiplication() {
    var multiplication = 5 * 2;
    document.getElementById ("multiplication") . innerHTML = "5 * 2 = " + multiplication;

}

function division() {
    var division = 15 / 3;
    document.getElementById ("division") . innerHTML = "15 / 3 = " + division;

}

function Math() {
    var Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById ("Math") . innerHTML = "(1 + 2) * 10 / 2 -5 = " + Math;
}

function remainder() {
    var remainder = 25 % 6;
    document.getElementById ("remainder") . innerHTML = "When you divide 25 by 6 you have a remainder of: " + remainder;
}

function Increment() { //Defining and naming the increment function
    var value = document.getElementById("IncrementText"). innerHTML; //Saves the text of the HTML element to a variable
    value++; //Add one to the value
    document.getElementById("IncrementText") . innerHTML = value; //Print the result in HTML
}

function Decrement() { //Defining a function and naming it
    var value = document.getElementById("DecrementText") . innerHTML; //Saves the text of the HTML element to a variable
    value --; //Subtract one from the value
    document.getElementById("DecrementText"). innerHTML = value; //Print the result in HTML
}

function random() { //Defining and naming the random function
    document.getElementById("Ran") . innerHTML = Math.random()*10; //Print the result in HTML
}

function modulus_operator() { //Defining and naming the modulus operator function
    var modulus = 38 % 4;
    document.getElementById("Mod") . innerHTML = "When you divide 38 by 4 you have a remainder of: " + modulus; //Print the result in HTML
}