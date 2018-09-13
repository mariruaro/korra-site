$(document).ready(function() {
	$('#fullpage').fullpage({
		css3:true,
		scrollingSpeed: 1000,
		anchors: ['home', 'history', 'carcters', 'seasons'],
		onLeave: function(index, newIndex, direction){
			console.log(index-1, newIndex-1, direction);
			$('#fullpage section').eq(newIndex-1).addClass('move');
			$('#fullpage section').eq(index-1).removeClass('move');
		}
	});

  	$().timelinr({
        orientation:  'vertical',
        issuesSpeed:  300,
        datesSpeed:   100,
        arrowKeys:    'true',
        startAt:      1
  	});
   
	$(document).on('click', '.fa-play', function(e){
		$(e.target).addClass("fa-pause");
		$(e.target).removeClass("fa-play");
		$('#music-audio').trigger("play");
	});

	$(document).on('click', '.fa-pause', function(e){
		$(e.target).addClass("fa-play");
		$(e.target).removeClass("fa-pause");
		$('#music-audio').trigger("pause");
	});

});