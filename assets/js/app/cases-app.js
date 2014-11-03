var app = angular.module('CasesApp', []);

app.controller('HomeCtrl', ['$scope', function ($scope) {
	$( window ).resize(function() {
		$( ".margem-fixed " ).height($( "#top-site-background" ).height()) ;
	});

	$( ".margem-fixed " ).height($( "#top-site-background" ).height()) ;

	$(document).foundation({
		accordion: {
			// specify the class used for accordion panels
			content_class: 'content',
			// specify the class used for active (or open) accordion panels
			active_class: 'active',
			// allow multiple accordion panels to be active at the same time
			multi_expand: false,
			// allow accordion panels to be closed by clicking on their headers
			// setting to false only closes accordion panels when another is opened
			toggleable: true,

			callback : function (accordion) {
				console.log(accordion);
			}
		}
	});

	$('.slide-trigger').collapsable();

	var _marginTop =  $( "#top-site-background" ).height();

	var _posLink = 1;

	$scope.anchorSection = function (section) {
		$('html, body').animate({
		    scrollTop: $(section).offset().top - _marginTop
		}, 2000);
	}

	$scope.servicosSection = function (section, posLink) {
		var pagina = section.replace('pagina-','');

		if (!$(pagina).hasClass( "active" )) {
			$('#servicos-accordion').find('a' + section).trigger('click');
		}

		if (_posLink < posLink) {

			$(section).scrollTop($(section).offset().top - _marginTop);

			$('html, body').animate({
			    scrollTop: $(section).offset().top - _marginTop
			}, 2000);
		} else {
			$('html, body').animate({
			    scrollTop: $(section).offset().top - _marginTop
			}, 2000);
		}

		_posLink = posLink;
	}

	$scope.produtosSection = function (section, posLink) {
		var pagina = section.replace('pagina-','');

		if (!$(pagina).hasClass( "active" )) {
			$('#produtos-accordion').find('a' + section).trigger('click');
		}

		if (_posLink < posLink) {

			$(section).scrollTop($(section).offset().top - _marginTop);

			$('html, body').animate({
			    scrollTop: $(section).offset().top - _marginTop
			}, 2000);
		} else {
			$('html, body').animate({
			    scrollTop: $(section).offset().top - _marginTop
			}, 2000);
		}

		_posLink = posLink;
	}
}]);