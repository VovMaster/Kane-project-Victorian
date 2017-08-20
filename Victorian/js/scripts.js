$(document).ready(function(){
	var windowWidth = $(window).width();
	var bgPosition = -1*(92 / (1920 - 1280)  ) * (windowWidth - 1280);
	// var bgPosition = -1*(140 / (1920 - 1280)  ) * (windowWidth - 1280);
	$('.top-page').addClass('top-page-show').css('background-position', '0 ' + bgPosition + 'px');




	var $grid = $('.grid').isotope({ filter: '*' });
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$('.filter-button-group button').removeClass('is-checked');
		$(this).addClass('is-checked');
		$grid.isotope({ filter: filterValue });
	});
	setTimeout(function() {
		$grid.isotope({ filter: '*' });
	}, 300)


});


