/*document.body.style.backgroundColor='blue';*/
/*document.querySelector('.btn').style.backgroundColor='green';*/
/*document.getElementById('btn').style.backgroundColor='red';

const btn= document.getElementById('btn');
const name = btn.nodeName;
const css= btn.style;
console.log(btn);

console.log(document);*/

/*const h1 = document.getElementById('title');
h1.style.color= 'green';

const btn=document.getElementById('btn');

btn.style.color= "purple";
btn.style.backgroundColor="yellow";*/
/*const headings = document.getElementsByTagName('h2');
console.log(headings);

headings[0].style.color='red';
//console.log(headings.length);
const items= document.getElementsByTagName('#special'); */

//items.forEach(function(item){
 //   console.log(item);
//});
/*items[1].style.color="aqua";

const betterItems = [...items];
betterItems.forEach(function(item){
console.log(item)
});

console.log(items);
console.log(betterItems); */

/*const lastItem = document.querySelector('li:last-child');

console.log(lastItem);
const list = document.querySelectorAll('#special');
console.log(list);
list.forEach(function(){
    console.log(item);
    item.style.color = "blue";
}); */


/*const result= document.querySelector('#result');
const allChildren= result.childNodes;
//console.log(allChildren);
const children = result.children;
console.log(children);
console.log(children[0]);

console.log(result.firstChild);  */

/*const heading = document.querySelector('h3');
//console.log(heading.parentElement.parentElement.parentElement);

const parent = heading.parentElement;
parent.style.color= "red"; */

/*const item= document.getElementById('super');
const value= item.nodeValue;
console.log(item.firstChild.nodeValue); */

/*const first = document.querySelector('.first');
const idValue= first.getAttribute('id');
//console.log(idValue);

const link = document.getElementById('link')
const showLink = link.getAttribute('href');
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute('class', 'first');
last.textContent = " I also have a class of first";
console.log(last);

const links = document.querySelectorAll('.first');
console.log(links); */

/*const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');
const seventh = document.getElementById('seventh');

const classValue = fifth.className;
//console.log(classValue);
sixth.className = 'colors';  */

//const result = document.querySelector('results');

/*1.create Element
2.create createTextNode
3.Element.appendChild(childelement)
4.append to the div (class or id) */

//insertBefore('element' 'location')

//create empty element
//const bodyDiv = document.createElement('div');
//create text node
//const text = document.createTextNode('simple body div');
//bodyDiv.appendChild(text);


//document.body.appendChild(bodyDiv);

/*const heading = document.createElement('h2');
const headingText = document.createTextNode('dynamic heading');
heading.appendChild(headingText);
heading.classList.add('blue');
results.appendChild(heading);

const smallHeading = document.createElement('h6');
const smallText = document.createTextNode('I am small heading text');
smallHeading.classList.add('red');
smallHeading.appendChild(smallText);
results.appendChild(smallHeading);
//document.body.replaceChild(smallHeading, bodyDiv);



console.log(results.children); */

//prepend, innerText

/*const heading = document.createElement('h2');
heading.innerText = 'I am a dynamic heading'
document.body.prepend(heading); */

//remove , remove child

const result = document.querySelector('.lia');
const heading = result.querySelector('h2');
result.removeChild(heading);
console.log(heading);






 



