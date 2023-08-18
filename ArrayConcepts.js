//In 'var' variable declarition you are allowed to redeclaired one or more that one variables with same name
// But in 'let' it is nt allowed


/*
*******************
let marks=Array(6);
var marks=new Array(20,40,35,12,37,100);//here it will through and error as we already delaired 'marks'
with 'let' keyword but again in with 'var' we are declaring same 'marks' variable which 'let' will not accept
so this will through compile time error

var mark=[];// here it is allowed to give same name with 'var' variable.
var mark=[2,3,5,7]; //here it is allowed to give same name with 'var' variable.


*******************
*/

var marks=[20,30,40,45,60,70,80,95];

//slice function we can use to make and range or sub array of main array, we need to give

//the start postion and ((the element's position upto which you want to print)+1) 

//here we want to print 60,70,80 so 60->4th position,70->5th position,80->6th position so in slice we

//need to give 4, ((the element's position upto which you want to print -->6)+1) => 7

var subMarks=marks.slice(4,7);

console.log(subMarks);

console.log(marks[6]);

marks[0]=85;

console.log(marks);
console.log(marks.length);
marks.push(65);//in 'marks' array it will add the number at end side
console.log(marks);
console.log(marks.length);
marks.pop();// delect the element of the array from the last
console.log(marks);
marks.unshift(98);//it will add the elements of the array in the first
console.log(marks);
//if you want to know in which index the element is available
console.log(marks.indexOf(95));
//if you want to check an element is available or not in array, you can use 'includes', if element is present then it will e true
//otherwise false
console.log(marks.includes(10));
console.log(marks.includes(80));

var NewArray=[89,91,97,99];
var sum=0;
for(let i=0;i<NewArray.length;i++){
    sum=sum+NewArray[i];
}
console.log('Sum Value : ',sum); 
//Now the above sum of array can make with in one line by using 'reduce' in built function , it will
//optimize the line of code into 1 single line , It can accept upto 4 arguments
//here 'sumArray' will behave like 'sum' and its value will be 0 always at starting, now totalArray will
//indicate each element of 'NewArray' like 'NewArray[i]'
//sumArray argument is called as accumulator and accumulator intialization will done as second arugument under reduce function, like
//like ----> NewArray.reduce((sumArray,totalArray)=>sumArray+totalArray,0);- but its not mandatory without intialing also by default accumulator value will be 0

var total=NewArray.reduce((sumArray,totalArray)=>sumArray+totalArray);
console.log('Total Value : ',total);

//we want to print all even numbers from the below array into new array 
var newArray1=[];
var ArrayElement=[12,16,17,31,36,19,42,29];
for(let i=0;i<ArrayElement.length;i++){
    if(ArrayElement[i]%2==0){
        newArray1.push(ArrayElement[i]);
    }
}

console.log(newArray1);

//Now the optimization technique for 'printing all even numbers from the below array into new array'
let NewNumber=ArrayElement.filter(num=>num%2==0);
console.log(NewNumber);

//Now if we want mutiply the 'NewNumber' array with 3 and then through loop also we can do but
//optimize technique is best way
let MultplyBy3NewArray=NewNumber.map(src=>src*3);
console.log(MultplyBy3NewArray);








