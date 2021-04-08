init = function() {
	ctx.init()

	

	loop();
}

update = function() {
	
}

draw = function() {

}

loop = function() {
	requestAnimationFrame(loop)
	update()
	draw()
}

window.onload = init;
