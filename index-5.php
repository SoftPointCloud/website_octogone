<?php
session_start();

if(isset($_SESSION["f_register"]))
{
	$f_register = $_SESSION["f_register"];
	unset($_SESSION["f_register"]);
}

if(isset($_SESSION["error"]))
{
	$error = $_SESSION["error"];
	unset($_SESSION["error"]);
}



?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<TITLE> Octogone Hotels - Hotel Management Services</TITLE>
<META NAME="description" CONTENT="Octogone Hospitality full service hotel, resort, spa and restaurant management and representation company. Our Moorish style blends traditional with modern to make up our unique Budget Luxury experience.">
<META NAME="keywords" CONTENT="marrakech, maroc, spa, terre, octogone, restaurant, hotel, resort, hospitality, travel, riad, villa, hotel management, management, hospitality, representation services, hotel sales, real estate">
<META NAME="author" content=" octogone hotel marrakech morocco">
<META NAME="rating" CONTENT="General">
<META NAME="distribution" CONTENT="Global">
<META NAME="revisit-after" CONTENT="1 Day">
<META NAME="copyright" CONTENT="Octogone Hospitality LLC © all rights reserved 2003 - 2010">
<META NAME="Reply-to" CONTENT="Ferrai@octogonehotels.com (Sofia Ferrai)">
<META NAME="generator" Content="Octogone">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Style-Type" content="text/css" />
<link href="style.css" rel="stylesheet" type="text/css" />
<link href="layout.css" rel="stylesheet" type="text/css" />
<script language="JavaScript" src="scripts/gen_validatorv31.js" type="text/javascript"></script>
<script language="JavaScript" src="headerdata/header.js" type="text/javascript"></script>
<style type="text/css">
a.language {
	color:#52463F;
	text-decoration:none;
	outline:none;
}
a.language:hover{
	color:#FFFFFF;
	text-decoration:underline;
}
-->
</style>
<!-- Google Analytics -->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-786118-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<!-- Google Analytics -->
</head>

<body id="page6" onunload="clearall()" onload="clock()">
<div id="main">
  <!-- header -->
  <div id="header-tail">
    <div id="header-bg">
      <div id="header">
        <!-- ***********************************************HEADER*****************************************************-->
<table style="margin:auto; width:980px; height:156px; border:none;" cellpadding="0px" cellspacing="0px">
	<tr>
    	<td style="margin:0px; padding:0px; background-image:url(headerdata/header.png); background-repeat:repeat-x; width:980px; height:156px; border:none;">
        	 <table style="margin:auto; width:980px; height:156px; border:none;" cellpadding="0px" cellspacing="0px">
                        <tr>
                            <td style="text-align:left; font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#52463F; height:37px; width:600px; vertical-align:middle;">
                                <span id="currenttime"></span>
                            </td>
                            <td style="text-align:right; font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#52463F; height:37px; width:343px; vertical-align:middle;">
                                <a class="language" href="index.html">English</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
                                <a class="language" href="http://www.terre.com/indexf.php">French</a></td>
                            <td style="text-align:center; height:37px; width:37px; vertical-align:middle;"><a href="http://www.octogonehotels.com/Marrakech RSS.html"><img id="rss" src="headerdata/rss.png" alt="" align="absmiddle" style="padding:0px; margin:auto; cursor:pointer;" onmouseover="document.getElementById('rss').style.width = '19px';document.getElementById('rss').style.height = '19px';" onmouseout="document.getElementById('rss').style.width = '18px';document.getElementById('rss').style.height = '18px';" onclick="window.location = 'http://www.terre.com/index-rss.html';" /></a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="3" style="margin:0px;; padding:0px; width:980px; height:119px;">
        				<table style="margin:0px;; width:980px; height:119px; border:none;" cellpadding="0px" cellspacing="0px">
                        	<tr>
                            	<td rowspan="5" style="height:119px; width:241px; background-image:url(headerdata/logoo.png);">
                                </td>
                                <td style="height:23px;">
                                </td>
                            </tr>
                            <tr>
                            	<td style="height:25px; text-align:right;">
                                	<table style="margin-right:29px; margin-left:auto; width:246px; height:25px; border:none;" cellpadding="0px" cellspacing="0px">
                                    	<tr>
                                        	<td style="background-image:url(headerdata/under_mail.png); background-repeat:no-repeat; background-position:left; width:172px; height:25px; text-align:center;">
                                            	<input id="menuemail" type="text" value="Join eZine... ENTER EMAIL" style="width:160px; padding:0px; margin:0px; background-color:#26211C; border:none; font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#766F65;" onclick="emailemptycheck('1')" onblur="emailemptycheck('2')" />
                                            </td>
                                        	<td id="menu_0" style="background-image:url(headerdata/mini_right_button_off.png); background-repeat:no-repeat; background-position:left; width:75px; height:25px; cursor:pointer; vertical-align:middle; text-align:center; font-family:'Times New Roman', Times, serif; font-size:14px; color:#766F65;" onmouseover="hoveron('menu_0')" onmouseout="hoveroff('menu_0')" onclick="checkemail()">
                                            	Submit
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                            	<td style="height:12px;">
                                </td>
                            </tr>
                            <tr>
                            	<td style="height:40px;">
                                    <table style="margin-left:0px; margin-right:auto; width:711px; height:40px; border:none; font-family:'Times New Roman', Times, serif; font-size:14px; color:#766F65;" cellpadding="0px" cellspacing="0px">
                                            <tr>
                                                <td id="menu_1" style="background-image:url(headerdata/left_button_off.png); background-repeat:no-repeat; background-position:left; width:120px; height:25px; cursor:pointer; vertical-align:middle; text-align:center;"onmouseover="hoveron('menu_1')" onmouseout="hoveroff('menu_1')" onclick="window.location = 'index.html';">
                                                    Home
                                                </td>
                                                <td id="menu_2" style="background-image:url(headerdata/middle_button_off.png); background-repeat:no-repeat; background-position:left; width:118px; height:25px; cursor:pointer; vertical-align:middle; text-align:center;"onmouseover="hoveron('menu_2')" onmouseout="hoveroff('menu_2')" onclick="window.location = 'Marrakech Hotel Management.html';">
                                                    Management
                                                </td>
                                                <td id="menu_3" style="background-image:url(headerdata/middle_button_off.png); background-repeat:no-repeat; background-position:left; width:118px; height:25px; cursor:pointer; vertical-align:middle; text-align:center;"onmouseover="hoveron('menu_3')" onmouseout="hoveroff('menu_3')" onclick="window.location = 'Marrakech Riad Luxury Hotels.html';">
                                                    Hotels
                                                </td>
                                                <td id="menu_4" style="background-image:url(headerdata/middle_button_off.png); background-repeat:no-repeat; background-position:left; width:118px; height:25px; cursor:pointer; vertical-align:middle; text-align:center;"onmouseover="hoveron('menu_4')" onmouseout="hoveroff('menu_4')" onclick="window.location = 'Marrakech Restaurant Bars.html';">
                                                    Restaurants
                                                </td>
                                                <td id="menu_5" style="background-image:url(headerdata/middle_button_off.png); background-repeat:no-repeat; background-position:left; width:118px; height:25px; cursor:pointer; vertical-align:middle; text-align:center;"onmouseover="hoveron('menu_5')" onmouseout="hoveroff('menu_5')" onclick="window.location = 'Marrakech Spa Hotels.html';">
                                                    Spas
                                                </td>
                                                <td id="menu_6" style="background-image:url(headerdata/right_button_on.png); background-repeat:no-repeat; background-position:left; width:119px; height:25px; vertical-align:middle; text-align:center; color:#FFFFFF;">
                                                    Contacts
                                                </td>
                                            </tr>
                                        </table>
                                </td>
                            </tr>
                            <tr>
                            	<td style="height:19px;">
                                </td>
                            </tr>

                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
      </div>
    </div>
  </div>
  <!-- content -->
  <div id="content-bg">
    <div id="content">
      <div class="wrapper">
        <div class="col-1">
          <h2>Contact Information...</h2>
          <h6>Thank you for <strong>visiting </strong> our website...</h6>
          <p>We welcome you to learn more about Octogne Hotels, Milgros Resturants and Sultry Spas. If we  can be of any assistance please contact us. As well we have created this page  to give you a bit more information about our hotel we hope you find it useful.          </p>
          <div class="clear"></div>
          <p class="extra">If you would like to learn more about our products, services, company or any question you may have. Feel free to use the form below to contact us.</p>
          <p>Please fill in all fields and leave us a brief description of your enquiry so we can forward to the right person in order to respond promptly.</p>
				<?php
				if(isset($error))
				{
					if(!is_array($error))
					{
						?>
						
					  <div>
							<p style="color:green;font-weight:bold;"><?php echo $error;?></p>
						</div>
						<?php
					}
					else
					{
						//error
						?>
						<div>
							<p style="font-weight:bold;">Please correct following errors:</p>
							<?php
							for($i=0; $i<count($error);$i++)
							{
								?>
								<p style="color:red;"><?php echo $error[$i];?></p>
								<?php
							}
							?>
						</div>
						<?php
						
					}
				}
				?>
            <div id='contactform_errorloc' class='error_strings' style="color:red;"></div>
          <form id="contact-form" name="contactform" method="post" action="contact-process.php">

            <div class="wrapper">
            
              <p><span>Enter Your Message:</span>
                   <textarea name="Message" rows="" cols=""><?php if(isset($f_register["Message"])) echo $f_register["Message"];?></textarea>
              </p>
              <label><span>Enter Your Name:</span>
                <input type="text" class="regular" name="Name" value="<?php if(isset($f_register["Name"])) echo $f_register["Name"];?>" />
              </label>
              <label><span>Enter Your E-mail:</span>
		<input type="text" class="regular" name="Email" value="<?php if(isset($f_register["Email"])) echo $f_register["Email"];?>" />
              </label>
              <label><span>Enter Your Location:</span>
		<input type="text" class="regular" name="Location" value="<?php if(isset($f_register["Location"])) echo $f_register["Location"];?>"/>
              </label>
              <div class="clear"></div>
              <input type="reset" value="Clear form" class="formbuttons" style="width:70px;"><input type="submit" value="Submit" class="formbuttons"></div>
          </form>
<script language="JavaScript" type="text/javascript">
//You should create the validator only after the definition of the HTML form
var frmvalidator  = new Validator("contactform");
frmvalidator.EnableOnPageErrorDisplaySingleBox();
frmvalidator.EnableMsgsTogether();
 
frmvalidator.addValidation("Name","req","Please enter your name");
frmvalidator.addValidation("Email","req", "Please enter your email address.");
frmvalidator.addValidation("Email","email", "Please enter valid email.");
frmvalidator.addValidation("Location","req","Please enter your location.");
frmvalidator.addValidation("Message","req","Please enter your message.");

</script>
        </div>
        <div class="col-2">
          <div class="box">
            <div class="border-top">
              <div class="border-bot">
                <div class="border-left">
                  <div class="border-right">
                    <div class="corner-top-left">
                      <div class="corner-top-right">
                        <div class="corner-bot-left">
                          <div class="corner-bot-right">
                            <div class="box-indent1">
                              <h3 class="extra">Useful information</h3>
                              <h4>Corporate Name</h4>
                              <p>Octogone Hospitality LLC</p>
                              <h4>Headquareters</h4>
                              <p>8912 E Pinnacle Peak Rd<br />
Suite F9586<br />
Scottsdale, Arizona 85255 USA                              
                              <h4>Telephones</h4>
                              <p>Phn: +1480 503 8022<br />
                              Fax: +1480 503 8023</p>
                              <h4>Emails</h4>
                              <p>Sales &amp; Marketing: <a href="mailto:sales@octogonehotels.com">sales@octogonehotels.com</a><br />
                                Admininistration: <a href="mailto:admin@octogonehotels.com">admin@octogonehotels.com</a><br />
                                Travel Desk &amp; Reservations: <a href="mailto:res@terre.com">res@terre.com</a><br />
                                Concierge &amp; Reception: <a href="mailto:reception@terre.com">reception@terre.com</a>                              </p>
<h4>Affiliations and Travel Codes</h4>
                              <p>Chain Code:  WW<br />
Amadeus: WWRAKTER<br />
Sabre: WW75275<br />
Galileo: WW34569 <br />
Worldspan: WWTERRE <br />
Pegasus: WW636482</p>
                              <h4>Employment</h4>
                              <p>&quot;We demonstrate our beliefs most  meaningfully in the way we treat each other and by the example we set for one  another. In all our interactions with our guests, customers, business  associates and colleagues, we seek to deal with others as we would have them  deal with us.&quot; </p>
                              <p>If you share a common bond with us on how we treat work and  life, contact us and let’s work together to make our growth meaningful.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- footer -->
  <div id="footer-bg">
    <div id="footer">
      <p>Contact us by phone at +14805038022 or by email at: <a href="mailto:info@octogonehotels.com">info@octogonehotels.com</a></p>
      <p><a href="Marrakech Accomodations.html" class="link">Privacy Policy</a> &bull; <a href="Marrakech Press.html" class="link">Press</a> &bull; <a href="Marrakech Partners Affiliates.html" class="link">Partners</a> &bull; <span class="link"><a href="index-5.php">Contact US</a></span> </p>
      <p><a href="http://www.octogonehotels.com/" target="_blank">Octogon Hospitality</a> LLC &copy; All rights reserved 2003 - 2011</p>
        </div>
      <div id="footer2">
	</div>
</div>
</body>
</html>
