<?php

  $salutation = $_REQUEST['salutation'];
  $name = $_REQUEST['name'];
  $email = $_REQUEST['email'];

  $name = $_REQUEST['name'];
  $name = $_REQUEST['name'];


  // here we use the php mail function
  // to send an email to:
  // you@example.com
  mail( "tanjinwei@gmail.com", "Feedback Form Results",$message, "From: $email" );
?>
