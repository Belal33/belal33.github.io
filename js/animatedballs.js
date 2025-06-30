const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);


class Ball {
	static curentWord
	constructor({ r, x, y, dx, dy, color, text, fontSize }) {
		this.radius = r || Math.random() * 20 + 10;
		this.x =
			x || Math.random() * (canvas.width - this.radius * 2) + this.radius;
		this.y =
			y || Math.random() * (canvas.height - this.radius * 2) + this.radius;
		this.dx = dx || (Math.random()-2 ) ;
		this.dy = dy || (Math.random()-2 ) ;
		this.color = color || this.getRandomColor();
		this.text =
			text || this.generateRandomText(); // 2-3 characters
		this.fontSize = fontSize || this.radius * 0.5;
		}

	getRandomColor() {
		const colors = [
			// Theme-matching colors (blue, purple, white, gray, accent)
			"#1A1A2E", // dark blue
			"#16213E", // deeper blue
			"#0F3460", // navy
			"#533483", // purple
			"#393E46", // dark gray
			"#00ADB5", // cyan accent
			"#222831"  // background gray
		];
		return colors[Math.floor(Math.random() * colors.length)];
	}
	generateRandomText(length = 3) {
		// words to atract the user to contact me
		const words =["B","E","L","A","L"];
		if (!Ball.curentWord) {
			Ball.curentWord = words[0];
		}else{
			Ball.curentWord = words[words.indexOf(Ball.curentWord)+1 % words.length];
		}
		console.log(Ball.curentWord);
		return Ball.curentWord;
		
	}

	update() {
		// Bounce off walls
		if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;
	}

	draw() {
		// Draw ball
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();

		// Draw text
		ctx.font = `${this.fontSize}px Arial bold `;
		ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(this.text, this.x, this.y);
	}
}

const balls = [];
const numberOfBalls =5;

for (let i = 0; i < numberOfBalls; i++) {

//  start the balls from right bottom
setTimeout(() => {
	
	balls.push(new Ball({fontSize:30,r:30,x:canvas.width-60,y:canvas.height-60}));
}, i * 1500);

}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let ball of balls) {
		ball.update();
		ball.draw();
	}

	requestAnimationFrame(animate);
}

// Start animation
animate();
