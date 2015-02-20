var md5 = require('MD5');

var url = process.argv[2] + "?";
var secret = process.argv[3];

var string = "";
var array = process.argv.slice(4).sort();
for (var i = 0; i < array.length; i++) {
  var item = array[i];
  string += item;
  url+= item + "&";
}

string += secret;
string = md5(string);

url+= "sig=" + string
console.log(url);
