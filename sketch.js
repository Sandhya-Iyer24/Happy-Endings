let showSplash = true;
let showMap = false;
let showFrank1 = false;
let showTitanic1 = false;
let showRomeo1 = false;
let showMatch1 = false;
let showFrank2 = false;
let showTitanic2 = false;
let showRomeo2 = false;
let showMatch2 = false;
let objectX, objectY;
let final;
let dropped = false;
let Frankdone = false;
let Titanicdone = false;
let Romeodone = false;
let Matchdone = false;
let circleX, circleY;
let targetX, targetY;
let storyClickF = false;
let storyClickT = false;
let storyClickR = false;
let storyClickM = false;
let showAbout = false;

let circX, circY;
let dragging = false; 
let offsetX, offsetY; // Mouse offset when dragging

let radius; 
let circX2, circY2, radius2; 

function preload() {
  storyF = loadImage("Assets/storyF.png"); // Load the storyF image
  storyT = loadImage("Assets/storyT.png"); // Load the storyT image
  storyR = loadImage("Assets/storyR.png"); // Load the storyR image
  storyM = loadImage("Assets/storyM.png"); // Load the storyM image
  toolbar = loadImage("Assets/toolbar.png"); // Load the toolbar image
  splashScreen = loadImage("Assets/splash.png"); // Load the splash screen image
  map = loadImage("Assets/Map.jpg"); // Load the map image
  titles = loadImage("Assets/titles.png"); // Load the titles image
  frank = loadImage("Assets/Frank.PNG"); // Load the frankenstein image
  titanic = loadImage("Assets/Titanic.PNG"); // Load the titanic image
  romeo = loadImage("Assets/Romeo.PNG"); // Load the romeo and juliet image
  match = loadImage("Assets/Match.PNG"); // Load the little match girl image
  frankNew = loadImage("Assets/FrankNew.PNG"); // Load the frankenstein image after completion
  titanicNew = loadImage("Assets/titanicNew.PNG"); // Load the titanic image after completion
  romeoNew = loadImage("Assets/romeoNew.PNG"); // Load the romeo and juliet image after completion
  matchNew = loadImage("Assets/matchNew.PNG"); // Load the little match girk image after completion
  frank1 = loadImage("Assets/FrankSc1.JPG"); // Load the first frankenstein scene
  frank2 = loadImage("Assets/FrankSc2.JPG"); // Load the second frankenstein scene
  titanic1 = loadImage("Assets/TitanicSc1.JPG"); // Load the first titanic scene
  titanic2 = loadImage("Assets/TitanicSc2.JPG"); // Load the second titanic scene
  romeo1 = loadImage("Assets/RomeoSc1.JPG"); // Load the first romoe and juliet scene
  romeo2 = loadImage("Assets/RomeoSc2.JPG"); // Load the second romeo and juliet scene
  match1 = loadImage("Assets/MatchSc1.JPG"); // Load the first little match girl scene
  match2 = loadImage("Assets/MatchSc2.JPG"); // Load the second little match girl scene
  money = loadImage("Assets/Money.PNG"); // Load the draggable money icon
  letter = loadImage("Assets/Letter.PNG"); // Load the draggable letter icon
  girl = loadImage("Assets/GirlFrank.png"); // Load the draggable girl frankenstein icon
  ending = loadImage("Assets/ending.png"); // Load the ending scene image
  about = loadImage("Assets/about.png"); // Load the about scene image
  arrow = loadImage("Assets/arrow.png"); // Load the back arrow image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // setting initial values for the draggable icons vairable
  circX = height * 0.1;
  circY = width * 0.4;
  radius = (height * 0.1) / 2; 

  circX2 = width / 2;
  circY2 = height / 2;
  radius2 = (height * 0.1) / 2;
}

function draw() {
  if (showSplash) { //if on the splash screen
    image(splashScreen, 0, 0, windowWidth, windowWidth / 1.3); //show the splash sreen image

    if ( // if the start button is clicked
      mouseIsPressed &&
      mouseX > windowWidth * 0.31 &&
      mouseX < windowWidth * 0.67 
    ) {
      showSplash = false; // transition to the map screen
      showMap = true;
    }
  }
  if (showMap) { // if on the map screen
    image(map, 0, 0, windowWidth, windowWidth / 1.3); // show the map image

    if (!Frankdone) { // if the frankenstein story is not completed
      image(frank, 0, 0, windowWidth, windowWidth / 1.3); // show the original frankenstein icon
    } else { // if the frankenstein story is completed
      image(frankNew, 0, 0, windowWidth, windowWidth / 1.3); // show the new happy icon
    }
    if (!Titanicdone) { // if the titanic story is not completed
      image(titanic, 0, 0, windowWidth, windowWidth / 1.3); // show the original titanic icon
    } else { // if the titanic story is completed
      image(titanicNew, 0, 0, windowWidth, windowWidth / 1.3); // show the new happy icon
    }
    if (!Romeodone) { // if the romeo and juliet story is not completed
      image(romeo, 0, 0, windowWidth, windowWidth / 1.3); // show the original romeo and juliet icon
    } else { // if the romeo and juliet story is completed
      image(romeoNew, 0, 0, windowWidth, windowWidth / 1.3); // show the new happy icon
    }
    if (!Matchdone) { // if the little match girl story is not completed
      image(match, 0, 0, windowWidth, windowWidth / 1.3); // show the original little match girl ion
    } else { // if the little match girl story is completed
      image(matchNew, 0, 0, windowWidth, windowWidth / 1.3); // show the new happy icon
    }
    image(titles, 0, 0, windowWidth, windowWidth / 1.3); // show all text
  }

  if (showFrank1) { // if the first frankenstein scene is showing
    image(frank1, 0, 0, windowWidth, windowWidth / 1.3); // show the first frankenstein scene image
    image(
      toolbar,
      windowWidth * 0.22,
      windowHeight * -0.17,
      windowWidth * 0.45,
      windowWidth * 0.55
    ); // put the toolbar at the top

    if (!Frankdone) {
      fill(255, 50);
      circle(circX2, circY2, radius2 * 6);
      // transparent target circle
      fill(255, 0);
      noStroke();
      circle(circX, circY, radius * 2); // draggable circle with the image
      imageMode(CENTER);
      image(girl, circX, circY, windowWidth / 10, windowWidth / 5);
      imageMode(CORNER);
      // If dragging, update the position of the image to follow the mouse
      if (dragging) {
        circX = mouseX + offsetX;
        circY = mouseY + offsetY;
      }
      if (!storyClickF) { // if user clicks through story, stop showing it
        image(storyF, 0, 0, windowWidth, windowWidth / 1.3);
        if (
          mouseIsPressed &&
          mouseX > windowWidth * 0.31 &&
          mouseX < windowWidth * 0.67
        ) {
          storyClickF = true;
        }
      }
    } else { // transition to second scene when complete
      showFrank1 = false;
      showFrank2 = true;
    }
  }

  if (showTitanic1) {
    image(titanic1, 0, 0, windowWidth, windowWidth / 1.3); // show the first titanic scene
    if (!Titanicdone) {
      if ( // if the user clicks the button to complete the scene
        mouseIsPressed &&
        mouseX > windowWidth * 0.69 &&
        mouseX < windowWidth &&
        mouseY > windowHeight * 0.31 &&
        mouseY < windowHeight * 0.54
      ) { // transition to the second scene
        showTitanic1 = false;
        showTitanic2 = true;
        Titanicdone = true;
      }

      if (!storyClickT) { // if user clicks through story, stop showing it
        image(storyT, 0, 0, windowWidth, windowWidth / 1.3);
        if (
          mouseIsPressed &&
          mouseX > windowWidth * 0.31 &&
          mouseX < windowWidth * 0.67
        ) {
          storyClickT = true;
        }
      }
    }
  }

  if (showRomeo1) {
    image(romeo1, 0, 0, windowWidth, windowWidth / 1.3); // show the first romeo and juliet scene
    image( // put the toolbar at the top
      toolbar,
      windowWidth * 0.22,
      windowHeight * -0.09,
      windowWidth * 0.45,
      windowWidth * 0.35
    );

    if (!Romeodone) {
      fill(255, 50);
      circle(circX2, circY2, radius2 * 3); // transparent target circle

      fill(255, 0); 
      noStroke();
      circle(circX, circY, radius * 2); // draggable circle with the image
      imageMode(CENTER);
      image(letter, circX, circY, windowWidth * 0.2, windowWidth * 0.2);
      imageMode(CORNER);

      // If dragging, update the position of the image to follow the mouse
      if (dragging) {
        circX = mouseX + offsetX;
        circY = mouseY + offsetY;
      }
      if (!storyClickR) { // if user clicks through story, stop showing it
        image(storyR, 0, 0, windowWidth, windowWidth / 1.3);
        if (
          mouseIsPressed &&
          mouseX > windowWidth * 0.31 &&
          mouseX < windowWidth * 0.67
        ) {
          storyClickR = true;
        }
      }
    } else { // transition to second scene when complete
      showRomeo1 = false;
      showRomeo2 = true;
    }
  }

  if (showMatch1) {
    image(match1, 0, 0, windowWidth, windowWidth / 1.3); // show the little match girl first scene
    image( // put the toolbar at the top
      toolbar,
      windowWidth * 0.29,
      windowHeight * -0.12,
      windowWidth * 0.45,
      windowWidth * 0.4
    );

    if (!Matchdone) {
      fill(255, 50);
      circle(circX2, circY2, radius2 * 3); // transparent target circle

      fill(255, 0); 
      noStroke();
      circle(circX, circY, radius * 2); // draggable circle with the image
      imageMode(CENTER);
      image(money, circX, circY, windowWidth / 6, windowWidth / 4);
      imageMode(CORNER);

      // If dragging, update the position of the image to follow the mouse
      if (dragging) {
        circX = mouseX + offsetX;
        circY = mouseY + offsetY;
      }
      if (!storyClickM) { // if user clicks through story, stop showing it
        image(storyM, 0, 0, windowWidth, windowWidth / 1.3);
        if (
          mouseIsPressed &&
          mouseX > windowWidth * 0.31 &&
          mouseX < windowWidth * 0.67
        ) {
          storyClickM = true;
        }
      }
    } else { // transition to second scene when complete
      showMatch1 = false;
      showMatch2 = true;
    }
  }

  if (showFrank2) {
    image(frank2, 0, 0, windowWidth, windowWidth / 1.3); // show the second frankenstein scene
  }

  if (showTitanic2) {
    image(titanic2, 0, 0, windowWidth, windowWidth / 1.3);  // show the second titanic scene
  }

  if (showRomeo2) {
    image(romeo2, 0, 0, windowWidth, windowWidth / 1.3); // show the second romeo and juliet scene
  }

  if (showMatch2) {
    image(match2, 0, 0, windowWidth, windowWidth / 1.3);  // show the second little match girl scene
  }

  if (!showMap && !showSplash) { // back arrow button code
    fill(223, 215, 200);
    ellipse(
      windowWidth * 0.08,
      windowHeight * 0.06,
      windowWidth * 0.07,
      windowWidth * 0.07
    );
    image(
      arrow,
      windowWidth * 0.058,
      windowHeight * 0.034,
      windowWidth * 0.05,
      windowWidth * 0.05
    );
  }
  if (Frankdone && Romeodone && Matchdone && Titanicdone && showMap) { // if all stories are completed
    image(ending, 0, 0, windowWidth, windowWidth / 1.3); // show the ending scene

    if ( // if the restart button is clicked
      mouseIsPressed &&
      mouseX > windowWidth * 0.32 &&
      mouseX < windowWidth * 0.68 &&
      mouseY > windowWidth * 0.41 &&
      mouseY < windowWidth * 0.48
    ) {
      window.location.reload(); // reload the page
    }
    if ( // if the about button is clicked
      mouseIsPressed &&
      mouseX > windowWidth * 0.31 &&
      mouseX < windowWidth * 0.68 &&
      mouseY > windowWidth* 0.53 &&
      mouseY < windowWidth* 0.59
    ) {
      showAbout = true; // show the about scene
    }
    if (showAbout) { // if the about scene is showing
      image(about, 0, 0, windowWidth, windowWidth / 1.3); // show the about scene
      if ( // if the back button is clicked
        mouseIsPressed &&
        mouseX > windowWidth * 0.35 &&
        mouseX < windowWidth * 0.65
      ) {
        showAbout = false; // hide the about scene
      }
    }
  }
  /*fill(0);
  text(
    "x" + round((mouseX * 100) / windowWidth) + "%",
    windowWidth / 2,
    windowHeight / 2 + 150
  );
  text(
    "y" + round((mouseY * 100) / windowWidth) + "%",
    windowWidth / 2,
    windowHeight / 2 + 170
  ); */
}

function mousePressed() {
  if ( // if the user clicks on the frankenstein icon on the map
    !Frankdone &&
    showMap &&
    mouseX > 0 &&
    mouseX < windowWidth / 3 &&
    mouseY > 0 &&
    mouseY < windowHeight / 3
  ) { // transition to the first frankensteinscene
    showMap = false;
    showFrank1 = true;
    circX2 = windowWidth * 0.45;
    circY2 = windowWidth * 0.56;
    circX = windowWidth * 0.42;
    circY = windowWidth * 0.12;
  }
  if ( // back button code
    showFrank1 ||
    showRomeo1 ||
    showMatch1 ||
    showTitanic1 ||
    showFrank2 ||
    showRomeo2 ||
    showMatch2 ||
    showTitanic2
  ) {
    if (
      mouseX > windowWidth * 0.05 &&
      mouseX < windowWidth * 0.12 &&
      mouseY > windowHeight * 0.03 &&
      mouseY < windowHeight * 0.1
    ) {
      showFrank1 = false;
      showFrank2 = false;
      showRomeo1 = false;
      showRomeo2 = false;
      showMatch1 = false;
      showMatch2 = false;
      showTitanic1 = false;
      showTitanic2 = false;
      showMap = true;
    }
  }
  if ( // if the user clicks on the titanic icon on the map
    !Titanicdone &&
    showMap &&
    mouseX > windowWidth / 2 &&
    mouseX < windowWidth &&
    mouseY > 0 &&
    mouseY < windowHeight / 3
  ) { // transition to the first titanic scene
    showMap = false;
    showTitanic1 = true;
    circX2 = windowWidth * 0.35;
    circY2 = windowWidth * 0.45;
    circX = windowWidth / 2.5;
    circY = windowWidth * 0.1;
  }

  if ( // if the user clicks on the romeo and juliet icon on the map
    !Romeodone &&
    showMap &&
    mouseX > 0 &&
    mouseX < windowWidth / 3 &&
    mouseY > windowHeight / 3 &&
    mouseY < windowHeight
  ) { // transition to the first romeo and juliet scene
    showMap = false;
    showRomeo1 = true;
    circX2 = windowWidth * 0.36;
    circY2 = windowWidth * 0.54;
    circX = windowWidth * 0.44;
    circY = windowWidth * 0.1;
  }

  if ( // if the user clicks on the little match girl icon on the map
    !Matchdone &&
    showMap &&
    mouseX > windowWidth / 2 &&
    mouseX < windowWidth &&
    mouseY > windowHeight / 2 &&
    mouseY < windowHeight
  ) { // transition to the first little match girl scene
    showMap = false;
    showMatch1 = true;
    circX2 = windowWidth * 0.43;
    circY2 = windowWidth * 0.45;
    circX = windowWidth * 0.53;
    circY = windowWidth * 0.08;
  }
  if ( // drag and drop
    (!Frankdone || !Romeodone || !Matchdone || !Titanicdone) &&
    (showFrank1 || showRomeo1 || showMatch1 || showTitanic1)
  ) {
    // Check if the mouse is inside the circle area
    let d = dist(mouseX, mouseY, circX, circY);
    if (d < radius) {
      dragging = true;
      // Calculate the offset to keep the image position relative to where it was clicked
      offsetX = circX - mouseX;
      offsetY = circY - mouseY;
    }
  }
}

// When mouse is released
function mouseReleased() {
  if (showFrank1) {
    dragging = false;

    // Check if the object is dropped on the big circle
    let d = dist(circX, circY, circX2, circY2);
    if (d < radius2 * 2) {
      Frankdone = true;
    } else {
      Frankdone = false;
    }
  }
  if (showRomeo1) {
    dragging = false;

    // Check if the object is dropped on the big circle
    let d = dist(circX, circY, circX2, circY2);
    if (d < radius2 * 2) {
      Romeodone = true;
    } else {
      Romeodone = false;
    }
  }
  if (showMatch1) {
    dragging = false;

    // Check if the object is dropped on the big circle
    let d = dist(circX, circY, circX2, circY2);
    if (d < radius2 * 2) {
      Matchdone = true;
    } else {
      Matchdone = false;
    }
  }
  if (showTitanic1) {
    dragging = false;

    // Check if the object is dropped on the big circle
    let d = dist(circX, circY, circX2, circY2);
    if (d < radius2 * 2) {
      Titanicdone = true;
    } else {
      Titanicdone = false;
    }
  }
}
