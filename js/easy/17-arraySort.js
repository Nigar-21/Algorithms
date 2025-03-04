const nums=[4,7,2,1,9,8]

const arraySort = (arr)=>{
const n = arr.length
    for(let i=0;i<nums.length-1;i++){
        let minIndex=i
for(let j=i+1;j<nums.length-1;j++){
if(arr[j]<arr[minIndex]){
minIndex = j
}
}
if (minIndex !== i) {
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}
}
return arr;
}
console.log(arraySort(nums));


//Spread operator (...) çox məqsədli bir alət olaraq massivləri və obyektləri yaymaq (expand) və ya kopyalamaq üçün istifadə edilir.

// Massivlərdə: Spread operator bir massivdən elementləri "yayır" və həmin elementləri birbaşa başqa bir massivə daxil edir.
// Obyektlərdə: Eyni şəkildə obyektin xüsusiyyətlərini (properties) yayır və yenisini yaratmağa kömək edir.
