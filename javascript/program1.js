// /Q1.
// 
// / Declare employee details using var 
// var Name = "Vishal Kumar";
// var id = 1024;
// var company = "TechNova Pvt. Ltd.";
// var department = "Development";
// var role = "Java Developer";
// var experience = "3 years";
// const locName = "Banglore";

// // Print employee details using console.log()
// // alert("ans is ");
// console.log("Name: " + Name);
// console.log("ID: " + id);
// console.log("Company: " + company);
// console.log("Department: " + department);
// console.log("Role: " + role);
//  console.log("Location: " + locName);
// console.log("Experience: " + experience);




//Q2. document .wrtiln;

// let Name = "Neha singh";
// let Employee = 3311;
// let Designation = "frontend Devleoper";
//  let baseSalary= 50000;
//  let bonus = 5000;
//  let tax = 4000;
  

//  let netSalary = baseSalary + bonus - tax;

//  document.writeln("Name: "+ Name+"<br>");
//  document.writeln("Employee ID: "+ Employee +"<br>");
//  document.writeln("Designation: "+Designation+"<br>");
//  document.writeln("Net Salary: "+netSalary); 

//  //***************************** */
//Q3.

//  console.log(`	Note : Without Using Control Statement

	
	
// 		#      #       
// 		# #    # 
// 		#  #   # 
// 		#   #  # 
// 		#    # # 
// 		#      # 


// 		# # # # # 	 
// 		    #                
// 		    #                
// 		    #                
// 		    #                
// 		# # # # #            


// 		# # # # # 
// 		    #     
// 		    #               
// 		    #                
// 		    #                
// 		    #   `);


//Q4. 


// // Constants
// const taxRate = 0.08;       // 8%
// const discountRate = 0.15;  // 15%

// // Item prices and quantities
// let item1Price = 100, item1Qty = 2;
// let item2Price = 350, item2Qty = 3;

// // Subtotal calculation
// let subtotal = (item1Price * item1Qty) + (item2Price * item2Qty);

// // Apply discount
// let discount = subtotal * discountRate;
// let discountedTotal = subtotal - discount;

// // Apply tax
// let tax = discountedTotal * taxRate;
// let finalTotal = discountedTotal + tax;

// // Output the result
// console.log("Subtotal: $" + subtotal);
// console.log("Discount: -$" + discount);
// console.log("Tax: +$" + tax);
// console.log("Final Total: $" + finalTotal);


// //Q5  

// // Prompting user for input
// let firstName = prompt("Enter your first name:", "Aditya");
// let lastName = prompt("Enter your last name:", "Raj");
// let id = prompt("Enter your ID:", "1111");
// let company = prompt("Enter your company name:", "BrightSoft Pvt. Ltd.");
// let dept = prompt("Enter your department:", "R&D");
// let locName  = prompt("Enter your location:", "Hyderabad");

// // Combine and display full information
// let fullInfo = "Employee Details:\n" +
//                "---------------------\n" +
//                "Name       : " + firstName + " " + lastName + "\n" +
//                "ID         : " + id + "\n" +
//                "Company    : " + company + "\n" +
//                "Department : " + dept + "\n" +
//                "Location   : " + locName ;

// alert(fullInfo); 
// console.log(fullInfo); 

//Q6 

// // Initial Employee Details
// let empName = "Riya Sharma";
// let empId = 2051;
// let empCompany = "SoftPro Inc.";
// let empDept = "UI/UX";
// let empDesignation = "Designer";
// let empLocation = "Delhi";
// let empExperience = 2;

// // Prompt user to update location and experience
// empLocation = prompt("Enter new location:", empLocation);
// empExperience = prompt("Enter updated experience (in years):", empExperience);

// // Display updated employee information
// let updatedInfo = "Updated Employee Details:\n" +
//                   "-----------------------------\n" +
//                   "Name         : " + empName + "\n" +
//                   "ID           : " + empId + "\n" +
//                   "Company      : " + empCompany + "\n" +
//                   "Department   : " + empDept + "\n" +
//                   "Designation  : " + empDesignation + "\n" +
//                   "Location     : " + empLocation + "\n" +
//                   "Experience   : " + empExperience + " year(s)";

// alert(updatedInfo); // Show in a popup
// console.log(updatedInfo); // Also log to console

// Q7

// // 1) Declare and initialize wallet variables
// let yourWallet = 2000;
// let friendWallet = 1000;

// // 2) Perform calculations
// let total = yourWallet + friendWallet;
// let difference = yourWallet - friendWallet;
// let product = yourWallet * friendWallet;
// let division = yourWallet / friendWallet;
// let modulus = yourWallet % 1000;

// // 3) Display results with appropriate messages
// console.log("You have: ₹" + yourWallet);
// console.log("Your friend has: ₹" + friendWallet);
// console.log("Total money together: ₹" + total);
// console.log("Difference in amount: ₹" + difference);
// console.log("If multiplied: ₹" + product);
// console.log("You have " + division + " times more money than your friend");
// console.log("Leftover if you share your money equally in ₹1000 chunks: ₹" + modulus);
