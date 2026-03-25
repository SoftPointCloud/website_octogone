<?php


					$to         = 'ezine@octogonehotels.com';
					//$to         = 'sauravdalai@gmail.com';
					
					$name		= "Subscription";
					$email		= $_POST['mymail'];
					$sub        = "Message from: " . $name;
					$headers    = "From: " . $email . "\n";  
					$headers   .= "Content-Type: text/plain; charset=utf-8\n";
					$mes		= "A new subscription on OCTOGONE from: " . $email;
					mail($to, $sub, $mes, $headers);
					echo "reaction=Thank you";
?>