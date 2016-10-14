'strict'
var allProducts = [];

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




function randomImageLeft() {
  var randomNum = Math.floor(Math.random() * allProducts.length);
  var leftRenderEl = document.getElementById('left');
  leftRenderEl.src = allProducts[randomNum].filePath;
}

function randomImageCenter() {
  var randomNum = Math.floor(Math.random() * allProducts.length);
  var centerRenderEl = document.getElementById('center');
  centerRenderEl.src = allProducts[randomNum].filePath;
}

function randomImageRight() {
  var randomNum = Math.floor(Math.random() * allProducts.length);
  var rightRenderEl = document.getElementById('right');
  rightRenderEl.src = allProducts[randomNum].filePath;
}
randomImageLeft();
randomImageCenter();
randomImageRight();
