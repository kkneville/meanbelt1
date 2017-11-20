var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

	name: {
		type: String,
		required: [true, 'name is required'],
		minlength: 2
	},
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema)