var mongoose = require('mongoose'); 
var path = require('path');
var users = require('../controllers/users')
var questions = require('../controllers/questions')
var answers = require('../controllers/answers')


module.exports = (app, req, res) => {

	// app.get('/')

	app.post('/login', users.login);

	app.get('/logout', users.logout);

	app.get('/user', users.user);


	app.get('/index', questions.index);

	app.post('/create', questions.create);

	app.get('/show/:id', questions.show);


	app.post('/add', answers.add);

	app.post('/update', answers.update);

	app.post('/delete', answers.delete);


	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("../beltclient/dist/index.html"))
	});

}

	