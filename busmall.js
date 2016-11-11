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
new Product('bubblegum', 'assets/bubblegum.jpg');
new Product('chair', 'assets/chair.jpg');
new Product('cthulhu', 'assets/cthulhu.jpg');
new Product('dog-duck', 'assets/dog-duck.jpg');
new Product('dragon', 'assets/dragon.jpg');
new Product('pen', 'assets/pen.jpg');
new Product('pet-sweep', 'assets/pet-sweep.jpg');
new Product('scissors', 'assets/scissors.jpg');
new Product('shark', 'assets/shark.jpg');
new Product('sweep', 'assets/sweep.png');
new Product('tauntaun', 'assets/tauntaun.jpg');
new Product('unicorn', 'assets/unicorn.jpg');
new Product('usb', 'assets/usb.gif');
new Product('water-can', 'assets/water-can.jpg');
new Product('wine-glass', 'assets/wine-glass.jpg');

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
  }
}
getRandomTrio();

var leftPic = document.getElementById('left');
var centerPic = document.getElementById('center');
var rightPic = document.getElementById('right');

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
function makeChart() {
  console.log(allProducts);
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
      makeChart();
      localStorage.setItem('allProducts', JSON.stringify(allProducts));
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

function votes() {
  for (var i = 0; i < allProducts.length; i++) {
    createUl(allProducts[i]);
  }
  createChart();
}
function makeChart() {
  console.log(allProducts);
}

function refreshButton() {

}

function getVotes(){
  var chartVotes = [];
  for (var i = 0; i < allProducts.length; i ++) {
    chartVotes.push(allProducts[i].votes);
  }
  return chartVotes;
}
function getNames() {
  var chartNames = [];
  for (var i = 0; i < allProducts.length; i++) {
    chartNames.push(allProducts[i].name);
  }
  return chartNames;
}
function createChart(products) {
var canvas = document.getElementById('canvas');

var myChart = new Chart(canvas, {
  type: 'bar',
  data: {
    labels: getNames(),
    datasets: [{
      label: 'Consumer Choice Results',
      data: getVotes(),
      backgroundColor:'#00ccff',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Items'
        }
      }],
      yAxes: [{
        ticks: {
          max: 4,
          min: 0,
          stepSize: 1,
        }
      }]
    }
  }
});
}
