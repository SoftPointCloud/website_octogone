<?php
	include("init.php");
	require('phpmailer/class.phpmailer.php');
	require('phpmailer/language/phpmailer.lang-en.php');

	function Send_Smtp_mail($from_email,$from_name,$to_email,$to_name,$subject,$htmlContentClient,$attachment){		
		if($from_email==''){
		   $from_email = 'noreply@atlasolive.com';
		}
		if($from_name==''){
		   $from_name = "Atlas Olive";
		}
		$mail = new PHPmailer(true);
		$mail->IsSendmail();
		$mail->IsSMTP(); 
		$mail->SetLanguage("en", "phpmailer/language");
		$mail->From     = $from_email;
		$mail->FromName = $from_name;		
		$mail->SMTPAuth  =  "true";
		$mail->Subject  = $subject;
		$mail->Host = 'mail.softpointcloud.com';
		$mail->Port = 25;
		$mail->Username = 'noreply@softpointcloud.com';
		$mail->Password = 'SecureMail18%';
		$mail->Body = $message;
		$mail->IsHTML(true);
		if($attachment!=''){
		   $mail->AddAttachment($attachment);
		}
		$mail->AddReplyTo($from_email,$from_name);
		$mail->AddAddress($to_email, $to_name);		
		$sended = $mail->Send();
	 return $sended;
	 }
	$to         = 'ezine@octogonehotels.com';
	//$to         = 'sauravdalai@gmail.com';
	$name		= "Subscription";
	$email		= $_POST['email'];
	$sub        = "Message from: " . $name;
	$headers    = "From: " .$_POST['email']. "\n";  
	$headers   .= "Content-Type: text/plain; charset=utf-8\n";
	$mes		= "A new subscription on OCTOGONE from: " . $email;
	
	if(ereg("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)){
		
		/**************/
		$sql="insert into terre_contact(contact_email,contact_status,contact_source,contact_indate,contact_website) values('".$email."','N','J',now(),'octogone')";
		mysql_query($sql);
		/**************/
		
		//mail($to, $sub, $mes, $headers);
		$sended = Send_Smtp_mail($email,"subscription on OCTOGONE",$to,'OCTOGONE',$sub,$mes,"");
		header("Location: " . $_POST['addressbar']);
	}
?>