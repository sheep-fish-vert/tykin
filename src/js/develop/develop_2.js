


$(document).ready(function(){
    $('.grouped_elements').click(function(){
        
        $.fancybox({
            href: this.href,
            type: $(this).data("type")
        });
        return false;
    });
    
    
    setTimeout(function() {
        $('select').styler();
    }, 100)
    
    var timeM = 60;
    var timeS = 20;
    
    setInterval(function(){
        if(timeS == 0) {
            timeS = 59;
            timeM = timeM - 1;
            
            if (timeM < 10) {
                $('.minutes').html('0'+ timeM);
            } else {
                $('.minutes').html(timeM);
            } 
            
        } else {
            timeS = timeS - 1;
        }
        
        if (timeS < 10) {
            $('.seconds').html('0'+ timeS);
        } else {
            $('.seconds').html(timeS);
        }
        
          
   
    }, 1000)
    
});

$(window).load(function(){

});

$(window).resize(function(){

});