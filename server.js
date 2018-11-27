const express = require('express');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
	res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/upload', upload.single('upfile'), function(req, res, next) {
	return res.json(req.file);
});

app.get('/hello', function(req, res) {
	res.json({ greetings: 'Hello, API' });
});

const port = 3000;

app.listen(process.env.PORT || port, function() {
	console.log('Node.js listening on port ' + port);
});
