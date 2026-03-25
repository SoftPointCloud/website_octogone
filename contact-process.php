<?php

include_once("init.php");
require('phpmailer/class.phpmailer.php');
require('phpmailer/language/phpmailer.lang-en.php');
session_start();

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

$f_register["Name"] = $_POST["Name"];
$f_register["Message"] = $_POST["Message"];
$f_register["Location"] = $_POST["Location"];
$f_register["Email"] = $_POST["Email"];


if(register($f_register))
{
	//success
	$_SESSION["error"] = "You details are successfully sent. We will get back to you as soon as possible.";
	header("Location:index-5.php");
}
else
{
	//error
	$_SESSION["f_register"] = $f_register;
	header("Location:index-5.php");
	exit;
}


function register($data)
{
	
	$error = array();
	/*
	if($data["Name"] == "")
	{
		$error[] = "Please enter your name.";
	}	
	
	if($data["Email"] == "")
	{
		$error[] = "Please enter your email address.";
	}	
	
	if($data["Email"] != "")
	{

		if(!preg_match('/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!\.)){0,61}[a-zA-Z0-9_]?\.)+[a-zA-Z0-9_](?:[a-zA-Z0-9_\-](?!$)){0,61}[a-zA-Z0-9_]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/', $data["Email"]))
		{
			$error[] = "Please enter valid email address.";
		}

	}
	
	if($data["Location"] == "")
	{
		$error[] = "Please enter your location.";
	}
	
	if($data["Message"] == "")
	{
		$error[] = "Please enter your message.";
	}
	*/
	
	if(!empty($error))
	{
		$_SESSION["error"] = $error;
		return false;
	}
	else
	{

		/**************/
		$sql="insert into terre_contact(contact_name,contact_email,contact_location,contact_comments,contact_status,contact_source,contact_indate,contact_website) 
		values('".$data["Name"]."','".$data["Email"]."','".$data["Location"]."','".$data["Comments"]."',
		'N','C',now(),'octogone')";
		mysql_query($sql);
		/**************/
		//send email
		$subject = "New contact from the OCTOGONE site";
		$from = $data["Email"];
//		$to = "jelena@frogprog.com";
		$to = "info@octogonehotels.com";
		
		// To send HTML mail, the Content-type header must be set
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
		$headers .= "From: ".$data["Email"]."\r\n";
		
		$message .= " Visitor filled following details:<br>";
		$message .= " Name: ".$data["Name"]."<br>";
		$message .= " Email: ".$data["Email"]."<br>";
		$message .= " Location: ".$data["Location"]."<br>";
		if($data["Message"] != "")
			$message .= " Message: ".$data["Message"];
		
		//mail($to, $subject, $message, $headers);
		$sended = Send_Smtp_mail($from,"Terre",$to,'inquiry',$subject,$message,"");
		
		$customer_subject = "Octogonehotels.com - thank you for your inquiry";
		$customer_to = $data["Email"];
		
		// To send HTML mail, the Content-type header must be set
		$headers  = 'MIME-Version: 1.0' . "\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\n";
	
		$headers .= 'To: '.$data["Name"].' <'.$data["Email"].'>' . "\n";
		$headers .= 'From: Terre <noreply@terre.com>' . "\n";
	
		
		$message = "Your message has been sent, we will respond to you shortly.";
		
//		mail($customer_to, $customer_subject, $message, $headers);
		//$sended = Send_Smtp_mail("noreply@terre.com","Terre",$customer_to,'inquiry',$customer_subject,$message,"");
		
		return true;
	}
}


?>