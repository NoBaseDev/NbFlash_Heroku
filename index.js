var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('<html>
<head>
  <meta charset="utf-8" />
  <title>NB Flash</title>
  <meta name="google-site-verification" content="9MheOX2PvKaLesDfgFd63ABvB7lrq5ShMQuC-HSQp4k" />
</head>
<body>
  <div>Hello World!</div>
</body>
</html>')
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