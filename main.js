$(document).ready(function () {

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

function SwipeNext() {
  imageActive = $('img.active');
  circleActive = $('i.active');
  imageActive.removeClass('active');
  imageActive.next().addClass('active');
  circleActive.removeClass('active');
  circleActive.next().addClass('active');

  if (imageActive.hasClass('last') == true) {
    $('img.first').addClass('active');
    $('img.last').removeClass('active');
  }
  if (circleActive.hasClass('last') == true) {
    $('i.first').addClass('active');
    $('i.last').removeClass('active');
  }
}

function SwipePrev() {
  imageActive = $('img.active');
  circleActive = $('i.active');
  imageActive.removeClass('active');
  imageActive.prev().addClass('active');
  circleActive.removeClass('active');
  circleActive.prev().addClass('active');

  if (imageActive.hasClass('first') == true) {
    $('img.last').addClass('active');
    $('img.first').removeClass('active');
  }
  if (circleActive.hasClass('first') == true) {
    $('i.last').addClass('active');
    $('i.first').removeClass('active');
  }
}




});
