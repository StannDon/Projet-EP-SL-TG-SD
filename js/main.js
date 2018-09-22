'use strict';



$(function() {
 var largeur = 1175;
 var vitesse = 1000;
 var pause =3000;
 var currentSlide = 1;


var $slider = $('#slider');
var $slidecontainer = $slider.find('.slides');
var $slides = $slidecontainer.find('.slide');

var interval;

function startSlider(){
interval = setInterval(function() {
	$slidecontainer.animate({'margin-left': '-=' +largeur}, vitesse, function(){
		currentSlide++;
		if (currentSlide === $slides.length){
			currentSlide = 1;
			$slidecontainer.css('margin-left',0);
		}

	});
	}, pause);
}
function stopSlider(){
	clearInterval(interval);
}

$slider.on('mouseenter',stopSlider).on('mouseleave', startSlider);
startSlider();
});
