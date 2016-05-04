/* prety circle popup toggle */

    function pretyCirclePopupToggle(){

        var formIndexTimer = null;

        $('.prety-circle-title').hover(
            function(){

                clearTimeout(formIndexTimer);
                $('.second-block-form-wrap').addClass('less-index');
                $(this).parents('.prety-circle-item').addClass('hovered');
                $(this).find('.prety-circle-popup').fadeIn(300);

            },
            function(){

                formIndexTimer = setTimeout(function(){
                    $('.second-block-form-wrap').removeClass('less-index');
                }, 300);
                $(this).parents('.prety-circle-item').removeClass('hovered');
                $(this).find('.prety-circle-popup').fadeOut(300);

            }
        );

    }

/* /prety circle popup toggle */

/* prety circle scaling to 768 */

    function pretyCircleScaling(){

        var maxWidth = 100/parseInt($('.mbox').css('max-width'));

        function pretyCircleScalingCalc(){
            if($(window).width() < 768 || $(window).width() >= parseInt($('.mbox').css('max-width'))){
                $('.second-block-wrap').removeAttr('style');
            }else{
                $('.second-block-wrap').css({'transform':'scale(.'+parseInt(maxWidth*$(window).width())+')'});
            }
        }

        pretyCircleScalingCalc();

        $(window).resize(function(){
            pretyCircleScalingCalc();
        });

    }

/* /prety circle scaling to 768 */


$(document).ready(function(){

    pretyCirclePopupToggle();
    pretyCircleScaling();

});

$(window).load(function(){

});

$(window).resize(function(){

});