const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }


/*
  It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

  Willy the Goblin
  Big Daddy
  Father Christmas
  
  the soup kitchen
  Disneyland
  the White House
  
  spontaneously combusted
  melted into a puddle on the sidewalk
  turned into a slug and crawled away
*/

let weirdNameArray = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas',
]

let placeArray = [
    'the soup kitchen',
    'Disneyland',
    'the White House',
  ]

let adjectiveArray = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away',
  ]





let weight = '300 pounds'
let temp = '94 farenheit'


randomize.addEventListener('click', result);
function result() {
  let myName = 'Bob'
  if(customName.value !== '') {
    myName = customName.value;

  }

  if(document.getElementById("uk").checked) {
    temp = '34 celcius'
    weight = '21 stone'

  }

  
  weirdName = randomValueFromArray(weirdNameArray)
  place = randomValueFromArray(placeArray)
  adjective = randomValueFromArray(adjectiveArray)

  story.textContent = `It was ${temp} outside, so 
  ${weirdName} went for a walk. When they got to 
  ${place}, they stared in horror for a few moments, then 
  ${adjective}. ${myName} saw the whole thing, but was not surprised — 
  ${weirdName}: weighs ${weight}, and it was a hot day.`;

  story.style.visibility = 'visible';
}