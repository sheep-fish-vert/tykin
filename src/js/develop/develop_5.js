function showMoreCase(){
    $('.arrow-down p').click(function(e){
        e.preventDefault();
        if($(window).width()>666){
            animSlide();
            $(this).parent().remove();
        }else{
            $('.seven-block .addaptive-adict').slideDown(400, function () {
                animSlide();
            });
            $(this).parent().remove();
        }


        function animSlide(){
            $('.seven-block .not-active:nth-child(3)').slideDown(400, function () {
                $('.seven-block .not-active:nth-child(4)').slideDown(400);
            });
        }
    });
}


$(document).ready(function(){
    showMoreCase();
});

$(window).load(function(){

});

$(window).resize(function(){

});