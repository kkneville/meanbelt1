var mongoose = require('mongoose');
var User = require('../models/user');
var Question = require('../models/question');
var Answer = require('../models/answer');
var session = require('express-session');


module.exports = {

	index: function(req, res){
		console.log("inside of index")
		Question.find({}, function(err, questions){
			if (err) {
				console.log(err)
				console.log("trouble finding questions at index")
				return res.json({error:err.errors})
			}
			else {
				console.log("yo, here are your questions:", questions)
				return res.json({questions:questions})
			}
		});
	},	


	create: function(req, res){
		console.log("Arrived at question create")
		console.log('req.body:', req.body);
		var question = new Question(req.body);
		question.save(function(err) {
			if (err){
				console.log('trouble saving question')
				return res.json({error:err.errors})
			}
			return res.json({question:question});
		});
	},	



	show: function(req, res){
		console.log("inside of show")
		console.log("this req.params.id is: ", req.params.id)
		Question.findOne({_id: req.params.id})
			.populate('answers')
			.exec(function(err, question){
			if (err) {
				console.log(err)
				console.log("trouble finding question at show")
				return res.json({error:err.errors})
			}
			else {
				console.log("the question is:", question)
				return res.json({question:question})
			}
		});
	},	







}

