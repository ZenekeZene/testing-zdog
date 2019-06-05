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
});

new Zdog.Ellipse({
	addTo: illo,
	diameter: 80,
	translate: { z: 40 },
	stroke: 20,
	color: '#636',
});

new Zdog.Rect({
	addTo: illo,
	width: 80,
	height: 80,
	translate: { z: -40 },
	stroke: 12,
	color: '#E62',
	fill: true,
});

function animate() {
	if (isSpinning) {
		illo.rotate.y += 0.03;
	}
	illo.updateRenderGraph();
	requestAnimationFrame(animate)
}
animate();