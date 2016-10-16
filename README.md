// 1. Event Listener for images
// 2. Constructor for image/product objects
  // a. path to image file
  // b. image name
  // c. vote property
// 3. Tracker object
  // 2. Counter to track clicks
  // 3. Randomizer
  // 5. Rendered list showing vote and click totals
  // 6. Button to show up after 15 clicks
  // 7. Reset button
  // 8. Error handling for event click (Optional... be nice.)

  //1. scaffold
  //2. object constructor (name, filepath votes >>[object,object])
//3. show 1 img
//4. show 1 random img//
//5. show 3 random images//
//6. show 3 different random images//
//7. click 1 img//
//8. match obj and increment vote//
//9.show 3 new images//


var usedImages = {};
var usedImagesCount = 0;

function displayImage(){

    var num = Math.floor(Math.random() * (imagesArray.length));
    if (!usedImages[num]){
        document.canvas.src = imagesArray[num];
        usedImages[num] = true;
        usedImagesCount++;
        if (usedImagesCount === imagesArray.length){
            usedImagesCount = 0;
            usedImages = {};
        }
    } else {
        displayImage();
    }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  randomIndex.push();
}

shuffleImages(arr) function, a renderImagesInPosition(position) function, and a decidePositionToRenderFunction
