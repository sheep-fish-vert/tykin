/* prety circle popup toggle */

    function pretyCirclePopupToggle(){

        var formIndexTimer = null;

        $('.prety-circle-title').hover(
            function(){
                if($(window).width() > 767){
                    clearTimeout(formIndexTimer);
                    $('.second-block-form-wrap').addClass('less-index');
                    $(this).parents('.prety-circle-item').addClass('hovered');
                    $(this).find('.prety-circle-popup').stop().fadeIn(300);
                }

            },
            function(){
                if($(window).width() > 767){
                    formIndexTimer = setTimeout(function(){
                        $('.second-block-form-wrap').removeClass('less-index');
                    }, 300);
                    $(this).parents('.prety-circle-item').removeClass('hovered');
                    $(this).find('.prety-circle-popup').stop().fadeOut(300);
                }
            }
        );

    }

/* /prety circle popup toggle */

/* show hide mobile text in second-block */

    function toggleMobileText(){
        $('.mobile-button').click(function(){
            var parent = $(this).parents('.prety-circle-text');
            parent.find('.mobile-text').slideDown(300, function(){
                parent.find('.mobile-button, .mobile-text').addClass('active');
            });
            $(this).slideUp(300);

        });

        $(window).resize(function(){
            if($(window).width() > 767){
                $('.mobile-button, .mobile-text').removeAttr('style');
            }
        });

    };

/* /show hide mobile text in second-block */

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
    toggleMobileText();

});

$(window).load(function(){

});

$(window).resize(function(){

});