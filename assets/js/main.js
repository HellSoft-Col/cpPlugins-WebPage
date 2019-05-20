/*
	Transitive by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
$("a[href^='#']").click(function (e) {
	e.preventDefault();

	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */);
});

(function ($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function () {

		let $window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Header.
		if (skel.vars.IEVersion < 9)
			$header.removeClass('alt');

		if ($banner.length > 0 &&
			$header.hasClass('alt')) {

			$window.on('resize', function () {
				$window.trigger('scroll');
			});

			$banner.scrollex({
				bottom: $header.outerHeight(),
				terminate: function () {
					$header.removeClass('alt');
				},
				enter: function () {
					$header.addClass('alt');
				},
				leave: function () {
					$header.removeClass('alt');
					$header.addClass('reveal');
				}
			});

		}

		// Banner.

		if ($banner.length > 0) {

			// IE fix.
			if (skel.vars.IEVersion < 12) {

				$window.on('resize', function () {

					let wh = $window.height() * 0.60,
						bh = $banner.height();

					$banner.css('height', 'auto');

					window.setTimeout(function () {

						if (bh < wh)
							$banner.css('height', wh + 'px');

					}, 0);

				});

				$window.on('load', function () {
					$window.triggerHandler('resize');
				});

			}

			// Video check.
			let video = $banner.data('video');

			if (video)
				$window.on('load.banner', function () {

					// Disable banner load event (so it doesn't fire again).
					$window.off('load.banner');

					// Append video if supported.
					if (!skel.vars.mobile &&
						!skel.breakpoint('large').active &&
						skel.vars.IEVersion > 9)
						$banner.append('<video autoplay loop><source src="' + video + '.mp4" type="video/mp4" /><source src="' + video + '.webm" type="video/webm" /></video>');

				});

			// More button.
			$banner.find('.more')
				.addClass('scrolly');

		}

		// Scrolly.
		if ($(".scrolly").length) {

			let $height = $('#header').height() * 0.95;

			$('.scrolly').scrolly({
				offset: $height
			});
		}

		// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

	});

})(jQuery);

function showEstudiantes() {
	let butt_estudiantes = document.getElementById("butt_estudiantes");
	let butt_profesores = document.getElementById("butt_profesores");

	butt_estudiantes.classList.add("active");
	butt_profesores.classList.remove("active");

	let x = document.getElementById("profesores");
	x.style.display = "none";
	$("#estudiantes").fadeIn("slow");
}

function showProfesores() {
	let butt_estudiantes = document.getElementById("butt_estudiantes");
	let butt_profesores = document.getElementById("butt_profesores");

	butt_estudiantes.classList.remove("active");
	butt_profesores.classList.add("active");

	let x = document.getElementById("estudiantes");
	x.style.display = "none";
	$("#profesores").fadeIn("slow");
}

function showPlaneacion() {
	let butt_planeacion = document.getElementById("butt_planeacion");
	let butt_anexos = document.getElementById("butt_anexos");
	let butt_codigofuente = document.getElementById("butt_codigofuente");

	butt_planeacion.classList.add("active");
	butt_anexos.classList.remove("active");
	butt_codigofuente.classList.remove("active");

	let x = document.getElementById("anexos");
	x.style.display = "none";
	let y = document.getElementById("codigo");
	y.style.display = "none";
	$("#planeacion").fadeIn("slow");
}

function showAnexos() {
	let butt_planeacion = document.getElementById("butt_planeacion");
	let butt_anexos = document.getElementById("butt_anexos");
	let butt_codigofuente = document.getElementById("butt_codigofuente");

	butt_planeacion.classList.remove("active");
	butt_anexos.classList.add("active");
	butt_codigofuente.classList.remove("active");

	let x = document.getElementById("planeacion");
	x.style.display = "none";
	let y = document.getElementById("codigo");
	y.style.display = "none";
	$("#anexos").fadeIn("slow");
	showSPMP();
}

function showCodigo() {
	let butt_planeacion = document.getElementById("butt_planeacion");
	let butt_anexos = document.getElementById("butt_anexos");
	let butt_codigofuente = document.getElementById("butt_codigofuente");

	butt_planeacion.classList.remove("active");
	butt_anexos.classList.remove("active");
	butt_codigofuente.classList.add("active");

	let x = document.getElementById("planeacion");
	x.style.display = "none";
	let y = document.getElementById("anexos");
	y.style.display = "none";
	$("#codigo").fadeIn("slow");
}

function showSPMP() {
	let butt_spmp = document.getElementById("butt_spmp");
	let butt_srs = document.getElementById("butt_srs");

	butt_spmp.classList.add("active");
	butt_srs.classList.remove("active");

	let x = document.getElementById("srs");
	x.style.display = "none";
	$("#spmp").fadeIn("slow");
}

function showSRS() {
	let butt_spmp = document.getElementById("butt_spmp");
	let butt_srs = document.getElementById("butt_srs");

	butt_spmp.classList.remove("active");
	butt_srs.classList.add("active");

	let x = document.getElementById("spmp");
	x.style.display = "none";
	$("#srs").fadeIn("slow");
}

function showUsabilidad() {
	let butt_usabilidad = document.getElementById("butt_usabilidad");
	let butt_extensibilidad = document.getElementById("butt_extensibilidad");
	let butt_portabilidad = document.getElementById("butt_portabilidad");

	butt_usabilidad.classList.add("active");
	butt_extensibilidad.classList.remove("active");
	butt_portabilidad.classList.remove("active");

	let x = document.getElementById("extensibilidad");
	x.style.display = "none";
	let y = document.getElementById("portabilidad");
	y.style.display = "none";
	$("#usabilidad").fadeIn("slow");
}

function showExtensibilidad() {
	let butt_usabilidad = document.getElementById("butt_usabilidad");
	let butt_extensibilidad = document.getElementById("butt_extensibilidad");
	let butt_portabilidad = document.getElementById("butt_portabilidad");

	butt_usabilidad.classList.remove("active");
	butt_extensibilidad.classList.add("active");
	butt_portabilidad.classList.remove("active");

	let x = document.getElementById("usabilidad");
	x.style.display = "none";
	let y = document.getElementById("portabilidad");
	y.style.display = "none";
	$("#extensibilidad").fadeIn("slow");
}

function showPortabilidad() {
	let butt_usabilidad = document.getElementById("butt_usabilidad");
	let butt_extensibilidad = document.getElementById("butt_extensibilidad");
	let butt_portabilidad = document.getElementById("butt_portabilidad");

	butt_usabilidad.classList.remove("active");
	butt_extensibilidad.classList.remove("active");
	butt_portabilidad.classList.add("active");

	let x = document.getElementById("usabilidad");
	x.style.display = "none";
	let y = document.getElementById("extensibilidad");
	y.style.display = "none";
	$("#portabilidad").fadeIn("slow");
}