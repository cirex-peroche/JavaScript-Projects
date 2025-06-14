var A = "This is a string using variable.";
var B = "\"This alert is from my main.js using window.alert! variable B.\"";
var C = A + " " + B;
var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", Daughter = "Penny", Son = "Zorro";
var Sent1 = "This is the beginning of the string, ";
var Sent2 = "and this is the end of the string.";

//alert("This alert is from my main.js using alert!");
//window.alert (B); 

document.write (A + "<br>");
document.write ("\"Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded." + "<br>");
document.write (C + "<br>");
document.write (Dad + "<br>");
document.write (3 + 3 + " " + "\"This is an expression using addition.\"<br>");
document.write (Sent1 + Sent2 + "<br>");

function My_First_Function () {
var str = "This is the button text!";
document.getElementById ("Button_Text") . innerHTML = str;
}