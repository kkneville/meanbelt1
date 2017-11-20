var mongoose = require('mongoose');
var Question = require('./question');
var QuestionSchema = require('./question');

var AnswerSchema = new mongoose.Schema({

	user: {
		type: String,
		required: [true, 'user is required'],
		minlength: 2
	},

	content: {
		type: String,
		required: [true, 'answer is required and must be at least 5 characters long'],
		minlength: 5
	},

	details: {
		type: String,
		required: false,
	},

	likes: {
		type: Number,
		default: 0
	},

	_question: {
		type: mongoose.Schema.Types.ObjectId, ref: "Question"
	},


}, {timestamps: true});

module.exports = mongoose.model('Answer', AnswerSchema)