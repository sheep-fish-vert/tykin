function googleMap(mapWrap){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            disableDefaultUI: false, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            }
        }
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);


        //больше - http://map-icons.com/
        /*/маркер на svg*/

        //var image = 'images/footer-contact-marker.png';   // иконка картинкой

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP, // анимация при загрузке карты
            //icon: image //  иконка картинкой
        });


        /*анимация при клике на маркер*/
        marker.addListener('click', toggleBounce);
        function toggleBounce() {
          if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
          }
        }
        /*/анимация при клике на маркер*/

        /*По клику открываеться инфоблок*/
        google.maps.event.addListener(marker, 'click', function() {
           // infowindow.open(map,marker);
        });

    }
    initialize();
}


$(document).ready(function(){
    
    googleMap('map');
    
    
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
    var timeS = 00;
    
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
        
          
   
    }, 1000);
    
    $('.time-picker').wickedpicker({twentyFour: true, title: 'Время звонка'});
    
    $( "#datepicker" ).datepicker({
      firstDay: 1,
      minDate: 1
    });
    
});

$(window).load(function(){

});

$(window).resize(function(){

});