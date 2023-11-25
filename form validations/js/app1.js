var x=document.getElementById("s1");
var y=document.getElementById("s2");
var z=document.getElementById("s3");
var s=document.getElementById("s4");
var t=document.getElementById("s5");
var u=document.getElementById("s6");
function myfun(){
var a= document.getElementById("uname").value;
var b= document.getElementById("email").value;
var c= document.getElementById("male").checked;
var d= document.getElementById("female").checked;
var e= document.getElementById("phno").value;
var f= document.getElementById("pswd").value;
var g= document.getElementById("rpswd").value;
if(a.length<5||a.length>12)
{
 x.style.display="inline";
 return false;
}
else if(b.length<15||b.length>30)
{
y.style.display="inline";
 return false;
}
else if(c==true&&d==true)
{
return false;
}
else if(c==false&&d==false)
{
z.style.display="inline";
return false;
}
else if(e.length<10||e.length>10)
{
s.style.display="inline";
return false;
}
else if(f.length<5||f.length>10)
{
t.style.display="inline";
return false;
}
else if(f!=g)
{
u.style.display="inline";
return false;
}
}

function f1()
{
x.style.display="none";
y.style.display="none";
z.style.display="none";
s.style.display="none";
t.style.display="none";
u.style.display="none";
}