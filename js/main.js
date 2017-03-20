
window.onload = function() {

var text = document.getElementById('page')
	.querySelector ('h1');
var colorScheme = ['blue','yellow','green','red','gray'];
var i = 0;

function changeColor() {
   if(i>colorScheme.length){
     i=0;
   }
    text.style.backgroundColor = colorScheme[i];  
    i++;
 }
     setInterval(changeColor,1000);
}

  