$(document).ready(function() {

   // mobile nav
   var navBtn = $('.js_mobole_menu');
   var navList = $('.navigation__list');

   navBtn.on('click', function() {
       navList.toggleClass('is-active');
       $('body').toggleClass('no-scroll');
   });

//    $('body').swipe( {
//     swipeLeft:leftSwipe,
//     swipeRight:rightSwipe,
//     threshold:0
// });

    function leftSwipe(event){
      navList.toggleClass('is-active');
          $('body').toggleClass('no-scroll');
    }

  
   //dinamic grid
   $('.js_filter').isotope({
    itemSelector: '.js_item',
    layoutMode: 'packery',
    packery: {
        gutter: 10,
        percentPosition: true
        
      } 
  });

  $('.js_gallery__list').on('click', 'button', function() {
           
    var filterValue = $(this).data('filter');
    
    // $('.gallery__button')
    //   .removeClass('portfilio__btn--active');

    // $(this)
    //   .addClass('portfilio__btn--active')
    //   .siblings()
    //   .removeClass('portfilio__btn--active');
      
    $('.js_filter').isotope({ filter: filterValue });

  });

  $('.js_slider').slick({
    
    infinite: true
  });


});