const letterChange = (str) =>{
let newStr = str.toLowerCase().replace(/[a-z]/g,(char)=>{
    if(char === 'z'){
        return 'a';
    }else{
        return String.fromCharCode(char.charCodeAt() + 1);
    }
})
let wordCapitalize = newStr.replace(/a|e|i|o|u/g, char=>{
  return char.toUpperCase()
})

return wordCapitalize;
}
console.log(letterChange("Hello"));


/*
Letter change
have the function letterChange(str) take the str parameter being passed and modify it using the following algorithm

1- replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a)

2- Then capitalize every vowel in this new string (a,e,i,o,u) and finally return this modified string
*/

//1- js charcode ve charcodeAt metodlarini isledeceyimiz ucun ilk once string icerisindeki herfleri toLowerCase metodu ile kicik herfe ceviririk

//2- replace metodu ile herfleri yoxlayiriq ve ilk olaraq egerz varsa bu deyeri a ile deyisirik. eger herfiniz z deyilse string.fromCharCode ve char.charcodeAt() islederek elifbadaki 1 sonraki herf ile bu deyeri deyisirik

//3- sesli herfleri boyuk herfe ceviririk ve deyeri return edirik



// charCodeAt(index) metodu, bir sətirdə (string) müəyyən indeksdə olan simvolun Unicode (ASCII) dəyərini qaytarır.
//.fromCharCode(code) Bu metod, ASCII və ya Unicode dəyərlərini simvollara çevirir.