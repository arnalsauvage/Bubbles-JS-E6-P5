
var mr = 0.10;

class Bubble {
	constructor(x, y, rayon, couleurR =-1, couleurG, couleurB){
		this.x = x;
		this.y = y;
		
		this.mvx = random (-10,10);
		this.mvy = random (-10,10);
		
		this.rayon = rayon;
		if (couleurR===-1){
			this.couleurR = random(255);
			this.couleurG = random(255);
			this.couleurB = random(255);
		}
		else
		{
			this.couleurR = couleurR;
			this.couleurG = couleurG;
			this.couleurB = couleurB;
		}
	}
	
	xyDansLaBulle(x,y)
	{
		if ( dist(x,y,this.x, this.y ) < this.rayon)
			return true;
		else
			return false;
	}
	
	show ()
	{
	//	stroke(color(this.couleurR,this.couleurG,this.couleurB ));
		strokeWeight(4);
		smooth();
		fill(this.couleurR, this.couleurG, this.couleurB, 128);
		ellipse(this.x, this.y, this.rayon *2);
	}
	
	move() {
		this.x += this.mvx;
		this.y += this.mvy;
		
		if (this.x < this.rayon){
			this.mvx = -this.mvx;
			this.x = this.rayon;
		}
		if (this.y < this.rayon){
			this.mvy = -this.mvy;
			this.y = this.rayon;
		}
		if (this.x > width - this.rayon){
			this.mvx = -this.mvx;
			this.x = width - this.rayon;
		}
		if (this.y > height - this.rayon){
			this.mvy = -this.mvy;
			this.y = height - this.rayon;
		}
	}
}

function popBubble(x,y)
{
	for (let i = 0; i < bubbles.length; i++)
	{
		if (bubbles[i].xyDansLaBulle(x,y))
			bubbles.splice(i,1);
	}
}