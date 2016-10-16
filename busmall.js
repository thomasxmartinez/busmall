'use strict'
var allProducts = [];
var counter = 0;
var randomTrio = [];
var allImgs = document.getElementById('imgs');
function Product(name, filePath) {
  this.name = name
  this.filePath = filePath
  this.votes = 0
  allProducts.push(this);
};
new Product('R2D2-bag','assets/bag.jpg');
new Product('banana slicer','assets/banana.jpg');
new Product('bathroom','assets/bathroom.jpg');
new Product('boots','assets/boots.jpg');
new Product('breakfast','assets/breakfast.jpg');


function getRandom() {
  return Math.floor(Math.random() * allProducts.length);
}

function getRandomTrio() { //holds 3 items
  while (randomTrio.length < 3) {
    var randomNum = getRandom();
    while (randomTrio.indexOf(randomNum) > -1) {
      randomNum = getRandom();
    }
    randomTrio.push(randomNum);
    // check to see if the value from `getRandom()` already exists in randomTrio
  }
}
getRandomTrio();

var leftPic = document.getElementById('left');
var centerPic = document.getElementById('center');
var rightPic = document.getElementById('right');
// console.log('Hello');
// console.log(randomTrio);
function display(){
  leftPic.src = allProducts[randomTrio[0]].filePath;
  leftPic.name = allProducts[randomTrio[0]].name;
  centerPic.src = allProducts[randomTrio[1]].filePath;
  centerPic.name = allProducts[randomTrio[1]].name;
  rightPic.src = allProducts[randomTrio[2]].filePath;
  rightPic.name = allProducts[randomTrio[2]].name;
}
display();

function eventTally (pickedpic) {
  for( var i in allProducts){
    if(allProducts[i].name === pickedpic){
      allProducts[i].votes += 1;
      counter +=1;
    }
  }
}
console.log('left pics', leftPic.name);
function clickEvent() {
  console.log('Clicked');
  if (event.target.name === leftPic.name || event.target.name === centerPic.name || event.target.name === rightPic.name) {
    eventTally(event.target.name);

  } else {
    alert('Please click');
  }
  randomTrio = [];
  getRandomTrio();
  display();
}
allImgs.addEventListener('click', clickEvent);

function Tracker(){
  
}


// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;
//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// }
// randomIndex = shuffle(allProducts);
//

// function positionDecision() {
//   for (var i = 0; i < randomIndex.length;i++) {
//     if(i%3 == 0) {
//       randomImageInPosition('left');
//     }
//     else if (i%3==1) {
//       randomImageInPosition('center');
//     } else {
//       randomImageInPosition('right');
//     }
//   }
// };
// positionDecision();
//
// function randomImageInPosition(position) {
//   for (var i = 0; i < randomIndex.length; i ++) {
//   var renderEl = document.getElementById(position);
//   renderEl.src = randomIndex[i].filePath;
//   }
// }



// function randomImageLeft() {
//   var randomNum = Math.floor(Math.random() * allProducts.length);
//   var leftRenderEl = document.getElementById('left');
//   leftRenderEl.src = allProducts[randomNum].filePath;
// }
//
// function randomImageCenter() {
//   var randomNum = Math.floor(Math.random() * allProducts.length);
//   var centerRenderEl = document.getElementById('center');
//   centerRenderEl.src = allProducts[randomNum].filePath;
// }
//
// function randomImageRight() {
//   var randomNum = Math.floor(Math.random() * allProducts.length);
//   var rightRenderEl = document.getElementById('right');
//   rightRenderEl.src = allProducts[randomNum].filePath;
// }
// randomImageLeft();
// randomImageCenter();
// randomImageRight();
