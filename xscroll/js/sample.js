$(document).ready(function(){
    let ht=$(window).height();
    console.log(ht)
    let secNum = $('section').size()

    let num = $('.imgBox').size()
    console.log(num)
    let widsec = 460 * num;
    let widTotal = widsec;
    $('body').height(widTotal)
    console.log(widTotal)

    let sec02 = $('section').eq(1).offset().top;

    $(window) .scroll(function(){
        let sc = $(this).scrollTop();

        if (sc >= sec02 && sc < sec02+4140){
            $('.slide_list').addClass('on')
            $('.slide_list').css({'left':-sc+980})
        }else {
            $('.slide_list').removeClass('on')
        }
    })
})