/*===============================================
                 Services
================================================*/
 $(document).ready(function () {

     //Animate Scroll
    new WOW().init();

 });

 /*===============================================
                        Work
================================================*/
$(document).ready(function(){

    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/*===============================================
                        Team
================================================*/
$(document).ready(function(){

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

/*===============================================
                        Testimonials
================================================*/
$(document).ready(function(){
    
        $("#customers-testimonials").owlCarousel({
            items: 1,
            autoplay: true,
            smartSpeed: 700,
            loop: true,
            autoplayHoverPause: true
        });
    
});

/*===============================================
                    Stats
================================================*/
    $(document).ready(function(){

        $(".counter").counterUp({
            delay: 10,
            time: 3000
        });

    });