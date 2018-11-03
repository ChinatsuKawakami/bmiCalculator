/*
 * Author : Chinatsu Kawakami
 * Created Date: 2nd Nov 2018
 * Name: bmi.js
 * Version 0.0.2 add function to calculate BMI
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

const converF = 30.48;
const converI = 2.54;
const converW = 0.453592;
feet = document.getElementById('feetTxt').value;
inch = document.getElementById('inchTxt').value;
pounds = document.getElementById('weightTxt').value;
resultbox = document.getElementById('resultTxt').value;
//function 

//formula of BMI
/*
Formula: weight (kg) / [height (m)]2
Calculation: [weight (kg) / height (cm) / height (cm)] x 10,000
*/

//for Standard height = feet * 30.48 + inch * 2.54

//convert from feet and inch to cm
height = feet*converF + inch*converI;
weight = pounds*converW;
var calcFunction = (function(){
	
	 resultbox=resultFunction(weight/height*height*10000);
	 return  weight/height*height*10000;
	 });
console.log(weight);
console.log(height);
console.log(calcFunction());

/*Underweight = <18.5
Normal weight = 18.5–24.9 
Overweight = 25–29.9 
Obesity = BMI of 30 or greate*/




function resultFunction(result){
  switch(result){
  case result<18.5:
	   return'UnderWeight';
       break;
  case result>=18.5 || result<25:
	   return'NomalWeight';
       break;   
  case result>=25 || result<29.9:
	   return'OverWeight';
       break;
  case result>=30:
	   return'Obesity';
       break;
   default:
	   break;
  }
}
