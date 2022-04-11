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