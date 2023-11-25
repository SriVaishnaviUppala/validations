var a=document.getElementById("fname");
 var b=document.getElementById("lname");
 var c=document.getElementById("email");
 var d=document.getElementById("phno");
 var e=document.getElementById("txarea");
function fun()
 {
 var letters=/(?=.*[A-Z])(.*[a-z].*)/;
 var email=/([a-z]{9,15})([0-9]{0,4})\@([a-z]{5})\.([a-z]{3})/;
 var phone=/^[0-9]{10}$/;
 message=/^[A-Za-z]+$/;
 if(!a.value.match(letters))
 {
  document.getElementById("in").style.display="inline";
  return false;
  }
 else if(!b.value.match(letters))
 {
 document.getElementById("in1").style.display="inline";
  return false;
 }
 else if(!c.value.match(email))
 {
 document.getElementById("in2").style.display="inline";
  return false;
 }
 else if(!d.value.match(phone))
 {
 document.getElementById("in3").style.display="inline";
  return false;
 }
 else if(!e.value.match(message))
 {
 document.getElementById("in3").style.display="inline";
  return false;
 }
}


function fun1()
{
document.getElementById("in").style.display="none";
document.getElementById("in1").style.display="none";
document.getElementById("in2").style.display="none";
document.getElementById("in3").style.display="none";
document.getElementById("in4").style.display="none";
}
