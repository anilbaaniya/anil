var pass1,pass2;
 pass1 = document.getElementById("p1").value;
 pass2 = document.getElementById("p2").value;

function valid()
{
    if (p1.value!=p2.value)
     {
        p2.setCustomValidity("Password is incorrect");
     } else 
    p2.setCustomValidity('');
}
p1.onchange=valid;
p2.onchange=valid;