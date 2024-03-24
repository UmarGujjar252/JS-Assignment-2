// concatenateSomeStrings

document.getElementById("concatenateSomeStrings").onclick = function () {

    
    let greeting = "Good Day ";
    let name = "Umar Gujjar"
    let exclamationMark = "!!!";

    alert(greeting + name + exclamationMark);
    // alert(greeting + name + "!!!");

    document.getElementById("statement").innerHTML = "alert(greeting + name + exclamationMark);";

    document.getElementById("output").innerHTML = "Good Day Umar Gujjar!!!"; 
    
}

// askNameFromUser

document.getElementById("askNameFromUser").onclick = function() {

    let fullName = prompt("Your Name?")

    alert("Dear " + fullName + "!" + " Your Name is very Beautiful!");
    
    document.getElementById("statement").innerHTML = 'alert("Dear " + fullName + "!" + " Your Name is very Beautiful!");';

    document.getElementById("output").innerHTML = "Dear " + fullName + "!" + " Your Name is very Beautiful!";
} 

// comparisonOperators

document.getElementById("comparisonOperators").onclick = function () {

    let num1 = +prompt("Enter First Number ");
    let num2 = +prompt("Enter Second Number ");
    let operator = prompt("Enter Comparison Operator");

    if (operator === "<" ) {
        let result = num1 < num2;
        document.getElementById("statement").innerHTML = num1 + "<" + num2;
        document.getElementById("output").innerHTML = result;
    }
    else if (operator === ">") {
        let result = num1 > num2;
        document.getElementById("statement").innerHTML = num1 + ">" + num2;
        document.getElementById("output").innerHTML = result;
    }
    else if (operator === ">=") {
        let result = num1 >= num2;
        document.getElementById("statement").innerHTML = num1 + ">=" + num2;
        document.getElementById("output").innerHTML = result;
    }
    else if (operator === "<=") {
        let result = num1 <= num2;
        document.getElementById("statement").innerHTML = num1 + "<=" + num2;
        document.getElementById("output").innerHTML = result;
    }
    else {
        document.getElementById("statement").innerHTML = "Invalid Operator!"
        document.getElementById("output").innerHTML = operator;
    }

    // let num3 = 30;
    // let num4 = 20;

    // First Condition

    // if (num3 > num4) {
    //     alert("Yes, Your condition is true");
    // }

    // Second Condition

    // Actually this condition is false, that's why the code is not executed.
    // if (num3 < num4) {                  
    //     alert("Your condition is true"); 
    // }

    // document.getElementById("statement").innerHTML = "let num1 = " + num1 + ";<br>let num2 = " + num2 + ";<br>if (num1 > num2) {" + '<br>alert("Yes, Your condition is true");' + "<br>}";
    
    // document.getElementById("output").innerHTML = "Yes, Your condition is true";

}

// if else if statements

document.getElementById("ifElseIf").onclick = function() {

    let marks = +prompt("Enter Your Marks");

    if (marks >= 90) {
        alert("You Got A+ Grade");
        document.getElementById("statement").innerHTML = "marks = " + marks + "." + " Your marks is >= 90";
        document.getElementById("output").innerHTML = "<p class= 'text-danger'>" + "You Got A+ Grade" + "</p>";
    }

    else if (marks >= 80) {

        alert("You Got A Grade");
        document.getElementById("statement").innerHTML = "marks = " + marks + "." + " Your marks is >= 80";
        document.getElementById("output").innerHTML = "<p class= 'text-danger'>" + "You Got A Grade" + "</p>";
        
    }

    else if (marks >= 70) {

        alert("You Got B Grade");
        document.getElementById("statement").innerHTML = "marks = " + marks + "." + " Your marks is >= 70";
        document.getElementById("output").innerHTML = "<p class= 'text-danger'>" + "You Got B Grade" + "</p>";
        
    }

    else if (marks >= 60) {

        alert("You Got C Grade");
        document.getElementById("statement").innerHTML = "marks = " + marks + "." + " Your marks is >= 60";
        document.getElementById("output").innerHTML = "<p class= 'text-danger'>" + "You Got C Grade" + "</p>";
        
    }

    else if (marks >= 50) {

        alert("You Got D Grade");
        document.getElementById("statement").innerHTML = "marks = " + marks + "." + " Your marks is >= 50";
        document.getElementById("output").innerHTML = "<p class= 'text-danger'>" + "You Got D Grade" + "</p>";
        
    }

    else if (marks >= 33) {

        alert("You Got Passing Marks");
        document.getElementById("statement").innerHTML = "marks = " + marks + "." + " Your marks is >= 33";
        document.getElementById("output").innerHTML = "<p class= 'text-danger'>" + "You Got Passing Marks" + "</p>";
        
    }

    else {
        alert("You are Failed");
        document.getElementById("statement").innerHTML = "marks = " + marks + "." + " Your marks is < 33";
        document.getElementById("output").innerHTML = "<p class= 'text-danger'>" + "You are Failed" + "</p>";
    }
}

// testingSetsOfConditions
document.getElementById("testingSetsOfConditions").onclick = function () {
    
    let age = +prompt("Enter your age");
    let weight = +prompt("Enter your weight");

    if (age >= 18 && weight <= 70) {

        alert("You're a smart man.");
        document.getElementById("statement").innerHTML = "age >= 18 && weight <= 70";
        document.getElementById("output").innerHTML = "You're a smart man.";

    }
    else if (age >= 18 && weight > 70) {
        
        alert("You're a fat gay.");
        document.getElementById("statement").innerHTML = "age >= 18 && weight > 70";
        document.getElementById("output").innerHTML = "You're a fat gay.";

    }
    else {
        alert("You're a baby!");
        document.getElementById("statement").innerHTML = "age less than 18";
        document.getElementById("output").innerHTML = "You're a baby.";
    }


}
// ifStatementsNested

document.getElementById("ifStatementsNested").onclick = function () {

    let age = +prompt("Enter your age: ")

    if (age >= 18) {

        let weight = +prompt("Enter your weight: ")
        
        if (weight <= 70) {
            alert("You're a smart man.")
            document.getElementById("statement").innerHTML = "Because your weight is " + weight + " that is less than 70";
            document.getElementById("output").innerHTML = "You're a smart man.";
        }
        else {
            alert("You're a fat guy.")
            document.getElementById("statement").innerHTML = "Because your weight is " + weight + " that is greater than 70";
            document.getElementById("output").innerHTML = "You're a fat guy.";
        }
    }
    else {
        alert("You're a Baby!");
        document.getElementById("statement").innerHTML = "Because your age is " + age + " that is less than 18";
        document.getElementById("output").innerHTML = "You're a Baby!";
    }

}
// Login

document.getElementById("login").onclick = function () {

    let userName = prompt("Enter your username");
    let password = +prompt("Enter your password");

    if (userName === "M Umar" && password === 123) {
        alert("User logged in successfully")
        document.getElementById("statement").innerHTML = "userName = " + userName + " " + "&&" + " password = " + password;
        document.getElementById("output").innerHTML = "User logged in successfully";

    }
    else {
        alert("User not logged in successfully");
        document.getElementById("statement").innerHTML = "userName = " + userName + " " + "&&" + " password = " + password;
        document.getElementById("output").innerHTML = "User not logged in successfully";
    }

}



// clearStatementButton 

document.getElementById("clearStatementButton").onclick = function() {

    document.getElementById("statement").innerHTML = "";

} 

// clearStatementButton 

document.getElementById("clearOutputButton").onclick = function() {

    document.getElementById("output").innerHTML = "";

} 
