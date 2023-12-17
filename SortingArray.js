//2 types of sorting -1. string sorting and 2. number sorting 
let fruits=['Guava','Pomegranate','Apple','Banana','Mango']

//here sring will be sorting but make sure all the letter should be either 
//in capital or small or fisrt letter should be capital for all strings available in the array.

fruits.sort();
console.log(fruits);
let numbers=[87,65,32,90,62,73,12,76];
numbers.sort((a,b)=>a-b);

console.log(numbers);
