'use strict';
// configuration des variables 
(function($){
$.fn.mySlider = function() {
   
    var largeur = 720;
    var vitesse = 1000;
    var pause = 1000;
    var currentslide=1;

    // appel des balises du html
    var $slider = this;
    var $slidecontainer = $slider.find('.slides');
    var $slides = $slidecontainer.find('.slide');
    var interval; // var interval

    function startSlider(){
        // interval permet de pouvoir appeler interval en dehors du "squelette" de la fonction setInterval
        interval = setInterval(function(){
            // animation de slide
            $slidecontainer.animate({'margin-left': '-='+largeur}, vitesse, function(){ // configuration de la vitesse de défilement et du déplacement du caroussel
                currentslide++; // incrémentation qui compte a quel "slide" on se situe
                if(currentslide === $slides.length){ // condition qui permet de retourner à la premire image
                    currentslide = 1;
                    $slidecontainer.css('margin-left',0); // valeur de début du caroussel ( retour a 0)
                };
            });}, pause);
    
    function pauseSlider(){ // fonciton qui stop le caroussel lorsque la souris est dessus
        clearInterval(interval);
    }
    //losque le curseur va sur l'image, l'image se stop // lorsque le curseur sort de l'image le carrousel reprend son cours
    $slider.on('mouseenter',pauseSlider).on('mouseleave',startSlider);
    startSlider();
    return this;
}
}
$(function($) {
    $('#slider').mySlider();
});
});
