var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {  
	response.send('test!!!');
})

app.get('/.well-known/assetlinks.json',function(request, response){
	//response.render('assetlinks.json');
	var fs = require("fs");
	console.log("\n *START* \n");
	var content = fs.readFileSync("assetlinks.json");
	response.setHeader('Content-Type', 'application/json');
	response.send(content);
	console.log("Output Content : \n"+ content);
	console.log("\n *EXIT* \n");
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})