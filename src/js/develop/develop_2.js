var map;
function googleMap(mapWrap){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            scrollwheel: false,
            disableDefaultUI: true, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            }
        }
        map = new google.maps.Map(document.getElementById(mapWrap), myOptions);


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

function setDatePickerRussian() {
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
            'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
            'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false
    };

    $.datepicker.setDefaults($.datepicker.regional['ru']);
}

$(document).ready(function(){
    
    
    $('.body-menu').click(function(){
        $('.bot-menu').addClass('show-this');
        $('body').addClass('lock-body');
    });
    
    $('.fancy-menu').click(function(){
        $('.bot-menu').removeClass('show-this');
        $('body').removeClass('lock-body');
    });
    
    $('.close-menu').click(function(){
        $('.bot-menu').removeClass('show-this');
        $('body').removeClass('lock-body');
    })
    
    
    $('.button-up').click(function(){
        $(scroller).stop().animate({scrollTop:0},800);
    });
    
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
    }, 100);
    
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
    setDatePickerRussian() ;

    $( window ).scroll(function() {
        if($( window ).width() - $.scrollbarWidth() > 992 ){
            if($(window).scrollTop() - $('.top-row').offset().top > 1){
                $('header').addClass('show-header');
            } else {
                $('header').removeClass('show-header');
            }
        }
    });
    
});

$(window).load(function(){

});

$(window).resize(function(){

    if($( window ).width() - $.scrollbarWidth() > 992 ){
        if($(window).scrollTop() - $('.top-row').offset().top > 1){
            $('header').addClass('show-header');
        } else {
            $('header').removeClass('show-header');
        }
    } else {
        $('header').removeClass('show-header');
    }
    
    if ($(window).width() < 992) {
        map.set('draggable', false);
    }
    else {
        map.set('draggable', true);
    };


});