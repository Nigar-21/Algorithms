const firstReverse =(str)=>{
const arr=str.split("")
const revArr = arr.reverse()
const reverseStr = revArr.join("")

return reverseStr;
}
console.log(firstReverse("hello"));



/*
First Reverse

Have the function firstReverse() take the str parameter being passed and return the string in reversed order
*/


// .reverse() metodu bir massivdəki elementlərin sırasını tərsinə çevirir. Bu metod orijinal massivə təsir edir və massivdəki elementlərin yerini dəyişdirir.

// .join() metodu bir massivdəki bütün elementləri birləşdirərək bir string halına gətirir. Hər bir elementin arasına istədiyiniz bir separator (ayırıcı) əlavə edə bilərsiniz.