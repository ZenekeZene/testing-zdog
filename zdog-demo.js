let isSpinning = true;

let illo = new Zdog.Illustration({
	element: '.zdog-canvas',
	zoom: 1.2,
	dragRotate: true,
	onDragStart: function() {
		isSpinning = false;
	},
	onDragEnd: function() {
		isSpinning = true;
	},
	rotate: { y: 60 },
});

const head = new Zdog.Shape({
	addTo: illo,
	stroke: 80,
	color: '#CCC',
});

const eye = new Zdog.Ellipse({
	addTo: head,
	stroke: 50,
	color: '#C25',
	translate: { x: 0, z: -20 },
});

const eye2 = eye.copy({
	stroke: 30,
	color: '#000',
	translate: { x: 0, y: 0, z: -20 },
});

let light = new Zdog.Shape({
	addTo: eye2,
	rotate: { z: -Zdog.TAU/4, y: 0, x: -Zdog.TAU },
	translate: { x: -9, y: -15, z: -20 },
	stroke: 12,
	color: '#FFF',
});

new Zdog.Hemisphere({
	addTo: head,
	diameter: 46,
	rotate: { z: -Zdog.TAU/4, y: 0, x: 20 },
	translate: { y: -30, z: 14 },
	stroke: 44,
	color: '#EA0',
});

let roundedRect = new Zdog.RoundedRect({
	addTo: illo,
	width: 20,
	height: 40,
	cornerRadius: 30,
	stroke: 60,
	color: '#EA0',
	fill: true,
	translate: { y: 80, z: 14 },
	rotate: { z: Zdog.TAU, y: 0, x: 0 },
});

const abs = new Zdog.Shape({
	addTo: illo,
	stroke: 80,
	color: '#EA0',
	translate: { y: 100, z: 14 },
});

let mouth = new Zdog.Ellipse({
	addTo: head,
	diameter: 30,
	quarters: 1,
	stroke: 6,
	color: '#C25',
	translate: { y: 18, z: -30 },
	rotate: { z: -10, y: 0, x: 0 },
});

new Zdog.Shape({
	addTo: head,
	path: [
		{ x: -30, y: -30 },   // start
		{ bezier: [
			{ x:  10, y: -30 }, // start control point
			{ x:  10, y:  30 }, // end control point
			{ x:  30, y:  30 }, // end point
		]},
	],
	closed: false,
	stroke: 10,
	color: '#000'
});

function animate() {
	if (isSpinning) {
		//illo.rotate.y += 0.03;
	}
	illo.updateRenderGraph();
	requestAnimationFrame(animate);
}
animate();