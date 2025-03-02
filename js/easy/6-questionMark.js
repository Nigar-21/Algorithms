const questionMark =(str) =>{
  if(str.length<5){
    return false;
  }
  const newStr = str.replace(/[^0-9?]/g, '');
  const arr = newStr.split("")
  let sums = [];
  let sum = 0;
  let iterator =0
  arr.forEach((item)=>{
if(item !="?"){
    sum=parseInt(item)+ parseInt(arr[iterator+4])
    sums.push(sum)
}
iterator +=1
  })
  return sums.includes(10) ? true : false
}
console.log(questionMark("acc?7??sss?3rr1?????5"));


/*
Question Mark

have the questionMark(str) take the str string parameter,which will contain single digit numbers,letters and question marks,and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true,otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string,then your program should return false as well

for example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string
*/

//1. str >=5 yoxla
//2. sual isaresi ve reqem olmayan butun deyerleri temizle
//3. forEach ucun string -> array cevir
//4. forEach icerisinde islenecek deyisenleri (sums, sum, iterator) tanitmaq
//5. forEach dongusu ile her bir reqem ve ozunden sonraki 4 xarakterin toplanaraq sum deyisenine beraberlesmesi ve sonrada bu deyerin sums array'ine elave edilmesi
//6. sums array'i icinde 10 deyeri varsa true, yoxdusa false deyerin qaytarilmasi