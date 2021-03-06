var mongoose = require('mongoose'),
  AuthorSchema;

AuthorSchema = mongoose.Schema({
  created: {type: Date, default: Date.now},
  name: {type: String, required: true, trim: true, unique: true},
  birthday: {type: Date, required: true},
  books: [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]

}, {versionKey: false});

module.exports = mongoose.model('Author', AuthorSchema);
