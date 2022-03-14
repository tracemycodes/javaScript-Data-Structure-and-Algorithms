
// STRING AND ITS MANIPULATIONS

let s = "Hello woRld";

// obtaining portions of a string
// s.substring(1, 7);
// // the slice method could work as well
// s.slice(1, 3);
// // split based on certain elements contained in a string and coverts it into an array
// vas.split(" ")

// console.log();
// let count = 0;
// if (count) {
//   console.log("object");
// } else {
//   console.log("hello");
// }


// SEARCHING A STRING

// var sin = s.indexOf('l');
// // the value of 0 starting from 5
// sin = s.indexOf('l', 5);
// // last index of a string
// sin = s.lastIndexOf("l")





// BOOLEAN SEARCHING FUNCTIONS IN ES6 AND LATER

// sin = s.startsWith("Hell") // => true: the string starts with these
// s.endsWith("!") // => false: s does not end with that
// s.includes("or")




// CREATING MODIFIED VERSIONS OF A STRING

// s.replace('Hel', 'ya') // => "Heya, world"
// let sNew = s.toLowerCase() // => "hello, world"
// s.toUpperCase() // => "HELLO, WORLD"
// s.normalize() // Unicode NFC normalization: ES6
// s.normalize("NFD") // NFD normalization. Also "NFKC", "NFKD"



//INSPECTING INDIVIDUAL (16-BIT) CHARACTERS OF A STRING

// s.charAt(0) // => "H": the first character
// s.charAt(s.length-1) // => "d": the last character
// s.charCodeAt(0) // => 72: 16-bit number at the specified position
// s.codePointAt(0) // => 72: ES6, works for codepoints > 16 bits



// console.log(sNew);




// CHANGING ELEMENTS In ARRAY AND OBJECTS

// let o = { x: 1 }; // Start with an object
// o.x = 2; // Mutate it by changing the value of a property
// o.y = 3; // Mutate it again by adding a new property
// let a = [5,2,3,4,1]; // Arrays are also mutable
// let b = [11,12]
// a[0] = 0; // Change the value of an array element
// Add a new array element

// console.log(c)



// ASSIGNING A VARIABLE TO AN ARRAY

// let a = ["a","b","c"]; // An array we want to copy
// let b = []; // A distinct array we'll copy into
// for(let i = 0; i < a.length; i++) { // For each index of a[]
// b[i] = a[i]; // Copy an element of a into b
// }
// let c = Array.from(b); // In ES6, copy arrays with Array.from()

// // console.log(c)

// function equalArrays(a, b) {
//   if (a === b) // return true; // Identical arrays are equal
//   if (a.length !== b.length) return false; // Different-size arrays not equal
//   for(let i = 0; i < a.length; i++) { // Loop through all elements
//   if (a[i] !== b[i]) return false; // If any differ, arrays not equal
//   }
// }



// Global SCOPE DECLARATION 

// const x = 1; // Declare x as a global constant
// if (x === 1) {
// let x = 2; // Inside a block x can refer to a different value
// console.log(x); // Prints 2
// }
// console.log(x); // Prints 1: we're back in the global scope now
// let x = 3; // ERROR! Syntax error trying to re-declare x



// // for in loop 
// let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
// for(let element of data) {
// sum += element;
// }
// sum // => 45

// console.log(sum);


// // using the for in loop with objects because objects are iterable
// let o = { x: 1, y: 2, z: 3 };
// let keys = "";
// for(let k of Object.keys(o)) {
// keys += k;
// }
// keys // => "xyz"

// console.log(keys)



// this returns the value of an object
// let sum = 0;
// for(let v of Object.values(o)) {
// sum += v;
// }
// sum // => 6

// console.log(sum);


// getting both value and var of an object we have
// let pairs = "";
// for(let [k, v] of Object.entries(o)) {
// pairs += k + v;
// }
// pairs // => "x1y2z3"

// console.log(pairs);






















// let myHeading = document.querySelector('h1')
// let myButton = document.querySelector('button')
// function setUserName() {
//   let userName = prompt ("what is your name");
//   if (!userName) {
//     setUserName();
//   } else {
//     localStorage.setItem('name', userName);
//     myHeading.textcontent = 'welcome today' + ' ' + userName;
//   }
// }
// if (!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'welcome today ' + storedName;
// }

// myButton.onclick = function () {
//   setUserName();
// }





// using let to define a variable
// let namy;
// namy = 'john doe';
// console.log(namy);


// // using const to declare a variable
// const namy = 'hendrix';
// console.log(namy);


// const person = {
//   name: 'john',
//   age: 32,
//   country: 'nigeria'
// }

// console.log(person)


// const numbers = [1,2,3,4,5,6]
// numbers.push(7)
// console.log(numbers)

// primitive data types

// strings
// const namy = "john doe";
// const age = 35;
// const haskids = true;
// const car = null;
// const sym = Symbol();


// reference types - objects
// array
// const hobbies = ['movies', 'music', 'swimming'];
// // object literal
// const address = {
//   city: 'boston',
//   state: 'NY'
// };
// Date
// const today = new Date();

// console.log(today)
// console.log(typeof today)

// let val;

// // number to string
// val = String(555);
// val = String(8+5);

// // bool to string
// val = String(true);

// date to string
// val = String(new Date());

// array to string
// val = String([1,2,3,4,5]);

// string to number
// val = Number('54')
// val = Number(true);
// val = Number(null);
// val = Number([1,2,3,4,5]);

// let val;

// // val = parseInt('100.76')
// val = parseFloat('100.76')

// // // output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed());


// math and number operations

// const num1 = 100;
// const num2 = 54;

// let val;
// simple maths

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 ^ num2;


// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.4);
// val = Math.floor(2.9);
// val = Math.sqrt(32);
// val = Math.abs(-2);
// val = Math.pow(2, 4);
// val = Math.min(32,4,56,78,9);
// val = Math.random();

// console.log(val);


console.log(Math.SQRT2);



// let val;

// val = Math.random() + 20;

// gives me a list of numbers not inclusive of 20
// val = Math.random() * 20 ;

// inclusive of 20
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);



// const firstName = 'Michael';
// const lastName = 'joey';
// let val;
// // concatenate
// val = firstName + ' ' + lastName;

// // length
// // val = lastName.length;

// // concat()
// // val = firstName.concat(' ', lastName);

// // transform to upper case
// // val = firstName.toUpperCase();

// // getting the index of a string
// // // val = lastName[3];
// // val = lastName.indexOf('y');
// // val = lastName.lastIndexOf('j');

// // charAt()
// // val = lastName.charAt('2');

// // getting the last character of a string we have this expression
// // val = lastName.charAt(lastName.length - 1);

// // substring
// // val = firstName.substring(0, 3);

// // slice()
// // val = firstName.slice (-2);

// // slitting a string based off certain elements of the string
// const str = 'hello to you today hope you feel okay';
// const tags = 'hello to,you today,hope you,feel okay';

// val = str.split(' ');
// val = tags.split(',');

// // replace 
// val = str.replace('hello', 'welcome')

// // include takes in a boolean operation of the required parameter
// val = str.includes('hello')

// console.log(val);



// applying template strings

// const namy = 'john'
// const age = 34
// const job = 'intern'
// const city = 'abj'
// let html;

// // html = '<ul><li>Name: ' + namy + '</li><li>age: ' + age + '</li><li>job: ' + job + '</li><li>city: ' + city + ' </li></ul>';

// html = `
//   <ul> 
//     <li>Name: ${namy} </li>
//     <li>age: ${age} </li>
//     <li>job: ${job} </li>
//     <li>city: ${city} </li>
//     <li> ${2+4} </li>
//     <li> ${age > 30 ? 'over 30' : 'under 30'} </li>
    
//   </ul>
// `

// document.body.innerHTML = html;












// Array

// const myArray = [53, 'me', 6, {a: 43, b: 54}]
// const myString = [14, 45, 4, 54, 36, 3, 50];

// let val;

// // to get the length of an array
// val = myString.length;

// // check if its an array 
// val = Array.isArray (myString);

// // get single value
// val = myString[3];

// // re-assigning values of an array
// // myString[3] = 'me';

// // getting the index of an array
// val = myString.indexOf(45)



// Mutating Arrays

// add to the end
// myString.push(60)'

// add to the start of an array 
// myString.unshift(60);

// remove last element of an array
// myString.pop();

// remove first element of an array
// myString.shift();

// splicing of an array
// myString.splice(1,2);

// reversing elements of an array
// myString.reverse();

// concatenating arrays
// val = myString.concat(myArray)

// sorting of an array
// val = myString.sort();

// arranging an array sequentaily
// val = myString.sort(function (x, y) {
// return x - y;
// })
// val = myString.sort((a, b) => b - a);

// using functions to find elements on specific conditions
// function under50(num) {
//   return num < 50;
// }
// val = myString.find(under50);
// if (val < 50) {
//   myHeading.textContent = 'hello i am less';
// } else {
//   myHeading.textContent = 'i am grater';
// }



// console.log (myString)
// console.log (val)



// OBJECTS

// const port = {
//   name: 'john',
//   age: 34,
//   address: 'New York',
//   birthDate: new Date()
// }
// let val;
// val = port;

// // to get specific value
// val = port.name;

// console.log(val)


// looping through an array of objects
// const people = [
//   {name: 'john', age: 34,},
//   {name: 'mary', age: 54,},
//   {name: 'mike', age: 12,}
// ]
// // for (let i = 0; i < people.length; i++) {
// //   console.log(people[i].name);
// // }
// people.forEach(name => {
//   console.log(people.name);
// });


// if statements 
// const id = 100;
// const iv = 70;


// if (id == 100) {
//   console.log('correct');
// } else {
//   console.log(incorrect)
// }

// // test if id is undefined
// if (typeof id !== 'undefined') {
//   console.log(`the id is ${id}`);
// } else {
//   console.log('No id')
// // }


// // switch statements
// var color = 'blue';

// switch (color) {
//   case 'blue':
//     console.log('color is blue')
//     break;
//   case 'yellow':
//     console.log('color is yellow')
//     break;
//   default:
//     console.log('color is red')
//     break;
// }

// // switching between dynamic variables we have 
// let day;
// day = new Date().getDay();

// switch (day) {
//   case 0:
//     day = 'sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`)


// function declRATION

// function greet(firstName = 'john', lastName = 'Doe') {
//   return 'hello '+  firstName + ' ' +lastName
// }
// console.log(greet('mike', 'dave'));


// function expression 
// const square = function (x) {
//   return x*x
// }
// console.log(square(5))


// immediately invokable functions 
// (function(){
//   console.log('IIFE Ran.. ');
// })();

// loop and for statements
// for (let i = 0; i < 10; i++) {
//   console.log(i)
  
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favorite number')
//     // doing this stops the iteration and fires back from the next item of the Array instead of just inserting the above function to the code

//     continue;
//   }
//   if (i === 5) {
//     // this breaks out of the loop of an array
//     break;
//   }
//   console.log(i)
  
// }

// while loop statement
// let v = 0;

// while (v < 10) {
//   console.log(v);
//   v++;
// }

// do while loop
// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);


// using for statements with arrays
// let cars = ['ford', 'toyota', 'lexus', 'benz', 'honda']

// for (let i = 0; i < cars.length; i++) {
//   let elem = cars[i];
//   console.log(elem);
  
// }

// applying the for each method on the above array we have.
// cars.forEach(function (car) {
//   console.log(car);
// });

// applying index / numbering to me loop statement
// cars.forEach(function (car, index) {
//   console.log(`${index} : ${car}`);
// });

//  mapping of elements in an array of obj
// let users = [
//   {id: 1, name: 'mibe'},
//   {id: 2, name: 'krie'},
//   {id: 3, name: 'agbe'},
//   {id: 5, name: 'mibe'}
// ];

// let ids = users.map(function(user){
//   return users.id;
// });
// console.log(ids);

// for in loop which is used mostly on objects

// let paki = {
//   firstName: 'ayoh',
//   lastName: 'agba',
//   age: 24
// }

// for (let x in paki) {
//   console.log(`${x} : ${paki[x]}`);
    
// }



// window methods /objects /properties

// alert
// alert('hello world');

// prompt
// var input = prompt('place an input');
// alert(input);

// confirm
// if (confirm('are you sure')) {
//   console.log('yes')
// } else {
//   console.log('no')
// }

// let val;
// outer height and weight
// // val = window.outerHeight;
// val = window.outerWidth;
// console.log(val);

// scroll points on my web page
// val = window.scrollX;

// location object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;


// redirect
// window.location.href = 'http://google.com';
// reload
// window.location.reload();


// let cas;
// //  cas = document;
// //  cas = document.all;
// //  cas = document.all[20];
// //  cas = document.all.length;
// //  cas = document.head;

// //  dealing with link elements of a page
// //  cas = document.links;
// //  cas = document.links[0].id;
// //  cas = document.links[0].classList;
// //  cas = document.links[0].className;

// // selecting the image elements of a page we have
// // cas = document.images;

// cas = document.scripts;
// // cas = document.scripts[0].getAttribute('src');

// // changing this to an array
// let scriptArr = Array.from(cas);

// scriptArr.forEach(function (script) {
//   console.log(script);
// });

// console.log(cas);
























// traversing the DOM

// let val;
// const list = document.querySelector('ul.links');
// const listItem = document.querySelector('li.listy:nth-child(2)');
// val = listItem;

// get child nodes

// val = list.childNodes;
// val = list.childNodes[1];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[3].nodeType;

// for the node type

// 1- element
// 2- attribute
// 3- text node
// 8- comment
// 9- document itself
// 10- Doctype


// // to get children element node
// val = list.children;
// val = list.children[1];

// // inputting an element in dom
// list.children[1].textContent = " ";

// // children of children
// val = list.children[1].children;

// // first child
// val = list.firstChild;
// val = list.firstElementChild;



// console.log(val);

// creating an element
// const li = document.createElement('li');

// // adding class to the element
// li.className = 'listy';

// // adding an id 
// li.id = 'liy';

// // adding an attribute we have
// li.setAttribute('title', 'Newitem');

// var textnode = document.createTextNode('hello world');
// // creating a text node to append 
// li.appendChild(textnode);
// // adding it to the ul element
// document.querySelector('ul.links').appendChild(li);


// // how to create new link element
// // const linkele = document.createElement('a');

// // // setting the class name for the link we have
// // linkele.className = 'linkitem';
// // // inputting the link 
// // linkele.innerHTML = 'i am the link';
// // // appending the link to the ul element
// // li.appendChild(linkele);

// // append li as child to ul
// document.querySelector('ul.links').appendChild(li);

// console.log(linkele);



// // creating an element
// const newHeading = document.createElement('h2');
// // adding an ID
// newHeading.id = 'headies';
// // adding a text node
// newHeading.appendChild(document.createTextNode('my new'));
// // get the old head
// const oldHeading = document.getElementById('headies');
// // assigning the parent element of item to be replaced
// const parami = document.querySelector('.workon');

// // replace element
// parami.replaceChild(newHeading, oldHeading);
// // console.log(newHeading);

// // removing an element from a page we have
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // remove list item
// lis[0].remove();

// // remove child element
// list.removeChild(lis[2]);

// // classes & attr
// const firstli = document.querySelector('li:first-child');
// const link = firstli.children[0];

// let val;
// // classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');

// // attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'https//:ggg.com');
// link.setAttribute('title', 'google');
// val = link.hasAttribute('href');
// val = link.removeAttribute('title');
// // or like this 
// // link.removeAttribute('title');


// console.log(link);






// events listeners on JS
// to stop the default action of an event we call in an event object into the value of our function e
// document.querySelector('a').addEventListener('click', function (e) {
//   console.log('hello world');

//   e.preventDefault();
// });

// a better way of representing this is to call out the function separately by naming our function

// document.querySelector('li').addEventListener('click', onClick);

// function onClick(e) {
//   // console.log('hello world')
//   // e.preventDefault();

// let val = e;

// // event target element
// val = e.target;
// // val = e.target.className;
// // val = e.target.id;
// val = e.target.classList;

// // changing text based off an event been fired up
// e.target.innerText = 'hello';

// // event type
// val = e.type;

// // timestamp 
// val = e.timeStamp;

// // coordinates event relative to the window for x and y axis
// val = e.clientY;
// // relative to the element
// val = e.offsetY;

// console.log(val);
// }


// const mylin = document.querySelector('a');
// const divme = document.querySelector('.workon');
// const heading = document.querySelector('h1');

// click
// mylin.addEventListener('click', runEvent);
// doubleclick
// mylin.addEventListener('dblclick', runEvent);
// Mouse down
// mylin.addEventListener('mousedown', runEvent);
// mylin.addEventListener('mouseup', runEvent);
// divme.addEventListener('mouseenter', runEvent);
// divme.addEventListener('mouseleave', runEvent);
// divme.addEventListener('mouseover', runEvent);
// divme.addEventListener('mouseout', runEvent);
// divme.addEventListener('mousemove', runEvent);


// // event handler
// function runEvent(e) {
//   console.log(`event type: ${e.type}`);
  
//   heading.textContent = `MouseX: ${e.offsetX} Mouse: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 50)`;  
// }




// // keyboard events
// const form = document.querySelector('form');
// const taskinput = document.getElementById('testfield')
// const display = document.querySelector('.output')


// to clear input
// taskinput.value = '';

// form.addEventListener('submit', runEvent);

// function runEvent(e) {
//   console.log(`event type: ${e.type}`);

//   // get input value 
//   console.log(taskinput.value);
// }


// taskinput.addEventListener('keydown', runahm);
// for key up
// taskinput.addEventListener('keyup', runahm);
// keypress a general event for both keyup and keydown
// taskinput.addEventListener('keypress', runahm);
// event kicks off once cursor is clicked on text input area
// taskinput.addEventListener('focus', runahm);
// the opposite of focus
// taskinput.addEventListener('blur', runahm);
// cut
// taskinput.addEventListener('cut', runahm);
// paste
// taskinput.addEventListener('paste', runahm);
// fires up all events involving inputs
// taskinput.addEventListener('input', runahm);
// select from drop down
// select.addEventListener('change', runahm);

// function runahm(e) {
//   console.log(`event type ${e.type}`);

//   console.log(e.target.value);

//   // display.innerText = e.target.value;
// }






// // set local storage item
// localStorage.setItem('name', 'ayoh');

// // set session storage item
// sessionStorage.setItem('age', 23);

// // remove from local storage
// localStorage.removeItem('name');

// get from storage
// const namy = localStorage.getItem('name');

// to clear local storage 
// localStorage.clear();
// sessionStorage.clear();

// console.log(namy);


// // saving inputs into my local storage
// let form = document.querySelector('form');

// form.addEventListener('submit', saveFile);

// function saveFile(e) {
//   let task = document.getElementById('task').value;

//   let tasks;
//   if (localStorage.getItem('tasks') === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem('tasks'));
//   }

//   tasks.push(task);

//   localStorage.setItem('tasks', JSON.stringify(tasks));
//   alert('task to save')
// }

// const tasks = JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(task => {
//   console.log(task);
// });

// console.log(tasks);


// console.log(prompt('hello'));

// const obj = {
//   namt: 'fish',
//   age: 5
// }



// localStorage.setItem('name', JSON.stringify(obj))

// console.log(obj);
