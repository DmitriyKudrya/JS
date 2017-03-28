
window.onload = function ();

	function Markup() {
	  this.createMarkup = function(tag, content) {
	  var element = document.createElement('header');
	  element.innerHTML = content;

	  document.body.appendChild(element);
    }

  

var data = new Data();
var markup = new Markup();