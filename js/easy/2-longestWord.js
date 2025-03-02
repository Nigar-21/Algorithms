const longestWord =(sen)=>{
    const arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ")
  arr.sort((a,b)=>{
    return b.length - a.length;} )  
    return arr[0]//Ilk sozu secmesi ucun

}
 console.log(longestWord("fun&!! time"))



/*
Longest Word

-using the javascript language,have the function longestWord(sen take the sen parameter being passed and return the longest word in the string

-if there are two or more words that are the same length,return the first word from the string with that length

-ignore punctuation and assume sen will not be empty
*/

//noqteleme isarelerini sil
//cumleni bosluqlardan bolub, sozlerle array yaratmaq
//sozlerin xarakter saylarina gore azalan sira ile duzmek
//0ci indeksde olan sozu return etmek




// replace(): Bu metod bir mətndə verilmiş şablona (pattern) uyğun gələn hissələri tapır və onları başqa bir şeylə əvəz edir. İlk parametr bu şablondur, ikinci parametr isə əvəz edəcək dəyərdir.

// /[^a-zA-Z]/g: Bu, regular expression (rejex) - yəni müntəzəm ifadədir. Aşağıdakı kimi işləyir:

// [^a-zA-Z]: Bu, negativ bir uyğunlaşmadır. a-z kiçik hərfləri və A-Z böyük hərfləri əhatə edir,(boşluq): Boşluq simvolunu da daxil edir. Amma [^a-zA-Z ] onlardan hər hansı bir xarakteri istisna edir. Yəni, bu rejex bütün hərf olmayan xarakterləri tapacaq.
// g: Bu flaq "global" deməkdir, yəni uyğunlaşan bütün xarakterləri tapacaq. Əgər bu flaq olmasaydı, yalnız ilk uyğunlaşmanı dəyişərdi.
// Nəticə: Bu kod, sen dəyişənindəki hər hansı bir hərf olmayan xarakteri (nöqtələr, vergüllər, boşluqlar və s.) silir və yalnız a-z və A-Z arasında olan hərfləri saxlayır. 
//.split(" ") metodu bir mətni boşluqlara görə ayırır və nəticədə bir massiv (array) qaytarır.
// arr.sort(): Massivdəki elementləri sıralamağa imkan verir.

// (a, b): Massivdəki hər iki elementin müqayisə edildiyi parametrdir. a və b sıralanacaq iki elementdir.

// b.length - a.length: Bu, elementlərin uzunluqlarını müqayisə edir.

// Əgər b daha uzun olarsa, müsbət nəticə qaytarır və b əvvəl gəlir.
// Əgər a daha uzun olarsa, mənfi nəticə qaytarır və a əvvəl gəlir.