
let bubbles = [];
let poping = 0;

function setup() {
  createCanvas(1200 , 608);
  for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(height);
    bubbles[i] = new Bubble(x, y , 20 + random(50) );
  }
 //  debug = createCheckbox();
}

// On peut faire disparaitre les bulles en cliquant dessus
function mousePressed() {
    // On essaye de claquer une bulle
	popBubble( mouseX, mouseY);
}

// On fait aparaitre 5 bulles par secondes (200 ms) tant que la souris est appuyée
function mouseDragged() {
    if (poping==0)
	    poping = window.setInterval("bubbles.push(new Bubble(mouseX, mouseY , 20 + random(50 )))",200) ;
}

// Quand on lâche souris, on stoppe l'apparition des bulles
function mouseReleased() {
	clearInterval(poping);
    poping = 0;
}

function draw() {
  background(0);
	for (let bubble of bubbles){
		bubble.move();
		bubble.show();
	}
    textSize(22);
    s = bubbles.length + " bulles.";
    fill(150,0,0);
    text(s, width - 150, height - 50, 150, 50);
  }

/*
function preloadUpdate() {
    preloadCount++;
    if (preloadCount === PRELOADTOTAL)
        launchGame();
}
*/