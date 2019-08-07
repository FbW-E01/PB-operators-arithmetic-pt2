//Math Problems

//Q1. In one night, a movie theater sells tickets for 6450 dollars. Each ticket costs 15 dollars. How many people purchased a ticket? 
const ticketsSold = 6450;
const price = 15;
const numberPeople = ticketsSold / price;
console.log(`${numberPeople} bought tickets`);

//Q2. Sylvia's income is 500 dollars per week. How much does Sylvia makes every year?
const weeklyIncome = 500; 
const yearlySalary = 500 * 52;
console.log(`Sylvia earns $${yearlySalary} per year`);

//Q3. Calculate the percentage of 17/30. Expected output: number%
const percent = (17 * 100) / 30;
console.log(`${percent}%`);

//Q4. Calculate the perimeter of a square. Assume each side is 4.75cm.
const sideSquare = 4.75; 
const perimeterSquare = sideSquare + sideSquare + sideSquare + sideSquare;
console.log(`Perimeter of square = ${perimeterSquare}cm`);

//Q5. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
const perimeterTriangle = 5 + 6 + 7;
console.log(`Perimeter of triange = ${perimeterTriangle}cm`);

//Q6. Calculate the area of a square. Each side is 5cm.
const areaSquare = 5 * 5;
console.log(`Area of square = ${areaSquare}cm²`);

//Q7. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
// Heron's Formula
const a = 5;
const b = 6;
const c = 7;
const s = (a + b + c) / 2;
const areaTriangle = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(`Area of triangle = ${areaTriangle}cm²`);

//Q8. Calculate the volume of a cube. Length of each side is 9cm.
const sideCube = 9;
const volCube = 9*9*9;
console.log(`Volume of cube = ${volCube}cm³`);

//Q9. Calculate the three bills including tips:
//€22.35 + 10% tip
//€26.67 + 15% tip
//€35.92 + 20% tip
const billOne = 22.35 * 1.1;
const billTwo = 26.67 + (26.67 * 0.15);
const billThree = 35.92 + (35.92 * 0.2);
console.log(
`Bill One: EUR${billOne}
Bill Two: EUR${billTwo}
Bill Three: EUR${billThree}`);

//Q10. The number of hours Noemy worked over the last two weeks are 8, 6, 5, 9, 8, 2, 1, 8.5, 7, 4
//What is Noemy's average hour?
const average = (8 + 6 + 5 + 9 + 8 + 2+ 1 + 8.5 + 7 + 4) /10;
console.log(`Noemy's average hours: ${average}`);

//Q11. A math student scored 75, 70, 85, 90, 100 on the first five tests he took . After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.
const firstFive = 75 + 70 + 85 + 90 + 100; 
const totalResult = 85 * 6;
const sixthTest = totalResult - firstFive;
console.log(`sixth test result: ${sixthTest}`);

//Q12. For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. He has taken 8 assessments and his average is 78%. What is the minimum percentage he must get in his last assessment to ensure he gets a first class? 
//Expected output: James needs a minimum of --% to get an 80% average.
const averageEight = 78 * 8; 
const averageNine = 80 * 9;
const minResult = averageNine - averageEight;
console.log(`James needs a minimum of ${minResult}% to get an 80% average`);