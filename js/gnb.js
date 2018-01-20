/**
 * Created by Administrator on 2017-08-31.
 */

$(function(){

  $('.choose-list-btn').on('click', function(){

    $('.choose-detail').addClass('on');


  });

});

$(function(){


  $('.item-menu-list').on('click' , function(){


    console.log(1);

  });


});

$(function(){


  $('.photo-thumb-list').on('mouseenter' , function(){

    $('.photo-thumb-text').addClass('on');

  });


});





$(function(){

  $('.btn').data({'open' : 'false'}).on('click', function(){

    if( $(this).data('open') == 'false' ){

      $('.gnb').css({left : 0});
      $(this).data({'open' : 'true'});

    } else {

      $('.gnb').css({left : -900});
      $(this).data({'open' : 'false'});

    }
  });
  });
$(function(){

  $('.btn').on('click', function(){

    $('.btn-bar').toggleClass('active');

  });

});

$(function(){

   $('.gnb-list-link').on('mouseenter', function () {
    var index = $('.gnb-list-link').index(this);

    $(".main-list-item:eq(" + index + ")").addClass('on');
  });


});


//
// $(function () {
//     $('.item').fadeIn(5000, function () {
//     });
//
//     $("a").click(function () {
//         var url = $(this).attr("href");
//         $('.main-list-item').animate({width : 1800 },1000);
//         $('.main-list-item').animate({height : 0},1000, function () {
//             document.location.href = url;
//         });
//             $('.gnb').fadeOut(800);
//             $('.box').fadeOut(2000);
//
//         return false;
//
//       $(this).toggleClass('none')
//
//     });
//
// });
//
//
//
//
//




$(function(){

  $('.news-list-item-wrap').on('mouseenter', function(){

    $('.news-list-image').addClass('on');
    $('.news-list-item-link').addClass('on');


  });

  $('.news-list-item-wrap').on('click', function(){

    $('.news-list').addClass('on');
    $('.news-list-contents').addClass('on');

  });

  $('.news-list-item-wrap').on('mouseleave', function(){

    $('.news-list-image').removeClass('on');
    $('.news-list-item-link').removeClass('on');
  });

  $('.news-list-item2-wrap').on('mouseenter', function(){

    $('.news-list-image2').addClass('on');
    $('.news-list-item2-link').addClass('on');

  });

  $('.news-list-item2-wrap').on('mouseleave', function(){

    $('.news-list-image2').removeClass('on');
    $('.news-list-item2-link').removeClass('on');
  });
});
$('.photo-thumb-image').on('mouseenter', function(){

  $(this).addClass('on');

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jaG9vc2UuanMiLCJfZ25iLmpzIiwiX2l0ZW0uanMiLCJfaXRlbV9zdWIuanMiLCJfbWFpbi5qcyIsIl9uZXdzLmpzIiwiX3Bob3RvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnbmIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuY2hvb3NlLWxpc3QtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuY2hvb3NlLWRldGFpbCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCJcclxuJChmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgJCgnLml0ZW0tbWVudS1saXN0Jykub24oJ2NsaWNrJyAsIGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKDEpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICQoJy5waG90by10aHVtYi1saXN0Jykub24oJ21vdXNlZW50ZXInICwgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcucGhvdG8tdGh1bWItdGV4dCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuIiwiXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmJ0bicpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmKCAkKHRoaXMpLmRhdGEoJ29wZW4nKSA9PSAnZmFsc2UnICl7XHJcblxyXG4gICAgICAkKCcuZ25iJykuY3NzKHtsZWZ0IDogMH0pO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJyA6ICd0cnVlJ30pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAkKCcuZ25iJykuY3NzKHtsZWZ0IDogLTkwMH0pO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoeydvcGVuJyA6ICdmYWxzZSd9KTtcclxuXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgfSk7IiwiJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcuYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcuYnRuLWJhcicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTsiLCJcclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAgJCgnLmduYi1saXN0LWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBpbmRleCA9ICQoJy5nbmItbGlzdC1saW5rJykuaW5kZXgodGhpcyk7XHJcblxyXG4gICAgJChcIi5tYWluLWxpc3QtaXRlbTplcShcIiArIGluZGV4ICsgXCIpXCIpLmFkZENsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vXHJcbi8vICQoZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgJCgnLml0ZW0nKS5mYWRlSW4oNTAwMCwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgfSk7XHJcbi8vXHJcbi8vICAgICAkKFwiYVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgdmFyIHVybCA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbi8vICAgICAgICAgJCgnLm1haW4tbGlzdC1pdGVtJykuYW5pbWF0ZSh7d2lkdGggOiAxODAwIH0sMTAwMCk7XHJcbi8vICAgICAgICAgJCgnLm1haW4tbGlzdC1pdGVtJykuYW5pbWF0ZSh7aGVpZ2h0IDogMH0sMTAwMCwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gdXJsO1xyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICAkKCcuZ25iJykuZmFkZU91dCg4MDApO1xyXG4vLyAgICAgICAgICAgICAkKCcuYm94JykuZmFkZU91dCgyMDAwKTtcclxuLy9cclxuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XHJcbi8vXHJcbi8vICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ25vbmUnKVxyXG4vL1xyXG4vLyAgICAgfSk7XHJcbi8vXHJcbi8vIH0pO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vL1xyXG5cclxuXHJcblxyXG4iLCIkKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5uZXdzLWxpc3QtaXRlbS13cmFwJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5uZXdzLWxpc3QtaW1hZ2UnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQoJy5uZXdzLWxpc3QtaXRlbS1saW5rJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLm5ld3MtbGlzdC1pdGVtLXdyYXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5uZXdzLWxpc3QnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQoJy5uZXdzLWxpc3QtY29udGVudHMnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5uZXdzLWxpc3QtaXRlbS13cmFwJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5uZXdzLWxpc3QtaW1hZ2UnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5uZXdzLWxpc3QtaXRlbS1saW5rJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5uZXdzLWxpc3QtaXRlbTItd3JhcCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcubmV3cy1saXN0LWltYWdlMicpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCgnLm5ld3MtbGlzdC1pdGVtMi1saW5rJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcubmV3cy1saXN0LWl0ZW0yLXdyYXAnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLm5ld3MtbGlzdC1pbWFnZTInKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5uZXdzLWxpc3QtaXRlbTItbGluaycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG59KTsiLCIkKCcucGhvdG8tdGh1bWItaW1hZ2UnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICQodGhpcykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG59KTsiXX0=
