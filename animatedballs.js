const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function generateRandomText(length = 3) {
	const characters = "BELAL ELBANNA";
	let result = "";
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

class Ball {
	constructor(r,x,y,dx,dy,color,text) {
		this.radius = r || Math.random() * 20 + 10;
		this.x = x || Math.random() * (canvas.width - this.radius * 2) + this.radius;
		this.y = y || Math.random() * (canvas.height - this.radius * 2) + this.radius;
		this.dx = dx || (Math.random() - 0.5) * 8;
		this.dy = dy || (Math.random() - 0.5) * 8;
		this.color = color || this.getRandomColor();
		this.text = text || this.generateRandomText(Math.floor(Math.random() * 2 + 2)); // 2-3 characters
	}

	getRandomColor() {
		const colors = [
			"#FF6B6B",
			"#4ECDC4",
			"#45B7D1",
			"#96CEB4",
			"#FFEEAD",
			"#FF9999",
		];
		return colors[Math.floor(Math.random() * colors.length)];
	}
	generateRandomText(length = 3) {
		const characters = "BELAL ELBANNA";
		let result = "";
		for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return result;
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
		ctx.font = `${this.radius * 0.5}px Arial`;
		ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText(this.text, this.x, this.y);
	}
}

const balls = [];
const numberOfBalls = 20;

for (let i = 0; i < numberOfBalls; i++) {
	balls.push(new Ball());
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
