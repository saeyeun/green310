$(document).ready(function(){
    //마우스가 움직이는 값을 찾아라

    $(window).mousemove(function(e){
        let x = e.pageX;
        let y = e.pageY;

        $('.cursor').css({'left':x,'top':y})
    })

    $('.main .txt li:nth-child(1)').mouseenter(function(){
        $('.cursor').css({'background-color':'rgba(228, 0, 245, 0.51)'})
        $('.circle1').css({'display':'none'})
        $('.main').addClass('show1')
        $('.cursor').addClass('style')
    })
    $('.main .txt li:nth-child(1)').mouseleave(function(){
        $('.cursor').css({'background-color':'#000'})
        $('.circle1').css({'display':'block'})
        $('.main').removeClass('show1')
        $('.cursor').removeClass('style')
    })

})