$(window).scroll(function(){
    if($(this).scrollTop()>68){
        $('.masthead').addClass('fixed');
    }else{
        $('.masthead').removeClass('fixed');
    }
});