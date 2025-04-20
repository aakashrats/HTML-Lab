// Q1.   Sample input : let a = 10
// Sample Output : EVEN

// Sample input : let a = 125
// Sample Output : ODD


// let a = parseInt(prompt("Enter the number "));

// console.log(
//     (a % 2 == 0 && "even  number ") || (a % 2 != 0 && "Odd number ")
// );
// document.writeln(    (a % 2 == 0 && "even  number ") || (a % 2 != 0 && "Odd number ")
// );

// **************************************************************************************************

// Q2. 
// Sample input : let a = 10 , b = 20
// Sample Output : MAX = 20

// let a =parseInt(prompt("Enter the number "));
// let b = parseInt(prompt("Enter the number "));

// document.writeln(( a > b  && "a is Max ") || ( a < b  && "b is Max ") );


// ********************************************************************************************************


// Q3. Sample input : let a = 10 , b = 200, c = 134;
// Sample Output : MAX = 200

// let a = parseInt(prompt("Enter the fnumber "));
// let b = parseInt(prompt("Enter the snumber "));
// let c = parseInt(prompt("Enter the tnumber "));

// document.writeln((a>b && a>c && "a is Max ")|| (b>c && b>a && "b is Max")|| (c>a && c>b && "c is maax "));
//************************************************************************************************************
// Q4.  Sample input : let a = 10 , b = 200, c = 134;
// Sample Output : MAX = 200



//  let a = parseInt(prompt("Enter the fnumber "));
//  let b = parseInt(prompt("Enter the snumber "));
//  let c = parseInt(prompt("Enter the tnumber "));

//  let max = (a > b) ? (a > c ? a : c) : (b > c ? b : c);

//  console.log( "max is : " , (a > b) ? (a > c ? a : c) : (b > c ? b : c));
//  document.writeln("max is : " + max);
 

//***********************************************************************************

// Q5. 
// Sample input : let a = 10
// Sample Output : EVEN

// Sample input : let a = 125
// Sample Output : ODD

// let a =  parseInt(prompt("Enter gthe number"));

// let num = (a % 2 == 0 ? "Even ": odd);

// console.log("number is : ", (a % 2 == 0 ? "Even ": odd));
// document.writeln("number is : " +  (a % 2 == 0 ? "Even ": odd));


// ***************************************************************************************

// Q6. 
// 1) Calculate the selling price:

// Selling Price = Cost Price + Profit

// Selling Price = Rs. 3500 + (27% of Rs. 3500)


// 2) Calculate the profit:

// Profit = Selling Price - Cost Price


// 3) Calculate VAT:

// VAT = 12.7% of Selling Price


// 4) Calculate Service Charge:

// Service Charge = 3.87% of Selling Price

// Sample output : 
// Cost Price: Rs. 3500.00
// Profit (27%): Rs. 945.00
// Selling Price (without VAT & Service Charge): Rs. 4445.00
// VAT (12.7%): Rs. 564.52
// Service Charge (3.87%): Rs. 171.00
// Total Selling Price (with VAT & Service Charge): Rs. 5180.52



// let  costPrice = 3500.00;
// let  profit =  costPrice * 27 / 100 ;

// let sellingPrice = costPrice + profit;

// let vat = sellingPrice * 12.7 /100 ;

// let serviceCharge =  sellingPrice  * 3.87 /100;

// let totalSellingprice = sellingPrice  + vat + serviceCharge ;

// let totalinfo =
//                " Tv price bill :\n" + 
//                "---------------------------\n"+
//                "Cost Price: Rs. " + costPrice.toFixed(2) + "\n" +
//                "Profit (27%): Rs. "+ profit.toFixed(2) +"\n"+
//                "Selling Price (without VAT & Service Charge): Rs. "+ sellingPrice.toFixed(2) + "\n"+
//                " VAT (12.7%): Rs. "+ vat.toFixed(2)  + "\n"+
//                "Service Charge (3.87%): Rs. "+ serviceCharge.toFixed(2) +"\n" +
//                "Total Selling Price (with VAT & Service Charge): Rs." + totalSellingprice.toFixed(2) ;
//                console.log(totalinfo);
//                document.writeln(
//                 `
//                 Cost Price: Rs. ${costPrice.toFixed(2)} <br>
//                 Profit (27%): Rs. ${profit.toFixed(2)} <br>
//                 Selling Price (without VAT & Service Charge): ${sellingPrice.toFixed(2)} <br>
//                 VAT (12.7%): Rs. 564.52  ${vat.toFixed(2)} <br>
//                 Service Charge (3.87%): Rs. ${serviceCharge.toFixed(2)} <br>
//                 Total Selling Price (with VAT & Service Charge): Rs. ${totalSellingprice.toFixed(2)}   
//                 `
//                );
