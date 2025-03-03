const simpleSymbols =(str)=>{

const arr = str.split('')
let controlArr = []

arr.forEach(char =>{
if((/[a-zA-Z]/).test(char)){
  if(arr[arr.indexOf(char)-1] === "+"&& arr[arr.indexOf(char)+1] === "+"){
    controlArr.push(1)
  }
}else{
    controlArr.push(0)
  
}
})
if(controlArr.includes(0)){
    return false
}else{
    return true
}

}
console.log(simpleSymbols('++d+===+c++==a'));


/*
Simple symbols

have the function simpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false

the str parameter will be composed of + and = symbols  with several letters between them(ie. ++d+===+c++==a)and for the  string to be true each letter must be surrounded by a + symbol

so the string to the left would be false

the string will not be empty and will have at least one letter
*/

//.indexOf() Sətir daxilində müəyyən bir simvolun və ya alt-sətirin (substring) ilk rast gəlinən indeksini qaytarır. Əgər tapılmazsa, -1 qaytarır.