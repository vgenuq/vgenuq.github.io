/*This document contains all the javascript code I used for the assignment */

/* I added a basic slideshow using a jquery module called cycle below */

$(document).ready(function(){
  $('#banner').cycle()
  
/* I did an online web tutorial which taught me how to make a drop down menu using jquery -> http://wabism.com/jquery-drop-down-menu-tutorial/ */	
	
$('.dropdown').hover(function() {
$(this).find('.sub_navigation').stop(true,true).slideToggle(); });
	
	});

/* The ValidateUser function is used to check whether the value written in the email address is
 an actual email address and whether the imagecode has been entered correctly. */

 
	function ValidateUser() {
	var x=document.forms["myForm"]["emailaddress"].value;
	var atpos=x.indexOf("@");
	var dotpos=x.lastIndexOf(".");
	if (atpos<2 || dotpos<atpos+2 || dotpos+2>=x.length || dotpos<atpos)
  {
  alert("Not a valid e-mail address");
  return false;
  }
  var y=document.forms["myForm"]["password"].value;
  var code= "BLA 123 Hu"
if (y.match(code))
  {
  alert("survey sent");
  document.getElementById("resume_button").disabled = false;
  return true;
  }
  
  else 
  {
  alert("You typed in an incorrect image code");
  return false;
  }
  
 }
