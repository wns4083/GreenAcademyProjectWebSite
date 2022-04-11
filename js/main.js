$(document).ready(function(){
    $('#navbar').on('mouseenter focusin', function(){
        if($(window).width()>1024){
            $('.sub').stop().slideDown(400);
            $('.bg').stop().slideDown(400);
        }
    });
    $('#navbar').on('mouseleave',function(){
        if($(window).width()>1024){
            $('.sub').stop().slideUp(400);
            $('header>.bg').stop().slideUp(400);
        }
    });
    $('#navbar').on('mouseenter', function(){
        if($(window).width()>640){
            $('.sub').stop().slideDown(400);
            $('header>.bg').stop().slideDown(400);
        }
    });
    $('#navbar').on('mouseleave', function(){
        if($(window).width()>640){
            $('.sub').stop().slideUp(400);
            $('header>.bg').stop().slideUp(400);
        }
    });
});

$(document).ready(function(){
    $('#button').on('click', function(){
        if($(window).width()<641){
            $('.bg').show();
            $('.bg').css('height', '400');
            $('#navbar>ul').show(600);
            $('#button').css('display', 'none');
            $('#close').css('display', 'block');
            $('#navbar').css('display', 'block');
        }
    });
    $('#navbar>ul>li>a').on('click', function(event){
        if($(window).width()<641){
            event.preventDefault();
            $('.sub').slideDown(400);
            $('.bg').css('height', '800');
            $('.bg').slideDown(400);
        }
    });
    
    $('#close').on('click', function(){
        if($(window).width()<641){
            $('.bg').hide(600);
            $('#navbar>ul').hide(100);
            $('#button').css('display', 'block');
            $('#close').css('display', 'none');
            $('#navbar').css('display', 'none');
            $('.sub').slideUp();
            $('.bg').slideUp();
        }
    });
});
$(document).ready(function(){
    $('.bxslider').bxSlider({
     controls: false,
     auto: true,
     autoControls:false,
     pager:true,
     speed: 2000,
     stopAutoOnClick:true,
     autohover:true
 });    
});
$(document).ready(function(){
    $(window).scroll(function(){
        var offsetinfo = $('.info').offset().top;
        var offsetgames = $('.games').offset().top;
        console.log(offsetinfo);
        if($(window).scrollTop()>=offsetinfo-400 && $(window).width()>=1024){
            $('.info').children().addClass('on');
        }else{
            $('.info').children().removeClass('on');
        }
    });
});

$(document).ready(function(){
    if($(window).width()<641){
        $('.first>p').text('온라인게임의 효시, 바람의 나라 제작');
        $('.second>p').text('새로운 비즈니스모델 개척');
        $('.third>p').text('넥슨만의 독창적 DNA');
        $('.four>p').text('전세계 160여개국 런칭');
    }
});
$(document).ready(function(){
    $(window).scroll(function(){
        var offsetT = $('.stockinfo').offset().top -500;
        
        if($(window).scrollTop()>=offsetT){
            $('.grf>li::after').css('animation-name', 'rota');
            $('.grf>li::before').css('animation-name', 'rota');
        }
    });
});


$(document).ready(function(){
    if($(window).width()>641){
        console.log(true);
        var slide=document.querySelector('.custom-slide');
    
    var currentIndex=0;
    var slideCount=21;
    
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');

    slideWidth=512;
    slideMargin=20;
    slide.style.width=(slideWidth+slideMargin)*slideCount+"px";

    function moveS(num){
        slide.style.left=-num*900+'px';
        currentIndex=num;
    }
    prev.addEventListener('click', function(){
        if(currentIndex !==0) moveS(currentIndex-1);
        
    });
    next.addEventListener('click', function(){
        if(currentIndex !==slideCount -13) moveS(currentIndex+1);
    });
    }else{
    var slide=document.querySelector('.custom-slide');
    
    var currentIndex=0;
    var slideCount=21;
    
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    
    function moveS(num){
        slide.style.left=-num*300+'px';
        currentIndex=num;
    }
    prev.addEventListener('click', function(){
        if(currentIndex !==0) moveS(currentIndex-1);
        
    });
    next.addEventListener('click', function(){
        if(currentIndex !==slideCount -14) moveS(currentIndex+1);
    });
            
    }
    
    
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scrollTwoTop = window.scrollY;
        var offsetG = $('.games').offset().top;
        
        if($(window).scrollTop()>=1800){
            $('.games').css('opacity', '1');
            $('.games>.bgimg').css('top', '-100px');
            $('.games').css('background','#000');
            $('.games h2').css('color', '#fff');
            $('.games .bgimg').css('background', 'url("img/bg/bg\ eyeopen.png") no-repeat');
            $('.games .bgimg').css('background-size', 'cover');
        }
    });
});
