'use strict';

const rootPath = process.cwd();
const multer  = require('multer');
var upload = multer();

module.exports = function(app){

	app.route('/').get(function(req, res){
		res.sendFile(rootPath+'/public/index.html');
	});

	app.post('/getfilesize', upload.single('file'), function (req, res, next){
		if(!req.file) return res.send('No file submitted! Submit a file to view its file size.');
  		res.json({'fileSize': req.file.size});
	});

}

