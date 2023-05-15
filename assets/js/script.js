// head	er fixed on scroll
$(function() {
	var header = $(".start-style");
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		if (scroll >= 10) {
			header.removeClass('start-style').addClass("scroll-on");
		} else {
			header.removeClass("scroll-on").addClass('start-style');
		}
	});
});		

$('.tools .owl-carousel').owlCarousel({
	loop:false,
	margin: 20,
	nav:false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
});

$('#owl-tools').owlCarousel({
	loop:false,
	margin: 20,
	nav:false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
});

$('#owl-stay-up').owlCarousel({
	loop:false,
	margin: 20,
	nav:false,
	responsive:{
		0:{
			items:1.2
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
});


$('#article-owl-stay-up').owlCarousel({
	loop:false,
	margin: 20,
	nav:false,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:2
		},
		1000:{
			items:3
		}
	}
});

$(window).resize(function() {
  var width = $(window).width();
   if (width < 992){
  	$(".big-column-mobile-drop .accordion").attr("id","#faq");
  }else{
	$('#faq').removeAttr('id');
}});



// mobile-menu
  $(".continents-mobile").addClass('d-none');
  $(".countries-mobile").addClass('d-none');
  $(".city-mobile").addClass('d-none');

  $(".default-menu-mobile li.dropdown-mobile").click(function(){
    $(".default-menu-mobile").addClass("d-none");
    $(".continents-mobile").removeClass("d-none");
  	$(".header-mobile-title").addClass("header-mobile-bg");
  	$(".navbar-brand-back").removeClass('d-none');
  	$(".navbar-brand").addClass('d-none');
  });
  $(".continents-mobile li").click(function(){
    $(".continents-mobile").addClass("d-none");
    $(".countries-mobile").removeClass("d-none");
  	$(".header-mobile-title").addClass("header-mobile-bg");		    
  	$(".navbar-brand-back").removeClass('d-none');
  	$(".navbar-brand").addClass('d-none');
  });
  $(".countries-mobile li").click(function(){
    $(".countries-mobile").addClass("d-none");
    $(".city-mobile").removeClass("d-none");
  	$(".header-mobile-title").addClass("header-mobile-bg");		    		  	
  	$(".navbar-brand-back").removeClass('d-none');
  	$(".navbar-brand").addClass('d-none');
  });
  $(".city-mobile li").click(function(){;
    $(".city-mobile").addClass("d-none");
    $(".default-menu-mobile").removeClass("d-none");
   	$(".header-mobile-title").removeClass("header-mobile-bg")
   	$(".navbar-brand-back").addClass('d-none');
	$(".navbar-brand-back").addClass('d-none');	
	$(".navbar-brand").removeClass('d-none');
  });		  
  $(".navbar-brand-back").click(function(){
	  $(".continents-mobile").addClass('d-none');
	  $(".countries-mobile").addClass('d-none');
	  $(".city-mobile").addClass('d-none');
	  $(".navbar-brand-back").addClass('d-none');	
	  $(".default-menu-mobile").removeClass("d-none");	  	
	  $(".navbar-brand").removeClass('d-none');
	  $(".header-mobile-title").removeClass("header-mobile-bg")
	});
  $(".navbar-toggler").click(function(){
	  $(".continents-mobile").addClass('d-none');
	  $(".countries-mobile").addClass('d-none');
	  $(".city-mobile").addClass('d-none');
	  $(".navbar-brand-back").addClass('d-none');	
	  $(".default-menu-mobile").removeClass("d-none");	  	
	  $(".navbar-brand").removeClass('d-none');
	  $(".header-mobile-title").removeClass("header-mobile-bg")
  });

// select2-dropdown
try {
    var selectSimple = $('.js-select-simple');

    selectSimple.each(function () {
        var that = $(this);
        var selectBox = that.find('select');
        var selectDropdown = that.find('.select-dropdown');
        selectBox.select2({
            dropdownParent: selectDropdown
        });
    });

} catch (err) {
    console.log(err);
}