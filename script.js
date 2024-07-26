function addNumbers (num1, num2) {
    return num1+num2;
}
console.log(addNumbers(10, 21));
console.log(addNumbers(14, 11));

function toUpper(str) {
    return str.toUpperCase();
}
console.log(toUpper("hello"));
console.log(toUpper("world"));

function averrageArray (arr) {
    let average = 0;

    for (i=0; i<arr.length; i++) {
        average += arr[i]/arr.length;
    }
    return average;
}

console.log(averrageArray([1,2,3,4,5]));
console.log(averrageArray([11,22,33,44,55]));

function removeVowels (str) {
    let vowels = "aeiouAEIOU";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result = result + str[i];
        }
    }
    return result;
}

console.log(removeVowels("shakir khN"));
console.log(removeVowels("This is Pakistan"));

function factorial (num) {
    let factorialof = 1;
for (i = 1; i <= num; i++) {
    factorialof *= i;
}
return factorialof;
}

console.log(factorial(5));
console.log(factorial(3));

function reverseString (str) {
    let reversestring = "";
    reversestring = str.split('').reverse().join('');
    return reversestring;
}

console.log(reverseString("Hello"));
console.log(reverseString("SHAKIR"));
console.log(reverseString("WOrld"));

function subNumber(num1 ,num2){
    return num1-num2;
}
console.log(subNumber(50,30));

function toUpper(str) {
        return str.toUpperCase();
    }
    console.log(toUpper("my name is shkir"));
    console.log(toUpper("world"));
    console.log(toUpper("i am pakistani"));