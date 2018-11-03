/*
 * Author : Chinatsu Kawakami
 * Created Date: 2nd Nov 2018
 * Name: bmi.js
 * Version 0.0.3 fixed function to calculate BMI
 * Description: This is BMI Calculator
 * */



//Fields 


var height;
var weight;
var centimeters;
var kilograms;
var feet;
var inch;
var pounds;
var btn; 
var weightbox;
var heightbox;
var resultbox;
var result;

var standard;
var metric;

var converF = 30.48;
var converI = 2.54;
var converW = 0.453592;
feet = document.getElementById('feetTxt');
inch = document.getElementById('inchTxt');
pounds = document.getElementById('weightTxt');
resultbox = document.getElementById('resultTxt');
var perTxt = document.getElementById('perTxt');
//function 

//formula of BMI
/*
Formula: weight (kg) / [height (m)]2
Calculation: [weight (kg) / height (cm) / height (cm)] x 10,000
*/

//for Standard height = feet * 30.48 + inch * 2.54



function resultFunction(result){
  switch(result){
  case result<18.5:
	   return'UnderWeight';
   
  case result>=18.5 || result<25:
	   return'NomalWeight';
     
  case result>=25 || result<29.9:
	   return'OverWeight';
 
  case result>=30:
	   return'Obesity';
      
   default:
	   break;
  }
}
  
//convert from feet and inch to cm

//problem is that I cannot assign feet.value to height, same problem happens in weight as well. 
//I should have them into calcFunction. After that, problems was gone.

//height = feet.value*converF + inch.value*converI;
//weight = pounds.value*converW;


/*
Formula: weight (kg) / [height (m)]2
Calculation: [weight (kg) / height (cm) / height (cm)] x 10,000
*/

function calcFunction(){
	height = feet.value*converF + inch.value*converI;
	weight = pounds.value*converW;
	 resultbox.value=resultFunction(weight/height*height*10000);
	 perTxt.value= weight/height*height*10000;
	 }

/*Underweight = <18.5
Normal weight = 18.5–24.9 
Overweight = 25–29.9 
Obesity = BMI of 30 or greate*/


