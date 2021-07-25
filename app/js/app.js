var $items_number = 0;

//event for adding a new todo

    //clear base text from input
$('.input__text').click(function(){
    $(this).val("");
});
    //event when value changing
$('.input__text').change(function(){
    $('.main__todoList').find('li.element__collect').remove();
    $('.main__todoList li').css('display','flex');
    $('.main__control span').removeClass('active');
    $('.control__all').addClass('active');
    $('.main__control').addClass('all');
    $('.main__todoList').append('<li class="todo__item element__todo activated"><div class= "item__checkbox element__checkbox"></div> <input type="text" class="item__text element__text" value="'+$(this).val()+'"> <div class= "element__cross"> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></div> </li>');
    
    $items_number = $('.main__todoList').children().length;
    
    if($items_number <= 1){
        $('.main__todoList').append('<li class="element__todo element__collect"><div class="summe__item">' +$items_number+ ' item left</div><div class="clear__item">Clear Completed</div></li>');
    }
    else{
        $('.main__todoList').append('<li class="element__todo element__collect"><div class="summe__item">' +$items_number+ ' items left</div><div class="clear__item">Clear Completed</div></li>');
    }   

    if($(this).hasClass('day')){
        $('.main__todoList *').addClass('day');
    }
    else {
        $('.main__todoList *').addClass('night');
    }

    $('.item__text').prop('disabled', true);

    $('.main__todoList').sortable();
    //$('.main__todoList').disableSelection();
});

//remove todo list when click on Clear Completed
$('.main__todoList').delegate('.clear__item','click', function(){
    if($('.main__control').hasClass('all')){
        $('.main__todoList').children().remove();
        $items_number = $('.main__todoList').children().length;
        $('.main__todoList').append('<li class="element__todo element__collect"><div class="summe__item">' +$items_number+ ' item left</div><div class="clear__item">Clear Completed</div></li>');
    }
    if($(this).hasClass('day')){
        $('.main__todoList *').addClass('day');
    }
    else {
        $('.main__todoList *').addClass('night');
    }
}); 

//activated and completed todo items
$('.main__todoList').delegate('.element__checkbox','click', function(){
    if($(this).parent().hasClass('activated')){
        $(this).parent().removeClass('activated');
        $(this).parent().addClass('completed');
    }
    else{
        $(this).parent().removeClass('completed');
        $(this).parent().addClass('activated');
    }
});

//delete todo items when click on cross
$('.main__todoList').delegate('.element__cross','click', function(){
    $(this).parent().remove();
    $items_number = $('.main__todoList').children().length - 1;
    if($items_number <= 1){
        $('.summe__item').text($items_number + " item left");
    }
    else{
        $('.summe__item').text($items_number + " items left");
    }
});

//show activated items or completed items or all items when click on control
    //for all items
    $('.control__all').click(function(){
        $('.main__control span').removeClass('active').addClass('hover');
        $(this).removeClass('hover').addClass('active');
        $('.main__control').addClass('all');
        $('.main__todoList li').css('display','flex');
        $items_number = $('.main__todoList li').length - 1;
        if($items_number <= 1){
            $('.summe__item').text($items_number + " item left");
        }
        else{
            $('.summe__item').text($items_number + " items left");
        }

        //remove todo list when click on Clear Completed
        $('.main__todoList').delegate('.clear__item','click', function(){
            $('.main__todoList').children().remove();
            $('.main__todoList').append('<li class="element__todo element__collect"><div class="summe__item">0 item left</div><div class="clear__item">Clear Completed</div></li>');

            if($(this).hasClass('day')){
                $('.main__todoList *').addClass('day');
            }
            else {
                $('.main__todoList *').addClass('night');
            }
        });
    });

    //for activated items
    $('.control__active').click(function(){
        $('.main__control span').removeClass('active').addClass('hover');
        $(this).removeClass('hover').addClass('active');
        $('.main__control').removeClass('all');
        $('.main__todoList li.completed').css('display','none');
        $('.main__todoList li.activated').css('display','flex');
        $items_number = $('.main__todoList li.activated').length;
        if($items_number <= 1){
            $('.summe__item').text($items_number + " item left");
        }
        else{
            $('.summe__item').text($items_number + " items left");
        }

        //remove todo list from activated items when click on Clear Completed
        $('.main__todoList').delegate('.clear__item','click', function(){
            $('.main__todoList li.activated').remove();
            $('.main__todoList').find('li.element__collect').remove();
            $('.main__todoList').append('<li class="element__todo element__collect"><div class="summe__item">0 item left</div><div class="clear__item">Clear Completed</div></li>');

            if($(this).hasClass('day')){
                $('.main__todoList *').addClass('day');
            }
            else {
                $('.main__todoList *').addClass('night');
            }
        });
    });

    //for completed items
    $('.control__completed').click(function(){
        $('.main__control span').removeClass('active').addClass('hover');
        $(this).removeClass('hover').addClass('active');
        $('.main__control').removeClass('all');
        $('.main__todoList li.activated').css('display','none');
        $('.main__todoList li.completed').css('display','flex');
        $items_number = $('.main__todoList li.completed').length;
        if($items_number <= 1){
            $('.summe__item').text($items_number + " item left");
        }
        else{
            $('.summe__item').text($items_number + " items left");
        }

        //remove todo list from completed items when click on Clear Completed
        $('.main__todoList').delegate('.clear__item','click', function(){
            $('.main__todoList li.completed').remove();
            $('.main__todoList').find('li.element__collect').remove();
            $('.main__todoList').append('<li class="element__todo element__collect"><div class="summe__item">0 item left</div><div class="clear__item">Clear Completed</div></li>');

            if($(this).hasClass('day')){
                $('.main__todoList *').addClass('day');
            }
            else {
                $('.main__todoList *').addClass('night');
            }
        });
    }); 


//add class day to every elements when page loaded
$(document).ready(function(){
    $('*').addClass('day');
})

//day- and night-theme change when click on icon
$('.header__icon').click(function(){
    if($(this).hasClass('day')){
        $('*').removeClass('day');
        $('*').addClass('night');
    }
    else {
        $('*').removeClass('night');
        $('*').addClass('day');
    }
})



