
const people = [
    { name: 'bob', age: 20, position: 'designer'},
    { name: 'peter', age: 25, position: 'developer'},
    { name: 'suzy', age: 30, position: 'the boss'}
];

people.forEach(function(people){
    //console.log(people.age);
    return people.name
})
console.log(people[1].name);

//map  
//returns new array
//uses values from original array

//filter
// returns new array, checks condition, if none match empty array

const youngPeople = people.filter(function(people){
    return people.age > 25;
})
console.log(youngPeople);

const developers = people.filter(function(people){
    if (people.position === 'developer'){
        console.log(people.name + ' is a developer');
    };


})
console.log(developers);

const findBob = people.filter(function(people){
    return people.name
})
console.log(people[0].name, people[0].position);
//find-- returns first match, great for unique value

//reduce 

const numbers = [ 23, 43, 50, 75];

const result = Math.min(1,2,3)

console.log(result);

const result2 = Math.floor(Math.random()*10)

console.log(result2);

const date = new Date();
console.log(date);

let month = date.getMonth();
console.log(month);

let year = date.getFullYear();
console.log(year);

let day = date.getDay();
console.log(day);