
// var mr = 0.10;

class Bubble {
	// crée une bulle, si couleurR = -1, on définit une couleur au hasard
	constructor(x, y, rayon, couleurR =-1, couleurG, couleurB){
		this.x = x;
		this.y = y;

		// On définit la vitesse au hasard
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

	// cette méthode indique si un point x,y est dans la bulle
	xyDansLaBulle(x,y)
	{
		if ( dist(x,y,this.x, this.y ) < this.rayon)
			return true;
		else
			return false;
	}

	// Cette méthode dessine une bulle
	show ()
	{
	//	stroke(color(this.couleurR,this.couleurG,this.couleurB ));
		strokeWeight(4);
		smooth();
		fill(this.couleurR, this.couleurG, this.couleurB, 128);
		ellipse(this.x, this.y, this.rayon *2);
	}

	// cette méthode applique un mouvement à une bulle d'après sa position et sa vitesse
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

// Cette fonction détruit les bulles qui sont sous un point
function popBubble(x,y)
{
	for (let i = 0; i < bubbles.length; i++)
	{
		if (bubbles[i].xyDansLaBulle(x,y))
			bubbles.splice(i,1);
	}
}