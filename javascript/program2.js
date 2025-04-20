// Q1.Que 1 :  Write a 'JavaScript' program to print student details using console.log() function only.

// let Name = "Rohit scharma";
// let rollNo = 1001;
// let Branch = "B.tech";
// let address = "Hyderabad"
// let collageName = "Naresh It";

// let fullInfo = "Student Details:\n" +
//                "---------------------\n" +
//                "Name         : " + Name+"\n" +
//                "Roll No      : " + rollNo + "\n" +
//                "Branch       : " + Branch + "\n" +
//                "Address      : " + address + "\n" +
//                "Collage Name : " + collageName ;

// console.log(fullInfo);

//*********************************************************************

// Que 2 :  Write a 'JavaScript' program to declare and initialize two variable like let a=10,b=20 and print the Addition, subtraction, multiplication, division, Modulation operation and print the output on console.

// assingin the veriable 

// let a=20 , b = 10;

// let fullInfo = "Explore Some opreation :\n" + 
//                "---------------------------\n"+
//                "Addition is : " + (a+b) + "\n" +
//                "Subtraction is : "+(a-b)+"\n"+
//                "Multiplication is : "+ (a*b) + "\n"+
//                "Division is : "+(a/b) + "\n"+
//                "Modulation is : "+(a%b) ;
//                console.log(fullInfo);
 
// *******************************************************************

// Que 3 :  Write a 'JavaScript' program to print Addition of any two positive numbers without using (+) operator and print the output on console.
// -------

// Sample input : let a = 10, b=20;

// Sample Output : Addition is 30 

// let a = 10, b=20;

// console.log("addition is : "+ -(-a-b));


// *************************************************


// Que 4 :  Write a 'JavaScript' program to print sum of first and last digit of given any 2 digit number and print the output on the console.
// -------

// Sample input : let number = 23;

// Sample Output : 5

// Explanation : given number is = 23 . so the result is (2+3)=5

// Note : Use Math.floor() function for division.


// let number = 23; 

// // Get the first digit using Math.floor()
// let firstDigit = Math.floor(number / 10);

// //Get the last digit using modulo
// let lastDigit = number % 10;

// // Calculate the sum
// let sum = firstDigit + lastDigit;

// // Print the result
// console.log("Sum of first and last digit is:", sum);

// ************************************************************************************

// Que 5 :  Write a 'JavaScript' program to print sum of first and last digit of given any 3 digit number and print the output on the console.
// -------
// ( Without using any control statement )

// Sample input : let number = 123;

// Sample Output : 4

// Explanation : given number is = 123 . so the result is (1+3)=4

// Note : Use Math.floor() function for division.

// let number = 123;
//  // Get the first digit using Math.floor()
//  let firstDigit = Math.floor(number / 100);

//  let lastDigit = number%10;

// // // Calculate the sum
//  let sum = firstDigit + lastDigit;

// // // Print the result
//  console.log("Sum of first and last digit is:", sum);

//***************************************************************************************** */

// Que 6 : Write a JavaScript program to calculate and print the area of a square and rectangle and print the output on the console.
// -------

// Sample input :
// Side of square is : 5
// Length and breadth of rectangle is : 4 , 5

// Sample output :
// The area of the square with side 5 is: 25
// The area of the rectangle with length 4 and breadth 5 is: 20

// Note : Use Math.floor() function for division.

// //
// let side = 5, length = 4, breadth = 5;

// console.log("The area of the square with side 5 is : "+(side*side)+"\n"+
//             "The area of the rectangle with length 4 and breadth 5 is: "+(length * breadth));

// ************************************************************************************

// Que 7 :  Write a 'JavaScript' program to swap any two integer number using third variable and print the output on the console.
// -------

// Sample input : let a = 10 , b = 20 ;

// Sample Output : Before Swapping : a = 10 , b = 20
//                 After Swapping  : a = 20 , b = 10


// let a = 10; b = 20;
// console.log( "Before Swapping  : " + " a = " + a + " b = " + b);
// let temp = a;
//     a=b;
//     b=temp;
//     console.log( "After Swapping  : " + " a = " + a + " b = " + b );

// **************************************************************************

// Que 9 :  Write a 'JavaScript' program to find previous multiple of 10 of given 2 digit value only.
// -------

// Sample input : let a = 26;

// Sample Output : 20

// Note : Use Math.floor() function for division.
           
// let a = 26;


// let previousMultiple = (Math.floor(a / 10)+1) *10 ;

// let result = firstDigit * 10;

// console.log(previousMultiple);

//*****************************************************

// Que 10 :  Write a 'JavaScript' program to find next multiple of 10 of given 2 digit value only.
// --------

// Sample input : let a = 34;

// Sample Output : 40

// Note : Use Math.floor() function for division.   


// let a = 34;

// let nextMultiple = (Math.floor(a / 10) + 1) * 10;

// console.log(nextMultiple);
