var mongoose = require('mongoose');
var AnswerSchema = require('./answer');

var QuestionSchema = new mongoose.Schema({

	content: {
		type: String,
		required: [true, 'a question is required and must be at least 10 characters long'],
		minlength: 10
	},

	details: {
		type: String,
		required: false
	},

	answers: [{
		type: mongoose.Schema.Types.ObjectId, ref: "Answer"
	}],

}, {timestamps: true});

module.exports = mongoose.model('Question', QuestionSchema)