const firstFactorial =(num) => {
    let factorial = 1
for(let i = 1; i <= num; i++){
 factorial *= i// factorial = factorial*i
}
return factorial
}

console.log(firstFactorial(5))//120

/*
First Factorial
have the function firstFactorial(num) take the num parameter being passed and return the factoial of it (ie. if num=4, return(4*3*2*1)). For the test cases, the range will be between 1 and 18
*/