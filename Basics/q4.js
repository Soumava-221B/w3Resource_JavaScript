//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

//Define the length of the triangle

let side1 = 5;
let side2 = 6;
let side3 = 7;

//Calculate the semi perimeter of the triangle
let semiPeri = (side1+side2+side3)/2;

//Use Heron's formula to calculate the area of the triangle
var area = Math.sqrt(
  semiPeri * ((semiPeri - side1) * (semiPeri - side2) * (semiPeri - side3)));

console.log(`Area of the triangle is ${area}`);