


$(document).ready(function(){
    $('.grouped_elements').click(function(){
        
        $.fancybox({
            href: this.href,
            type: $(this).data("type")
        });
        return false;
    })
    
});

$(window).load(function(){

});

$(window).resize(function(){

});