$(function(){
// Настраиваем слайдер для слайдера в Hero
    $('.hero-block__slider').slick({
        dots: true,
        prevArrow: '<button class="hero__btn hero__btn-prev"><img src="assets/images/left_arrow.svg" alt="left arrow"></button>',
        nextArrow: '<button class="hero__btn hero__btn-next"><img src="assets/images/right_arrow.svg" alt="right arrow"></button>'

    });

// Настраиваем Табсы
    $('.search__tabs-item').on('click', function(e){
        
        // Убираем активность ссылок 
        e.preventDefault();
        
        // Убираем класс активности с ссылок
        $('.search__tabs-item').removeClass('search__tabs-item--active');
        $('.search__content-item').removeClass('search__content-item--active');
        
        // Добавляем класс на ссылку по клику
        $(this).addClass('search__tabs-item--active');
        $($(this).attr('href')).addClass('search__content-item--active');
    
    });

});

