/*
 * Author : Chinatsu Kawakami
 * Created Date: 2nd Nov 2018
 * Name: bmi.js
 * Version 0.0.5 fixed function to calculate BMI for Metric
 * Description: This is BMI Calculator
 * */



//Fields 


var height;
var weight;
var meter;
var kilograms;
var inch;
var pounds;
var btn; 
var weightbox;
var heightbox;
var resultbox;
var result;
var bmi;
var standard;
var metric;

var converF = 30.48;
var converI = 2.54;
var converW = 0.453592;

meter=document.getElementById('heightTxt');
kilograms = document.getElementById('weightTxt');
inch = document.getElementById('heightTxt');
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
  if(result<18.5){
	   return'UnderWeight';
  }else if(result>=18.5 || result<25){
	   return'NomalWeight';
  }else if(result>=25 || result<29.9){
	   return'OverWeight';
  }else if(result>=30){
	   return'Obesity';
  }else{
	  return 'error';
  }
}
  
//convert from feet and inch to cm

//problem is that I cannot assign feet.value to height, same problem happens in weight as well. 
//I should have them into calcFunction. After that, problems was gone.

//height = feet.value*converF + inch.value*converI;
//weight = pounds.value*converW;

/*Imprtial
 * BMI = (weight in Pounds / (height in inches * height in inches )) * 703
 * 
 */

/*Metric 
*BMI = (Weight in Kilograms / (Height in Meters x Height in Meters))
*/

function metricCalcFunction(){
   bmi = (weight/Math.pow(meter,2));
   bmi=Math.round(bmi*10)/10;
}
function imperialCalcFunction(){
	height = (inch.value);
	weight = pounds.value;
	bmi = (weight/Math.pow(height,2))*703;
	bmi = Math.round(bmi * 10)/10;
	 resultbox.value=resultFunction(bmi);
	 perTxt.value= bmi;
	 }

/*Underweight = <18.5
Normal weight = 18.5–24.9 
Overweight = 25–29.9 
Obesity = BMI of 30 or greate*/


