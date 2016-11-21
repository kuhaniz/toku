<?php

  $category = $_POST['category'] ;
  $email = $_POST['email'] ;
  $name = $_POST['name'] ;
  $subject = $_POST['subject'] ;
  $message = $_POST['message'] ;

  $body = '
    Category : '.$category.'
    Name     : '.$name.'
    Email    : '.$email.'

    '.$message;
?>


<?php
require '/mail/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->SMTPDebug = 2;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587
$mail->Username = "apptoku@gmail.com";
$mail->Password = "Qwerty88!";

$mail->setFrom('apptoku@gmail.com', 'Toku');
$mail->addAddress('tanjinwei@gmail.com', 'Toku');     // Add a recipient

$mail->Subject = 'Feedback Form - '.$subject;
$mail->Body    =  $body;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    header('Location: thank-you.html');
}
