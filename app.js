'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:
"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
var sum = a + b;
var message1 = 'The sum of ' + a +' and '+ b +' is 11.';
var arr1 = [sum , message1];
console.log(sum);
return arr1;


}



// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The product of 5 and 9 is 45."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line

var multiply = a*b;
var message2 = 'The product of '+ a + ' and ' + b + ' is 45.' ;
var arr2 = [multiply, message2];
console.log(multiply);
return arr2;

}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure xNum how to do this. However, you may continue to use the + operator for string concatenation.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
var sum3 = sum(a, b);
// console.log(sum3[0]);

var sum3x = sum(sum3[0] , c);
// console.log(sum3x[0]);

var product3 = multiply(a , b);
// console.log(product3);

var product3x = multiply(product3[0] , c);
// console.log(product3x[0]) ;

var message3 = a +' and ' + b + ' and ' + c + ' sum to ' + sum3x[0] + '.';

var message3x = 'The product of ' + a  + ' and ' + b + ' and ' + c + ' is ' + product3x[0] + '.';

var arr3 = [sum3x[0] , product3x[0], message3, message3x ];

return arr3;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"2,3,4 was passed in as an array of numbers, and 9 is their sum."
IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure xNum how to do this. However, you may continue to use the + operator for string concatenation.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line

var sumRay4 = sum(testArray[0],testArray[1]);

var sumRay4x = sum(sumRay4[0], testArray[2]);

var message4 = testArray + ' was passed in as an array of numbers, and '+ sumRay4x[0] + ' is their sum.';

var arr4 = [sumRay4x[0] , message4];

// console.log(arr4, 'Where i\'m i');

return arr4;

}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The numbers 2,3,4 have a product of 24."
IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure xNum how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line

var arrayX = multiply(testArray[0],testArray[1]);

var arrayz = multiply(arrayX[0], testArray[2]);
// console.log('Log arrayz is here', arrayz[0]);

var message5 = 'The numbers ' +  testArray + ' have a product of ' + arrayz[0] + '.'

var arr5 = [arrayz[0] , message5];

return arr5;


}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try xNum the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:
"The numbers 1,2,3,4,5 have a product of 120."
IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure xNum how to do this. However, you may continue to use the + operator for string concatenation.
This function should be dynamic, accepting an array of any length.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line


    var omar = 1;
    var xNum = 'The numbers ';
    for (var i = 0; i < testDynamicArray.length; i++) {
        var multi5 = multiply(omar, testDynamicArray[i])[0];
        omar = multi5
       if ( i < testDynamicArray.length -1 ) {

            xNum = xNum + testDynamicArray[i] + ',';
       }
    }
    var inArray = xNum + testDynamicArray[testDynamicArray.length -1]  + ' have a product of ' + omar + '.';
    var arrx = [omar, inArray];
    console.log(arrx);
    return arrx;


}
 
// Here is the test for uncomment it to run it
testMultiplyAnyArray(testDynamicArray);


// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.