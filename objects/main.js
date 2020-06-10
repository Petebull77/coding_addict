//objects
/*
const person = {
    name:'bob',
    age: 26,
    married: true,
    children: ['ann', 'peter'],
    greeting: function(){
        console.log('hello my name is Bob');
    },
    ["last-name"]: "anderson"
}
console.log(person);

// dot notation
//console.log(person.name);
//const age = person.age;
//console.log(age);

//const firstChild = person.children[0];
//console.log(firstChild);
//person.greeting();

// bracket notation
console.log(person["last-name"]);
console.log(person["name"]);

//change property
person.married = false;

//add property
person.city= 'chicago';
//delete property
delete person.married;
console.log(person);
*/
//this keyword
/*
const john = {
    name: "john",
    lastName: "anderson",
    fullName: function(){
        console.log(`Hello my full name is ${this.name} ${this.lastName} and I like Javascript`);

    }
}
    const bob = {
        name: "bob",
        lastName: "jordan",
        fullName: function() {
            console.log(`Hello my full name is ${this.name} ${this.lastName}`);

        }
    }
*/
  /*  function createPerson(name, lastName){
        return {
            name: name,
            lastName: lastName,
            fullName: function(){
                console.log(
                    `Hello my full name is ${this.name} ${this.lastName}
                    and I like Javascript`
                );
            }
        }

    }
    const john = createPerson('john', 'anderson');
    const bob = createPerson ('bob', 'jordan');
    const suzy = createPerson('suzy', 'cooper');
    
    john.fullName();
    bob.fullName();
    suzy.fullName();
    */

    //constructor function
    /*
    function Person(name, lastName){
        this.name = name,
        this.lastName= lastName,
        this.fullName = function(){
            console.log(
                `Hello my full name is ${this.name} ${this.lastName}
                and I like Javascript`
            );
    
        };
       //console.log(this);
    }
    const john =  new Person('john', 'anderson');
    const bob = new Person ('bob', 'jordan');
    const suzy = new Person ('suzy','cooper');

    //john.fullName();
    //bob.fullName();
    //suzy.fullName();
    console.log(john.constructor);
    
    
    
    //console.log(john);
    */
   /*
   let secretNumber = 5
   let guess;
            
    guesser();

    

    function guesser() {
        let guess = prompt("Guess the number");
        let guessNumber = Number(guess);
        
        if(guessNumber === secretNumber){
            console.log("You got it");
            return;
        } else if{
            if(guessNumber > secretNumber){
                message = 'Guess lower';
            }else {
                message = 'Guess higher';
            }
            console.log(message);
            
            
            
            guesser()
        }

    }
    */

    /*
    
    let input = prompt('How many miles?');
    let inputNumber = Number(input);
    let kilo = inputNumber * 1.609;
    let message = `${inputNumber} miles is equal to ${kilo} kilometres`;
    
    console.log(message);
    */
    /*
   let num = 10;

    function numCheck(){
    if (num < 10) {
    console.log(num + ' is less then 10');
        
    } else if (num > 10){
     console.log(num + ' is  more 10');
    
    } 
    else{
        console.log('they are the same');
    }
}
numCheck();
*/
/*
let num = 20;
function numPlusTen(){
    let newNum = num + 10;
    return newNum;
}
console.log(numPlusTen(num));

let output = 'hello world';
counter = 0;
welcome(output);
welcome(output);

function welcome(){
    counter ++;
     message = counter + ' times run';
}
console.log(message);
*/
/*
let num1 =5;
let num2 =10;
function multiplier(num1, num2){
    return num1 * num2;
}
console.log(multiplier(num1, num2));
*/

const workers = [
     {name: "Charles", location: "inside"},
     {name: "Sam", location: "inside"},
     {name: "Peter", location: "outside"}];

     const letMeIn = workers.filter(function(workers){
         if (workers.location === "outside") {
             console.log(workers.name);
         }
     })
     console.log(letMeIn);
     /*
     workers = { "Charles": "inside", "Sam": "inside", "Peter":"outside"}
     for key, value in workers.items():
         if value == "outside":
             print("Please let " +key + " in") 
             */
            
      ages = [1, 2, 3, 5 ];
     
     
         let total= 0;
         for(let i=0; i<ages.length; i++){
          total += ages[i] **2
         
         
         }
        
     console.log(total);

     fruits = ['banana', 'apple', 'orange','cucumber']
     console.log(fruits.length);