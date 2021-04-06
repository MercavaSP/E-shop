$(function(){
// Настраиваем слайдер для слайдера в Hero
    $('.hero-block__slider').slick({
        dots: true,
        prevArrow: '<button class="hero__btn hero__btn-prev"><img src="assets/images/left_arrow.svg" alt="left arrow"></button>',
        nextArrow: '<button class="hero__btn hero__btn-next"><img src="assets/images/right_arrow.svg" alt="right arrow"></button>'

    });

// Настраиваем Табсы
    $('.tab').on('click', function(e){
        
        // Убираем активность ссылок 
        e.preventDefault();
        
        // Убираем класс активности с ссылок
        $('.tab').removeClass('tab--active');
        $('.tabs-content').removeClass('tabs-content--active');
        
        // Добавляем класс на ссылку по клику
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    
    });

});

