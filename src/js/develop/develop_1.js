/* prety circle popup toggle */

    function pretyCirclePopupToggle(){

        $('.prety-circle-title').hover(
            function(){
                $('.prety-circle-main-wrap .prety-circle-item').eq($(this).parents('.prety-circle-item').index()).addClass('hovered');
                $(this).parents('.prety-circle-item').addClass('hovered');
                $(this).find('.prety-circle-popup').fadeIn(300);

            },
            function(){
                $('.prety-circle-main-wrap .prety-circle-item').eq($(this).parents('.prety-circle-item').index()).removeClass('hovered');
                $(this).parents('.prety-circle-item').removeClass('hovered');
                $(this).find('.prety-circle-popup').fadeOut(300);

            }
        );

    }

/* /prety circle popup toggle */


$(document).ready(function(){

    pretyCirclePopupToggle();

});

$(window).load(function(){

});

$(window).resize(function(){

});