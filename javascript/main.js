/*//This creates the object dog | dog.name calls for the name part of my dog
let dog = { name: 'hudson', breed : 'different'};
dog.name

// displays what data type dog is in console
console.log(typeof dog);



/*START OF numbers*/
/*
const myInt = 5;
const myFloat = 6.667;
myInt;
myFloat;

let myNumber = "74";
myNumber += 3
console.log(typeof myNumber);

let x = 3; // x contains the value 3
let y = 4; // y contains the value 4
console.log(x *= y); // x now contains the value 12

let myString = `Hey ${myNumber}`; //the ` makes it possible to add a variable in with your string
*/










/*START OF STRINGS*/

/*
const browserType = 'Mozilla';

console.log(browserType.length);

console.log(browserType[0])

console.log(browserType.includes("mozilla"))

console.log(browserType.startsWith("moz"))
console.log(browserType.endsWith("moz"))


const firstOccurrence = tagline.indexOf('developers');
const secondOccurrence = tagline.indexOf('developers', firstOccurrence + 1);

console.log(firstOccurrence);
console.log(secondOccurrence);






//this takes part of the string
console.log(browserType.slice(1, 4)); // "ozi"


//this turns radData either all upercase or all lowercase
const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());


//this replaces the substring Moz into dumb
let update = browserType.replace('Moz', 'dumb')
console.log(update)








//all of this turns the weirdly capatalized words into properly capatilized words
//const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (const city of cities) {
  // write your code just below here
  let lowerCase = city.toLowerCase();
  let upperCase = lowerCase[0].toUpperCase();
  let final = lowerCase.replace(lowerCase[0], upperCase);
  console.log(final)

  const result = city;
  const listItem = document.createElement('li');
  listItem.textContent = result;
}








//here I am turning all of this random station information into a readable Format

const list = document.querySelector('.output ul');
list.innerHTML = '';
const stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (const station of stations) {
  // write your code just below here

  let abb = station.slice(0,3)
  console.log(abb)
  let semicolin = station.indexOf(';')
  console.log(semicolin)
  let name = station.slice(semicolin + 1)
  console.log(name)
  let final = `${abb}: ${name}`;
  console.log(final)

  const result = station;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
*/



/*START OF ARRAYS*/

/*
const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

console.log(shopping);
console.log(shopping.length);
console.log(shopping[0]);
//this is changing index zero to tahini
shopping[0] = 'tahini';
console.log(shopping[0]);
//this is adding these two items to the end of the array
shopping.push('steak', 'chicken');
console.log(shopping);
//this is adding these two items to the start of the list
shopping.unshift('ham', 'lettuce');
console.log(shopping);

//pop removes last item in array
// you can store this last item with making shopping.pop() the value of a variable
let lastItem = shopping.pop();
console.log(shopping);
//this is the same as pop but the start instead
let firstItem = shopping.shift();
console.log(shopping);
//the first value is where to start sliceing and the second is how many items to slice
//index in this case would be a variable that took the index of where you wanted to start sliceing
shopping.splice(index, 1);
console.log(shopping);



const random = ['tree', 795, [0, 1, 2]];
//below this selects the multidimensional array wich is the array within the random array
//using the first sqauare brackets and index the second pair is for the value within the multidimesional array
random[2][2];
*/
/*
const shoppings = ['Parrot', 'Falcon', 'Owl'];

for (const shopping of shoppings) {
  console.log(shopping);
}

//this modifys everything in an array and creates a new array based on the results
function double(number) {
  return number * 2;
}
const numbers = [5, 2, 7, 6 ,2];
const doubled = numbers.map(double);
console.log(doubled);  // [ 10, 4, 14, 12, 4 ]

//this is similar to map syntax wise but it just creates a new array from the list items that pass the function

function sort(numbers) {
  return numbers === 2
}
const numbers = [5, 2, 7, 6 ,2];
let newNumbers = numbers.filter(sort)
console.log(newNumbers)

//the split below turned this string into 6 different list items in an array splitting the items up using the commas
const data = 'Manchester;London;Liverpool;Birmingham;Leeds;Carlisle';
const cities = data.split(';');
console.log(cities);

//this does the oppisite of split joining all of the array items into a string at the commas
const data1 = cities.join(';');
console.log(data1);






//this adds together the prices of datas then creates a new array that is formatted different
const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;

// number 1
              let datas = ['Underpants:6.99',
'Socks:5.99',
'T-shirt:14.99',
'Trousers:31.99',
'Shoes:23.99',]

console.log(datas)

let total1 = 0

for (const data of datas) {
  let colin = data.indexOf(':')
  let number1 = data.slice(colin + 1)
  //this is coverting number string into number int
  number = number1 * 1
  total1 = total1 + number
  //.tofixed is rounding
  total = Number((total1).toFixed(2));
  console.log(total)
}

let stringData = datas.toString();
console.log(stringData)
let text = stringData.replaceAll(':',' --- ')
console.log(text)
text = text.split(',')
console.log(text) 

// number 2

  // number 3

  // number 4

  // number 5
  let itemText = 0;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;


// number 6


// all this takes these names and takes there indexes and adds it next to them in a string
let myArray = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];
let myNewArray = []
      // Add your code here
      myArray.pop()
      myArray.push('hudosn','harold')
      let index = 0
      for (let myItem of myArray) {
        myItem += ` (${index})`
        index = index+1
        myNewArray.push(myItem)
      }
      
      console.log(myNewArray)
      myString = myNewArray.join(' - ');
      console.log(myString)
      // Don't edit the code below here!
  */
  

/*CONDITIONALS*/ 
/*
//this part is essentialto any of the conditionals
const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
*/
// uses a ternary conditional to change the colors
/*
select.addEventListener('change', () => select.value === 'black'
  ? update('black', 'white')
  : update('white', 'black')
);
*/

/* uses a if else statement conditional to change the colors
select.addEventListener('change', () => maybe())

function maybe() {
  if (select.value === 'black') {
    update('black', 'white')
  }
  else {
    update('white', 'black')
  }
}
*/

//using switch conditional to change colors
/*
select.addEventListener('change', () => maybe())

function maybe() {
  switch(select.value) {
    case 'black':
      update('black', 'white')
      break;

  

    case 'white':
      update('white', 'black')
      break;

    default:
      update('white', 'black')

    }
}

*/


/* LOOPS */

let cats = [
'weird',
'hairless',
'stupid',
'ugly',
]

//this says run the code in the curly braces the amount of times there is an element in the array
// the first statement inside makes a variable with the value of the first element in the array
// the second time the loop runs it will remake the variable with the value of the 2nd element in the array
for (let cat of cats) {
  console.log(cat);
}

//whatever variable I pass in the functions () will become the variable that holds the values for the elements in the array when I use map()

function toUpper(string) {
  
  return string.toUpperCase();
}

// map in this case calls for a function and then runs that function for each element in the array
// the individual element will be the variable passed in the function ()
// and from there you can edit each variable within the function
// this will not edit the origanal array so you have to assign it to a different one in this case upperCats
let upperCats = cats.map(toUpper)

console.log(upperCats)


function endsWithD(cat) {
  return cat.endsWith('d');
}

// what filter does is for each element within the array it will run this function once
// the variable passed in the functions () will determine what the individual elements are called in the function
// if that function returns true for that individual element then the element will become part of the new array filteredCats
// if the function returns false the element will not go into the new array
let filteredCats = cats.filter(endsWithD)

console.log(filteredCats)


const hoverEffect = document.querySelector('.hover-effect');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', event => {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

function updateHoverEffect() {
  const lagFactor = 0.1;
  const dx = mouseX - hoverEffect.offsetLeft - hoverEffect.offsetWidth / 2;
  const dy = mouseY - hoverEffect.offsetTop - hoverEffect.offsetHeight / 2;
  const tx = dx * lagFactor;
  const ty = dy * lagFactor;
  hoverEffect.style.left = hoverEffect.offsetLeft + tx + 'px';
  hoverEffect.style.top = hoverEffect.offsetTop + ty + 'px';
  requestAnimationFrame(updateHoverEffect);
}
requestAnimationFrame(updateHoverEffect);

document.addEventListener('mouseenter', () => {
  hoverEffect.style.opacity = 10000;
});

document.addEventListener('mouseleave', () => {
  hoverEffect.style.opacity = 0;
});





    










  