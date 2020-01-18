$(document).ready(function () {
  var img1 = $( "img:eq(0)");
  var img2 = $( "img:eq(1)");
  var img3 = $( "img:eq(2)");
  var img4 = $( "img:eq(3)");

   $('.next').click (
     function() {
       SwipeNext();
     }
  )
   $('.prev').click (
     function() {
       SwipePrev();
     }
  )
    $(document).keydown(
      function() {
        if (event.keyCode == 39) {
          SwipeNext();
        }
      }
    )
    $(document).keydown(
      function() {
        if (event.keyCode == 37) {
          SwipePrev();
        }
      }
    )

  $('.nav i').click(function () {
    var imageActive = $('img.active');
    var circleActive = $('.nav i');
    circleActive.removeClass('active');
    imageActive.removeClass('active');
    $(this).addClass('active');
    if ($(this).index() == 0) {
      img1.addClass('active');
    } else if ($(this).index() == 1) {
      img2.addClass('active');
    } else if ($(this).index() == 2) {
      img3.addClass('active');
    } else if ($(this).index() == 3) {
      img4.addClass('active');
    }
  });
  function SwipeNext() {
    var imageActive = $('.images img.active');
    var circleActive = $('.nav i.active');
    imageActive.removeClass('active');
    circleActive.removeClass('active');

    if (imageActive.hasClass('last') == true) {
      $('img.first').addClass('active');
      $('i.first').addClass('active');
    } else {
      imageActive.next().addClass('active');
      circleActive.next().addClass('active');
    }

  }
  function SwipePrev() {
    var imageActive = $('.images img.active');
    var circleActive = $('.nav i.active');
    imageActive.removeClass('active');
    circleActive.removeClass('active');
    if (imageActive.hasClass('first') == true) {
      $('img.last').addClass('active');
      $('i.last').addClass('active');
    } else {
      imageActive.prev().addClass('active');
      circleActive.prev().addClass('active');
    }
  }

});
