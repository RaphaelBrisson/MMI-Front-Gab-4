// Function from David Walsh: http://davidwalsh.name/css-animation-callback
function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

var transitionEvent = whichTransitionEvent();




$(document).ready(function() {
	


 		$('.hamburger').click(function() {
      $(this).toggleClass('clicdeux');
 			if($(this).hasClass('is-active') == false) {
        $('body').css('overflow', 'hidden');
 				$('.menu_js').css('transition-duration', '0.4s');
 				$(this).toggleClass('is-active');

 				$('.menu_js').toggleClass('active');
 			}
 			else {
 				$(this).toggleClass('is-active');
 				$('.menu_js').toggleClass('leave');
 				$('.menu_js').toggleClass('active');
        $('body').css('overflow', 'auto');
        //$('#spannn').css('transform', 'translate(-500px)');
        //$('#spannn').toggleClass('blur');
        //$('#spannn').toggleClass('blur2');
 				$('.menu_js').one(transitionEvent,
              function(leave) {
              	$('.menu_js').css('transition-duration', '0s');
  				$('.menu_js').removeClass('leave');
          //$('#spannn').toggleClass('blur');
          //$('#spannn').toggleClass('blur2');
  				});

 			}

 		});



});


$(document).ready(function() {
if (window.screen.width <= 480) {
  $('#shop_now2').css('display', 'block');
}
});


