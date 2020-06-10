//select element, also the one you want changed as well
//add eventlistener
//what you want done

/*const btn = document.querySelector('.btn');
const heading= document.querySelector('h2');
function changeColors(){
    const hasClass= heading.classList.contains('red');
if(hasClass) {
heading.classList.remove('red');
} else {
    heading.classList.add('red');

}
}

btn.addEventListener('click', changeColors); */

/*const btn = document.querySelector('.btn');
const heading = document.querySelector('h2');

btn.addEventListener('click', function(){
heading.classList.add('red');

}) */

/*const person = {
    name: "bob",
    age: 26,
    married: true,
    children: ["anna", "peter"],
    greeting: function(){
        console.log('hello')
    }
};
console.log(person)
console.log(person.name); */

/*const heading = document.querySelector('h2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log('you clicked me');
});
btn.addEventListener('click', function(){
    heading.classList.add('red');
});
btn.addEventListener('mousedown', function(){
    console.log('down');
});
heading.addEventListener('mouseenter', function() {
    heading.classList.add('blue');
});
heading.addEventListener('mouseleave', function(){
heading.classList.remove('blue');
}); */
/*
const nameInput= document.getElementById('name');
nameInput.addEventListener('keypress', function(){
 console.dir(nameInput);
});
*/
/*
 const nameInput= document.getElementById('name');
 nameInput.addEventListener('keyup', function(){
 console.log(nameInput.value);
 });
 */
 // even object argument e, evt
 // info about triggered event
 // event type
 // even.currentTarget
 // this keyword
 // preventDefaul()--prevents default behaviour
/*
    const heading = document.querySelector('h1');
    const btn = document.querySelector('.btn');
    const link = document.getElementById('link');

    heading.addEventListener('click', function(event){
    event.currentTarget.classList.add('red');
    console.log(event.type);
    });
    heading.addEventListener('click', function(event) {
        console.log(event.currentTarget);
        console.log(this);
    });
    
    
    btn.addEventListener('click', function() {
    btn.classList.add('blue');
    })

    function someFunc(e){
        e.preventDefault();
    }
    link.addEventListener('click', someFunc)
    */
   // currentTarget -always refers to the element to which event handler has been assigned to
   // target -identifies the element on which the element occured

   const btns = document.querySelectorAll('.btn');
   
   btns.forEach(function(btn){
       btn.addEventListener('click', function(e){
        
        //e.currentTarget.style.color='blue'
        console.log('target',e.target);
        e.target.style.color ='green';
        
       });
    });

    console.log('yay');