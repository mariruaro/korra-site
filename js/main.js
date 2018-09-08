$(document).ready(function() {
	$('#fullpage').fullpage({
		css3:true,
		scrollingSpeed: 1000,
		anchors: ['home', 'history', '3rdPage'],
		onLeave: function(index, newIndex, direction){
			console.log(index-1, newIndex-1, direction);
			$('#fullpage section').eq(newIndex-1).addClass('move');
			$('#fullpage section').eq(index-1).removeClass('move');
		}
	});


});