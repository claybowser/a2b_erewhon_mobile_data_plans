// Author : Clay Bowser
// Date Last Modified : 2020/09/23
// Title : Assignment #2 part B : Erewhon Mobile Data Plans
// Flow chart location: flow_chart.jpg
// Notes : !isNaN check if it is a number ! = not
//ENABLE MODULE
var readlineSync = require('readline-sync');

//GLOBAL VARIABLES
var userMegabytes;
var rate;
var totalCharge; 

//Get megabytes from User
userMegabytes = readlineSync.question('Enter data usage (Mb): ');

//Validate User input
while (isNaN(userMegabytes) || userMegabytes < 0){
    userMegabytes = readlineSync.question('Enter a valid data usage amount (Mb)');
}

//turn string into float
userMegabytes = parseFloat(userMegabytes);

//Calculate total based on User input in megabytes
if (userMegabytes > 0 && userMegabytes <= 200){
    totalCharge = 20
} else if (userMegabytes > 200 && userMegabytes <= 500) {
    rate = 0.105;
    totalCharge = userMegabytes*rate;
} else if (userMegabytes > 500 && userMegabytes <= 1000){
    rate = 0.110;
    totalCharge = userMegabytes*rate;
} else if (userMegabytes > 1000){
    totalCharge = 118;
}

//Display information to User
console.log('\nTotal charge is $' + totalCharge.toFixed(2));