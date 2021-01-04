$(document).ready(function() {

	$("#play").click(function() {
		playvideo();
	});


	function playvideo() {
	  var player = $('video')[0];
	  player.play();
		// $('#play').hide();
		$('#play').addClass("blur");
	}
});