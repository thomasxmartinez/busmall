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
new Product('bubblegum.jpg', 'assets/bubblegum.jpg');
new Product('chair.jpg', 'assets/chair.jpg');
new Product('cthulhu.jpg', 'assets/cthulhu.jpg');
new Product('dog-duck.jpg', 'assets/dog-duck.jpg');
new Product('dragon.jpg', 'assets/dragon.jpg');
new Product('pen.jpg', 'assets/pen.jpg');
new Product('pet-sweep.jpg', 'assets/pet-sweep.jpg');
new Product('scissors.jpg', 'assets/scissors.jpg');
new Product('shark.jpg', 'assets/shark.jpg');
new Product('sweep.png', 'assets/sweep.png');
new Product('tauntaun.jpg', 'assets/tauntaun.jpg');
new Product('unicorn.jpg', 'assets/unicorn.jpg');
new Product('usb.gif', 'assets/usb.gif');
new Product('water-can.jpg', 'assets/water-can.jpg');
new Product('wine-glass.jpg', 'assets/wine-glass.jpg');

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
  for (var i = 0; i < allProducts.length; i++){
    if(allProducts[i].name === pickedpic){
      allProducts[i].votes += 1;
    }
  }
}

function clickEvent() {
  console.log('Clicked');
  if (event.target.name === leftPic.name || event.target.name === centerPic.name || event.target.name === rightPic.name) {
    eventTally(event.target.name);
    counter += 1;
    if (counter < 15) {
      randomTrio = [];
      getRandomTrio();
      display();
    } else {
      resultsButton();
      allImgs.removeEventListener('click',clickEvent);
    }

  } else {
    alert('Please click');
  }
}

allImgs.addEventListener('click', clickEvent);

function resultsButton() {
  var body = document.getElementById('button');
  var button = document.createElement('button');
  button.innerHTML = "Get Results";
  body.appendChild(button);
  button.addEventListener ('click', votes);
}


function createUl(products) {
  var allProducts = document.getElementById('allProducts');
  var ulEl = document.createElement('ul');
  document.getElementById('allProducts').appendChild(ulEl);

  var liEl = document.createElement('li');
  liEl.textContent = ('Product Name: ' + products.name + '(' + 'Times Voted: ' + products.votes + ')');
  ulEl.appendChild(liEl);

}
// function createUl(products) {
//   var allProducts =

  // allProducts.appendChild(ulEl);//append UL to DOM
  // liEl.addEventListener ('click', refreshButton)
// }
// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

function votes() {
  for (var i = 0; i < allProducts.length; i++) {
  createUl(allProducts[i]);
  }
}

function refreshButton() {

}

// resultsButton();
//     }); else {
//       removingEventListeners('click', clickEvent);
//     }
//   }
// }
// console.log(counter);

// var button = document.createElement('button');
// button.innerHTML = "Do Something";
//
// var body = document.getElementsByTagName('body')[0];
// body.appendChild(button);
//
// button.addEventListener ("click", function() {
//   alert("did something");
// });

// function Tracker(){
//   create
// }



// var productClickTracker = {
//   productClickTracker['R2D2-bag'] = 0
//   productClickTracker['banana slicer'] = 0
//   productClickTracker['bathroom'] = 0
//   productClickTracker['boots'] = 0
//   productClickTracker['breakfast'] = 0
//   productClickTracker['all'] = 0
// };
//
// productClickTracker[event.target.name] = productClickTracker[event.target.name]++;
// productClickTracker['all'] = productClickTracker['all']++;


// function countingClicks() {
//   if (counter < 15) {
//     clickEvent();
//   } else {
//     resultsButton();
//     removingEventListeners('click', clickEvent);
//   }
// }

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
// if (x > 5) {
//
// } else if (x > 50) {
//
// } else {
//
// }
// console.log('left pics', leftPic.name);
// } else if (counter >= 15) {
//   resultsButton();
//   allImgs.removeEventListener('click',clickEvent);
// console.log('Hello');
// console.log(randomTrio);
// } else if (counter >= 15) {
//   resultsButton();
//   allImgs.removeEventListener('click',clickEvent);
// randomTrio = [];
// getRandomTrio();
// display();
// randomTrio = [];
// getRandomTrio();
// display();
