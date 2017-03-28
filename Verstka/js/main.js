
function Data() {

}
 
Data.prototype.createData = function(key, data) {
  key = key || prompt('Key:');
  data = data || prompt('Data:');

  if (typeof key === 'undefined') {
    console.error('No key');
    return false;
  }

  if (typeof data === 'undefined') {
    console.error('No data');
    return false;
  }

  localStorage.setItem(key, data);
}

Data.prototype.readData = function(key) {
  if (typeof key === 'undefined') {
    console.error('No data');
    return false;
  }

  var data = localStorage.getItem(key);

  if (!data) {
    console.error('No data');
    return false;
  }

  return data;
}

Data.prototype.updateData = function(key, data) {
	key = key || prompt('Key:');
  data = data || prompt('Data:');

  if (typeof key === 'undefined') {
    console.error('No key');
    return false;
  }

  if (typeof data === 'undefined') {
    console.error('No data');
    return false;
  }

  if (localStorage.getItem(key)) {
    console.error('No data found');
    return false;
  }

  localStorage.setItem(key, data);

}

Data.prototype.deleteData = function(key) {
  if (typeof key !== 'undefined'){
  	
  	localStorage.removeItem(key);
  }

  if (typeof key === 'undefined') {
    console.error('No data');
    return false;
  }
}


window.onload = function () {

function Markup() {

}

Markup.prototype.createMarkup = function(tag, content, parent) {
  var element = document.createElement(tag);
  element.innerHTML = content;

  if (parent) {
    var prnt = document.querySelector(parent);
    if (!prnt) {
      console.error('No element found');
      return false;
    }
    prnt.appendChild(element);
  } else {
    document.body.appendChild(element);
  }
};

Markup.prototype.updateMarkup = function(query, content) {
  var elements = this.findMarkup(query);
  elements[0].innerHTML = content;
};

Markup.prototype.deleteMarkup = function(query) {
  var elements = this.findMarkup(query);
  elements[0].remove();
};

Markup.prototype.findMarkup = function(query) {
  var elements = document.querySelectorAll(query);
  return elements;
};


var data = new Data();
var markup = new Markup();


markup.createMarkup('header', 'Logo', '#app');
markup.createMarkup('aside', '<ul><li><a href="#>\
Link1</a></li></ul>', '#app');
markup.createMarkup('article', '<h1>Hello</h1>', '#app');
markup.createMarkup('footer', 'Copyright 2017', '#app');

}