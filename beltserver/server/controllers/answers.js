var mongoose = require('mongoose');
var User = require('../models/user');
var Question = require('../models/question');
var Answer = require('../models/answer');
var session = require('express-session');


module.exports = {

	add: function(req, res){
		console.log("Arrived at answer add")
			
		Question.findOne({_id: req.body.question_id}, function(err, question){
			if (err){
				console.log('error finding question at answers.add')
				return res.json({error: err.errors})
			}
			console.log("question found:", )
			var answer = new Answer(req.body);
			answer._question = question._id;
			answer.save(function(err){
				if (err){
					console.log('error saving answer')
					return res.json({error: err.errors})
				}
				question.answers.push(answer);
				question.save(function(err){
					if (err){
						console.log('error saving question with new answer')
						return res.json({error: err.errors})
					}
					return res.json({status: "answer added!"})
				})
			})
		})
	},


	update: function(req, res){
		console.log("arrived at answer update")
		console.log("answer id is: ", req.body)
		Answer.update({_id: req.body.id}, {$inc: {likes: 1}}, function(err){
			if (err){
				console.log('error updating likes count')
				return res.json({error: err.errors})
			}
			return res.json({status: "like count updated"})
		})

	},
	

	delete: function(req, res){
		console.log("arrived at answers/delete")

	}
}		


	
