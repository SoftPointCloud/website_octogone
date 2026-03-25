<?php
	include("init.php");
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
		
		mail($to, $sub, $mes, $headers);
		header("Location: " . $_POST['addressbar']);
	}
?>