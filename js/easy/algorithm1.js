//user validation
 const userValidation=(str)=>{
if(  
      str.length>=4 && str.length<=25 && (/[a-z A-Z]/).test(str.slice(0,1)/*str.charAt(0)*/)&& (/^\w+$/).test(str) && (/[a-zA-Z0-9]/).test(str.slice(-1)/*str.charAt(str.length-1)*/)){
return true
}else{
    return false
}
}
console.log(userValidation("u__hello__world1d23"))
/*Rules
1. the username is between 4 and 25 characters
2. it must start with a letter
3. it can only contain letters, numbers and underscores characters
4. it cannot end with an underscore character

if the username is valid then your program should return the string true
*/

// AND Operator
// .length property

// Regular expression
// .charAt() or .slice()
// .test()
//^ bu stringin basini gosterir,yeni uygunlug stringin basindan baslam9alidir
//\w+ - \w bir sözdən simvolu ifadə edir, yəni hərf, rəqəm və alt xət (underscore) (_). + işarəsi isə, bir və ya daha çox bu cür simvolların olmasını tələb edir. Yəni, burada bir və ya daha çox hərf, rəqəm və ya alt xətt olmalıdır.
//$ - Bu, stringin sonunu göstərir. Yəni, uyğunluq stringin sonuna qədər olmalıdır.
//.slice(-1) sozun uzunlugu ne qeder olur olsun son deyeri qaytarir