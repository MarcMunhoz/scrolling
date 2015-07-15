$(document).ready(function() {    
	if ($('.content').height() > $('#wrap').height()) {
		$("#down").hover(function () {
			animateContent("down"); // Scrolls down the div content
		}, function() { $('.content').stop(); }); // Stop it when mouse out

		$("#up").hover(function () {
			animateContent("up");// Scrolls up the div content
		}, function() { $('.content').stop(); }); // Stop it when mouse out
	}
});

function animateContent(direction) {  
	var animationOffset = $('#wrap').height() - $('.content').height();
	if (direction == 'up') {
		animationOffset = 0; // Prevents margin-top when scrolling up
	}

	$('.content').animate({ "marginTop": animationOffset + "px" }, 3500); // Sets animation speed
}