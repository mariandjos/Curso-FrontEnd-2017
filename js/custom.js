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