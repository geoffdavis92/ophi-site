<!DOCTYPE html>
<html>
<head>
  <title>Thank You ! Geoff Davis</title>

  <script src="../js/header.js" type="text/javascript"></script>
  <script src="../js/footer.js" type="text/javascript"></script>

    <link href="../styles/feedback.css" rel="stylesheet" type="text/css">
    <link href="../styles/main.css" rel="stylesheet" type="text/css">
  <script>
    function closeWin(){
        alert("Thank you for your submission. \n This window will now close.");
        window.close();
    }
  </script>
</head>
<body onload="closeWin()">
  <header><h1>Form Submission</h1></header>
  <div id="content">
    <p>Thank you for your feedback!</p>
  <?php
       // from the form
       $name = trim(strip_tags($_POST['name']));
       $email = trim(strip_tags($_POST['email']));
       $message = htmlentities($_POST['message']);

       // set here
       $subject = "Feedback form submitted!";
       $to = 'geoffdavis92+siteSupport@gmail.com';

       $body = $message;
  $message = HTML;

       $headers = "From: $email\r\n";
       $headers .= "Content-type: text/html\r\n";

       // send the email
       mail($to, $subject, $body, $headers);

       // redirect afterwords, if needed
#       header('Location: thanks.html');
?>
</div>
<script>footer()</script>
</body>
</html>
