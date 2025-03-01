const findIntersection = (arr) => {
let intersection=[]
const set1=arr[0].replace(/\s/g,"").split(",")
const set2=arr[1].replace(/\s/g,"").split(",")
set2.forEach((item)=>{
if(set1.includes(item)){
intersection.push(item)
}
})
if(intersection.length !=0){
    return intersection.toString()
}else{
    return false
}
}
console.log(findIntersection(["1, 3, 4, 7, 13","1 ,2, 4, 13, 15"]))



/*
Find Intersection

have the function findIntersection(arr) read the array of strings stored in arr which will contain 2 elements: the first element will represent a list of comma separated numbers sorted is ascending order, the second element will represent a second list of comma separated numbers (also sorted). Your goal is to return a comma separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false
*/

//1.yeni bir array tipinde deyisen yarat
//2. split(), replace()
//3. forEach() islederek butun array icindeki xarakterlerin diger array da olub olmadigini yoxlayaciyiq. Varsa yaratdigimiz yeni array deyiseni icerisine elave edeceyik
//4. eger yaratdigimiz array bosdursa return false, bos deyilse de array icindeki deyerleri string halinda return edeceyik



// /\s/g — Bu, regular expression (rejex) şablonudur.
// \s: Hər hansı bir whitespace simvolunu (boşluq, tab, yeni sətir və s.) təmsil edir.
// g: "global" flaqıdır. Bu, hər bir uyğun gələn hissəni tapmağa və dəyişdirməyə imkan verir. Yəni, şablon mətnin bütün hissələrində tətbiq ediləcək.
// "": Bu, replace() metodunda istifadə olunan əvəz etmə dəyəridir. Burada boş bir string verilir, yəni uyğun gələn hər hansı bir simvol (bu halda whitespace simvolları) silinəcəkdir.
//.includes() metodu stringlərdə və massivlərdə müəyyən bir dəyərin olub-olmadığını yoxlamaq üçün istifadə olunur. Əgər axtarılan dəyər varsa, true, yoxdursa false qaytarır.
//.push() metodu bir massivin sonuna yeni element(lər) əlavə edir və yeni massiv uzunluğunu qaytarır.