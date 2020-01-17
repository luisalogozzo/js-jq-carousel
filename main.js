$(document).ready(function () {
 $('.next').click (
   function() {
    var imageActive = $('img.active');
    imageActive.removeClass('active');
    imageActive.next().addClass('active')
  if (imageActive.hasClass('last') == true) {
    $('img.first').addClass('active');
    $('img.last').removeClass('active');
   }
 });
});

function SwipeNext() {
}
