
const { animate, createDraggable, createAnimatable, spring, utils } = anime;

// Get elements
const him          = document.getElementById("him");
const himContainer = document.getElementById("him-container");


// Prepare Him for dragging
him.ondragstart = function() { return false; };


// Drag Him
const dragHim = createDraggable(him, {
	container: "#him-container",

	containerPadding: 10,
	containerFriction: 0.5,
	releaseStiffness: 80,
	releaseEase: "outElastic",

	// Feedback grab
	onGrab: () => {
		him.style.zIndex = 0;
		animate(him, {
			scale: 0.95,
			opacity: 0.60,
			duration: 200,
			ease: "outQuint"
		});
	},

	// Feedback release
	onRelease: () => {
		him.style.zIndex = 0;
		animate(him, {
			scale: 1.00,
			opacity: 1.00,
			duration: 200,
			ease: "outQuint"
		});
	}

});

// Show Him
animate(him, {

	scale: { from: 0 },
	rotate: { from: 1200 },
	duration: 1000,
	delay: 250,
	ease: "outSine"

});
him.style.opacity = 1;