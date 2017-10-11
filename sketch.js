
let bubbles = [];
let poping = 0;

function setup() {
  createCanvas(1200 , 608);
  for (let i = 0; i < 15; i++) {
    let x = random(width);
    let y = random(height);
    bubbles[i] = new Bubble(x, y , 20 + random(50) );
  }
  debug = createCheckbox();
}

function mousePressed() {
	popBubble( mouseX, mouseY)
	poping = window.setInterval("bubbles.push(new Bubble(mouseX, mouseY , 20 + random(50 )))",200) ;
}


function mouseDragged() {
//	window.setInterval(bubbles.push(new Bubble(mouseX, mouseY , 20 + random(50 ))),500) ;
 // bubbles.push(new Bubble(mouseX, mouseY , 20 + random(50 )));
}


function mouseReleased() {
	clearInterval(poping);
 // bubbles.push(new Bubble(mouseX, mouseY , 20 + random(50 )));
}

function draw() {
  background(0);
	for (let bubble of bubbles){
		bubble.move();
		bubble.show();
	}

  }

/*
function preloadUpdate() {
    preloadCount++;
    if (preloadCount === PRELOADTOTAL)
        launchGame();
}
*/