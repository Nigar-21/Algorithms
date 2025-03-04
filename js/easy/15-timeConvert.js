const timeConvert = (nums) =>{
const min = num % 60
const hour = Math.floor(num/60)
return hour +":" +min // or return `${Math.floor(min)}:${num%60}`
}
console.log(timeConvert());


/*
have the function timeConvert(nums)  take the nums parameter being passed and return  the number of hours  and minutes the parameter  overts to (ie. if num = 63 then the output should be 1:3)
seperate the number hours and minutes with a color 
*/

//template literals
//Şablon mətnlər (Template Literals) ` (backtick) simvolları arasında yazılır.
// template literals içərisində dəyişənlər və ifadələr ${} sintaksisi ilə yazılır.
// ${}-in içində istənilən dəyişən, funksiya və ya ifadə yazmaq olar.
//Meselen: let a = 5, b = 3;
// console.log(`Cəmi: ${a + b}`);