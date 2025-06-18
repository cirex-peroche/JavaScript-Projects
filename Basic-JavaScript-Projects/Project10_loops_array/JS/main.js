
    // Function using a while loop
    function countWithWhile() {
      let output = "";
      let i = 1;

      // Loop from 1 to 5 using a while loop
      while (i <= 5) {
        output += "While Count: " + i + "<br>";
        i++;
      }

      // Display the result
      document.getElementById("output").innerHTML = output;
    }

    // Function using a for loop
    function countWithFor() {
      let output = "";

      // Loop from 1 to 5 using a for loop
      for (let i = 1; i <= 5; i++) {
        output += "For Count: " + i + "<br>";
      }

      // Display the result
      document.getElementById("output").innerHTML = output;
    }

    // Function utilizing an array
    function showArrayItems() {
      // Define an array of fruits
      let fruits = ["Apple", "Banana", "Cherry", "Mango"];
      let output = "Fruits:<br>";

      // Loop through the array and display items
      for (let i = 0; i < fruits.length; i++) {
        output += fruits[i] + "<br>";
      }

      document.getElementById("output").innerHTML = output;
    }

    // Create and use an object with "let"
    function showPersonInfo() {
      // Define an object using let
      let person = {
        firstName: "Ericson",
        lastName: "Peroche",
        age: 48,
        job: "IT/Developer",
      };

      // Display object properties
      let output = "Person Info:<br>";
      output += "Name: " + person.firstName + " " + person.lastName + "<br>";
      output += "Age: " + person.age + "<br>";
      output += "Job: " + person.job + "<br>";

      document.getElementById("output").innerHTML = output;
    }

