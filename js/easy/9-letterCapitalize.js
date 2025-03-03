const letterCapitalize =(str)=>{
let newStr =[]
str.split(' ').forEach((word)=>{
    newStr.push(word.charAt(0).toUpperCase()+word.slice(1,word.length))
})
return newStr.join(' ')
}
console.log(letterCapitalize('hello world'));



/*
Letter capitalize

have the function letterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word

words will be separated by only one space
*/