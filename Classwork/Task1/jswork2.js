
function Data() {
	this.createData = function(key, data) {
		local.storage.setItem(key, data);
	}

	this.readData = function(key) {
		return local.storage.getItem(key);
	}

}

var data = new Data();
data.createData('a', 'some data');

