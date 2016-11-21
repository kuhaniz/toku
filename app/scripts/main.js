/* Run function after window resize */
var afterResize=(function(){var t={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId='Don\'t call this twice without a uniqueId';}if(t[uniqueId]){clearTimeout(t[uniqueId]);}t[uniqueId]=setTimeout(callback,ms);};})();

var vid = document.getElementById('myVideo');

$(document).ready(function(e){
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var $body = $('body');
  var homePage = $('.home');
  $('.js-full-height').css('height', windowHeight);

  $(window).resize(function() {
    afterResize(function(){

      $('.js-full-height').css('height', $(window).height());

  	  //$('.js-full-height-min').css('min-height', timber.cache.$window.height());

    }, 200, 'id');
  });

  var $video = $('.masthead-video--wrapper video');

  if (!Modernizr.touch && $body.hasClass('home')) {
    $video.one('canplaythrough', function() {
        vid.play()
    });
  }

  $('.mobile-menu').on('click', function(e){
    $(this).toggleClass( 'active' );
    $('.mobile-menu-container').toggleClass( 'active' );
    $('.logo').toggleClass( 'active' );
  });

  $('#contactform').submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var url = 'email.php'; // the script where you handle the form input.
    $.ajax({
           type: 'POST',
           url: url,
           data: $('#contactform').serialize(), // serializes the form's elements.
           success: function(data)
           {
               $('.submitform').fadeOut(500, function() {
                 $('.thankyou').fadeIn(500);
               });

               console(data); // show response from the php script.
           }
         });

});

})
