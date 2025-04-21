// Q1.

// Sample input  : purchase amount = 999
// Sample output : total amount = 999

// Sample input  : purchase amount = 2000
// Sample output : total amount including 5% discount = 1900

// Sample input  : purchase amount = 10000
// Sample output : total amount including 10% discount = 9000


// let amt = parseInt(prompt("purches amount"));
// document.writeln("purches amount  = "+ amt );

//  amt >  5000 ? document.writeln(" total amount including 10% discount =", amt-(amt /100)*10 ):
//  amt > 1000 ? document.writeln(" total amount including 5% discount =", amt - (amt /100)*5):
//  document.write(" total amount = ",amt);



//  *****************************************************************************************************


// Q2.


// Example 1: Passenger is not a senior citizen
// Sample Input: 
//               number of tickets: 3
//               age of the passenger: 45

// Sample Output:
//               Total cost before discount: Rs. 900.00
//               Discount amount: Rs. 0.00
//               Total cost after discount: Rs. 900.00

//               Example 2: Passenger is a senior citizen
// Sample Input:
//               number of tickets: 2
//               age of the passenger: 65

// Sample Output:
//               Total cost before discount: Rs. 600.00
//               Discount amount: Rs. 120.00
//              Total cost after discount: Rs. 480.00
// code :
// const ticketPrice = 300;

// let numticket = parseInt(prompt("Enter the number of tickets: "));
// let age = parseInt(prompt("Enter age of passenger: "));

// const totalCost = numticket * ticketPrice;

// let discount = (age >= 60 && age <= 100) ? totalCost * 0.20 : 0;
// let finalCost = totalCost - discount;

// alert(`
// Total cost before discount: Rs. ${totalCost.toFixed(2)}
// Discount amount: Rs. ${discount.toFixed(2)}
// Total cost after discount: Rs. ${finalCost.toFixed(2)}
// `);


// document.writeln(`
//     Total cost before discount: Rs. ${totalCost.toFixed(2)} <br>
// Discount amount: Rs. ${discount.toFixed(2)} <br>
// Total cost after discount: Rs. ${finalCost.toFixed(2)}
//     `)


//*********************************************************************************************

// Q3. 

// Sample Input: 
//       		enter a number: -1
             

// 	Sample Output:
// 		you entered negative number


// 	Sample Input: 
//              	enter a number: 1

// 	Sample Output:
// 		you entered positive number

// 	Sample Input: 
//               	enter a number: 0

// 	Sample Output:
// 		you entered zero


// code :

// let number = parseFloat(prompt("Enter a number:"));

// let message = (number > 0) 
//     ? "You entered positive number"
//     : (number < 0) 
//         ? "You entered negative number"
//         : "You entered zero";

// document.writeln(message);
//         alert(message);
//*************************************************************************