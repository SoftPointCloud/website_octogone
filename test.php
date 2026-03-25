<?
			$to         = 'sauravdalai@gmail.com';
			$name		= "Newsletter";
			$sub        = "Message from: ";
			$headers  = "MIME-Version: 1.0\r\n"; 
			$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n"; 
			$headers .= "To: <".$to.">\r\n"; 
			$headers .= "From: Newsletter <info@softpoint.us>\r\n";
			$mes		= "Join SoftPoint from: ";
			echo mail($to, $sub, $mes, $headers);
?>