//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function leapYear(year) {
    let boolean = (year%100 === 0) ? (year%400 === 0) : (year%4 === 0);

    if(boolean){
        console.log("Leap Year");
    } else {
        console.log("Not a leap year");
    }
}

leapYear(2016); 
leapYear(2000); 
leapYear(1700); 
leapYear(1800); 
leapYear(100);  