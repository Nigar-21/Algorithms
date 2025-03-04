const alphabetSoup =(str) =>{
 const arr = str.split('');
 const sortedArr = arr.sort();
 const newStr = sortedArr.join('');
 return newStr
}

console.log(alphabetSoup("hello"));

/*
Alphabet soup

have the function alphabetSoup(str) take the str parameter being passed and return the string with the letters in alphabetical order 

assume numbers and punctuation symbols will not be included in the string 
*/