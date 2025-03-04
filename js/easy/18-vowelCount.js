const vowelCount = (str) =>{
    let i = 0;
[...str].forEach((letter) =>{
if((/[a/e/i/o/u/A/E/O/U|]/).test(letter)){
i=i + 1;
}
})
return i;
}
console.log(vowelCount('Azerbaycan'));


/*
Vowel Count

have the function vowelCount(str) take the str  string parameter being passed  and return the number  of vowels the string contains
(ie. "All  cows and grass") would return 5)
 do not count y as a vowel for this challenge
 */