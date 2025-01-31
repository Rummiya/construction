document.addEventListener('DOMContentLoaded', () => {
	// Header Mobile Start
	$('.humburger').on('click', function () {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$('.header-mobile-wrap').slideUp(500);
		} else {
			$(this).addClass('is-active');
			$('.header-mobile-wrap').slideDown(500);
		}
	});
	// Header Mobile End

	const bannerSwiper = new Swiper('.banner-swiper', {
		speed: 1000,
		spaceBetween: 0,
		navigation: {
			nextEl: '.banner-swiper .swiper-button-next',
			prevEl: '.banner-swiper .swiper-button-prev',
		},
		pagination: {
			el: '.banner-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	const reviewsSwiper = new Swiper('.reviews-swiper', {
		speed: 1000,
		spaceBetween: 20,
		slidesPerView: 3,
		autoHight: true,
		pagination: {
			el: '.reviews-swiper .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
			},
			// when window width is >= 480px
			575: {
				slidesPerView: 2,
			},
			// when window width is >= 640px
			995: {
				slidesPerView: 3,
			},
		},
	});

	$('.services-btn, .about-btn').magnificPopup({
		type: 'inline',
		showCloseBtn: false,
		callbacks: {
			beforeOpen: function () {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
		},
	});

	$('.modal-form-close').on('click', function () {
		$.magnificPopup.close();
	});

	$('.gallery-wrap a').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
		callbacks: {
			beforeOpen: function () {
				this.st.image.markup = this.st.image.markup.replace(
					'mfp-figure',
					'mfp-figure mfp-with-anim'
				);
				this.st.mainClass = this.st.el.attr('data-effect');
			},
		},
	});

	$('.gallery-btn a').on('click', function (e) {
		e.preventDefault();
		var galleryItem = $('.gallery-item');

		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			galleryItem.each(function () {
				if ($(this).hasClass('is-active')) {
					$(this).removeClass('is-active');
					$(this).slideUp();
				}
			});
		} else {
			$(this).addClass('is-active');
			galleryItem.each(function () {
				if (!$(this).is(':visible')) {
					$(this).addClass('is-active');
					$(this).slideDown();
				}
			});
		}
	});
});
