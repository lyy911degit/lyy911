$(document).ready(function () {
   $('.addTabPage').click(function(){
        if($(this).siblings('ul').css('display')=='none'){
            ($(this)).parent('li').addClass('.menu_open');
            $(this).siblings('ul').slideDown(10).children('li');
        }else{
            $(this).removeClass('.menu_open');
            $(this).siblings('ul').slideUp(10);
        }
   })
});

