$(document).ready(function(){
    $(window).scroll(function(){
    var wind =$(window).scrollTop();
    var ofs=$('.invisible').offset().top;
    console.log(ofs);
    console.log(wind);
    if(wind>=400 && $(window).width()>=1024){
        
        $('.invisible').css('opacity', '1');
        $('.invisible').css('margin-top', '0');
    }
    });        
});
$(document).ready(function(){
    var list=$('.byyear').find('div').width();
    var bywidth=$('.byyear').find('div').length;
    var mg=$('.byyear>div').css('margin-right');
    var mgvalue=parseInt(mg);
    console.log(mg);
    console.log(mgvalue);
    $('.byyear').width((list*bywidth)+mgvalue*(bywidth-1));
    
    var num=0;
    var targetPosition=0;
    $('.next').on('click', function(event){
        event.preventDefault();
        num++;
        if(num>=(bywidth-3)){
            num=bywidth-3;
        }
        targetPosition=-list*num-mgvalue*num;
        $('.byyear').stop().animate({left:targetPosition},600);
    });
    $('.prev').on('click', function(event){
        event.preventDefault();
        num--;
        if(num<=1){
            num=1;
        }
        targetPosition=-list*num-mgvalue*num+(list+40);
        console.log(targetPosition);
        console.log(num);
        $('.byyear').stop().animate({left:targetPosition}, 600);
    });
});

$(document).ready(function(){
    
    var defaultTop=parseInt($('aside').css('top'));
    $(window).scroll(function(){
        var scrollTopNum=$(document).scrollTop()-50;
        if(scrollTopNum<=defaultTop){
           scrollTopNum=defaultTop;
           }
        $('aside').stop().animate({top:scrollTopNum}, 800);
    });
});
