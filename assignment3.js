// Javascript Homework
// Due Monday COB
// Put all homework in:
// github classroom created for you
// -----------------------------------------------------------------------------------
// PART I

// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------

// 1. Fibonacci
// Define function: fib(n) 
// Return the nth number in the fibonacci sequence.

function fib(n) {
    let fibonacci = 0;
    let pointer = 1;
    let temp = 0;
    for(i = 1; i <= n; i++) {
        temp = pointer;
        pointer += fibonacci;
        fibonacci = temp;
    }
    return fibonacci;
}
console.log(fib(10));

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.

bubbleSort([5,1,4,2,8]);
function bubbleSort(numArray) {
    let e1, e2, temp, index = 0;
    for(i = 0; i < numArray.length; i++) {
        e1 = numArray[i];
        e2 = numArray[i+1];
        if(e1 > e2) {
            temp = e1;
            numArray[i] = numArray[i+1];
            numArray[i+1] = temp; 
        }
        if(i == numArray.length - 1) {
            i = index++;
        }
        
    console.log(numArray);
    }
}

// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

console.log(reverseStr('racecar'));

function reverseStr(someStr) {
    let newString = '';
    for(i = someStr.length - 1; i >= 0; i--) {
        newString += someStr[i];
    }
    return newString;
}

// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.

console.log(factorial(5));

function factorial(someNum) {
    if(someNum == 0 || someNum == 1)
        return someNum;
    else {
        return someNum * factorial(someNum-1);
    }
}

// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.

alert(substring("racecar", 3, 0));
function substring(someStr, length, offset) {
    let newString = "";
    if(offset >= someStr.length)
        alert("Offset is invalid, too large or equal to length of string");
    else if((offset + length) >= someStr.length)
        alert("Offset + length is too large or equal to length of string");
    else if(offset < 0)
        alert("Offset is less than zero");
    else if((offset + length) < 0)
        alert("Offset + length is less than zero")
    else
        for(i = offset; i <= (offset + length - 1); i++) {
            newString += someStr[i];
        }
    return newString;
}

// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.

console.log(isEven(77));

function isEven(someNum) {
    let str = someNum / 2 + "";
    let newStr = str.split(".");
    if(newStr.length > 1)
        return false;
    else
        return true;
}

// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false

console.log(isPalindrome("racecar"));

function isPalindrome(someStr) {
    let reverseStr = "";
    for(i = someStr.length - 1, j = 0; i >= 0; i--, j++) {
        reverseStr += someStr[i];
    }
    if(reverseStr == someStr)
        return true;
    else
        return false;
}

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *

   console.log(printShape("Diamond", 11, "*"));
   function printShape(shape, height, character) {
       let print = "";
       switch(shape) {
           case 'Square':
               for(i = 0; i < height; i++) {
                   for(j = 0; j < height; j++) {
                       print += character;
                   }
                   print += '\n';
               }
           break;
           
           case 'Triangle':
               for(i = 0; i < height; i++) {
                   for(j = 0; j < i + 1; j++) {
                       print += character;
                   }
                   print += '\n';
               }
           break;
   
           case 'Diamond':
               let stop = parseInt((height / 2)) + 1, mark = 1;
               let temp = stop;
               let reverse = false;
               let count = 1;
               for(i = 0; i < height; i++) {
                   for(j = 0; j < height; j++) {
                       if(j === stop) {
                           while(mark++ <= count) {
                               print += character;
                           }
                           break;
                       }
                       print += ' ';
                   }
                   mark = 1;
                   if((stop - 1) === 0 || reverse) {
                       count -= 2;
                       stop++;
                       reverse = true;
                   }
                   else {
                       stop--;
                       count += 2;
                   }
                   print += '\n';
               }
           break;
   
           default:
       }
       return print;
   }

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.

console.log(traverseObject({firstName: 'John', lastname: 'Doe', color: 'Blue', class: 'Super'}));

function traverseObject(someObj) {
    let string = '';
    for(index in someObj)
        string += index + ' ' + someObj[index] + '\n';
    return string;
}

// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.

console.log(deleteElement([1,2,3]));

function deleteElement(someArr) {
    console.log(someArr.length);
    delete someArr[2];
    return someArr.length
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.

console.log(spliceElement([1,2,3]));

function spliceElement(someArr) {
    console.log(someArr.length);
    someArr.splice(2);
    return someArr.length;
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	var john = new Person("John", 30);

var john = new Person("John", 30);
console.log(john);

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	var john = getPerson("John", 30);
 
var john = getPerson("John", 30);
console.log(john);

function getPerson(name, age) {
    return {
        name: name,
        age: age
    }
}
 
 
 
 
// -----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// Put your Javascript in the provided <script> element at the bottom of the page or in a separate .js file next to it.
// Please put the question itself as a comment above each answer.

// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
  
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
  
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
  
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).


