"use strict";var afterResize=function(){var e={};return function(t,i,a){a||(a="Don't call this twice without a uniqueId"),e[a]&&clearTimeout(e[a]),e[a]=setTimeout(t,i)}}(),vid=document.getElementById("myVideo");$(document).ready(function(e){var t=$(window).height(),i=($(window).width(),$("body"));$(".home");$(".js-full-height").css("height",t),$(window).resize(function(){afterResize(function(){$(".js-full-height").css("height",$(window).height())},200,"id")});var a=$(".masthead-video--wrapper video");!Modernizr.touch&&i.hasClass("home")&&a.one("canplaythrough",function(){vid.play()}),$(".mobile-menu").on("click",function(e){$(this).toggleClass("active"),$(".mobile-menu-container").toggleClass("active"),$(".logo").toggleClass("active")}),$("body").hasClass("contact-us")&&$("#contactform").validate({errorPlacement:function(e,t){var i=$(t).attr("name"),a=$("#"+i+"_validate");a.length?e.appendTo(a):e.insertAfter(t)},submitHandler:function(e){$(".submitform").addClass("not-allowed");var t="email.php";$.ajax({type:"POST",url:t,data:$("#contactform").serialize(),success:function(e){$(".submitform").fadeOut(500,function(){$(".thankyou").fadeIn(500)})}})}}),$("a.accordion").on("click",function(e){e.preventDefault(),$(this).toggleClass("active"),$(this).next(".panel").slideToggle(300)})});