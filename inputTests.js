init = function() {
	ctx.init()
	mouse = new _mouse()
	keyboard = new _keyboard()
	

	loop();
}

update = function() {
	
}

draw = function() {
	ctx.clearScreen()
	ctx.setColor("white")
	ctx.strokeRect(mouse.location.x-1,mouse.location.y-1,3,3)
	if (mouse.dragging) {
		ctx.beginPath();
		ctx.moveTo(mouse.dragLocations[0].x,mouse.dragLocations[0].y);
		for (var i=1;i<mouse.dragLocations.length;i++) {
			ctx.lineTo(mouse.dragLocations[i].x,mouse.dragLocations[i].y);
		}
		ctx.stroke()
	}
	
	if (keyboard.keys.length) {
		ctx.fillText("Active keys: " +(keyboard.keys.reduce(
			function(acc,v){
				if (v.state) return acc+(acc==""?"":",")+v.key;
				return acc
			},"")
		),100,100)
	}
}

loop = function() {
	requestAnimationFrame(loop)
	update()
	draw()
}

window.onload = init;
