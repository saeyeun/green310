$(document).ready(function(){
    //article의 가로값을 구하고
    //article의 갯수를 구하고
    //가로값과 갯수를 곱해서 section의 가로값에 대입해라.

    // 갯수구하기
    let numAC = $('article').size()
    console.log(numAC);
    // nth갯수랑 똑같음



    // 가로값구하기
    let widAC = $('article').width()
    console.log(widAC)



    //세로값구하기

    let htAC = $('article').height()
    console.log(htAC);

    let winht = $(window).height()
    console.log(winht)

    let secTop = (winht/2)-(htAC/2)
    console.log(secTop)



    // 섹션가로값 설정하기
    $('section').width(600+(widAC+20)*numAC)
    // margin값은 길이에 포함되지 않기 때문에 따로 더해줌
    
    $('body').height((widAC+20)*numAC)

    // section위치 고정하기 위해
    $('section').css({'top':secTop})
    
    // nav위치 고정하기 위해
    $('nav').css({'top':secTop-50})

    $(window).scroll(function(){
        let sc = $(this).scrollTop()
        $('h1').text(sc)
        $('section').css({'left':-sc})


    });


    $('article h2').click(function(){


        $('article').stop().animate({width:180},500)

        $(this).parent('article').stop().animate({width:600},800)
    })






})