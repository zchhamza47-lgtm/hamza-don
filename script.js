// Function 1: Show alert message
function showMessage() {
    alert("Welcome! This message is from JavaScript function.");
}

// Function 2: Change background color
function changeColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Function 3: Add two numbers
function addNumbers() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var sum = Number(n1) + Number(n2);

    document.getElementById("result").innerText = "Result: " + sum;
}

// Counter variable
var count = 0;

// Function 4: Increase counter
function increaseCount() {
    count++;
    document.getElementById("count").innerText = count;
}

// Function 5: Decrease counter
function decreaseCount() {
    count--;
    document.getElementById("count").innerText = count;
}
