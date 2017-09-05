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
	}, 300);


    $('[data-modal]').click(function(){
    	var hreModal = $(this).attr('href');
    	$('.wrap-modal').removeClass('show-modal');
    	$(hreModal).addClass('show-modal');
    	return false
    });

    $('.modal-close').click(function(){
    	$('.wrap-modal').removeClass('show-modal');
    });


	$('.fade').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});

	$('.slider-quote').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  cssEase: 'linear'
	});


	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.slider-nav'

	});
	$('.slider-nav').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  focusOnSelect: true
	});

    $('.slider-blocks-wrap').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]

	});

    $('.slider-js').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]

	});

    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 425 ],
    });


    $( "#slider-range2" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 350, 480 ],
    });

    $( "#slider-range3" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 425 ],
    });


    $( "#slider-range4" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 350, 480 ],
    });



});


