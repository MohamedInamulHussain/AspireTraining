let title = "Food Management";

//length
var titleLength = title.length;
console.log(titleLength);

//charAt
var lastChar = title.charAt(title - 1);
console.log(lastChar);

// concatenation
var domain = "Webb Application";
console.log(title+domain);

//indexof && lastindexof
var subtitle = "Food donation application";
console.log(subtitle.indexOf("Food")); 
console.log(subtitle.lastIndexOf("Application"));

//slice
let sampleString = "Android Development";
let subString = sampleString.slice(7);
console.log(subString);

//substring
var firstWord = sampleString.substring(0, 4);
console.log(firstWord);

//toupper && toLower
console.log(sampleString.toUpperCase());
console.log(sampleString.toLowerCase());

//replace
console.log(subtitle.replace("donation", "Sharing"));