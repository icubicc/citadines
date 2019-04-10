/* This file contains main script for website
 * Style related scripts is located in style.js
 */
/* global document jQuery */

// initialize when document is ready
jQuery(document).ready(function($) {

	// initialize Flickity
	var $slider = $('.js-slider').find('.slides').flickity({
		imagesLoaded: true,
		pageDots: false
	});

	var sliderFlick = $slider.data('flickity');
	var $sliderNav = $slider.siblings('.slides-nav');
	var $sliderNavButton = $sliderNav.find('.bullet');

	$slider.on('cellSelect', function() {
		$sliderNavButton.filter('.is-selected').removeClass('is-selected');
		$sliderNavButton.eq(sliderFlick.selectedIndex).addClass('is-selected');
	});

	$sliderNav.on('click', '.bullet', function(e) {
		var index = $(this).index();
		$slider.flickity('select', index);
		e.preventDefault();
	});

	// initialize magnificPopup
	$('.js-popup-link').magnificPopup({
		type: 'inline',
		mainClass: 'mfp-animation',
		removalDelay: 200,
		callbacks: {
			open: function() {

				$('body').addClass('mfp-inline-toggled');

				var project_status_slider = $('.js-project-status-slider').find('.slides').flickity({
					draggable: 0,
					imagesLoaded: true,
					selectedAttraction: 0.015,
					pageDots: false,
					arrowShape: 'M98 50.25c0 2.761-2.239 5-5 5h-72.951l22.657 22.719c1.95 1.956 1.946 5.121-.009 7.071-.976.974-2.254 1.46-3.531 1.46-1.281 0-2.564-.49-3.54-1.469l-31.166-31.25c-1.946-1.952-1.946-5.11 0-7.062l31.166-31.25c1.95-1.955 5.115-1.959 7.071-.009 1.955 1.95 1.959 5.115.009 7.071l-22.657 22.719h72.951c2.761 0 5 2.239 5 5'
				});

				$('.js-popup-link').click(function() {
					var sliderIndex = $(this).parent('.slide').index();
					project_status_slider.flickity( 'select', sliderIndex );
					console.log(sliderIndex);
				});

				$.magnificPopup.instance.close = function () {

						$('body').removeClass('mfp-inline-toggled');

						$.magnificPopup.proto.close.call(this);
				};

			}
		}
	});

	$('.js-popup-image').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.mfp-custom-close').click(function() {
		$.magnificPopup.close();
	});

	$('.mobile-nav-close').click(function() {
		$('body').click();
	});

	$('.mobile-lang-select').click(function() {
		if($('.site-lang').hasClass('is-mobile-toggled')) {
			$('.site-lang').removeClass('is-mobile-toggled');
		}
		else {
			$('.site-lang').addClass('is-mobile-toggled');
		}
	});

	$(".site-container").mouseup(function(e)
	{
			var subject = $("#lang-list");
			var sunjectHeadDrop = $("#head-list-dropdown");

			// if the target of the click isn't the container nor a descendant of the container
			if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
			{
				$('.site-lang').removeClass('is-mobile-toggled');
			}

			if(e.target.id != sunjectHeadDrop.attr('id') && !sunjectHeadDrop.has(e.target).length)
			{
				$('.head-dropdown').removeClass('is-toggled');
			}
	});

	function homeSliderPos() {
		var header = $('.site-header');
		var headerHeigth = header.height();
		var homeSlider = $('.home-slider');

		homeSlider.css('margin-top', -headerHeigth-39);
	}
	homeSliderPos();

	$('.js-home-slider').find('.slides').flickity({
		autoPlay: 4000,
		draggable: 0,
		imagesLoaded: true,
		prevNextButtons: false,
		selectedAttraction: 0.015,
		wrapAround: true
	});

	var $sectionSlider = $('.js-section-slider').find('.slides').flickity({
		draggable: 0,
		imagesLoaded: true,
		prevNextButtons: false,
		selectedAttraction: 0.015,
		pageDots: false,
		wrapAround: true
	});

	$('.js-section-slider .slider-nav .left').on( 'click', function() {
		$sectionSlider.flickity('previous');
	});
	// next
	$('.js-section-slider .slider-nav .right').on( 'click', function() {
		$sectionSlider.flickity('next');
	});

	$('.js-section-grid-slider').find('.slides').flickity({
		contain: true,
		groupCells: true,
		imagesLoaded: true,
		pageDots: false,
		arrowShape: 'M98 50.25c0 2.761-2.239 5-5 5h-72.951l22.657 22.719c1.95 1.956 1.946 5.121-.009 7.071-.976.974-2.254 1.46-3.531 1.46-1.281 0-2.564-.49-3.54-1.469l-31.166-31.25c-1.946-1.952-1.946-5.11 0-7.062l31.166-31.25c1.95-1.955 5.115-1.959 7.071-.009 1.955 1.95 1.959 5.115.009 7.071l-22.657 22.719h72.951c2.761 0 5 2.239 5 5'
	});

	var grid_slide_count = $('.js-section-grid-slider .slides .slide').length;
	if(grid_slide_count <= 3 ) {
		$('.flickity-prev-next-button').addClass('is-hidden');
	}
	else {
		$('.flickity-prev-next-button').removeClass('is-hidden');
	}

	$('.head-dropdown .toggle-open').click(function() {
		var parent = $('.head-dropdown');

		parent.addClass('is-toggled');

	});

	$('.head-dropdown .toggle-close').click(function() {
		var parent = $('.head-dropdown');

		parent.removeClass('is-toggled');
	});

	var $eventSlider = new Flickity( '.js-event-slider .slides', {
		contain: true,
		groupCells: true,
		imagesLoaded: true,
		pageDots: false,
		prevNextButtons: false,
	});

	$('.event-slider-nav .left').on( 'click', function() {
		$eventSlider.previous();
	});
	// next
	$('.event-slider-nav .right').on( 'click', function() {
		$eventSlider.next();
	});

	$eventSlider.on( 'select', function() {
		var target = $eventSlider.selectedCell.target;
		if ( target == $eventSlider.cells[0].target ) {
			$('.event-slider-nav .right').removeClass('is-disabled');
			$('.event-slider-nav .left').addClass('is-disabled');
		} else if ( target == $eventSlider.getLastCell().target ) {
			$('.event-slider-nav .left').removeClass('is-disabled');
			$('.event-slider-nav .right').addClass('is-disabled');
		}
		else {
			$('.event-slider-nav .right').removeClass('is-disabled');
			$('.event-slider-nav .left').removeClass('is-disabled');
		}
	});

	$('.units-list .units-slider').each(function(key,val) {
		var index = key + 1;
		var slider = $('.units-list .units-slider.units-slider-' + index).find('.slides');
		var sliderNav = $('.units-slider.units-slider-' + index).find('.units-slider-bullets');

		slider.flickity({
			draggable: 0,
			imagesLoaded: true,
			prevNextButtons: false,
			selectedAttraction: 0.015,
			pageDots: false,
			wrapAround: true
		});

		sliderNav.flickity({
			asNavFor: '.units-list .units-slider.units-slider-' + index +' .slides',
			cellAlign: 'left',
			draggable: 0,
			imagesLoaded: true,
			groupCells: true,
			pageDots: false,
			prevNextButtons: false,
		});

		$('.units-slider-' + index + ' .units-slider-nav-arrow .left').on( 'click', function() {
			slider.flickity('previous');
		});
		// next
		$('.units-slider-' + index + ' .units-slider-nav-arrow .right').on( 'click', function() {
			slider.flickity('next');
		});

		slider.on( 'select.flickity', function() {
			var flkty = slider.data('flickity');

			if((flkty.selectedIndex+1) == flkty.slides.length) {
				sliderNav.flickity( 'select', 0 );
			}
			else {
				sliderNav.flickity( 'select', flkty.selectedIndex+1 );
			}
		});

		index++;
	});

	var sliderUnitDetail = $('.units-detail-slider').find('.slides').flickity({
		draggable: 0,
		imagesLoaded: true,
		prevNextButtons: false,
		selectedAttraction: 0.015,
		pageDots: false,
		wrapAround: true
	});

	var sliderUnitDetailNav = $('.units-detail-slider-nav').find('.units-detail-slider-bullets').flickity({
		asNavFor: '.units-detail-slider .slides',
		cellAlign: 'left',
		draggable: 0,
		imagesLoaded: true,
		groupCells: true,
		pageDots: false,
		prevNextButtons: false,
	});

	$('.units-detail-slider-nav .units-detail-slider-nav-arrow .left').on( 'click', function() {
		sliderUnitDetail.flickity('previous');
	});
	// next
	$('.units-detail-slider-nav .units-detail-slider-nav-arrow .right').on( 'click', function() {
		sliderUnitDetail.flickity('next');
	});

	sliderUnitDetail.on( 'select.flickity', function() {
		var flktyD = sliderUnitDetail.data('flickity');

		if((flktyD.selectedIndex+1) == flktyD.slides.length) {
			sliderUnitDetailNav.flickity( 'select', 0 );
		}
		else {
			sliderUnitDetailNav.flickity( 'select', flktyD.selectedIndex+1 );
		}
	});

	var galleryDirArrow = $('.js-popup-gallery').data('dir-arrow');

	$('.js-popup-gallery').magnificPopup({
		delegate: '.link',
		gallery: {
			arrowMarkup: '<button class="popup-arrow mfp-arrow popup-arrow-%dir% mfp-arrow-%dir%"><svg class="icon" role="img"><use xlink:href="' + galleryDirArrow + '" /></svg></button>',
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1],
			tCounter: ''
		},
		image: {
			tError: 'Image could not be loaded.'
		},
		type: 'image',
		mainClass: 'mfp-animation',
		closeMarkup: '<button class="popup-close mfp-close mfp-close-show">close</button>',
		tLoading: 'Loading image...'
	});

	$('.toggle-inquiry').on('click', function() {
		var form = $('.inquiry-popup');
		var $body = $('body');

		form.addClass('is-toggled');
		$body.css('overflow', 'hidden');

		return false;
	});

	$('.inquiry-close').on('click', function() {
		var form = $('.inquiry-popup');
		var $body = $('body');

		form.removeClass('is-toggled');
		$body.css('overflow', 'auto');

		return false;
	});

	$('.sidebar-selected').on('click', function() {
		var sidebar = $('.sidebar-nav');

		if(sidebar.hasClass('is-toggled')) {
			sidebar.slideUp('200');
			sidebar.removeClass('is-toggled');
		}
		else {
			sidebar.slideDown('200');
			sidebar.addClass('is-toggled');
		}
	});

	$('.facility-list').find('.slides').flickity({
		contain: true,
		groupCells: true,
		imagesLoaded: true,
		prevNextButtons: false
	});

	function siteAsideTop() {
		var header_height = $('body').find('.site-header').height();
		var $body = $('body');
		$('#main-aside .sticky-aside').css('top', header_height);
	}

	$(window).on('load', function() {
		siteAsideTop();

		$('#mnsry_container').masonry();

		var $params = {
			itemSelector: ".gallery-item",
			filtersGroupSelector:".gallery-filter .list",
		// Uncomment below to set the selectorType to use <ul> instead of inputs
		 	selectorType: "list"
		};

		$('#mnsry_container').multipleFilterMasonry($params);
	});

	$(window).on('resize', function(){
		siteAsideTop();
	});

});
