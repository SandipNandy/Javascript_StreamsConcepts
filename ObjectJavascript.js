let person={
    
    FirstName:'Sandip',
    LastName:'Nandi',
    Age: 26,
    InbuildFunction: function(A,B){
       console.log(A+B);
       console.log(this.FirstName+this.LastName);
    }
    
}
console.log(person.InbuildFunction(5,6));

person.LastName='Nandy'
person.gender='Male'
console.log(person.FirstName);
console.log(person.LastName);
console.log(person);
console.log('gender' in person);
for(let i in person){
    console.log(person[i]);
}


